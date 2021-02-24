import React from 'react';
import CompoCarousel from './componant/CompoCarousel';
import Services from './componant/Services';

const Home = () => {
	return (
		<>
			<CompoCarousel />
			<div className="services">
				<Services />
			</div>
		</>
	);
};

export default Home;
