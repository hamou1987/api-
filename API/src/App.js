
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {useEffect,useState} from 'react'

function App() {
const [posterUrl,setPosterUrl]=useState("https://image.tmdb.org/t/p/original/iCi4c4FvVdbaU1t8poH1gvzT6xM.jpg")
const [search,SetSearchValue]=useState('batman')
  useEffect( ()=>{
           fetch(`https://unelmamovie.com/api/v1/s=${search}`)
      .then(response => response.json())
      .then(response => setPosterUrl(response.data[2].poster))
      .catch(err => console.error(err));
  },[])




  return (
    <Carousel>
      
      <Carousel.Item>
        <img
          
          src={posterUrl}
          alt="First slide"
          style={{width:"300px",height:"500px"}}
        />
       
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       
      </Carousel.Item>
     
      </Carousel>
  );
}

export default App;
