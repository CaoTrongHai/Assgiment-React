import React, { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
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

  return (
    <Container style={{ marginTop: "50px" }}>
      <Card>
        <Card.Header
          as="h5"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            textAlign: "center",
          }}
        >
          <i class="bi bi-person-circle"></i>Profile
        </Card.Header>
        <Card.Body>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            <div style={{ position: "relative", marginBottom: "10px" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
                alt="Profile"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid #007bff",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
              />
              <div
                style={{ position: "absolute", bottom: "5px", right: "5px" }}
              >
                <Button variant="link" style={{ color: "#007bff" }}>
                  <i className="bi bi-pencil"></i>
                </Button>
              </div>
            </div>
            <Card.Title style={{ textAlign: "center", marginBottom: "15px" }}>
              <i className="bi bi-person-vcard"></i> {customer.name}
            </Card.Title>
          </div>
          <hr />
          <Card.Text style={{ textAlign: "center" }}>
            <div>
              <i className="bi bi-envelope-at"></i> <strong>Email:</strong>{" "}
              {customer.email}
            </div>
            <div>
              <i className="bi bi-telephone"></i> <strong>Phone:</strong>{" "}
              {customer.phone}
            </div>
            <div>
              <i className="bi bi-building-add"></i> <strong>Address:</strong>{" "}
              {customer.address}
            </div>
          </Card.Text>
          <Button
            variant="success"
            onClick={() => navigate(`/editprofile/${id}`)}
            style={{ width: "15%", marginLeft: "42%" }}
          >
            <i class="bi bi-pencil-square"></i> Chỉnh sửa thông tin
          </Button>
          <Button
            onClick={() => navigate(`/changepassword/${id}`)}
            variant="success"
            style={{ width: "15%", marginLeft: "42%", marginTop: "10px" }}
          >
            <i class="bi bi-pass"></i> Đổi mật khẩu
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
