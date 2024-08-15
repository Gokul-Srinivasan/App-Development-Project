import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css'; // Ensure this file exists and includes necessary styles

const Chatbot = () => {
  const [question, setQuestions] = useState("");
  const [answer, setAnswers] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  async function generateAnswer() {
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyC0bgunBGcBvWtIJlWj8LbXnDe7fCg_O7s",
        method: "post",
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          contents: [{ 
            parts: [{ text: question }] 
          }]
        },
      });
      if (response.data && response.data.candidates && response.data.candidates[0].content && response.data.candidates[0].content.parts) {
        setAnswers(response.data.candidates[0].content.parts[0].text);
      } else {
        setAnswers("No response from the API.");
      }
    } catch (error) {
      console.error("Error generating answer:", error);
      setAnswers("Error generating answer.");
    }
  }

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button className="chatbot-toggle" onClick={toggleChatbot}>
        {isOpen ? 'Close' : 'Chat'}
      </button>
      {isOpen && (
        <div className="chat-window">
          <h1 className="chat-title">Chat Box</h1>
          <textarea
            className="chat-input"
            value={question}
            onChange={(e) => setQuestions(e.target.value)}
            placeholder="Type your question here..."
            rows="10"
          ></textarea>
          <button className="chat-button" onClick={generateAnswer}>Generate Answer</button>
          {answer && <div className="chat-response">{answer}</div>}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
