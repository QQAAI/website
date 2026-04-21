import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { classNames } from 'primereact/utils';
import Logo from '../../assets/img/qqa_logo_nav.webp';
import './Navbar.scss';

const navLinks = [
  { path: '/',                label: 'Home' },
  { path: '/content-creator', label: 'Content Creators' },
  { path: '/gamers',          label: 'Gamers' },
  { path: '/about-us',        label: 'About us' },
  { path: '/contact',         label: 'Contact' },
];

const Navbar = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

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
                  className={classNames('nav-link', { active: location.pathname === link.path })}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden md:flex align-items-center gap-2 z-1 navbar-actions">
            <a href="https://portal-qqa.ai" target="_blank" rel="noopener noreferrer" className="nav-login">
              Log In
            </a>
            <a href="https://portal-qqa.ai/#/sign-up" target="_blank" rel="noopener noreferrer" className="nav-signup">
              Start Free
            </a>
          </div>

          <Button
            icon="pi pi-bars"
            className="p-button-text p-button-plain z-1 md:hidden"
            onClick={() => setVisible(true)}
            aria-label="Open menu"
          />
        </div>
      </nav>

      {/* Mobile sidebar */}
      <Sidebar visible={visible} onHide={() => setVisible(false)} className="navbar-sidebar md:hidden">
        <ul className="list-none p-0 mb-4">
          {navLinks.map((link) => (
            <li key={link.path} className="mb-2">
              <Link
                to={link.path}
                className={classNames('nav-link block', { active: location.pathname === link.path })}
                onClick={() => setVisible(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-column gap-2">
          <a href="https://portal.qqa.ai" target="_blank" rel="noopener noreferrer" className="nav-login text-center">
            Log In
          </a>
          <a href="https://portal.qqa.ai/#/sign-up" target="_blank" rel="noopener noreferrer" className="nav-signup text-center">
            Start Free
          </a>
        </div>
      </Sidebar>
    </>
  );
};

export default Navbar;
