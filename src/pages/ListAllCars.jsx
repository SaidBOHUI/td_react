import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CarCard from '../core/components/CarCard';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ListAllCars = () => {
const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("https://formation.inow.fr/demo/api/v1/cars").then(resp => {
      setCars(resp?.data);
      console.log(cars, 'cars');
    }).catch(err => {
        alert(err.message);
    });
}, [])

  return (
    <>
      <div style={{display:'flex', justifyContent:'space-around', margin: '5rem auto'}}>
        {cars.map((car, key) => {
          return (<CarCard key={key} car={car}/>)
        })}
      </div>    
      <Link to={"/cars/creation"} className="btn btn-warning" size="lg">Add a car</Link>

    </>
  )
}

export default ListAllCars