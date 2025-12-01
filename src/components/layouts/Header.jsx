import { Container, Nav, Navbar } from "react-bootstrap";
import "../../styles/HeaderStyle.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);
  //scroll navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };
  window.addEventListener("scroll", changeValueOnScroll);

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : "navbar"}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
              <img src={logo} alt="logo" className="logo-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            className="navbar-toggler"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="nav-link" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/menu">
                Menu
              </Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/shop">
                Shop
              </Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/cart">
                <div className="cart">
                  <i className="bi bi-bag fs-5">
                    <em className="roundpoint">2</em>
                  </i>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
