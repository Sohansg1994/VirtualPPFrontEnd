import React, { useEffect } from 'react'
import axios from 'axios';
import { useState ,useRef } from 'react';


export default function SearchBattery() {
    const client = axios.create({
        baseURL: "http://localhost:8080/api/v1/battery"
      });

    const [batteries,setbatteries]=useState([]);
    const [totalWattCapacity,settotalWattCapacity]=useState([]);
    const [averageWattCapacity,setaverageWattCapacity]=useState([]);
    const [sPC,setSPC]=useState('');
    const [ePC,setEPC]=useState('');

    

    const loadBatteries=async(e)=>{
        e.preventDefault();
        await client.get(`?sPC=${sPC} &ePC=${ePC}`).then((response) => {
           setbatteries(response.data.content.batteryDTOList);
           settotalWattCapacity(response.data.content.totalWattCapacity);
           setaverageWattCapacity(response.data.content.averageWattCapacity);
           
         });
    }


    

    const inputRef=useRef();
   

  return (
    <div className='container'>
        <div className='py-4'>
        <div id="inpuHelp" className="form-text">Input relevant post code range <br/></div>
            <form onSubmit={loadBatteries}>
                <div className="input-group mb-3">
                    <input 
                    autoFocus
                    ref={inputRef}
                    type="text" 
                    className="form-control" 
                    placeholder="Start Post Code" 
                    aria-label="sPC"
                    value={sPC}
                    onChange={(e)=>setSPC(e.target.value)}
                    />

                    <span className="input-group-text">-</span>

                    <input
                    autoFocus
                    ref={inputRef}
                    type="text" 
                    className="form-control" 
                    placeholder="End Post Code" 
                    aria-label="ePC"
                    value={ePC}
                    onChange={(e)=>setEPC(e.target.value)}
                    />
                </div >

                <div className="d-grid gap-2 col-6 mx-auto">
    
                    <button 
                    className="btn btn-primary"  
                    type='submit'
                    onClick={()=>inputRef.current.focus()} 
                    >Search
                    </button>
                </div>

            </form>
            <br/>
          
                <table className="table border shadow">
                    <thead>
                        <tr>
                        <th scope="col">Battery Id</th>
                        <th scope="col">Battery Name</th>
                        <th scope="col">Post Code</th>
                        <th scope="col">Watt-Capacity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            batteries.map((battery)=>(
                                <tr> 
                                    <td scope='row' key={battery.batteryId}>{battery.batteryId}</td>
                                    <td>{battery.name}</td>
                                    <td>{battery.postCode}</td>
                                    <td>{battery.wattCapacity}</td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>

                <table className="table border shadow">
                    <thead>
                        <tr>
                        <th scope="col">Total Watt-Capacity</th>
                        <th scope="col">Average Watt-Capacity</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        <tr> 
                            <td scope='row' >{totalWattCapacity}</td>
                            <td>{averageWattCapacity}</td>
                            
                        </tr>
                            
                        
                        
                    </tbody>
                </table>
           

        </div>
    </div>
  )
}
