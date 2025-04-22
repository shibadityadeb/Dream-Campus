import React, { useState, useRef, useEffect } from 'react';
import Message from './Message';
import ChatInput from './ChatInput';

// Using the API key directly as requested
const API_KEY = 'AIzaSyBkl4dHpTz_wU2k9BNBC91LZ6-co1erOAA';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Dream Campus AI powered by Gemini. How can I help you?", isUser: false },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current && isOpen) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async (userMessage) => {
    // Add user message to chat
    const newMessages = [...messages, { text: userMessage, isUser: true }];
    setMessages(newMessages);

    // Set loading state
    setIsLoading(true);

    try {
      const botReply = await getGeminiResponse(userMessage);
      setMessages([...newMessages, { text: botReply, isUser: false }]);
    } catch (error) {
      console.error('Error getting response:', error);
      setMessages([...newMessages, { text: "Sorry, I couldn't process your request right now.", isUser: false }]);
    } finally {
      setIsLoading(false);
    }
  };

  const getGeminiResponse = async (prompt) => {
    console.log('Sending request to Gemini API...');
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: prompt }],
              },
            ],
          }),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        console.error('API Error:', errorData);
        return `Error: ${errorData.error?.message || 'Unknown error'}`;
      }

      const data = await res.json();
      console.log('Gemini API response:', data);
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand.";
    } catch (err) {
      console.error('Error fetching Gemini response:', err);
      return "Sorry, there was an error connecting to the AI service.";
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white shadow-xl rounded-xl flex flex-col h-96 overflow-hidden">
          <div className="bg-indigo-600 text-white px-4 py-3 font-bold flex justify-between items-center">
            <span>Dream Campus AI</span>
            <button onClick={toggleChat} className="text-white hover:text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50">
            {messages.map((msg, index) => (
              <Message key={index} text={msg.text} isUser={msg.isUser} />
            ))}

            {isLoading && (
              <div className="flex items-center space-x-2 text-gray-500 text-sm">
                <div className="animate-pulse">AI is typing</div>
                <div className="flex space-x-1">
                  <div
                    className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: '0ms' }}
                  ></div>
                  <div
                    className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: '150ms' }}
                  ></div>
                  <div
                    className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: '300ms' }}
                  ></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <ChatInput onSend={handleSend} isLoading={isLoading} />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
