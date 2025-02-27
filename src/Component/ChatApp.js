import React, { useState, useEffect } from 'react';
import './Style.css';

//  Mock chat history data (replace this with gemini API or chatgpt api if needed
// sign up in google AI studio get free api key and create env folder and add api key
// there)

const initialMessages = [
  { id: 1, text: 'Hello, how can I help you today?', sender: 'bot' },
  { id: 2, text: 'I need some assistance with my order.', sender: 'user' },
];

const ChatApp = () => {
  const [messages, setMessages] = useState(initialMessages); //static message sending here
  const [newMessage, setNewMessage] = useState('');

/*{for gemini api import meta.env.vite_api_key and add async method give the response
output}*/

  // Auto-reply bot functionality
  useEffect(() => {
    if (messages[messages.length - 1]?.sender === 'user') {
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: prevMessages.length + 1, text: 'I am your bot! How can I assist you further?', sender: 'bot' },
        ]);
      }, 1500); // Auto-reply after 1.5 seconds
    }
  }, [messages]);

  // here Handling sending a message when send button clicked
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newUserMessage = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user',
      };
      // adding new value with the previous values
      setMessages((prevMessages) => [...prevMessages, newUserMessage]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-container" >
      <div className="chat-window" >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.sender}`}
            style={message.sender === 'user' ? styles.userMessage : styles.botMessage}
          >
            {message.text}
          </div>
        ))}
      </div>

      <div className="input-container">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          
        />
        <button onClick={handleSendMessage} className='sendButton'>Send</button>
      </div>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  userMessage: {
    textAlign: 'right',
    padding: '8px',
    backgroundColor: '#9df165',
    borderRadius: '10px',
    marginBottom: '8px',
    maxWidth: '60%',
    marginLeft: 'auto',
  },
  botMessage: {
    textAlign: 'left',
    padding: '8px',
    backgroundColor: '#f1f0f0',
    borderRadius: '10px',
    marginBottom: '8px',
    maxWidth: '60%',
  },
};

export default ChatApp;
