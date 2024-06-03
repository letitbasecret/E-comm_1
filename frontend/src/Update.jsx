import { useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

// import React from 'react'
Header;
function Update() {
  const history = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      history("/register");
    }
  }, []);
  return (
    <div>
      <Header /> Update{" "}
    </div>
  );
}

export default Update;
