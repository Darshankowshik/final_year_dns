
import sqlite3
from flask import Flask, render_template, request


app = Flask(__name__)
@app.route('/')
def home():
    return "Hello, this is the homepage."

@app.route('/receive_classification', methods=['POST'])
def index():
    global logs
    logs = fetch_logs_from_database()
    global classification11 
    classification11 = request.form['classification']
    #print(classification11)
    return "Hii"   

@app.route('/pre')
def pre():
    return render_template('predict.html', classification=classification11,logs=logs)

def fetch_logs_from_database():
    try:
        conn = sqlite3.connect('logs.db')
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM logs")
        logs = cursor.fetchall()
        return logs
    except sqlite3.Error as e:
        print("Error fetching logs:", e)
        return []

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5002)





