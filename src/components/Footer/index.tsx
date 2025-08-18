import { useNavigate } from 'react-router-dom';

import { Dropdown } from 'primereact/dropdown';

import instagram from '../../assets/img/instagram.svg'

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
    <section className="footer">
      <div className="container flex flex-column md:flex-row justify-content-between align-items-center py-3 gap-4">
        {/* Copyright */}
        <p className="m-0 px-4 text-sm text-center md:text-left" style={{ color: 'rgb(135, 135, 135)' }}>
          @Copyright 2025 QQA AI Studio
        </p>

        <div className="flex gap-5">
          {/* Redes sociales */}
          <div className="flex align-items-center justify-content-center gap-3">
            <a
              href="https://www.instagram.com/qqa.ai.creators/"
              target="_blank"
              rel="noopener noreferrer"
              className="circle-background"
            >
              <img src={instagram} alt="Instagram logo" width={24} height={24} />
            </a>
          </div>

          {/* Legal dropdown */}
          <Dropdown
            value={null}
            options={legalOptions}
            onChange={handleSelect}
            placeholder="Legal"
            className="legal-dropdown mx-4"
            dropdownIcon="pi pi-chevron-down"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
