import axios from "axios";
import React, { useEffect, useState } from "react";
import AlertConfirm from "../core/components/AlertConfirm";
import { Link } from "react-router-dom";

const CarAdmin = () => {
	const [cars, setCars] = useState([]);
	const [brands, setBrands] = useState([]);
	const [carsWithBrands, setCarsWithBrands] = useState([]);
	const [showAlert, setShowAlert] = useState(false);
	const [selectedCarId, setSelectedCarId] = useState(null);

	const handleDelete = async(id) => {
		try {
			await axios.delete(`https://formation.inow.fr/demo/api/v1/cars/${id}`)
			console.log(`return voiture id: ${id} Supprimée`);
			setShowAlert(false)
			getCars()
		} catch (error) {
			console.log(error, "error");
			return error
		}
	}

	const getCars = async () => {
		await axios.get("https://formation.inow.fr/demo/api/v1/cars")
			.then((resp) => {
				setCars(resp?.data);
				console.log(cars, "cars");
				return resp?.data;
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	const getBrands = async () => {
		await axios.get("https://formation.inow.fr/demo/api/v1/brands")
			.then((resp) => {
				setBrands(resp?.data);
				console.log(brands, "brands");
				return resp?.data;
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	useEffect(() => {
		getBrands();
		getCars();
	}, []);

	useEffect(() => {
		setCarsWithBrands(
			cars.map((car) => {
				const correspondingBrand = brands.find((brand) => brand.id === car.brandID);
				return {
					...car,
					brand: correspondingBrand ? correspondingBrand.name : "Unknown",
				};
			})
		);
	}, [cars, brands]);

	const handleAlertShow = (id) => {
		setSelectedCarId(id);
		setShowAlert(true);
	};

	return (
		<div className="container">
			{showAlert && <AlertConfirm fonctionToLaunch={() => handleDelete(selectedCarId)} />}
			<div className="mt-5">
				<table className="table">
					<thead>
						<tr>
							<th>Modèle</th>
							<th>marque</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{carsWithBrands.map((car, key) => (
							<tr key={key}>
								<td>{`${car.model}`}</td>
								<td>{car.brand}</td>
								<td>
									<Link to={`/cars/edit/${car.id}`} className="btn btn-primary" size="lg">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-pen"
											viewBox="0 0 16 16"
										>
											<path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
										</svg>
									</Link>

									<button
										className="btn btn-danger"
										onClick={() => {
											handleAlertShow(car.id)
										}}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-trash"
											viewBox="0 0 16 16"
										>
											<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
											<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
										</svg>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className='text-center m-5'>
        		<Link to={"/cars/creation"} className="btn btn-warning" size="lg">Add a car</Link>
      		</div>
		</div>
	);
};

export default CarAdmin;
