import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-wrapper fade-in">
      <div className="home-card">
        {/* Brand */}
        <h2 className="brand-title">Tutor AI</h2>
        <p className="brand-sub">by Data_Devs</p>

        {/* Hero */}
        <h1 className="hero-headline">Your Personal AI Tutor</h1>
        <p className="hero-sub">
          Get instant help with your classes, assignments, and exam prep.  
          Powered by your professors’ own teaching material.
        </p>

        {/* Buttons */}
        <div className="cta-row">
          <Link to="/student" className="btn-hero">Student</Link>
          <Link to="/teacher" className="btn-hero btn-outline">Teacher</Link>
        </div>
      </div>
    </div>
  );
}
