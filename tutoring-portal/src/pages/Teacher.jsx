import { Link } from "react-router-dom";
import { FaHome, FaUpload, FaPlus, FaClipboardList } from "react-icons/fa";

export default function Teacher() {
  return (
    <div className="student-wrapper">
      {/* Header row */}
      <header className="student-header">
        <Link to="/" className="home-icon">
          <FaHome size={28} />
        </Link>
        <h1 className="student-title">Teacher Portal</h1>
      </header>

      {/* Teacher Form */}
      <div className="student-form">
        {/* Course Select */}
        <select className="course-select">
          <option value="">Select a course</option>
          <option value="CSE330">CSE 330</option>
          <option value="CSE340">CSE 340</option>
          <option value="CSE445">CSE 445</option>
          <option value="CSE471">CSE 471</option>
          <option value="CSE365">CSE 365</option>
        </select>

        {/* File Upload */}
        <label className="file-upload-label">
          <FaUpload style={{ marginRight: "8px" }} />
          Upload Course Material
          <input type="file" className="file-input" />
        </label>

        {/* Buttons row */}
        <div className="teacher-actions">
          <button className="btn-hero">Submit</button>
          <button className="btn-hero btn-outline">
            <FaPlus style={{ marginRight: "6px" }} /> Create Class
          </button>
          <button className="btn-hero btn-outline">
            <FaClipboardList style={{ marginRight: "6px" }} /> Generate Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
