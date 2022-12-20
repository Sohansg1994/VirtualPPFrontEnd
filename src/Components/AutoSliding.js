import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import add from './add.jpg';
import find from './find.jpg';
import update from './update.jpg';
import deleteimg from './deleteimg.jpg';

export default function AutoSliding() {
    return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={add}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 color='black '>Adding Batteries</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={find}
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3 className=" text-white">Get Sorted Data</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={update}
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Update Data </h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={deleteimg}
              alt="delete"
            />
    
            <Carousel.Caption>
              <h3>Remove Batteries</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>


        </Carousel>
      );
}
