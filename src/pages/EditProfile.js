import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProfile() {
  const { id } = useParams();
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:9999/customers/${id}`)
      .then((res) => {
        setCustomer(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:9999/customers/${id}`, customer)
      .then((res) => {
        setCustomer(res.data);
        alert("Cập nhật thông tin cá nhân thành công");
        navigate(`/profile/${id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        minHeight: "60vh",
        padding: "20px",
      }}
    >
      <Container>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          Chỉnh sửa thông tin cá nhân
        </h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Nhập email"
              value={customer.email || ""}
              onChange={(e) =>
                setCustomer({ ...customer, email: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              type="phone"
              placeholder="Nhập số điện thoại"
              value={customer.phone || ""}
              onChange={(e) =>
                setCustomer({ ...customer, phone: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formBasicAddress">
            <Form.Label>Địa chỉ</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập địa chỉ"
              value={customer.address || ""}
              onChange={(e) =>
                setCustomer({ ...customer, address: e.target.value })
              }
            />
          </Form.Group>
          <Button type="submit" variant="primary" style={{ width: "20%", marginLeft: "40%",marginTop: "20px" }}>
            Lưu thông tin
          </Button>
        </Form>
      </Container>
    </div>
  );
}
