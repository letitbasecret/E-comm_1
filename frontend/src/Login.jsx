import { useEffect, useState } from "react";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function signin(e) {
    e.preventDefault();
    console.warn("data", email, password);
    let item = { email, password };
    let result = await fetch("http://127.0.0.1:8000/api/login", {
      method: "post",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    history("/add");
  }

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          className="form-control mb-3 mt-5"
        />
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="form-control mb-3"
        />
        <button className="btn btn-primary mb-3" onClick={signin}>
          signup
        </button>
      </div>{" "}
    </div>
  );
}

export default Login;
