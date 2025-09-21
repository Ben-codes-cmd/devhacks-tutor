import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaPaperclip } from "react-icons/fa";

export default function Student() {
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hi! I’m your Tutor AI . Ask me anything about your course!" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "student", text: input }]);
    setInput("");
    // For now, fake AI reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "ai", text: "This is where Tutor AI would reply with an answer." }
      ]);
    }, 1000);
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
