import React from "react";
{/* importation de nos composants de boostrap */}

import Carousel from 'react-bootstrap/Carousel';
{/* importation de nos images */}

import image1 from '../Assets/1.jpg';
import image2 from '../Assets/2.jpg';
import image3 from '../Assets/3.jpg';
{/* function Carousell */}

function Carousell(){
    return (
        <div>
            <h1 style={{textAlign : "center", color : "red"}}>Hello JSX</h1>
            <Carousel>
      <Carousel.Item>
        {/* insertion de nos images à l'aide du taget img */}

        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )   
}
export default Carousell;
