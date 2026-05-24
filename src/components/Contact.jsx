import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { Linkedin } from './Icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    // Simulate premium server submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal active">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Let's Create <span className="gradient-text">Something Great</span></h2>
        </div>

        <div className="contact-grid">
          {/* Contact Information Cards (Left) */}
          <div className="contact-info">
            <h3 className="info-title reveal active">Let's connect & discuss your vision.</h3>
            <p className="info-subtitle reveal active">
              Have an idea for a creative web experience, need a dedicated React developer, or just want to chat about design systems? Drop me a message and I'll get back to you within 24 hours.
            </p>

            {/* Premium Direct Email Link Card */}
            <div className="contact-card glass-card reveal active">
              <div className="contact-card-icon-box">
                <Mail size={22} className="info-icon" />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">Email Me Directly</span>
                <a href="mailto:jifri.chakkalan@gmail.com" className="contact-card-link">
                  jifri.chakkalan@gmail.com
                </a>
              </div>
            </div>

            {/* Premium LinkedIn Link Card */}
            <div className="contact-card glass-card reveal active">
              <div className="contact-card-icon-box">
                <Linkedin size={22} className="info-icon" />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">Let's Connect on LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/jifrickofficial"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card-link"
                >
                  linkedin.com/in/jifrickofficial
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form (Right) */}
          <div className="contact-form-container glass-card reveal active">
            {status !== 'success' ? (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-title">Send a Message</h3>

                {/* Name Input */}
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder=" "
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                  />
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                </div>

                {/* Email Input */}
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder=" "
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                  />
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                </div>

                {/* Message Textarea */}
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows="5"
                    placeholder=" "
                    className="form-control form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                  ></textarea>
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className={`btn-primary btn-submit ${status === 'sending' ? 'btn-sending' : ''}`}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      Sending Message...
                      <span className="form-loader"></span>
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* High Fidelity Success feedback screen */
              <div className="success-state">
                <div className="success-icon-container">
                  <CheckCircle2 size={54} className="success-check-icon" />
                </div>
                <h3 className="success-title">Message Sent!</h3>
                <p className="success-message">
                  Thank you for reaching out. Your message has been sent successfully. I will review it and get in touch with you shortly at your provided email.
                </p>
                <button className="btn-secondary" onClick={() => setStatus('idle')}>
                  Send Another Message <ArrowRight size={14} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 4rem;
          align-items: start;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .info-title {
          font-size: 2.25rem;
          line-height: 1.25;
          margin-bottom: 0.5rem;
        }
        .info-subtitle {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }
        
        /* Direct Contact Cards */
        .contact-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          border-radius: 14px;
        }
        .contact-card:hover {
          transform: translateX(5px);
        }
        .contact-card-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(0, 240, 255, 0.05);
          border: 1px solid rgba(0, 240, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          transition: var(--transition-bounce);
        }
        .contact-card:hover .contact-card-icon-box {
          transform: scale(1.08) rotate(-3deg);
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.1);
        }
        .info-icon {
          filter: drop-shadow(0 0 3px rgba(0, 240, 255, 0.2));
        }
        .contact-card-content {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .contact-card-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }
        .contact-card-link {
          font-family: var(--font-headings);
          font-weight: 600;
          font-size: 1.05rem;
          color: var(--text-primary);
          text-decoration: none;
          transition: var(--transition-smooth);
        }
        .contact-card-link:hover {
          color: var(--accent-cyan);
          text-shadow: 0 0 5px rgba(0, 240, 255, 0.2);
        }
        
        /* Form box */
        .contact-form-container {
          padding: 3rem;
        }
        .form-title {
          font-size: 1.6rem;
          margin-bottom: 2rem;
        }
        .form-textarea {
          resize: none;
        }
        .btn-submit {
          width: 100%;
          justify-content: center;
        }
        
        /* Form Loader styling */
        .btn-sending {
          cursor: not-allowed;
          opacity: 0.8;
        }
        .form-loader {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(0, 0, 0, 0.2);
          border-top-color: #050505;
          border-radius: 50%;
          display: inline-block;
          animation: spin 0.8s linear infinite;
        }
        
        /* Success Screen */
        .success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem 0;
        }
        .success-icon-container {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: rgba(0, 240, 255, 0.05);
          border: 1px solid rgba(0, 240, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          margin-bottom: 2rem;
          box-shadow: 0 0 25px rgba(0, 240, 255, 0.05);
          animation: scale-up 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .success-check-icon {
          filter: drop-shadow(0 0 5px rgba(0, 240, 255, 0.3));
        }
        .success-title {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .success-message {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          max-width: 420px;
          line-height: 1.6;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        @keyframes scale-up {
          from { transform: scale(0.6); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .contact-form-container {
            padding: 2.5rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
