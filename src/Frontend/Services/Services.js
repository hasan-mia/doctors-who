import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { serviceContext } from '../../App';
import Service from './Service';
import './Services.css';

const Services = () => {
	const [services] = useContext(serviceContext)
	return (
		<Container fluid className='services'>
			<div className="row gx-3">
				<div className="title">
					<h1 className='text-center text-white'>Services</h1>
				</div>
				{
					services.map(service=><Service
					key={service.id}
					service={service}
					></Service>)
				}
			</div>
		</Container>
	);
};

export default Services;