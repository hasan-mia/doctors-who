import React from 'react';
import { Container } from 'react-bootstrap';
import pagebg from '../../Assets/pagebg4.jpg';
const Checkout = () => {
	return (
		<main style={{ backgroundImage: `url(${pagebg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh'}}>
			<Container fluid className='mt-5 py-5'>
				<div className="page-title">
					<h1>Thanks For Checkout...</h1>
				</div>
			</Container>
		</main>
	);
};

export default Checkout;