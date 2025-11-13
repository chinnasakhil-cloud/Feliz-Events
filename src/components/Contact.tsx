import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', eventType: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">Get In Touch</h2>
          <p className="lead text-muted">Let's discuss your next event</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm h-100 p-4">
              <h4 className="fw-bold mb-4">Contact Information</h4>

              <div className="d-flex align-items-start mb-4">
                <div className="rounded-circle p-3 me-3" style={{ backgroundColor: '#667eea' }}>
                  <Mail size={24} color="white" />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Email</h6>
                  <a href="mailto:akhilkumar26101996@gmail.com" className="text-muted text-decoration-none">
                    akhilkumar26101996@gmail.com
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <div className="rounded-circle p-3 me-3" style={{ backgroundColor: '#764ba2' }}>
                  <Phone size={24} color="white" />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Phone</h6>
                  <a href="tel:+919874543201" className="text-muted text-decoration-none">
                    +91 9874543201
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <div className="rounded-circle p-3 me-3" style={{ backgroundColor: '#667eea' }}>
                  <MapPin size={24} color="white" />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Location</h6>
                  <p className="text-muted mb-0">Available across India</p>
                </div>
              </div>

              <div className="mt-5">
                <img
                  src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Contact us"
                  className="img-fluid rounded-3"
                  style={{ objectFit: 'cover', width: '100%' }}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="card border-0 shadow-sm p-4">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label fw-bold">Name *</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{ borderRadius: '8px' }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label fw-bold">Email *</label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{ borderRadius: '8px' }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label fw-bold">Phone *</label>
                    <input
                      type="tel"
                      className="form-control form-control-lg"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      style={{ borderRadius: '8px' }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="eventType" className="form-label fw-bold">Event Type *</label>
                    <select
                      className="form-select form-select-lg"
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      style={{ borderRadius: '8px' }}
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="social">Social Gathering</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label fw-bold">Message *</label>
                    <textarea
                      className="form-control form-control-lg"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      style={{ borderRadius: '8px' }}
                      placeholder="Tell us about your event..."
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-lg w-100 text-white d-flex align-items-center justify-content-center"
                      style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '8px',
                        fontWeight: '600',
                        padding: '15px'
                      }}
                    >
                      <Send size={20} className="me-2" />
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
