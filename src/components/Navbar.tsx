"use client";
import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useCart } from "../context/cartContext";

const NavigationBar = () => {
  const { cart } = useCart(); 
  const cartCount = cart.length;

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/">ShopEase</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/products" passHref legacyBehavior>
              <Nav.Link>Products</Nav.Link>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <Nav.Link>About Us</Nav.Link>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <Nav.Link>Contact Us</Nav.Link>
            </Link>

            <Link href="/cart" passHref legacyBehavior>
              <Nav.Link>
                🛒 Cart{" "}
                {cartCount > 0 && (
                  <span
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      borderRadius: "50%",
                      padding: "2px 8px",
                      fontSize: "0.8rem",
                      marginLeft: "4px",
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
