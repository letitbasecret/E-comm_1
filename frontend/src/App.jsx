import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import AddProduct from "./AddProduct";
import Update from "./Update";
import Register from "./Register";
import Login from "./Login";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update" element={<Update />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
