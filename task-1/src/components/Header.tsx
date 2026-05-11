const Header = () => {
  return (
    <header style={{ borderBottom: '1px solid #ccc', padding: '1rem' }}>
      <h1>My Shop</h1>
      <nav>
        <ul style={{ display: 'flex', gap: '15px', listStyle: 'none' }}>
          <li>Home</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;