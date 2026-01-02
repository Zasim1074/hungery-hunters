import { Container, Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";

// ONLY scroll-based sections here
const sections = ["home", "about", "menu", "shop", "blog", "contact"];

const Header = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // sticky navbar
      setNav(window.scrollY > 100);

      // scrollspy
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <Navbar expand="lg" className={nav ? "sticky" : "navbar"}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" height={70} className="logo-fluid" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* Scroll links */}
              {sections.map((sec) => (
                <Nav.Link
                  key={sec}
                  href={`#${sec}`}
                  className={activeSection === sec ? "active" : ""}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </Nav.Link>
              ))}

              {/* Route navigation */}
              <Nav.Link onClick={() => navigate("/cart")}>Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
