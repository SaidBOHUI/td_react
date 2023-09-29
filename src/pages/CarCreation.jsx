import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";


const CarCreation = () => {
	const [cars, setCars] = useState([]);
	const [brands, setBrands] = useState([]);
	const [carToAdd, setCarToAdd] = useState({id: null, model: null, price: null, dateOfCirculation: null, brand:null, brandId: null});
    const navigate = useNavigate();

	const generateNumericId = (min, max) => {
		let excludeIds = cars?.map((car) => car.id);
		let uniqueId;

		do {
			uniqueId = Math.floor(Math.random() * (max - min + 1)) + min;
		} while (excludeIds.includes(uniqueId));

		return uniqueId;
	};

	const getCars = async() => {
		await axios.get("https://formation.inow.fr/demo/api/v1/cars")
		.then((resp) => {
			setCars(resp?.data);
			console.log(cars, "cars");
		})
		.catch((err) => {
			alert(err.message);
		});
	};

	const getBrands = async() => {
		await axios.get("https://formation.inow.fr/demo/api/v1/brands")
		.then((resp) => {
			setBrands(resp?.data);
			console.log(brands, "brands");
		})
		.catch((err) => {
			alert(err.message);
		});
	};

    const submit = async(e) => {
		try {
			e.preventDefault();
			let obj = {...carToAdd}
			// console.log("obj IN submit: ", obj);
			obj.id = generateNumericId(1, 1000)
			let idBrand = brands.find((brand => brand.name === obj.brand))
			obj.brandId = idBrand.id
			obj.price = Number(obj.price)
			obj.brand = null
			obj.dateOfCirculation = new Date(obj.dateOfCirculation)
			console.log("obj.dateOfCirculation: ", obj.dateOfCirculation);
			// console.log("idBrand: ", idBrand);
			setCarToAdd(obj)
			console.log(carToAdd, "carToAdd");
			
			let send = await axios.post('https://formation.inow.fr/demo/api/v1/cars', carToAdd)
			console.log("send: ", send);
			navigate('/');
		} catch (error) {
			console.log(error, "error");
			return error
		}
    }

	const changeFormField = (ev) => {
        const obj = {...carToAdd}
		obj[ev.target.name] = ev.target.name === 'price' ? Number(ev.target.value) : ev.target.value;        setCarToAdd(obj)
        // console.log("obj: ", obj);
        return obj
    }



	useEffect(() => {
		getCars();
		getBrands();
	}, []);

	return (
		<div>
			<Form onSubmit={submit}>
				<Form.Group className="mb-3" controlId="formBasicText">
					<Form.Label>model</Form.Label>
					<Form.Control
						type="text"
						placeholder="Entrez le model de la voiture"
						onChange={changeFormField}
						name="model"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicNumber">
					<Form.Label>prix de la voiture</Form.Label>
					<Form.Control type="number" placeholder="Ex : 3000€ " onChange={changeFormField} name="price"
/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicSelect">
					<Form.Label>Marque de la voiture</Form.Label>
					<Form.Select size="lg" onChange={changeFormField} name="brand">
						{brands.map((brand, key) => {
							return <option key={key}>{brand.name}</option>;
						})}
					</Form.Select>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicDate">
					<Form.Label>Date de mise en circulation</Form.Label>
					<Form.Control
						type="date" onChange={changeFormField} name="dateOfCirculation"
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default CarCreation;
