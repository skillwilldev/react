import { NavLink } from "react-router-dom";
import "./Navbar.css";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/courses", label: "Courses" },
  { to: "/about", label: "About Us" },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <NavLink to="/" className="navbar__brand" end>
          <svg
            className="navbar__logo"
            viewBox="0 0 16 16"
            width="28"
            height="28"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 0c4.42 0 8 3.58 8 8a8.01 8.01 0 0 1-5.47 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.24-.54-1.49 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.87 3.75 3.65 3.95-.23.2-.44.55-.51 1.07-.46.21-1.63.56-2.35-.67 0 0-.43-.78-1.24-.84 0 0-.79-.01-.06.49 0 0 .53.25.9 1.18 0 0 .47 1.44 2.7.95.01.68.01 1.31.01 1.5 0 .21-.15.46-.55.38A8 8 0 0 1 0 8c0-4.42 3.58-8 8-8z" />
          </svg>
          <span>CourseHub</span>
        </NavLink>

        <nav className="navbar__links">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                "navbar__link" + (isActive ? " navbar__link--active" : "")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;