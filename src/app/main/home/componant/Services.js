import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Image1 from './image/Advertising-Agency-in-Ahmedabad.jpg';

const Services = () => {
	return (
		<>
			<Card style={{ height: '30rem', width: '30rem' }}>
				<Card.Img variant="top" src={Image1} />
				<Card.Body>
					<h1>
						<Card.Title>Card Title</Card.Title>
					</h1>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
			<Card style={{ height: '30rem', width: '30rem' }}>
				<Card.Img variant="top" src={Image1} />
				<Card.Body>
					<h1>
						<Card.Title>Card Title</Card.Title>
					</h1>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
			<Card style={{ height: '30rem', width: '30rem' }}>
				<Card.Img variant="top" src={Image1} />
				<Card.Body>
					<h1>
						<Card.Title>Card Title</Card.Title>
					</h1>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</>
	);
};

export default Services;
