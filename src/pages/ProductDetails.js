import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Row, Col, Alert } from "react-bootstrap";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [currentUser, setCurrentUser] = useState(null); // State to store user information
  const navigation = useNavigate();

  // Fetch product details based on ID
  useEffect(() => {
    axios
      .get(`http://localhost:9999/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // Load user and cart information from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setCurrentUser(storedUser);
      const storedCartItems =
        JSON.parse(localStorage.getItem(`cartItems_${storedUser.id}`)) || [];
      setCartItems(storedCartItems);
    }
  }, []);

  // Handle adding product to cart
  const handleAddToCart = () => {
    if (!currentUser) {
      alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng.");
      return;
    }

    const cartItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      currency: product.currency,
      quantity: 1,
    };

    const storedCartItems =
      JSON.parse(localStorage.getItem(`cartItems_${currentUser.id}`)) || [];

    const existingItem = storedCartItems.find(
      (item) => item.productId === cartItem.productId
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      storedCartItems.push(cartItem);
    }

    localStorage.setItem(
      `cartItems_${currentUser.id}`,
      JSON.stringify(storedCartItems)
    );

    setCartItems(storedCartItems);
    alert("Đã thêm sản phẩm vào giỏ hàng!");
  };

  return (
    <div>
      <Container>
        <h2
          style={{
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          {product.name}
        </h2>
        <hr />
        <Row>
          <Col sm={5} style={{ textAlign: "center" }}>
            <img
              style={{ height: "300px", width: "300px", marginBottom: "10px" }}
              src={product.image}
              alt={product.name}
            />
            <br />
            <h4 style={{ color: "red", marginLeft: "10px" }}>
              <i className="bi bi-tag"></i> Giá: {product.price}{" "}
              {product.currency}
            </h4>
            <br />
            <Button variant="danger" onClick={handleAddToCart}>
              <i style={{ marginRight: "5px" }} className="bi bi-basket"></i>
              Thêm vào giỏ hàng
            </Button>
          </Col>
          <Col sm={7}>
            <Alert>
              <h4>Thông số kĩ thuật </h4>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-window-fullscreen"></i>{" "}
                  <strong>Màn hình:</strong> {product.display}
                </li>
                <li>
                  <i className="bi bi-cpu"></i> <strong>Bộ vi xử lý:</strong>{" "}
                  {product.processor}
                </li>
                <li>
                  <i className="bi bi-memory"></i> <strong>RAM:</strong>{" "}
                  {product.ram}
                </li>
                <li>
                  <i className="bi bi-sd-card"></i>{" "}
                  <strong>Bộ nhớ trong:</strong> {product.storage}
                </li>
                <li>
                  <i className="bi bi-battery-full"></i> <strong>Pin:</strong>{" "}
                  {product.battery}
                </li>
                <li>
                  <i className="bi bi-camera"></i> <strong>Camera:</strong>{" "}
                  {product.camera}
                </li>
                <li>
                  <i className="bi bi-apple"></i> <strong>OS:</strong>{" "}
                  {product.os}
                </li>
                <li>
                  <i className="bi bi-calendar-check"></i>{" "}
                  <strong>Release Date:</strong> {product.release_date}
                </li>
                <li>
                  <i className="bi bi-star-fill"></i> <strong>Rating</strong>{" "}
                  {product.ratings}
                </li>
              </ul>
            </Alert>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
