from flask import Flask, request, jsonify
import assemblyai as aai
from threading import Thread
import requests
from datetime import datetime
from flask_cors import CORS
from flask import Flask

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


aai.settings.api_key = "c310cbe05a8543ab8ef2477613ee09e8"

class AudioMessage():
    def __init__(self):
        self.message = ""
        self.call_count = 0

    def set_message(self, new_message):
        self.message = new_message

    def get_message(self):
        return self.message

message_obj = AudioMessage()

def on_open(session_opened: aai.RealtimeSessionOpened):
    print("Session ID:", session_opened.session_id)


def on_data(transcript: aai.RealtimeTranscript):
    global message_obj
    if not transcript.text:
        return

    if isinstance(transcript, aai.RealtimeFinalTranscript):
        message_obj.set_message(message_obj.get_message() + transcript.text)
        print(transcript.text + "final", end="\r\n")

    else:
        print(transcript.text + "part", end="\r")


def on_error(error: aai.RealtimeError):
    print("An error occured:", error)


def on_close():
    print("Closing Session")

def transcriba():


    transcriber = aai.RealtimeTranscriber(
        sample_rate=16_000,
        on_data=on_data,
        on_error=on_error,
        on_open=on_open,
        on_close=on_close,
    )

    transcriber.connect()

    microphone_stream = aai.extras.MicrophoneStream(sample_rate=16_000)
    transcriber.stream(microphone_stream)
    transcriber.close()

@app.route('/run_script', methods=['POST'])
def run_script():
    url = f"https://stack-intext.onrender.com/index_documents_api?flow_id={'6611c3fe20edce2bd66cb287'}&node_id={'docemb-0'}&org={'e73fe5b4-18e3-4a15-a764-7306aa894b59'}"
    data = request.json  # Assuming data is sent in JSON format
    # Process the data
    print("Received data")
    current_datetime = datetime.now()

    # Format the date and time as "MM/DD/YYYY_time"
    formatted_datetime = current_datetime.strftime("%m/%d/%Y_%H-%M-%S")

    # Request data
    headers = {
        'Authorization': 'Bearer 240e07fe-9775-494a-a797-aa247804c611'
    }

    with open('./file1.txt', 'w') as file:
        file.write(data['text'])

    # Load the list of files
    file_list = {"files": (f"{formatted_datetime}.txt", open("./file1.txt", "rb"), "text/plain", headers)}
    # Make the API request
    response = requests.post(url, files=file_list, headers=headers)

    # Check the response
    if response.status_code == 200:
        print("API request successful")
        return jsonify({'message':'Data added to knowledge base.'})
    else:
        print("API request failed:", response.text)
        return jsonify({'message': 'Failed to add data to knowledge base.'})



# Get the transcribed text
@app.route('/get_text')
def get_time():
    global message_obj
    # use call count logic to start fresh
    # use logic to start up the thread
    # transcriber_thread = Thread(target=transcriba)
    # transcriber_thread.daemon = True
    # transcriber_thread.start()
    return {'time': message_obj.get_message()}

# Reset the Message object
@app.route('/stop_listening')
def stop_time():
    global message_obj
    message_obj.set_message("")
    return {'Status':'OK'}



if __name__ == '__main__':
    # Run Flask app
    app.run(debug=True)
