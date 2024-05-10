from flask import Flask,request, url_for, redirect, render_template
import pickle
import numpy as np
import pandas as pd
import joblib
import math
import datetime
import warnings
from sklearn.exceptions import InconsistentVersionWarning
import sqlite3
warnings.filterwarnings("ignore", category=InconsistentVersionWarning)

app = Flask(__name__)

# Specify the file path where the model is saved
model_file_path = 'decision_tree_model.joblib'

# Load the model from disk
loaded_model_dag = joblib.load(model_file_path)
loaded_model_tunnel = joblib.load('model_tunnel.pkl')
classification= None

def calculate_entropy(text):
    if not text: 
        return 0 
    
    entropy = 0
    # Each char has 256 possible values
    for x in range(256): 
        # Calc prob of that symbol
        p_x = float(text.count(chr(x)))/len(text) 
        if p_x > 0: 
            # shannon formula
            entropy += - p_x*math.log(p_x, 2)
    return entropy 

def predict1(data):
    entrop = calculate_entropy(data)
    # Reshape the input data to a 2D array
    entrop = np.array(entrop).reshape(1, -1)
    result = loaded_model_tunnel.predict(entrop)
    return result

# Function to create a SQLite connection and initialize logs table
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

# Function to insert log into SQLite database
def insert_log(query, classification, timestamp):
    conn = sqlite3.connect('logs.db')
    c = conn.cursor()
    c.execute("INSERT INTO logs (query, classification, timestamp) VALUES (?, ?, ?)", (query, classification, timestamp))
    conn.commit()
    conn.close()

# Function to retrieve all logs from SQLite database
def fetch_logs_from_database():
    try:
        conn = sqlite3.connect('logs.db')
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM logs ORDER BY timestamp DESC")
        logs = cursor.fetchall()
        return logs
    except sqlite3.Error as e:
        print("Error fetching logs:", e)
        return []

def classify_query(query):
    # Read the dataset
    df = pd.read_csv("new_domain_dataset2.csv")  
    # Take domain as user input
    domain_input = query

    # Select the features based on the user input domain
    selected_features = df.loc[df['Domain'] == domain_input, ['NumericSequence', 'NumericRatio', 'ConsoantRatio', 'StrangeCharacters',
                                                          'DomainLength', 'VowelRatio', 'SubdomainNumber', 'HasSPFInfo',
                                                          'LastUpdateDate', 'CreationDate']]

    # Convert selected features to a list of values
    feature_values = selected_features.values.flatten()

    print(feature_values)
    

    if len(feature_values) == 0:
        return -1
    else:
        result = loaded_model_dag.predict([feature_values])
        print(result,'1')
        return result
   

@app.route('/', methods=['GET', 'POST'])
def index():
    print("web page started")
    return render_template('studio.html')
   

@app.route('/predict',methods=['POST','GET'])
def predict():
    global classification
    data = request.form['mail']
    request.data.decode('utf-8')
    if data:
        query = data.strip()  # Remove leading/trailing whitespaces
        print("Received query:", query)

    # Step 1: Predict using DNS tunnel model
    dns_result = predict1(query)

    # Step 2: Check DNS result
    if dns_result == 1:
        print("Malicious1")
        classification='Malicious'
    else:
        #print("Benign")

        dga_result = classify_query(query)
        if dga_result == 1:
            print("Benign")
            classification='Benign'
        elif dga_result== 0:
            print("Malicious")
            classification='Malicious'
        elif dga_result==-1:
            print("Unknown")
            classification='Unknown'

    
    # Log the query and classification result along with timestamp
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        # Insert log into database
    insert_log(query, classification , timestamp)
    print("Entering here!")
        
    return "render"


@app.route('/pre')
def pre():
    global classification
    print(classification)
    logs = fetch_logs_from_database()
    return render_template('predict.html', classification=classification,logs=logs)


if __name__ == '__main__':
    create_connection()  # Create database and initialize logs table
    app.run(debug=True,host='127.0.0.2', port=5001)
    