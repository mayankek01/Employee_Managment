import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const EmpCreate = () => {
    const[id,idChange] = useState("")
    const[name,nameChange] = useState("")
    const[email,emailChange] = useState("")
    const[phone,phoneChange] = useState("")
    const[active,activeChange] = useState(true)
    const navigate = useNavigate();

   const handleSubmit= async(e)=>{
        e.preventDefault();
        const empData={name,email,phone,active};

            const res = await fetch("http://localhost:8000/employee",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify(empData)
                
            })
            alert("sucessfull");
            navigate('/')
    }

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handleSubmit}>
                <div  className='card' style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2>Employee Create</h2>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="id">ID</label>
                                        <input required value={id} disabled="disabled" type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input required value={name} onChange={e=>nameChange(e.target.value)} type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input required value={email} onChange={e=>emailChange(e.target.value)} type="email" className='form-control' />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input required value={phone} onChange={e=>phoneChange(e.target.value)} type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-check">
                                        <input checked={active} onChange={e=>activeChange(e.target.checked)} type="checkbox" className='form-check-input' />
                                        <label htmlFor="active" className='form-check-label'>Is Active</label>
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <button className="btn btn-success" type='submit'>Save</button>
                                        <Link to="/" className='btn btn-danger'>Back</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default EmpCreate
