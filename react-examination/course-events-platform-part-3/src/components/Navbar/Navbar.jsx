import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/courses", label: "Courses" },
  { to: "/about", label: "About" },
];

function Navbar() {
  const favoritesCount = useSelector((state) => state.favorites.items.length);

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
            <path d="M8 0L0 4l8 4 6.5-3.25V9h1V4L8 0z"></path>
            <path d="M3 6.5v3.5c0 1.38 2.24 2.5 5 2.5s5-1.12 5-2.5V6.5L8 9.25 3 6.5z"></path>
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

          <NavLink
            to="/courses"
            className="navbar__favorites"
            aria-label="Favorites"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.08 22.08 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.075 22.075 0 01-3.744 2.584l-.018.01-.006.003h-.002z" />
            </svg>
            <span className="navbar__favorites-count">{favoritesCount}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
