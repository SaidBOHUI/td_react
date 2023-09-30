import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const CarCard = ({key, car}) => {
    console.log(car, "car2");
  return (
    <Card className='col-2 m-4'>
      <Card.Body>
        <Card.Title>{car.model}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{car.brand ? car.brand : "marque indisponible"}</Card.Subtitle>
        <Card.Text>
            Mise en circulation : {car?.dateOfCirculation?.split[0]}<br/>
            Prix : {car.price} €
        </Card.Text>
        <Link to={`/details/${car.model}`} className="btn btn-primary">Voir les autres voitures de {car.brand}</Link>
      </Card.Body>
    </Card>
  )
}

export default CarCard