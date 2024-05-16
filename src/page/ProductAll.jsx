/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  let [error, setError] = useState("");

  const getProducts = async () => {
    try {
      let searchQuery = query.get("q") || "";
      let url = `http://localhost:5000/products?q=${searchQuery}`;
      let response = await fetch(url);
      let data = await response.json();

      if (data.length < 1) {
        if (searchQuery !== "")
          setError(`${searchQuery}와 일치하는 상품이 없습니다.`);
        else throw new Error("결과가 없습니다.");
      }

      setProductList(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getProducts();

    return () => {
      setError(""); // 컴포넌트가 언마운트될 때 에러 상태 초기화
    };
  }, [query]);

  return (
    <div>
      <Container>
        {error ? (
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        ) : (
          <Row>
            {productList.length > 0 &&
              productList.map((menu) => (
                <Col lg={3} key={menu.id}>
                  <ProductCard item={menu} />
                </Col>
              ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ProductAll;
