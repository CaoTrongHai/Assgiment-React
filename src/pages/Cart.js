// import React, { useState, useEffect } from "react";
// import { Container, Table, Button } from "react-bootstrap";

// const CartPage = () => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     // Lấy thông tin người dùng từ localStorage
//     const storedUser = JSON.parse(localStorage.getItem("currentUser"));
//     if (storedUser) {
//       setCurrentUser(storedUser);
//       // Lấy giỏ hàng từ localStorage
//       const storedCartItems =
//         JSON.parse(localStorage.getItem(`cartItems_${storedUser.id}`)) || [];
//       setCartItems(storedCartItems);
//     }
//   }, []);

//   const handleRemoveFromCart = (productId) => {
//     // Xóa sản phẩm khỏi giỏ hàng
//     const updatedCartItems = cartItems.filter(
//       (item) => item.productId !== productId
//     );
//     // Cập nhật giỏ hàng mới vào localStorage
//     localStorage.setItem(
//       `cartItems_${currentUser.id}`,
//       JSON.stringify(updatedCartItems)
//     );
//     // Cập nhật state để cập nhật giao diện
//     setCartItems(updatedCartItems);
//   };

//   const handleCheckout = () => {
//     // Xử lý thanh toán, ví dụ chuyển sang trang thanh toán
//     alert("Đang chuyển sang trang thanh toán...");
//   };

//   return (
//     <Container>
//       <h2
//         style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}
//       >
//         Giỏ hàng của bạn
//       </h2>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Tên sản phẩm</th>
//             <th>Giá</th>
//             <th>Số lượng</th>
//             <th>Thành tiền</th>
//             <th>Thao tác</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cartItems.map((item, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{item.name}</td>
//               <td>
//                 {item.price} {item.currency}
//               </td>
//               <td>{item.quantity}</td>
//               <td>
//                 {item.price * item.quantity} {item.currency}
//               </td>
//               <td>
//                 <Button
//                   variant="danger"
//                   onClick={() => handleRemoveFromCart(item.productId)}
//                 >
//                   Xóa
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//       <div style={{ textAlign: "right", marginTop: "20px" }}>
//         <Button variant="primary" onClick={handleCheckout}>
//           Thanh toán
//         </Button>
//       </div>
//     </Container>
//   );
// };

// export default CartPage;

import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";

const CartPage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Lấy thông tin người dùng từ localStorage
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setCurrentUser(storedUser);
      // Lấy giỏ hàng từ localStorage
      const storedCartItems =
        JSON.parse(localStorage.getItem(`cartItems_${storedUser.id}`)) || [];
      setCartItems(storedCartItems);
      // Tính tổng giá trị giỏ hàng
      calculateTotalPrice(storedCartItems);
    }
  }, []);

  const calculateTotalPrice = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  };

  const handleRemoveFromCart = (productId) => {
    // Xóa sản phẩm khỏi giỏ hàng
    const updatedCartItems = cartItems.filter(
      (item) => item.productId !== productId
    );
    // Cập nhật giỏ hàng mới vào localStorage
    localStorage.setItem(
      `cartItems_${currentUser.id}`,
      JSON.stringify(updatedCartItems)
    );
    // Cập nhật state để cập nhật giao diện
    setCartItems(updatedCartItems);
    // Tính lại tổng giá trị giỏ hàng sau khi xóa
    calculateTotalPrice(updatedCartItems);
  };

  const handleCheckout = () => {
    // Xử lý thanh toán, ví dụ chuyển sang trang thanh toán
    alert("Đang chuyển sang trang thanh toán...");
  };

  return (
    <Container>
      <h2
        style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}
      >
        Giỏ hàng của bạn
      </h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>
                {item.price} {item.currency}
              </td>
              <td>{item.quantity}</td>
              <td>
                {item.price * item.quantity} {item.currency}
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleRemoveFromCart(item.productId)}
                >
                  Xóa
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div style={{ textAlign: "right", marginTop: "20px" }}>
        <h4>Tổng tiền: {totalPrice} VNĐ</h4>
        <Button variant="primary" onClick={handleCheckout}>
          Thanh toán
        </Button>
      </div>
    </Container>
  );
};

export default CartPage;

