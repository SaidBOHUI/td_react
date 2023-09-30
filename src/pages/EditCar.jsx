import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router";



const EditCar = () => {
  const navigate = useNavigate();
  const { idCar } = useParams();
  const [dataCar, setDataCar] = useState({});
  const [brands, setBrands] = useState([]);
  const [prevBrand, setPrevBrand] = useState(null);

  const getPreviousBrand = () => {
    let previousBrand =  brands.find((brand) => dataCar.brandID == brand.id)
    console.log("previousBrand: ", previousBrand?.name);
    setPrevBrand(previousBrand?.name)
    return previousBrand?.name
  }
  

  const getCar = async() => {
    try {
      let resCar = await axios.get(`https://formation.inow.fr/demo/api/v1/cars/${idCar}`)
      console.log("resCar: ", resCar);
      setDataCar(resCar.data)
    } catch (error) {
      console.log(error, "error");
      return error
    }
  }

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


  const changeFormField = (ev) => {
		const obj = { ...dataCar };
		obj[ev.target.name] =
			ev.target.name === "price" ? Number(ev.target.value) : ev.target.value;
      setDataCar(obj);
		// console.log("obj: ", obj);
		return obj;
	};


  useEffect(() => {
    getBrands()
    getCar().then(() => {
      getPreviousBrand()
    })
  }, [prevBrand])

  const submit = async(e) => {
		try {
			e.preventDefault();
			let obj = {...dataCar}

			let idBrand = brands.findIndex((brand => brand.name === obj.brand))
      console.log("idBrand: ", idBrand);
      if (idBrand) {
        obj.brandID = idBrand.id
        obj.dateOfCirculation = new Date(obj.dateOfCirculation)
  
        console.log("obj fin: ", obj);
        setDataCar(obj)     
        let send = await axios.put(`https://formation.inow.fr/demo/api/v1/cars/${idCar}`, dataCar)
        console.log("send: ", send);
     
        navigate('/');
      }
		} catch (error) {
			console.log(error, "error");
			return error
		}
    }

  
	return (
		<div>
			<Form onSubmit={submit}>
				<Form.Group className="mb-3" controlId="formBasicText">
					<Form.Label>model</Form.Label>
					<Form.Control
						type="text"
						defaultValue={dataCar.model}
						onChange={changeFormField}
						name="model"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicNumber">
					<Form.Label>prix de la voiture</Form.Label>
					<Form.Control type="number" defaultValue={dataCar.price} onChange={changeFormField} name="price"/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicSelect">
					<Form.Label>Marque de la voiture</Form.Label>
					<Form.Select size="lg" onChange={changeFormField} name="brand">
						{brands.map((brand, key) => {
							return <option key={key} selected={prevBrand == brand.name ? true : false}>{brand.name}</option>;
						})}
					</Form.Select>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicDate">
					<Form.Label>Date de mise en circulation</Form.Label>
          {console.log(dataCar.dateOfCirculation, "dataCar.dateOfCirculation" , typeof dataCar.dateOfCirculation)}
					<Form.Control
						type="date" onChange={changeFormField} name="dateOfCirculation" defaultValue={dataCar?.dateOfCirculation}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default EditCar