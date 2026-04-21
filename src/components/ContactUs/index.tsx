import './ContactUs.scss';

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-inner">
        <span className="contact-eyebrow">Get in touch</span>

        <h2 className="contact-heading">
          Ready to know what your audience really thinks?
        </h2>

        <p className="contact-sub">
          Reach out to our team. We'll help you set up your first audience test and get insights before your next upload.
        </p>

        <a href="mailto:support@roboticaxai.com" className="contact-card">
          <div className="contact-icon">
            <EmailIcon />
          </div>
          <div className="contact-email-text">
            <span>Email us</span>
            <strong>support@roboticaxai.com</strong>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
