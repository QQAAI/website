import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';
import instagram from '../../assets/img/instagram.svg';
import Logo from '../../assets/img/qqa_logo_nav.webp';
import './Footer.scss';

const legalOptions = [
  {
    label: 'Policy for handling, use, and processing of biometric personal data',
    value: 'policy-handling',
  },
  {
    label: 'Policy on the protection, processing, and handling of personal data',
    value: 'policy-handling-personal-data',
  },
];

const Footer = () => {
  const navigate = useNavigate();

  const handleSelect = ({ value }: { value: string }) => {
    navigate(value);
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={Logo} alt="QQA Logo" width={140} height={28} style={{ objectFit: 'contain' }} />
            <span className="footer-tagline">AI-Powered Audience Intelligence</span>
          </div>

          <div className="footer-links">
            <a href="/" className="footer-link">Home</a>
            <a href="/content-creator" className="footer-link">Content Creators</a>
            <a href="/gamers" className="footer-link">Gamers</a>
            <a href="/about-us" className="footer-link">About Us</a>
            <a href="/contact" className="footer-link">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2025 QQA AI Studio. All rights reserved.</p>

          <div className="footer-social">
            <a
              href="https://www.instagram.com/qqa.ai.creators/"
              target="_blank"
              rel="noopener noreferrer"
              className="circle-background"
              aria-label="Instagram"
            >
              <img src={instagram} alt="Instagram" width={18} height={18} />
            </a>

            <Dropdown
              value={null}
              options={legalOptions}
              onChange={handleSelect}
              placeholder="Legal"
              className="legal-dropdown"
              dropdownIcon="pi pi-chevron-down"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
