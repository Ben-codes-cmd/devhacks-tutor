import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaPaperclip } from "react-icons/fa";
import axios from "axios";

export default function Student() {
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hi! I’m your Tutor AI 🤖. Ask me anything about your course!" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add student message to chat
    setMessages((prev) => [...prev, { from: "student", text: input }]);

    try {
      // Send question to FastAPI backend
      const res = await axios.post("http://127.0.0.1:8000/query", {
        question: input,
      });

      // Add AI response to chat
      setMessages((prev) => [
        ...prev,
        { from: "ai", text: res.data.message || "No response from AI." }
      ]);
    } catch (error) {
      console.error("Error querying Tutor AI:", error);
      setMessages((prev) => [
        ...prev,
        { from: "ai", text: "⚠️ Error: Could not connect to Tutor AI." }
      ]);
    }

    setInput(""); // clear input box
  };

  return (
    <div className="student-wrapper">
      {/* Header row */}
      <header className="student-header">
        <Link to="/" className="home-icon">
          <FaHome size={28} />
        </Link>
        <h1 className="student-title">Student Portal</h1>
      </header>

      {/* Chat area */}
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-bubble ${msg.from === "student" ? "student-msg" : "ai-msg"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input row */}
      <div className="chat-input-row">
        <label htmlFor="file-upload" className="file-button">
          <FaPaperclip size={18} />
        </label>
        <input id="file-upload" type="file" style={{ display: "none" }} />

        <input
          type="text"
          className="chat-input"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />

        <button onClick={handleSend} className="btn-hero">Send</button>
      </div>
    </div>
  );
}
