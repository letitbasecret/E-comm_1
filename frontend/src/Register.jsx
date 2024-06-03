// import React from 'react'
// import { useHistory } from "react-router-dom";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Register() {
  const history = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history("/add");
    }
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function signUp(e) {
    e.preventDefault();

    let item = { name, email, password };
    console.warn(item);
    let result = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    console.warn("result", result);
    localStorage.setItem("user-info", JSON.stringify(result));
    history("/add");
  }

  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        {" "}
        <p>User SignUp</p>
        <form>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
          <br />
          <button type="submit" className="btn btn-primary" onClick={signUp}>
            submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
