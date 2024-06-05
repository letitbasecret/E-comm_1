import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { Table } from "react-bootstrap";

export default function Search() {
  const history = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      history("/register");
    }
  }, []);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    let result = await fetch("http://127.0.0.1:8000/api/list");
    result = await result.json();
    setData(result);
  }
  async function search(data2) {
    let result = await fetch("http://127.0.0.1:8000/api/search/" + data2);
    result = await result.json();
    console.warn(result);
    setData2(result);
  }

  console.warn("data", data);

  return (
    <>
      <Header />
      <div className="col-lg-6 offset-lg-2 m-5">
        <input
          type="text"
          className="form-control m-3"
          onChange={(e) => search(e.target.value)}
          placeholder="serchProduct"
        />
      </div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data2.map((item, index) => (
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
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
