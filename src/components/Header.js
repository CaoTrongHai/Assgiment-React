import React, { useEffect, useState } from "react";
import { Nav, Form, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [categories, setCategories] = useState([]);
  const [customerId, setCustomerId] = useState(null);
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setIsLoggedIn(true);
      setCustomerName(currentUser.name);
      setCustomerId(currentUser.id); // Lưu ID của khách hàng từ localStorage vào state
    } else {
      setIsLoggedIn(false);
      setCustomerName("");
      setCustomerId(null);
    }

    axios
      .get("http://localhost:9999/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    setCustomerName("");
    setCustomerId(null);
    window.location.href = "/login";
  };

  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "red" }}>
        <Container>
          <Link to={"/"}>
            <Navbar.Brand>
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="Logo"
                style={{
                  height: "40px",
                  width: "50px",
                  marginTop: "5px",
                  marginLeft: "30px",
                  marginRight: "5px",
                }}
              ></img>
            </Navbar.Brand>
          </Link>
          <Navbar.Brand
            style={{
              color: "white",
              marginRight: "90px",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              letterSpacing: "1px",
              transition: "color 0.3s ease",
            }}
          >
            TrongHai Mobile
          </Navbar.Brand>
          <Form.Control
            type="text"
            placeholder="Nhập tên,điện thoại,... cần tìm"
            style={{ width: "250px", marginRight: "10px" }}
          />
          <i
            style={{ color: "white", marginRight: "30px" }}
            className="bi bi-search"
          ></i>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <i
                className="bi bi-journal-text"
                style={{ color: "white", fontSize: "1.5rem" }}
              ></i>
              <Nav.Link href="/purchasepolicy" style={{ color: "white" }}>
                Chính sách mua hàng
              </Nav.Link>{" "}
              <i
                style={{ color: "white", fontSize: "1.5rem" }}
                className="bi bi-bag-heart"
              ></i>
              <Nav.Link href="/cart" style={{ color: "white" }}>
                Giỏ hàng
              </Nav.Link>{" "}
              {isLoggedIn ? (
                <>
                  <i
                    style={{ color: "white", fontSize: "1.5rem" }}
                    className="bi bi-person"
                  ></i>
                  <Nav.Link
                    href={`/profile/${customerId}`}
                    style={{ color: "white" }}
                  >
                    Hello {customerName}
                  </Nav.Link>{" "}
                  <Nav.Link onClick={handleLogout} style={{ color: "white" }}>
                    Đăng xuất
                  </Nav.Link>{" "}
                </>
              ) : (
                <Nav.Link href="/login" style={{ color: "white" }}>
                  Đăng nhập
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Nav
        className="justify-content-center"
        style={{ backgroundColor: "#424242" }}
      >
        {categories.map((category) => (
          <Nav.Item key={category.id}>
            <Nav.Link style={{ textDecoration: "none", color: "white" }}>
              {category.name}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
}
