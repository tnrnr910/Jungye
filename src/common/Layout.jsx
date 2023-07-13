import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };
  const handleSigninClick = () => {
    navigate("/signin");
  };
  const handleSignupClick = () => {
    navigate("/signup");
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        paddingBottom: "90px",
        boxSizing: "border-box",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#000000",
          color: "white",
        }}
      >
        <div onClick={handleLogoClick}>로고</div>
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <div onClick={handleSigninClick}>로그인</div>
          <div onClick={handleSignupClick}>회원가입</div>
        </div>
      </header>
      <Outlet />
      <footer
        style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#EEEEEE",
          color: "black",
          position: "absolute",
          bottom: 0,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div>문의하기</div>
        <div>SNS 채널들</div>
      </footer>
    </div>
  );
}
