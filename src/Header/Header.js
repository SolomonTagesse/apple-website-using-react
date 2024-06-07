import React from "react";
import logo_sm from "../images/icons/logo-sm.png";
import icon_sm from "../images/icons/search-icon-sm.png";
import cart_sm from "../images/icons/cart-sm.png";
const Header = () => {
  return (
    //<!-- Header navigation -->
    <div>
      <div className="nav-tool fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <a className="navbar-brand mx-auto" href="#">
              <img src={logo_sm} />
            </a>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    Mac
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    iphone
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    ipad
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    watch
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    tv
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    Music
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    Support
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="search-link nav-link js-scroll-trigger"
                    href="/search/"
                  >
                    <img src={icon_sm} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger logo-link" href="#">
                    <img src={cart_sm} />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <section className="searchbox">
        <form>
          <input type="text" name="searchbox" />
          <button id="submitButton" className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </section>
    </div>
  );
};
export default Header;
