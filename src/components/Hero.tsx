import { Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="position-relative" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      paddingTop: '80px'
    }}>
      <div className="container h-100 d-flex align-items-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
        <div className="row w-100 align-items-center">
          <div className="col-lg-6 text-white mb-5 mb-lg-0">
            <div className="d-flex align-items-center mb-3">
              <Sparkles size={32} className="me-2" />
              <span style={{ fontSize: '1.2rem', fontWeight: '500', letterSpacing: '2px' }}>PREMIUM EVENTS</span>
            </div>
            <h1 className="display-3 fw-bold mb-4" style={{ lineHeight: '1.2' }}>
              Creating Unforgettable Moments
            </h1>
            <p className="lead mb-4" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
              Transform your celebrations into extraordinary experiences with Feliz Event's.
              We bring your vision to life with creativity, precision, and passion.
            </p>
            <button
              className="btn btn-light btn-lg px-5 py-3"
              onClick={scrollToContact}
              style={{
                borderRadius: '50px',
                fontWeight: '600',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Plan Your Event
            </button>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <img
                src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Celebration"
                className="img-fluid rounded-4 shadow-lg"
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
