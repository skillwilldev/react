
const Navbar =  () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h2>Movie<span>Catalog</span></h2>
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Trending</a></li>
        <li><a href="#">My List</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;