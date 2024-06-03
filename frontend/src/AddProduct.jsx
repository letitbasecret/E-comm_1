import { useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

// import React from 'react'

function AddProduct() {
  const history = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      history("/register");
    }
  }, []);
  return (
    <div>
      <Header />
      AddProduct
    </div>
  );
}

export default AddProduct;
