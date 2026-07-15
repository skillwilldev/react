import './Button.css';

function Button({ children, href, onClick, variant = 'primary', as = 'a', ...rest }) {
  const className = `btn btn--${variant}`;

  if (as === 'a' && href) {
    return (
      <a className={className} href={href} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

export default Button;
