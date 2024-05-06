import subprocess
import os

def run_flask_apps():
    # Run first Flask app
    first_app_process = subprocess.Popen(['python', 'app1.py'])
    print("First Flask app running...")

    # Run second Flask app
    os.system('python app2.py')
    print("Second Flask app running...")

if __name__ == "__main__":
    run_flask_apps()
