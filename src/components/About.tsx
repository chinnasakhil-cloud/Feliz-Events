import { Award, Clock, Smile } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '10+' },
    { icon: Clock, label: 'Events Completed', value: '500+' },
    { icon: Smile, label: 'Happy Clients', value: '1000+' }
  ];

  return (
    <section id="about" className="py-5" style={{ backgroundColor: '#ffffff' }}>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <img
              src="https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="About Feliz Events"
              className="img-fluid rounded-4 shadow-lg"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="col-lg-6 ps-lg-5">
            <h2 className="display-4 fw-bold mb-4">About Feliz Event's</h2>
            <p className="lead text-muted mb-4" style={{ lineHeight: '1.8' }}>
              We are passionate about creating exceptional events that leave lasting impressions.
              With years of experience and a dedicated team, we transform your dreams into reality.
            </p>
            <p className="text-muted mb-5" style={{ lineHeight: '1.8' }}>
              From conceptualization to execution, we handle every detail with precision and creativity.
              Our commitment to excellence and personalized service ensures that each event is unique
              and perfectly tailored to your vision.
            </p>

            <div className="row g-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="col-sm-4">
                    <div className="text-center p-3 rounded-3" style={{ backgroundColor: '#f8f9fa' }}>
                      <Icon size={32} className="mb-2" style={{ color: '#667eea' }} />
                      <h3 className="fw-bold mb-1" style={{ color: '#1a1a2e' }}>{stat.value}</h3>
                      <p className="small text-muted mb-0">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
