import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  // 상품 데이터 정의
  const products = [
    {
      id: 1,
      name: "멋진 바지",
      price: 20000,
      options: [28, 30, 32],
      likes: 100,
    },
    {
      id: 2,
      name: "멋진 셔츠",
      price: 10000,
      options: ["small", "medium", "large"],
      likes: 200,
    },
    {
      id: 3,
      name: "멋진 신발",
      price: 30000,
      options: [230, 240, 250, 260, 270],
      likes: 300,
    },
  ];

  // 가격순으로 정렬 버튼 클릭 시 쿼리 파라미터 변경
  const handleSortClick = () => {
    setSearchParams({ sort: "price" });
  };

  return (
    <>
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>
        <button onClick={handleSortClick}>가격순으로 정렬</button>
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
