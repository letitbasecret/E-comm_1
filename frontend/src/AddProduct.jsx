import { useEffect, useState } from "react";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  async function AddProduct(e) {
    e.preventDefault();
    console.warn(name, price, description, email, file);
    let item = { name, price, description, email, file };
    let result = await fetch("http://127.0.0.1:8000/api/add", {
      method: "post",
      headers: {
        "content-type": "zpplication/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    console.warn(result);
    history("/list");
    alert("Data have been saved");
  }

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <input
          type="text"
          name="name"
          placeholder="name"
          className="form-control m-5"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          className="form-control m-5"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="price"
          placeholder="price"
          className="form-control m-5"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          className="form-control m-5"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="file"
          name="file"
          placeholder="file"
          className="form-control m-5"
          onChange={(e) => setFile(e.target.value)}
        />
        <button className="btn btn-primary" onClick={AddProduct}>
          AddProduct
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
