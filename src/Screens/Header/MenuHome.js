import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;

function MenuHome() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  useEffect(() => {}, []);
  return (
    <div className="mx-auto mb-2 mb-lg-0">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            className={
              splitLocation[1] === ""
                ? "nav-link px-3  active"
                : "nav-link px-3"
            }
            aria-current="page"
            to={"/"}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className={splitLocation[1] === "about"?"nav-link px-3  active":"nav-link px-3"} to={"/about"}>
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className={splitLocation[1] === "contact"?"nav-link px-3  active":"nav-link px-3"} to={"/contact"}>
            Contact Us
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={
              splitLocation[1] === "faq"
                ? "nav-link px-3  active"
                : "nav-link px-3"
            }
            to={"/faq"}
          >
            FAQ's
          </Link>
        </li>
        <li className="nav-item">
          <button class="findajobbtn">Find a Job</button>
        </li>
      </ul>
    </div>
  );
}

export default MenuHome;
