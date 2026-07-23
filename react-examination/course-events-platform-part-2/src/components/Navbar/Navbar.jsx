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
