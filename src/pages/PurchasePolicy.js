import React from "react";
import { Container, Card, ListGroup, Button } from "react-bootstrap";
export default function PurchasePolicy() {
  return (
    <div>
      <Container style={{ marginTop: "20px" }}>
        <Card>
          <Card.Header as="h2" style={{ backgroundColor: "#f8f9fa" }}>
            Chính Sách Mua Hàng
          </Card.Header>
          <Card.Body>
            <Card.Text>
              Chúng tôi cam kết cung cấp cho khách hàng các sản phẩm chất lượng
              cao cùng dịch vụ chăm sóc khách hàng tận tâm. Dưới đây là chính
              sách mua hàng của chúng tôi:
            </Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h4>1. Chính sách đổi trả</h4>
                <p>
                  Trong vòng 30 ngày kể từ ngày mua hàng, quý khách có thể đổi
                  trả sản phẩm nếu phát hiện lỗi từ nhà sản xuất. Điều kiện đổi
                  trả bao gồm:
                </p>
                <ul>
                  <li>Sản phẩm còn nguyên vẹn, không có dấu hiệu sử dụng.</li>
                  <li>Hộp và bao bì sản phẩm còn nguyên vẹn.</li>
                  <li>Có hóa đơn mua hàng hoặc biên nhận từ cửa hàng.</li>
                </ul>
              </ListGroup.Item>
              <ListGroup.Item>
                <h4>2. Bảo hành sản phẩm</h4>
                <p>
                  Tất cả các sản phẩm đều được bảo hành chính hãng 12 tháng. Quý
                  khách có thể mang sản phẩm đến bất kỳ trung tâm bảo hành nào
                  được ủy quyền để được hỗ trợ.
                </p>
                <ul>
                  <li>Thời gian bảo hành được tính từ ngày mua hàng.</li>
                  <li>
                    Bảo hành không bao gồm các hư hỏng do sử dụng sai cách hoặc
                    tự ý sửa chữa.
                  </li>
                  <li>Vui lòng giữ lại phiếu bảo hành và hóa đơn mua hàng.</li>
                </ul>
              </ListGroup.Item>
              <ListGroup.Item>
                <h4>3. Chính sách vận chuyển</h4>
                <p>
                  Chúng tôi miễn phí vận chuyển cho đơn hàng trên 500,000 VND
                  trong phạm vi nội thành. Đối với các đơn hàng ngoại thành, phí
                  vận chuyển sẽ được tính tùy theo khoảng cách và trọng lượng
                  sản phẩm.
                </p>
                <ul>
                  <li>Thời gian giao hàng dự kiến từ 2-5 ngày làm việc.</li>
                  <li>
                    Đơn hàng sẽ được giao tận nơi theo địa chỉ quý khách cung
                    cấp.
                  </li>
                  <li>
                    Quý khách vui lòng kiểm tra kỹ sản phẩm trước khi nhận hàng.
                  </li>
                </ul>
              </ListGroup.Item>
              <ListGroup.Item>
                <h4>4. Hỗ trợ kỹ thuật</h4>
                <p>
                  Quý khách có thể liên hệ với chúng tôi qua hotline 1900-1234
                  để được hỗ trợ kỹ thuật 24/7. Đội ngũ kỹ thuật của chúng tôi
                  luôn sẵn sàng giải đáp mọi thắc mắc và hỗ trợ quý khách trong
                  quá trình sử dụng sản phẩm.
                </p>
                <ul>
                  <li>Hỗ trợ cài đặt và hướng dẫn sử dụng sản phẩm.</li>
                  <li>Giải đáp các vấn đề kỹ thuật và sự cố phát sinh.</li>
                  <li>Tư vấn nâng cấp và bảo trì sản phẩm.</li>
                </ul>
              </ListGroup.Item>
            </ListGroup>
            <Card.Text className="mt-4">
              Nếu quý khách có bất kỳ câu hỏi hoặc thắc mắc nào, vui lòng liên
              hệ với chúng tôi qua các thông tin sau:
            </Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Hotline:</strong> 0977652003
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Email:</strong> tronghaipdp@gmail.com
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Địa chỉ:</strong> 06B đường Đồng quế , thành phố Hà Tĩnh
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
