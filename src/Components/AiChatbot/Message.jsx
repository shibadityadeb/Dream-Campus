const Message = ({ text, isUser }) => {
    return (
      <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
        <div
          className={`p-3 rounded-lg max-w-[80%] ${
            isUser
              ? "bg-indigo-600 text-white rounded-br-none"
              : "bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm"
          }`}
        >
          {text}
        </div>
      </div>
    )
  }
  
  export default Message
  