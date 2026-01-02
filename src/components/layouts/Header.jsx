import { Container, Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";
import logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";

const sections = ["home", "about", "menu", "shop", "blog", "contact"];

const Header = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // sticky navbar
      setNav(window.scrollY > 100);

      // scrollspy logic
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
    handleScroll(); // run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <Navbar expand="lg" className={nav ? "sticky" : "navbar"}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" height={70} className="logo-fluid" />
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              {sections.map((sec) => (
                <Nav.Link
                  key={sec}
                  href={`#${sec}`}
                  className={activeSection === sec ? "active" : ""}
                >
                  {sec}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
