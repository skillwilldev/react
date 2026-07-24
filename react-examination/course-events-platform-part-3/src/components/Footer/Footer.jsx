import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <p className="footer__text">
          © {year} CourseHub · Course & Event Management Platform
        </p>
        <p className="footer__meta">Frontend Development · React Exam Project</p>
      </div>
    </footer>
  );
}

export default Footer;
