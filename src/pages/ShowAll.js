import axios from 'axios';
import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { useState ,useRef ,useEffect ,useParams} from 'react';


export default function ShowAll() {

  const [batteries,setbatteries]=useState([]);
  


   useEffect(()=>{
        loadBatteries(); 

    },[]);

    const loadBatteries=async ()=>{
        const result= await axios.get("http://localhost:8080/api/v1/battery/getall")
        setbatteries(result.data.content)
    }

    const deleteBattery=async (batteryId)=>{
      await axios.delete(`http://localhost:8080/api/v1/battery?batteryId=${batteryId}`)
      loadBatteries()
    }

   


  return (
    <div className='container py-4'>
          <table className="table border shadow text-center striped bordered hover">
      <thead>
        <tr>
          <th>Battery ID</th>
          <th>Battery Name</th>
          <th>Post Code</th>
          <th>Watt Capacity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
            batteries.map((battery)=>(
                <tr>
                <td scope='row' key={battery.batteryId}>{battery.batteryId}</td>
                <td>{battery.name}</td>
                <td>{battery.postCode}</td>
                <td>{battery. wattCapacity}</td>
                <td>
                    <Link className='btn btn-primary mx-2'
                    to={`/editbattery/${battery.batteryId}`}

                    
                    >Edit</Link>
                    <Button 
                    className="btn btn-danger mx-2"
                    onClick={()=>deleteBattery(battery.batteryId)}
                    >Delete</Button>
                </td>
              </tr>


            ))
        }
      


       
        
      </tbody>
    </table>
    </div>
  )
}
