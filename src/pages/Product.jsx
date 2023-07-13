import React from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  console.log(id);

  // 상품 데이터 정의
  const productData = {
    1: {
      name: "멋진 바지",
      price: 20000,
      options: [28, 30, 32],
      likes: 100,
    },
    2: {
      name: "멋진 셔츠",
      price: 10000,
      options: ["small", "medium", "large"],
      likes: 200,
    },
    3: {
      name: "멋진 신발",
      price: 30000,
      options: [230, 240, 250, 260, 270],
      likes: 300,
    },
  };

  // 선택된 상품 정보 가져오기
  const selectedProduct = productData[id];

  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#068FFF",
            }}
          >
            <h3>{selectedProduct.name}</h3>
          </div>
          <div>
            {/* 상품 정보 표시 */}
            <h3>상품명: {selectedProduct.name}</h3>
            <h3>가격: {selectedProduct.price}원</h3>
            <h3>좋아요: {selectedProduct.likes}개</h3>
            <h3>구매옵션</h3>
            <select
              style={{
                width: "100px",
              }}
            >
              {/* 옵션 목록 표시 */}
              {selectedProduct.options.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
