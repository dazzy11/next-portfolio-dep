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
      <section id="home">
        {/* Main heading with intro text */}
        <h1 className="intro">Hey, Hi! I'm Deepak</h1>
        {/* Subheading with brief description */}
        <p className="abtme">
          A Software Developer from Tamil Nadu, South India.
        </p>
        {/* Social media links as buttons */}
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
      </section>

      {/* About Section - Personal information */}
      <section id="about">
        <h2>About Me</h2>
        <p>
        Hey there! I'm Deepak Madhu Kumar N, a Computer Science undergrad at K Ramakrishnan College of Technology and a tech-savvy enthusiast with a caffeine-fueled passion for building impactful digital solutions.
I speak fluent Python, Java, and JavaScript, and I vibe well with tools like Django, Next.js, and Selenium. I’m also the go-to person for fixing bugs at 2 AM and making tech magic with nothing but an internet connection and VSCode.
When I’m not coding, you’ll probably find me brainstorming startup ideas, leveling up my skills, or hyping up fellow devs in our campus tech community.
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
      <section id="contact">
        <h2>Contact</h2>
        {/* Various contact methods */}
        <p>Email: <a href="mailto:deepakmadhukumar1124@gmail.com">deepakmadhukumar1124@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/deepak-madhu-kumar" target="_blank">LinkedIn Profile</a></p>
        <p>GitHub: <a href="https://github.com/dazzy11" target="_blank">GitHub Profile</a></p>
      </section>
    </>
  );
};

export default Portfolio;