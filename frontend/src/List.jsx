import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { Table } from "react-bootstrap";

export default function List() {
  const history = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      history("/register");
    }
  }, []);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    let result = await fetch("http://127.0.0.1:8000/api/list");
    result = await result.json();
    setData(result);
  }

  console.warn("data", data);
  async function delopn(id) {
    let result = await fetch("http://127.0.0.1:8000/api/delete" + id, {
      method: "DELETE",
    });
    result = await result.json();
    console.warn(result);
    fetchData();
  }

  return (
    <div>
      <Header />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Price</th>
            <th>Opration</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>image</td>
              {/* <image
                style={{ width: 100 }}
                scr={"http://127.0.0.1:8000/" + item.file}
              /> */}

              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>
                <button
                  onClick={() => {
                    delopn(item.id);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </button>
                <Link to={"/update/" + item.id}>
                  {" "}
                  <button className="btn btn-warning">Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
