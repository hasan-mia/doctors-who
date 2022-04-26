import React from 'react';
import bannerbg from '../../Assets/cover.gif';
import servicebg from '../../Assets/pagebg4.jpg';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
const Home = () => {
	return (
		<main>
			<section className='banner pt-5' style={{ backgroundImage: `url(${bannerbg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '90%'}}>
				<Banner></Banner>
			</section>
			{/* End banner */}

			<section className='my-0 pb-4' style={{ backgroundImage: `url(${servicebg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100%'}}>
				<Services></Services>
			</section>
			{/* End Services */}
		</main>
	);
};

export default Home;