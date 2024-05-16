import { Button, Container, Row, Col, Dropdown } from "react-bootstrap";
import "./ProductDetail.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container className="ProductDetail">
      <Row>
        <Col>
          <img src={product?.img} />
        </Col>
        <Col className="detail-info">
          <span className="detail-title">{product?.title}</span>
          <span className="detail-price">
            ₩ {product?.price.toLocaleString()}
          </span>
          <span className="detail-choice">{product?.choice}</span>
          <Dropdown className="dropdown">
            <Dropdown.Toggle id="dropdown-basic" className="dropdown-select">
              옵션 선택
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="dark">구매하기</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
