import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [customers, setCustomers] = useState([]);

  // Fetch customers data from API on component mount
  useEffect(() => {
    axios
      .get(`http://localhost:9999/customers`)
      .then((res) => {
        setCustomers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const customer = customers.find(
      (customer) =>
        customer.username === username && customer.password === password
    );

    if (customer) {
      // Save customer data to localStorage
      const { id, name, email, phone, address, username } = customer;
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ id, name, email, phone, address, username })
      );
      // Redirect to home page or desired route
      window.location.href = "/";
    } else {
      alert("Sai tài khoản hoặc mật khẩu");
    }
  };

  
  return (
    <div
      style={{
        backgroundImage: `url(https://png.pngtree.com/background/20230607/original/pngtree-various-smartphones-arranged-on-a-table-picture-image_2903291.jpg)`,
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="bg-white p-5 rounded shadow">
              <h2 className="text-center mb-4">Đăng nhập</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                  <i class="bi bi-person"></i>
                  <Form.Label>Tài khoản</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập tài khoản"
                    onChange={handleUsernameChange}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <i class="bi bi-key-fill"></i>
                  <Form.Label>Mật khẩu</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Nhập mật khẩu"
                    onChange={handlePasswordChange}
                  />
                </Form.Group>

                <Button
                  style={{ marginTop: "10px" }}
                  variant="primary"
                  type="submit"
                  block
                >
                  Đăng nhập
                </Button>
              </Form>

              <div className="text-center mt-3">
                <p>
                  Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
