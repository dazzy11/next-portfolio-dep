import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { Github, Linkedin, Mail, FileDown, Menu, X, ExternalLink } from 'lucide-react';
import './Dc.css';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-brand">Deepak</div>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('home')}>Home</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
          <a
            href="https://drive.google.com/your-resume-link"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            <FileDown size={18} />
            Resume
          </a>
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Home Section */}
      <section id="home">
        <h1 className="intro">Hey, I'm Deepak</h1>
        <p className="abtme">
          A Software Developer from Tamil Nadu, South India.
        </p>
        <div className='button-wrapper'>
          <a href="https://linkedin.com/in/deepak-madhu-kumar" target="_blank" rel="noopener noreferrer">
            <button className="btn-wit1">
              <Linkedin size={20} />
              Let's Connect
            </button>
          </a>
          <a href="https://github.com/dazzy11" target="_blank" rel="noopener noreferrer">
            <button className="btn-wit2">
              <Github size={20} />
              View Projects
            </button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
  <h2>About Me</h2>
  <p>
    Hey there! I'm Deepak Madhu Kumar N, a Computer Science undergrad at K Ramakrishnan College of Technology
    and a tech-savvy enthusiast with a caffeine-fueled passion for building impactful digital solutions.
    I speak fluent Java, and JavaScript, and I vibe well with tools like Next.js, Django, and Selenium.
    When I'm not coding, you'll find me brainstorming ideas or hyping up fellow devs in our campus tech community.
  </p>
  <button 
    className="resume-download"
    onClick={() => window.open("https://drive.google.com/your-resume-link", "_blank")}
  >
    <FileDown size={18} />
    Download Resume
  </button>
</section>

      {/* Projects Section */}
      <section id="projects">
  <h2>Projects</h2>
  <div className="projects-grid">
    {/* Project Card 1 */}
    <div className="project-card">
      <div className="project-image placeholder-image-1"></div>
      <h3>NextStep AI Career Navigator</h3>
      <div className="tech-stack">
        <span>React</span>
        <span>Next.js</span>
        <span>TypeScript</span>
        <span>PostgreSQL</span>
      </div>
      <p>AI-driven career guidance platform</p>
      <div className="project-links">
        <a href="https://nextstep-ai.com" target="_blank" rel="noopener noreferrer">
          <button className="project-btn">
            <ExternalLink size={16} />
            Website
          </button>
        </a>
        <a href="https://github.com/dazzy11/NextStep-AI-Career-Navigator" target="_blank" rel="noopener noreferrer">
          <button className="project-btn">
            <Github size={16} />
            GitHub
          </button>
        </a>
      </div>
    </div>

    {/* Add 3 more similar project cards with different placeholder images */}
    {/* Project Card 2 */}
    <div className="project-card">
      <div className="project-image placeholder-image-2"></div>
      {/* ... similar structure ... */}
    </div>

    {/* Project Card 3 */}
    <div className="project-card">
      <div className="project-image placeholder-image-3"></div>
      {/* ... similar structure ... */}
    </div>

    {/* Project Card 4 */}
    <div className="project-card">
      <div className="project-image placeholder-image-4"></div>
      {/* ... similar structure ... */}
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>
        <div className="contact-items">
          <div className="contact-item" onClick={() => window.location.href = "mailto:deepakmadhukumar1124@gmail.com"}>
            <Mail size={24} />
            <span>deepakmadhukumar1124@gmail.com</span>
          </div>

          <div className="contact-item" onClick={() => window.open("https://linkedin.com/in/deepak-madhu-kumar", "_blank")}>
            <Linkedin size={24} />
            <span>LinkedIn Profile</span>
          </div>

          <div className="contact-item" onClick={() => window.open("https://github.com/dazzy11", "_blank")}>
            <Github size={24} />
            <span>GitHub Profile</span>
          </div>
        </div>
      </section>
    </div>
  );
}