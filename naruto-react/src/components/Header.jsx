import Search from "./Search";
import "./translate";
import "./translate.css";

const Header = () => {
  // function googleTranslateElementInit() {
  //   new google.translate.TranslateElement(
  //     { pageLanguage: "en" },
  //     "google_translate_element"
  //   );
  // }
  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light">
        <a
          className="navbar-brand brand1 ml-4"
          href="#"
          style={{ color: "beige" }}
        >
          Naruto
        </a>

        <Search />

        <button
          className="navbar-toggler menu-btn"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active mx-4">
              <a
                className="nav-link link"
                href="./index.html"
                style={{ color: "beige" }}
              >
                Home
              </a>
            </li>
            <li className="nav-item mx-4">
              <a
                className="link nav-link"
                href="./about.html"
                style={{ color: "beige" }}
              >
                About
              </a>
            </li>
            <li className="nav-item mx-4">
              <a
                className="link nav-link"
                href="./contact.html"
                style={{ color: "beige" }}
              >
                Contact
              </a>
            </li>
            <li>
              <div>
                <button className="toggle-mode darkmodebutton" id="toggler">
                  🌙 Dark
                </button>
              </div>
            </li>
            {/* </ul> */}
            {/* </div> */}
            {/* fix translate js */}
            {/* <li className="nav-item mx-4">
              <div id="google_translate_element"></div>
              {/* <script src="./translate.js"></script>
              <script type="text/javascript">
                {googleTranslateElementInit()}
              </script>
            </li> */}
            {/* <Translate /> */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
