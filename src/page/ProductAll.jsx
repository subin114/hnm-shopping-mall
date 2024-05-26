/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { productAction } from "./../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/reducers/productSlice";

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  let [error, setError] = useState("");

  const dispatch = useDispatch();

  const getProducts = () => {
    try {
      let searchQuery = query.get("q") || "";
      dispatch(fetchProducts(searchQuery));
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
