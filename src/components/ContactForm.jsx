import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="container">
      <h2 className="section-title">Get In Touch</h2>
      <div style={{ textAlign: 'center', marginBottom: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <div><i className="fa-solid fa-envelope" style={{ color: 'var(--primary-color)' }}></i> achrafahsaine06@gmail.com</div>
        <div><i className="fa-solid fa-phone" style={{ color: 'var(--primary-color)' }}></i> +212 627225925</div>
      </div>
      <div className="contact-container glass-panel">
        <form id="contact-form">
          <div className="success-msg" id="form-success">
            <i className="fa-solid fa-circle-check"></i> Thank you! Your message has been sent successfully.
          </div>
          
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" className="form-control" placeholder="Ahmed" />
            <div className="error-msg" id="name-error">Please enter your full name.</div>
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" className="form-control" placeholder="Ahmed@example.com" />
            <div className="error-msg" id="email-error">Please enter a valid email address.</div>
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" className="form-control" placeholder="How can I help you?"></textarea>
            <div className="error-msg" id="message-error">Please enter your message.</div>
          </div>
          
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Send Message <i className="fa-solid fa-paper-plane" style={{ marginLeft: '0.5rem' }}></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
