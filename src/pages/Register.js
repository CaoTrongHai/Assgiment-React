import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Register() {
  const [customers, setCustomers] = useState([]);
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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    registration_date: Date.now(),
    username: "",
    password: "",
    confirmpassword: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmpassword) {
      const newCustomer = {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        registration_date: formData.registration_date,
        username: formData.username,
        password: formData.password,
      };
      axios
        .post("http://localhost:9999/customers", newCustomer)
        .then((res) => {
          alert("Đăng ký tài khoản thành công");
          setFormData({
            name: "",
            phone: "",
            address: "",
            registration_date: Date.now(),
            username: "",
            password: "",
            confirmpassword: "",
          });
        })
        .catch((error) => {
          console.log(error);
        });
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
              <h2 className="text-center mb-4">Đăng ký tài khoản</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicUserName">
                  <i class="bi bi-person"></i>{" "}
                  <Form.Label>Tài khoản </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập tài khoản"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="formBasicName">
                  <i class="bi bi-person-circle"></i>{" "}
                  <Form.Label>Tên của bạn </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập tên của bạn"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPhone">
                  <i class="bi bi-telephone"></i>{" "}
                  <Form.Label>Số điện thoại </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập số điện thoại"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group controlId="formBasicAddress">
                  <i class="bi bi-house-door"></i>{" "}
                  <Form.Label>Địa chỉ nhận hàng </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập địa chỉ nhận hàng"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <i class="bi bi-key-fill"></i>
                  <Form.Label>Mật khẩu</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Nhập mật khẩu"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <i class="bi bi-key-fill"></i>
                  <Form.Label>Nhập lại mật khẩu</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    value={formData.confirmpassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmpassword: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Button variant="primary" type="submit" block>
                  Đăng ký
                </Button>
              </Form>

              <div className="text-center mt-3">
                <p>
                  Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
