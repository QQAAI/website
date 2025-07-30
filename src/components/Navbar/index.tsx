import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { classNames } from 'primereact/utils';
import Logo from '../../assets/img/qqa_logo_nav.webp';
import './Navbar.scss';

const Navbar = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/content-creator', label: 'Content Creators' },
    { path: '/gamers', label: 'Gamers' },
    { path: '/about-us', label: 'About us' },
    { path: '/contact', label: 'Contact' },
  ];

  const actionButtons = [
    { path: 'https://portal.qqa.ai', label: 'Start your trial' },
    { path: 'https://portal.qqa.ai/#/sign-up', label: 'Sign Up' },
  ];

  const renderActionButtons = (mode: 'desktop' | 'mobile') =>
    actionButtons.map((btn) =>
      <a
        key={btn.path}
        href={btn.path}
        target="_blank"
        rel="noopener noreferrer"
        className={mode === 'mobile' ? 'w-full' : ''}
      >
        <Button
          label={btn.label}
          className={classNames('p-button-sm', 'custom-btn', {
            'w-full': mode === 'mobile',
          })}
        />
      </a>
    );

  return (
    <>
      <nav className="navbar-container px-4">
        <div className="navbar-inner flex align-items-center justify-content-between relative">
          <Link to="/" className="navbar-logo z-1">
            <img src={Logo} alt="QQA Logo" width={186} height={38} />
          </Link>

          <ul className="hidden md:flex list-none align-items-center gap-3 m-0 p-0 absolute-center navbar-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={classNames('nav-link', {
                    active: location.pathname === link.path,
                  })}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex align-items-center gap-2 z-1 navbar-actions">
            {renderActionButtons('desktop')}
          </div>

          <Button
            icon="pi pi-bars"
            className="p-button-text p-button-plain z-1 md:hidden"
            onClick={() => setVisible(true)}
            aria-label="Open menu"
          />
        </div>
      </nav>

      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        className="navbar-sidebar md:hidden"
      >
        <ul className="list-none p-0">
          {navLinks.map((link) => (
            <li key={link.path} className="mb-3">
              <Link
                to={link.path}
                className="nav-link block"
                onClick={() => setVisible(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}

          <div className="mt-4 flex flex-column gap-2">
            {renderActionButtons('mobile')}
          </div>
        </ul>
      </Sidebar>
    </>
  );
};

export default Navbar;
