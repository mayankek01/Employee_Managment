import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetails = () => {
  const {empid} = useParams();
  const [empData, setEmpData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8000/employee/"+empid);
      const data = await res.json();
      console.log("raw Data", data);
      setEmpData(data);
      
    }
    fetchData();
  },[]);
return (
  <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee Listing</h2>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
              </tr>
            </thead>
            <tbody>
              {
                <tr key={empData.id}>
                  <td>{empData.id}</td>
                  <td>{empData.name }</td>
                  <td>{empData.email}</td>
                  <td>{empData.phone}</td>
                </tr>
              }
            </tbody>
          </table>
          <Link to="/" className="btn btn-danger">Back to Listing</Link>
        </div>
      </div>
    </div>
  );
};

export default EmpDetails;
