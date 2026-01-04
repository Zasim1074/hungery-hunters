import React, { useEffect } from "react";
import {
  Container,
  Nav,
  Navbar,
  Table,
  Button,
  Row,
  Col,
  Card,
  Alert,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import {
  FaMinus,
  FaPlus,
  FaTrash,
  FaExclamationTriangle,
} from "react-icons/fa";
import Footer from "../../components/layouts/Footer";

const Cart = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = "#F7EBDB";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#F7EBDB",
        minHeight: "100vh",
        color: "#333",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header>
        <Navbar
          expand="lg"
          className="navbar py-1 shadow-sm"
          fixed="top"
          style={{ backgroundColor: "#A52C30" }}
          variant="dark"
        >
          <Container>
            <Navbar.Brand
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            >
              <img src={logo} alt="logo" height={75} className="logo-fluid" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                <Nav.Link className="active" onClick={() => navigate("/cart")}>
                  Cart (1)
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      {/* Main Content */}
      <section className="cart_section pt-5 mt-5 pb-5 flex-grow-1">
        <Container className="mt-4">
          {/* DELIVERY UNAVAILABLE MESSAGE */}
          <Alert
            variant="danger"
            className="d-flex align-items-center shadow-sm border-0 mb-4"
            style={{ backgroundColor: "#f8d7da", color: "#842029" }}
          >
            <FaExclamationTriangle className="me-3 fs-4" />
            <div>
              <strong className="d-block">Delivery Notice</strong>
              Sorry for the inconvenience, Inline Delivery is not available at
              this time. Please select <strong>Pick-up</strong>.
            </div>
          </Alert>

          <h2
            className="mb-4 pb-2 fw-bold"
            style={{ borderBottom: "2px solid #e0d4c3" }}
          >
            Your Shopping Cart
          </h2>

          <Row>
            <Col lg={8}>
              <div className="table-responsive rounded shadow-sm bg-white p-3 border">
                <Table hover className="align-middle mb-0">
                  <thead
                    className="text-uppercase small fw-bold"
                    style={{ backgroundColor: "#f8f9fa" }}
                  >
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=100&auto=format&fit=crop"
                            alt="food"
                            className="rounded me-3 shadow-sm"
                            style={{
                              width: "70px",
                              height: "70px",
                              objectFit: "cover",
                            }}
                          />
                          <div>
                            <p className="mb-0 fw-bold text-dark">
                              Hunter Burger
                            </p>
                            <small className="text-muted">Extra Cheese</small>
                          </div>
                        </div>
                      </td>
                      <td className="fw-bold">$15.00</td>
                      <td>
                        <div
                          className="d-flex align-items-center border rounded-pill px-2 py-1 bg-light"
                          style={{ width: "fit-content" }}
                        >
                          <Button
                            variant="link"
                            size="sm"
                            className="text-dark p-0"
                          >
                            <FaMinus size={10} />
                          </Button>
                          <span className="mx-3 fw-bold">1</span>
                          <Button
                            variant="link"
                            size="sm"
                            className="text-dark p-0"
                          >
                            <FaPlus size={10} />
                          </Button>
                        </div>
                      </td>
                      <td className="fw-bold text-danger">$15.00</td>
                      <td>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          className="rounded-circle border-0"
                        >
                          <FaTrash />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>

            <Col lg={4} className="mt-4 mt-lg-0">
              <Card
                className="border-0 shadow-sm"
                style={{ backgroundColor: "#2d2d2d", color: "#fff" }}
              >
                <Card.Body className="p-4">
                  <h4 className="mb-4 fw-bold text-warning">Order Summary</h4>
                  <div className="d-flex justify-content-between mb-2">
                    <span style={{ color: "#bbb" }}>Subtotal</span>
                    <span>$15.00</span>
                  </div>
                  <div className="d-flex justify-content-between mb-4 border-bottom border-secondary pb-3">
                    <span style={{ color: "#bbb" }}>Tax</span>
                    <span>$1.20</span>
                  </div>
                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="fw-bold">Total</h5>
                    <h5 className="fw-bold text-warning fs-3">$16.20</h5>
                  </div>
                  <Button
                    variant="warning"
                    className="w-100 fw-bold py-3 text-uppercase shadow-sm"
                    style={{ letterSpacing: "1px" }}
                  >
                    Proceed to Checkout
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <footer
        className="mt-auto"
        style={{
          backgroundColor: "#ffffff",
          borderTop: "1px solid #e0d4c3",
          paddingTop: "0px",
          paddingBottom: "0px",
        }}
      >
        <Footer />
      </footer>
    </div>
  );
};

export default Cart;
