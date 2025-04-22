"use client"

import { useState } from "react"

const ChatInput = ({ onSend, isLoading }) => {
  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    onSend(input)
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex p-2 border-t">
      <input
        type="text"
        className="flex-1 p-2 border rounded-l-md outline-none"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isLoading}
      />
      <button
        type="submit"
        className={`px-4 rounded-r-md ${
          isLoading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
        } text-white transition-colors`}
        disabled={isLoading}
      >
        Send
      </button>
    </form>
  )
}

export default ChatInput
