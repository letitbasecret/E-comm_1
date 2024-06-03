import { useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

// import React from 'react'

function Login() {
  const history = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history("/add");
    }
  }, []);
  return (
    <div>
      <Header /> Login{" "}
    </div>
  );
}

export default Login;
