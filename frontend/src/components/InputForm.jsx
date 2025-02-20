import { useState } from "react";
import axios from "axios";
import flow from '../assets/flow.mp4';
import "../styles/InputForm.css";  // Import CSS file
import logo from '../assets/logo34.png';


const InputForm = ({ setMermaidCode }) => {
  const [scenario, setScenario] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/generate-flowchart", { scenario });
      setMermaidCode(response.data.mermaidCode);
    } catch (error) {
      console.error("Error generating flowchart:", error);
    }
  };

  return (
    <div className="input-form-container">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={flow} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for Readability */}
      <div className="overlay"></div>

      {/* Navbar */}
      <nav className="navbar">
      <div className="navbar-brand">
  <img src={logo} alt="FlowCraft Logo" className="navbar-logo" />
</div>

        <div className="navbar-links">
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          
        </div>
      </nav>

      {/* Centered Form */}
      <div className="form-wrapper">
        <h2 className="form-title">🔍 Describe Your Website Scenario</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={scenario}
            onChange={(e) => setScenario(e.target.value)}
            placeholder="Describe the website functionality..."
            rows={5}
            className="input-textarea"
          />
          <button type="submit" className="submit-button">🚀 Generate Flowchart</button>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
