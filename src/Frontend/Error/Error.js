import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pagebg from '../../Assets/pagebg2.jpg'
import error from '../../Assets/error.gif';
const Error = () => {
	return (
		<main style={{ backgroundImage: `url(${pagebg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh'}}>
			<Container>
				<div className='row'>
					<div className="col-12">
						<div className="flex">
							<img src={error} alt="" className='img-fluid' />
						</div>
						<div className="text-center">
							<Link to='/' className='bg-black border text-white p-2'>Back <i className='fas fa-arrow-left'></i> Home</Link>
						</div>
					</div>
				</div>
			</Container>
		</main>
	);
};

export default Error;