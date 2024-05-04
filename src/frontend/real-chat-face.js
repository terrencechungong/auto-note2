import React, { useState } from 'react';
import '../App.css'
import { ask_question, ask_for_code } from '../backend/ai-model/stack-ai';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      respondToMessage(inputValue);
      setInputValue('');
    }
  };

  async function respondToMessage(userMessage) {
    let botResponse = await ask_question(userMessage);
console.log(botResponse);
    

      setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: 'bot' }]);
  };

  return (
    <div className="App">
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default ChatBot;
