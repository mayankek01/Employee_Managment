import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {
  const [empData, setEmpData] = useState([]);
  const navigate = useNavigate();

  const loadDetail = (id) => {
    navigate("/employee/detail/" + id);
  };

  const loadEdit = (id) => {
    navigate("/employee/edit/" + id);
  };

  const removeFunction = async (id) => {
    if(window.confirm('Do you want to remove')){
    const res = await fetch("http://localhost:8000/employee/"+id, {
      method: "DELETE",
    });
    alert(" deletion successfull");
    window.location.reload();
  };
  }

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(" http://localhost:8000/employee");
      const data = await res.json();
      console.log("raw Data", data);
      setEmpData(data);
    }
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee Listing</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/employee/create" className="btn btn-success">
              Add New(+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                    <a
                      onClick={() => {
                        loadEdit(item.id);
                      }}
                      className="btn btn-success"
                    >
                      Edit
                    </a>

                    <a
                      onClick={() => {
                        removeFunction(item.id);
                      }}
                      className="btn btn-danger"
                    >
                      Remove
                    </a>

                    <a
                      onClick={() => {
                        loadDetail(item.id);
                      }}
                      className="btn btn-success"
                    >
                      Details
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpListing;
