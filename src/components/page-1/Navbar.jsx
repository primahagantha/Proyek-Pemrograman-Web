function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top" id="navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html" id="logo">
          <span>Inspirasi </span>Portofolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span>
            <i className="fa-solid fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#navbar"></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
