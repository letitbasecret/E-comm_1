import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./Header";
import AddProduct from "./AddProduct";
import Update from "./Update";
import Register from "./Register";
import Login from "./Login";
import Search from "./Search";
import "./App.css";
import List from "./List";
// import Protected from "./Protected";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<AddProduct />} />
          <Route path="/list" element={<List />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
