import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmpListing from "./EmpListing";
import EmpDetails from "./EmpDetails";
import EmpEdit from "./EmpEdit";
import EmpCreate from "./EmpCreate";

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Operation</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpListing/>} />
          <Route path="/employee/create" element={<EmpCreate/>} />
          <Route path="/employee/detail/:empid" element={<EmpDetails/>} />
          <Route path="/employee/edit/:empid" element={<EmpEdit/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
