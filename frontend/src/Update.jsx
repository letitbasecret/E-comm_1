import { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate, useParams } from "react-router-dom";

// import React from 'react'
Header;
function Update() {
  const { id } = useParams();
  const history = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      history("/register");
    }
  }, []);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  console.warn(id);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    let result = await fetch("http://127.0.0.1:8000/api/product/" + id, {
      method: "put",
    });
    result = await result.json();
    setData(result);
    setName(result.name);
    setPrice(result.price);
    setDescription(result.description);
  }

  async function editData(id) {
    console.warn(name, price, description);
    let item = { name, price, description };
    let result = await fetch(
      "http://127.0.0.1:8000/api/updateproduct/" + id + "?_method=put",
      {
        method: "post",
        headers: {
          "content-type": "zpplication/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    console.warn(result);
    history("/list");
    alert("Data have been saved");
  }
  return (
    <div>
      <Header />{" "}
      <div className="col-sm-2 offset-sm-2">
        <input
          type="text"
          defaultValue={data.name}
          className="form-controle m-2"
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <input
          type="text"
          defaultValue={data.price}
          className="form-controle m-2"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br></br>
        <input
          type="text"
          defaultValue={data.description}
          className="form-controle m-2"
          onChange={(e) => setDescription(e.target.value)}
        />

        <br></br>
        <button className="btn btn-warning" onClick={() => editData(data.id)}>
          update
        </button>
      </div>
    </div>
  );
}

export default Update;
