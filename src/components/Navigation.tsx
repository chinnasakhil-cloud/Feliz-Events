import { useState } from 'react';
import { Menu, X, PartyPopper } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#1a1a2e', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          <PartyPopper className="me-2" size={28} />
          <span style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '1px' }}>Feliz Event's</span>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link px-3" href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
