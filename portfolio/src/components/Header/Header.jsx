import { useState } from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

const NAV_LINKS = [
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'projects' },
  { id: 'contact', label: 'contact' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="header__inner">
        <a href="#top" className="header__logo" onClick={closeMenu}>
          <span className="header__logo-bracket"></span>skillwilldev
        </a>

        <nav className={`header__nav ${isMenuOpen ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="header__link" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <ThemeToggle />
          <button
            className={`header__burger ${isMenuOpen ? 'is-open' : ''}`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Открыть меню"
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
