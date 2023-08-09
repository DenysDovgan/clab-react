import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faChevronDown,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Logo } from "../logo.svg";
import ReactCountryFlag from "react-country-flag";
// import { Button } from "./Button";
import "./Header.css";

function Header() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // window.addEventListener("resize", showButton);

  return (
    <div className="header">
      <div className="firstMenu">
        <Logo className="logo" />

        <nav className="desktop-navbar">
          <div className="desktop-navbar-container">
            <ul className="navbarUl">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">O nas</Link>
              </li>
              <li>
                <Link to="/used-printers">Komis</Link>
              </li>
              <li>
                <Link to="/news">Aktualności</Link>
              </li>
              <li>
                <Link to="/contact">Kontakt</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="right-header">
          <div className="desktop-right-header">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faCartShopping} />
            <div className="dropdownFlag">
              <div className="workingFlag">
                <ReactCountryFlag
                  countryCode="PL"
                  svg
                  style={{
                    width: "1.3em",
                    height: "1.3em",
                  }}
                />
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ color: "grey" }}
                />
              </div>
              <div className="countryFlag">
                <Link to="/">
                  <ReactCountryFlag
                    countryCode="US"
                    svg
                    style={{
                      width: "1.3em",
                      height: "1.3em",
                    }}
                  />
                </Link>
                <Link to="/">
                  <ReactCountryFlag
                    countryCode="DE"
                    svg
                    style={{
                      width: "1.3em",
                      height: "1.3em",
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* ----------------------------mobile menu--------------------- */}

          <nav className="mobile-navbar">
            <div className="mobile-navbar-container">
              <div className="mobile-menu-icon-container" onClick={handleClick}>
                <FontAwesomeIcon icon={click ? faXmark : faBars} />
              </div>

              <ul
                className={
                  click ? "mobile-nav-menu active" : "mobile-nav-menu"
                }>
                <li className="mobile-nav-item">
                  <Link
                    to="/"
                    className="mobile-nav-links"
                    onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>

                <li className="mobile-nav-item">
                  <Link
                    to="/about-us"
                    className="mobile-nav-links"
                    onClick={closeMobileMenu}>
                    O Nas
                  </Link>
                </li>

                <li className="mobile-nav-item">
                  <Link
                    to="/printers"
                    className="mobile-nav-links"
                    onClick={closeMobileMenu}>
                    Drukarki
                  </Link>
                </li>

                <li className="mobile-nav-item">
                  <Link
                    to="/inks"
                    className="mobile-nav-links"
                    onClick={closeMobileMenu}>
                    Atramenty
                  </Link>
                </li>

                <li className="mobile-nav-item">
                  <Link
                    to="/contact"
                    className="mobile-nav-links"
                    onClick={closeMobileMenu}>
                    Kontakt
                  </Link>
                </li>
              </ul>
              {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
            </div>
          </nav>
        </div>
      </div>

      <div className="secondMenu"></div>
    </div>
  );
}
export default Header;
