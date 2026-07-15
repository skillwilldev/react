import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">
        © {year} skillwilldev · built with React
      </p>
    </footer>
  );
}

export default Footer;
