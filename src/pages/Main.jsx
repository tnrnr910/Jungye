import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  const products = [
    {
      name: "멋진 바지",
      price: 20000,
      options: [28, 30, 32],
      likes: 100,
    },
    {
      name: "멋진 셔츠",
      price: 10000,
      options: ["small", "medium", "large"],
      likes: 200,
    },
    {
      name: "멋진 신발",
      price: 30000,
      options: [230, 240, 250, 260, 270],
      likes: 300,
    },
  ];

  return (
    <>
      {/* main */}
      <main>
        {/* 케러셀 */}
        <section
          style={{
            backgroundColor: "#4E4FEB",
            color: "white",
            height: "300px",
            lineHeight: "300px",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          케러셀
        </section>
        {/* 여름 추천템 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2>🔥 여름 추천템 🔥</h2>
          <Link to="/products">더보기</Link>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                style={{
                  width: "200px",
                  height: "240px",
                  backgroundColor: "#068FFF",
                }}
              >
                <h3>{product.name}</h3>
                <p>가격: {product.price}원</p>
              </div>
            ))}
          </div>
        </section>
        {/* 추가적인 데이터 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2>🔥 세일 상품 🔥</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            {/* 세일 상품 렌더링 */}
          </div>
        </section>
      </main>
    </>
  );
}
