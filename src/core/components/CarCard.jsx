import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const CarCard = ({key, car}) => {
    console.log(car, "car2");
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{car.model}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{car.brand ? car.brand : "marque indisponible"}</Card.Subtitle>
        <Card.Text>
            Mise en circulation : {car.dateOfCirculation.split('T')[0]}<br/>
            Prix : {car.price} €
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link> */}
        {/* <Card.Link href="#">Another Link</Card.Link> */}
        <Link to={`/details/${car.model}`} className="btn btn-primary">Voir les autres voitures de {car.brand}</Link>
      </Card.Body>
    </Card>
  )
}

export default CarCard