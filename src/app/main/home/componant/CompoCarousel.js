import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from './image/Advertising-Agency-in-Ahmedabad.jpg';
import Image2 from './image/Billboard-Advertising-Company.jpg';
import Image3 from './image/Outdoor-Advertising-Professionals.jpg';
import Image4 from './image/Outdoor-Media-Advertising-Agency1.jpg';

const CompoCarousel = () => {
	return (
		<>
			<Carousel slide={true}>
				<Carousel.Item interval={2000}>
					<img className="d-block w-100" src={Image1} alt="First Image" style={{ height: '70vh' }} />
					{/* <Carousel.Caption>
						<h3>First Slide Label</h3>
						<p>Scenery 1</p>
					</Carousel.Caption> */}
				</Carousel.Item>
				{/*  */}
				<Carousel.Item interval={2000}>
					<img className="d-block w-100" src={Image2} alt="Second Image" style={{ height: '70vh' }} />
					{/* <Carousel.Caption>
						<h3>Second Slide Label</h3>
						<p>Scenery 2</p>
					</Carousel.Caption> */}
				</Carousel.Item>
				{/*  */}
				<Carousel.Item interval={2000}>
					<img className="d-block w-100" src={Image3} alt="third Image" style={{ height: '70vh' }} />
					{/* <Carousel.Caption>
						<h3>Third Slide Label</h3>
						<p>Scenery 3</p>
					</Carousel.Caption> */}
				</Carousel.Item>
				{/*  */}
				<Carousel.Item interval={2000}>
					<img className="d-block w-100" src={Image4} alt="third Image" style={{ height: '70vh' }} />
					{/* <Carousel.Caption>
						<h3>Third Slide Label</h3>
						<p>Scenery 3</p>
					</Carousel.Caption> */}
				</Carousel.Item>
			</Carousel>
		</>
	);
};

export default CompoCarousel;
