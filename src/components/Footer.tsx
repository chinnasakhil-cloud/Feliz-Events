import { PartyPopper, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-5" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="d-flex align-items-center mb-3">
              <PartyPopper size={28} className="me-2" />
              <h4 className="mb-0 fw-bold">Feliz Event's</h4>
            </div>
            <p className="text-white-50" style={{ lineHeight: '1.8' }}>
              Creating unforgettable moments and extraordinary experiences for your special occasions.
            </p>
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="fw-bold mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-white-50 text-decoration-none hover-link">Home</a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-white-50 text-decoration-none hover-link">Services</a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-white-50 text-decoration-none hover-link">About</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-white-50 text-decoration-none hover-link">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h5 className="fw-bold mb-4">Contact Us</h5>
            <div className="d-flex align-items-center mb-3">
              <Mail size={20} className="me-3" />
              <a href="mailto:akhilkumar26101996@gmail.com" className="text-white-50 text-decoration-none">
                akhilkumar26101996@gmail.com
              </a>
            </div>
            <div className="d-flex align-items-center">
              <Phone size={20} className="me-3" />
              <a href="tel:+919874543201" className="text-white-50 text-decoration-none">
                +91 9874543201
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        <div className="text-center text-white-50">
          <p className="mb-0">&copy; {currentYear} Feliz Event's. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
