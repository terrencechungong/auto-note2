import React, { useState, useEffect } from 'react';
import lamejs from 'lamejs';
import FileUpload from '../backend/file-upload.js';
import run_mp3 from '../backend/mp3-audio.ts';
import call_fetch from '../backend/ai-model/stack-ai-addtochat-data.js'

function ProfRecord() {
  const [currentTime, setCurrentTime] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [placeholder, setPlaceholder] = useState("Clisk atart to begin recording!");

  // Function to fetch and update time every 2 seconds
  const getSpeech = () => {
      fetch('http://127.0.0.1:5000/get_text')
          .then((response) => {console.log(response);
            return response.json()})
          .then(data => setCurrentTime(data.time))
          .catch(error => console.error('Error fetching time:', error));
  };

  const resetSpeech = () => {
    fetch('http://127.0.0.1:5000/stop_listening')
        .then(response => setCurrentTime(""))
        .catch(error => console.error('Error fetching time:', error));
  };

  useEffect(() => {
    console.log(isListening, "is list");
    let intervalId;
        if (isListening) {
          getSpeech(); // Update immediately when starting
            intervalId = setInterval(getSpeech, 150);
        } else {
            clearInterval(intervalId);
        }
        return () => clearInterval(intervalId); // Cleanup function
  }, [isListening]);

  const startListening = () => {  
      setIsListening(true);      
  };

  const stopListening = () => {
    setIsListening(false);
    // call_fetch("USE_OBJ_DATA");
    resetSpeech();
    setPlaceholder("Done")
  }



  return (
    <div>
      {/* Navbar */}
      
      {/* Sidebar and Content */}
      <div className="d-flex">
        <div className="sidebar">
          {/* Links would be replaced with React Router <Link> or similar in a real app */}
          <p><a href="profrec.html" className="dashboard-link">Manage Recordings and Lectures</a><br/></p>
          
          <p><a href="profnotes.html" className="dashboard-link">Notes Settings</a><br/></p>
          <a href="profasin.html" className="dashboard-link">Quiz/Active Learning</a>
        </div>

        <div className="content">
          <div className="container">
            <div className="transcriptionArea">
              <textarea className="big-textbox"
                placeholder={!isListening ? placeholder : ''}
                value={isListening ? currentTime : ''}> </textarea>
            </div>
          </div>
          <div className='rec'>
            {!isListening &&
              <button className="btn btn-success" type="button" onClick={startListening}>Start Recording</button>
            }
            {isListening &&
              <button className="btn btn-danger" type="button" onClick={stopListening}>Stop Recording</button>
            }
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white text-center p-3 footer-Cl">
        <div className="container">
          <p>&copy; 2024 TakeNote. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ProfRecord;
