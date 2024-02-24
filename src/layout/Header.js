import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [linkElements, setLinkElements] = useState(null);
  const [height, setHeight] = useState(null);

  const toggleFun = (e) => {
    const menu = document.querySelector(".menu-btn.full"),
      overlay = document.querySelector(".menu-full-overlay");
    e.preventDefault();
    setToggle(!toggle);
    if (toggle) {
      menu.classList.remove("active");
      menu.classList.add("no-touch");
      document.body.classList.remove("no-scroll");
      overlay.classList.remove("is-open");
      overlay.classList.remove("has-scroll");
      overlay.classList.remove("animate-active");
      setTimeout(function () {
        overlay.classList.remove("visible");
        menu.classList.remove("no-touch");
      }, 1000);
    } else {
      menu.classList.add("active");
      menu.classList.add("no-touch");
      document.body.classList.add("no-scroll");
      overlay.classList.add("is-open");
      overlay.classList.add("visible");
      setTimeout(function () {
        overlay.classList.add("has-scroll");
        overlay.classList.add("animate-active");
        menu.classList.remove("no-touch");
      }, 600);
    }
    return false;
  };

  useEffect(() => {
    document.querySelector("body").classList.remove("no-scroll");
  }, []);
  const subMenuClick = (event, value) => {
      setLinkElements(value == linkElements ? null : value);
      const target = event.target,
        ul = target.closest(".menu-full");
      setHeight(ul.offsetHeight + 20);
    },
    subMenuHeight = (value) =>
      value == linkElements
        ? { maxHeight: `${height}px` }
        : { maxHeight: "0px" },
    subMenuOpened = (value) => (value == linkElements ? "opened" : "closed");
  return (
    <header className="header">
      <div className="header__builder">
        {/* logo */}
        <div className="logo-image">
          <Link legacyBehavior href="/">
            <a>
              <img 
                src="assets/images/socreative-photography-logo.svg" 
                alt="Socreative Photography" 
                width="100%"
                height="auto"
              />
            </a>
          </Link>
        </div>
        <nav className="sc-nav">
          <ul>
            <li>
              <Link href="/landscapes">
                Landscapes
              </Link>
            </li>
            <li>
              <Link href="/portraits">
                Portraits
              </Link>
            </li>
            <li>
              <Link href="/fashion">
                Fashion
              </Link>
            </li>
            <li>
              <Link href="/fitness">
                Fitness
              </Link>
            </li>
            <li>
              <Link href="/workshops">
                Workshops
              </Link>
            </li>
            <li>
              <Link href="/get-in-touch">
                Get in touch
              </Link>
            </li>
          </ul>
        </nav>
        {/* menu btn */}
        <a href="#" className="sc-mobile-menu menu-btn full" onClick={(e) => toggleFun(e)}>
          <span />
        </a>
        {/* Menu Full Overlay */}
        <div className="menu-full-overlay">
          <div className="menu-full-container">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 offset-1">
                  {/* menu full */}
                  <div className="menu-full">
                    <ul className="menu-full">
                      <li className="menu-item">
                        <Link legacyBehavior href="/">
                          <a
                            className="splitting-text-anim-2"
                            data-splitting="chars"
                          >
                            Home
                          </a>
                        </Link>
                      </li>
                      {/* <li
                        className={`menu-item menu-item-has-children has-children ${subMenuOpened(
                          "about"
                        )}`}
                      >
                        <a
                          className="splitting-text-anim-2"
                          data-splitting="chars"
                          href="#"
                          onClick={(e) => subMenuClick(e, "about")}
                        >
                          About
                        </a>
                        <ul className="sub-menu" style={subMenuHeight("about")}>
                          <li className="menu-item">
                            <Link legacyBehavior href="/about">
                              <a
                                className="splitting-text-anim-1"
                                data-splitting="chars"
                              >
                                About One
                              </a>
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link legacyBehavior href="/about-two">
                              <a
                                className="splitting-text-anim-1"
                                data-splitting="chars"
                              >
                                About Two
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li> */}
                      {/* <li
                        className={`menu-item menu-item-has-children has-children ${subMenuOpened(
                          "Services"
                        )}`}
                      >
                        <a
                          className="splitting-text-anim-2 words chars splitting"
                          data-splitting="chars"
                          href="#"
                          onClick={(e) => subMenuClick(e, "Services")}
                        >
                          Services
                        </a>
                        <ul className="sub-menu" style={subMenuHeight("Services")}>
                          <li className="menu-item">
                            <Link legacyBehavior href="/services/commercial-photography">
                              <a
                                className="splitting-text-anim-1"
                                data-splitting="chars"
                              >
                                 Commercial photography
                              </a>
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link legacyBehavior href="/services/headshots">
                              <a
                                className="splitting-text-anim-1"
                                data-splitting="chars"
                              >
                                Headshots
                              </a>
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link legacyBehavior href="/services/portraits">
                              <a
                                className="splitting-text-anim-1"
                                data-splitting="chars"
                              >
                                Portraits
                              </a>
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link legacyBehavior href="/services/drone-videography">
                              <a
                                className="splitting-text-anim-1"
                                data-splitting="chars"
                              >
                                Drone Videography
                              </a>
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link legacyBehavior href="/workshops">
                              <a
                                className="splitting-text-anim-1"
                                data-splitting="chars"
                              >
                                Workshops
                              </a>
                            </Link>
                          </li>
                          
                          
                        </ul>
                      </li> */}
                      <li
                        className={`menu-item menu-item-has-children has-children ${subMenuOpened(
                          "Portfolio"
                        )}`}
                      >
                        <a
                          className="splitting-text-anim-2 words chars splitting"
                          data-splitting="chars"
                          href="#"
                          onClick={(e) => subMenuClick(e, "Portfolio")}
                        >
                          Portfolio
                        </a>
                        <ul className="sub-menu" style={subMenuHeight("Portfolio")}>
                          <li className="menu-item">
                            <Link legacyBehavior href="/landscapes">
                              <a
                                className="splitting-text-anim-1"
                                data-splitting="chars"
                              >
                                Landscapes
                              </a>
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link legacyBehavior href="/portraits">
                              <a
                                className="splitting-text-anim-1"
                                data-splitting="chars"
                              >
                                Portraits
                              </a>
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link legacyBehavior href="/fitness">
                              <a
                                className="splitting-text-anim-1"
                                data-splitting="chars"
                              >
                                Fitness
                              </a>
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link legacyBehavior href="/fashion">
                              <a
                                className="splitting-text-anim-1"
                                data-splitting="chars"
                              >
                                Fashion
                              </a>
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link legacyBehavior href="/glamour">
                              <a
                                className="splitting-text-anim-1"
                                data-splitting="chars"
                              >
                                Glamour
                              </a>
                            </Link>
                          </li>
                          
                        </ul>
                      </li>
                      {/* <li className="menu-item">
                        <Link legacyBehavior href="/workshops">
                          <a
                            className="splitting-text-anim-2"
                            data-splitting="chars"
                          >
                            Workshops
                          </a>
                        </Link>
                      </li> */}

                      
                      <li className="menu-item">
                        <Link legacyBehavior href="/get-in-touch">
                          <a
                            className="splitting-text-anim-2"
                            data-splitting="chars"
                          >
                            Get in touch
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* social */}
          <div className="menu-social-links">
            <a
              href="https://instagram.com/socreativephoto"
              target="blank"
              className="scrolla-element-anim-1"
              title="Instagram"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/socreativephoto"
              target="blank"
              className="scrolla-element-anim-1"
              title="Facebook"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/socreativephoto"
              target="blank"
              className="scrolla-element-anim-1"
              title="Twitter"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
