
function Menu() {
  return (
    <div className="mx-auto mb-2 mb-lg-0">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link px-3" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-3" href="#">
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-3" href="#">
            Contact Us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-3" href="#">
            FAQ's
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-3" href="#">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link px-3 active"
            href="#"
          >
            Find a Job
          </a>
        </li>
      </ul>

    </div>
  );
}
export default Menu;
