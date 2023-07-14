import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Product() {
  const { id } = useParams();
  console.log(id);

  // 선택된 상품 정보 가져오기
  const products = useSelector((state) => state.products);
  const selectedProduct = products.find((p) => p.id === Number(id));

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
