import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddBattery() {

  let nevigate=useNavigate()
  
  const [battery,setBattery]=useState({
    name:"",
    postCode:"",
    wattCapacity:""
  }) 

  const {name,postCode,wattCapacity}=battery

  const onInputChange=(e)=>{
    setBattery({...battery , [e.target.name]:e.target.value});
  }

  const onSubmit= async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/api/v1/battery/",battery)
    nevigate("/showall")
  }


  return (
    <div className='container'>
        <div className='row'>    
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" >
                    <h2 className='text-center m-2 mb-5'>Battery Registration</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="batteryName" className="form-label">Battery Name</label>
                        <input 
                        type={"text"}
                        className="form-control" 
                        name='name' 
                        placeholder="Enter Battery Name"
                        value={name}
                        onChange={(e)=>onInputChange(e)}            
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="postCode" className="form-label">Post Code</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        name="postCode" 
                        placeholder="Enter Post Code"
                        value={postCode}
                        onChange={(e)=>onInputChange(e)}              
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="wattCapacity" className="form-label">Watt Capacity (v)</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        name="wattCapacity" 
                        placeholder="Enter Watt Capacity"
                        value={wattCapacity}
                        onChange={(e)=>onInputChange(e)}           
                        />
                    </div>
                    <div className='text-center' >
                        <button type="submit" className="btn btn-outline-primary ">Submit</button>
                        <Link 
                        type="button" 
                        className="btn btn-outline-danger mx-2"
                        to={"/"}
                        >Cancel</Link>
                    </div>
                    </form>
                </div>
                
            
        </div>
    </div>
  )
}
