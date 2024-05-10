import streamlit as st
import pandas as pd
import datetime
import joblib
import numpy as np
import math
import sqlite3
from sklearn.exceptions import InconsistentVersionWarning
import warnings

warnings.filterwarnings("ignore", category=InconsistentVersionWarning)

# Load the models
loaded_model_dag = joblib.load('decision_tree_model.joblib')
loaded_model_tunnel = joblib.load('model_tunnel.pkl')


def calculate_entropy(text):
    if not text: 
        return 0 
    
    entropy = 0
    for x in range(256): 
        p_x = float(text.count(chr(x)))/len(text) 
        if p_x > 0: 
            entropy += - p_x*math.log(p_x, 2)
    return entropy 

def predict1(data):
    entrop = calculate_entropy(data)
    entrop = np.array(entrop).reshape(1, -1)
    result = loaded_model_tunnel.predict(entrop)
    return result

def classify_query(query):
    df = pd.read_csv("new_domain_dataset2.csv")  
    selected_features = df.loc[df['Domain'] == query, ['NumericSequence', 'NumericRatio', 'ConsoantRatio', 'StrangeCharacters',
                                                      'DomainLength', 'VowelRatio', 'SubdomainNumber', 'HasSPFInfo',
                                                      'LastUpdateDate', 'CreationDate']]
    feature_values = selected_features.values.flatten()

    if len(feature_values) == 0:
        return -1
    else:
        result = loaded_model_dag.predict([feature_values])
        return result

def create_connection():
    conn = sqlite3.connect('logs.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS logs
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  query TEXT,
                  classification TEXT,
                  timestamp TEXT)''')
    conn.commit()
    conn.close()

def insert_log(query, classification, timestamp):
    conn = sqlite3.connect('logs.db')
    c = conn.cursor()
    c.execute("INSERT INTO logs (query, classification, timestamp) VALUES (?, ?, ?)", (query, classification, timestamp))
    conn.commit()
    conn.close()

def fetch_logs():
    conn = sqlite3.connect('logs.db')
    df = pd.read_sql_query("SELECT * FROM logs ORDER BY timestamp DESC", conn)
    conn.close()
    return df.to_dict('records')

def main():
    st.title('Domain Classifier & Logs')

# Beautified sidebar menu
    st.sidebar.markdown("---")
    st.sidebar.title("Domain Classifier & Logs")
    menu = st.sidebar.radio("", ['Home', 'Logs'])
    if menu == 'Home':
        st.title('Domain Classifier')
        st.subheader('Classify Domain')
        domain = st.text_input('Enter Domain Name:')
        if st.button('Classify'):
            dns_result = predict1(domain)

            if dns_result == 1:
                classification = 'Malicious'
            else:
                dga_result = classify_query(domain)
                if dga_result == 1:
                    classification = 'Benign'
                elif dga_result == 0:
                    classification = 'Malicious'
                elif dga_result == -1:
                    classification = 'Unknown'

            timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            insert_log(domain, classification, timestamp)
            st.markdown("<p style='text-align: center; color: {} ; font-size: 24px;'>Classification: {}</p>".format('red' if classification == 'Malicious' else 'green', classification), unsafe_allow_html=True)

    elif menu == 'Logs':
        st.title('Domain Logs')
        st.subheader('View Logs')
        logs = fetch_logs()
        if logs:
            df_logs = pd.DataFrame(logs)
            st.dataframe(df_logs.style.apply(lambda x: ['color: green' if val == 'Benign' else 'color: red' for val in x], axis=1))
        else:
            st.write('No logs found.')

if __name__ == '__main__':
    create_connection()
    main()
