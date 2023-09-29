import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CarCard from "../core/components/CarCard";
import { Card } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const AllCarsBrand = () => {
    const location = useLocation();
    const marque = location.state?.marque;
    console.log("marque: ", marque);
	const { idMarque } = useParams();
	// console.log("idMarque: ", idMarque);
	const [carBrand, setCarBrand] = useState([]);

	useEffect(() => {
		axios.get("https://formation.inow.fr/demo/api/v1/cars")
			.then((resp) => {
				let allCars = resp?.data;
				console.log("allCars: ", allCars);
				console.log("idMarque: ", idMarque);
				let filteredCars = allCars.filter((car) => car.brandID == idMarque);
				console.log("filteredCars: ", filteredCars);
				setCarBrand(filteredCars);
			})
			.catch((err) => {
				alert(err.message);
			});
	}, []);

	// console.log(carBrand, "carBrand");
	return (
		<div className="d-flex flex-wrap justify-content-start p-auto">
			{carBrand.map((car, key) => {
                console.log(car.dateOfCirculation, "dateOfCirculation");
				return (
					<Card className="m-4" >
						<Card.Body>
							<Card.Title>{car.model}</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">
								{marque ? marque : "marque indisponible"}
							</Card.Subtitle>
							<Card.Text>
								Mise en circulation : {car.dateOfCirculation.split("T")[0]}
								<br />
								Prix : {car.price} €
							</Card.Text>
						</Card.Body>
					</Card>
				);
			})}
		</div>
	);
};

export default AllCarsBrand;
