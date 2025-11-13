import { Heart, Briefcase, Users, Gift } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Weddings',
      description: 'Make your special day magical with our complete wedding planning services, from intimate ceremonies to grand celebrations.',
      image: 'https://images.pexels.com/photos/265705/pexels-photo-265705.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Briefcase,
      title: 'Corporate Events',
      description: 'Professional event management for conferences, seminars, product launches, and corporate gatherings.',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Users,
      title: 'Social Gatherings',
      description: 'From birthday parties to anniversaries, we create memorable celebrations for all your special occasions.',
      image: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Gift,
      title: 'Special Occasions',
      description: 'Custom event planning for festivals, cultural celebrations, and milestone events that deserve extraordinary attention.',
      image: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="services" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">Our Services</h2>
          <p className="lead text-muted" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Comprehensive event management solutions tailored to your needs
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm hover-card" style={{
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}>
                  <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="card-img-top"
                      style={{
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{
                      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9))'
                    }}>
                      <Icon size={48} color="white" />
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <h5 className="card-title fw-bold mb-3">{service.title}</h5>
                    <p className="card-text text-muted" style={{ lineHeight: '1.7' }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
