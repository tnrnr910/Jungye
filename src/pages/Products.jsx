import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { 정렬맨, 리셋맨 } from "../index";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>
        <button
          onClick={() => {
            dispatch(정렬맨());
          }}
        >
          가격순으로 정렬
        </button>
        <button
          onClick={() => {
            dispatch(리셋맨());
          }}
        >
          초기화
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {products.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <div
                style={{
                  width: "200px",
                  height: "240px",
                  backgroundColor: "#068FFF",
                }}
              >
                <h3>{product.name}</h3>
                <p>가격: {product.price}원</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
