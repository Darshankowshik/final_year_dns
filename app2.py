'''from flask import Flask, request, send_file

app = Flask(__name__)

@app.route('/')
def index():
    # Serve the HTML file
    return send_file('test.html')

@app.route('/receive_classification', methods=['POST'])
def receive_classification():
    classification = request.form['classification']
    # Do whatever you want with the classification data
    print("Received classification:", classification)
    return "Classification received successfully"

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5002)'''

'''from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    classification = request.form['classification']
    print(classification)
    return render_template('test.html', classification=classification)

@app.route('/receive_classification', methods=['POST'])
def receive_classification():
    classification = request.form['classification']
    print(classification)
    return render_template('test.html', classification=classification)

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5002)'''

import sqlite3
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    # Fetch logs from the database
    logs = fetch_logs_from_database()
    return render_template('predict.html', classification=None, logs=logs)

@app.route('/receive_classification', methods=['POST'])
def receive_classification():
    classification = request.form['classification']
    print(classification)  # Just for debugging, you can remove this line
    logs = fetch_logs_from_database()  # Fetch logs from the database
    return render_template('predict.html', classification=classification, logs=logs)

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






