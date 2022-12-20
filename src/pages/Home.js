import React from 'react'
import AutoSliding from '../Components/AutoSliding';
import favicon from './favicon.png';

export default function Home() {
  return (
    <div>
      <div  className="col-md-6 offset-md-3 border rounded p-4 mt-4  shadow">
      
        <h1 className='text-center m-2 mb-4'><img className=' p-4'src={favicon} alt="Logo" width="130" height="115"/>Virtual Power Plant</h1>
        <h6 className='text-center m-2 mb-5'>Virtual Power Plant System for aggregating distributed power sources into a single cloud based energy provider</h6>
      </div>

    <div class="container text-center  mt-5  ">

      <div  className="row justify-content-around">
        <div  className="col-4 border rounded p-4 mt-4 shadow">
          <h6>A simple system for Virtual Power Plant to maintain battery details and obtain sorted data for a 
           user selected postcode range with average and total wattcapacities.</h6>
        </div>
        <div  className="col-4 border rounded p-5 mt-4 shadow">
          
        </div>
      </div>
      <div className="col-md-8 offset-md-2 border rounded p-4 mt-4  shadow">
      <h2 className=" text-dark">Our Services</h2>
      <AutoSliding/>
      </div>
      
    </div>
     

 
      
     


    </div>
  )
}
