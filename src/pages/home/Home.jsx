import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
	const [brands, setBrands] = useState([]);

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

	useEffect(() => {
		getBrands();
	}, []);

	return (<div className="d-flex justify-content-evenly">
		{brands.map((brand, key) => {
			return(
			<Card key={key} style={{ width: '18rem', backgroundImage: `url(${brand?.img})` }}>
				<Card.Img variant="top" src={brand?.img} />
				<Card.Body>
					<Card.Title>{brand.name}</Card.Title>
					{/* <Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
					</Card.Text> */}
					<Link to={`/cars/${brand?.id}`} className="btn btn-primary">Other cars of {brand.name}</Link>
				</Card.Body>
			</Card>)	
		})}
	</div>);
};

export default Home;
