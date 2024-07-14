import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function ChangePassword() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [customer, setCustomer] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:9999/customers/${id}`)
      .then((res) => {
        setCustomer(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === "" && formData.confirmPassword === "") {
      alert("Bạn phải điền mật khẩu !!");
      return;
    }
    if (formData.password === formData.confirmPassword) {
      const updatedCustomer = { ...customer, password: formData.password };

      axios
        .put(`http://localhost:9999/customers/${id}`, updatedCustomer)
        .then((res) => {
          setCustomer(res.data);
          alert("Đổi mật khẩu thành công");
          navigate(`/profile/${id}`);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Mật khẩu không trùng nhau");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        minHeight: "60vh",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Đổi mật khẩu</h1>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Nhập mật khẩu mới</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Xác nhận mật khẩu</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
          </Form.Group>
          <Button
            style={{ marginTop: "20px", marginLeft: "40%", width: "20%" }}
            variant="primary"
            type="submit"
          >
            Đổi mật khẩu
          </Button>
        </Form>
      </Container>
    </div>
  );
}
