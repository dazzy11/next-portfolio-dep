// Import React library and CSS styles
import React from "react";
import "./Port.css";
// Define Portfolio component as a Functional Component
const Portfolio: React.FC = () => {
  return (
    <>
      {/* Navigation Bar Section */}
      <div className="navbar">
        {/* Navigation links with smooth scroll behavior */}
        <a className="nav" href="#home">
          Home
        </a>
        <a className="nav" href="#about">
          About
        </a>
        <a className="nav" href="#projects">
          Projects
        </a>
        <a className="nav" href="#contact">
          Contact
        </a>
      </div>

      {/* Home Section - First visible section */}
      <section id="home" className="home-container">
        {/* Left side: intro text */}
        <div className="home-text">
          <h1 className="intro">Hi! I'm Deepak</h1>
          <p className="abtme">
            A Software Developer from Tamil Nadu, India.
          </p>
        {/* Social media links as buttons */}
        <div className='button-wrapper'>
        <a
          href="https://linkedin.com/in/deepak-madhu-kumar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-wit1">Let's Connect</button>
        </a>
        <a href="https://github.com/dazzy11" target="_blank" rel="noopener noreferrer">
          <button className="btn-wit2">View Projects</button>
        </a>
        </div>
        </div>
      </section>

      {/* About Section - Personal information */}
      <section id="about">
        <h2>About Me</h2>
        <p>
        Hey there! I'm Deepak Madhu Kumar N, a Computer Science undergrad at K Ramakrishnan College of Technology and a tech-savvy enthusiast with a caffeine-fueled passion for building impactful digital solutions.
I speak fluent Java, and JavaScript, and I vibe well with tools like Next.js, Django, and Selenium. I’m also the go-to person for fixing bugs at 2 AM and making tech magic with nothing but an internet connection and VSCode.
When I’m not coding, you’ll probably find me brainstorming ideas, leveling up my skills, or hyping up fellow devs in our campus tech community.
        </p>
      </section>

      {/* Projects Section - Showcase work */}
      <section id="projects">
        <h2>Projects</h2>
        <ul>
          {/* List of projects with GitHub links */}
          <li>
            <strong>NextStep AI Career Navigator</strong> - AI-driven career
            guidance platform. <a href="https://github.com/dazzy11/NextStep-AI-Career-Navigator" target="_blank">GitHub</a>
          </li>
          <li>
            <strong>Image Colorization</strong> - Colorizing grayscale images
            using deep learning. <a href="https://github.com/dazzy11/colourization" target="_blank">GitHub</a>
          </li>
          <li>
            <strong>Solar ROI Optimization</strong> - Hackathon-winning project for
            solar investments. <a href="https://github.com/dazzy11/HelioROI" target="_blank">GitHub</a>
          </li>
        </ul>
      </section>

      {/* Contact Section - Contact information */}
      {/* Contact Section */}
<section id="contact">
  <h2>Contact</h2>
  <div className="contact-items">
    {/* Email with icon */}
    <div className="contact-item" onClick={() => window.location.href = "mailto:deepakmadhukumar1124@gmail.com"}>
      <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" className="contact-icon" />
      <span>deepakmadhukumar1124@gmail.com</span>
    </div>

    {/* LinkedIn with icon */}
    <div className="contact-item" onClick={() => window.open("https://linkedin.com/in/deepak-madhu-kumar", "_blank")}>
      <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="contact-icon" />
      <span>LinkedIn Profile</span>
    </div>

    {/* GitHub with icon */}
    <div className="contact-item" onClick={() => window.open("https://github.com/dazzy11", "_blank")}>
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="contact-icon" />
      <span>GitHub Profile</span>
    </div>
  </div>
</section>
    </>
  );
};

export default Portfolio;