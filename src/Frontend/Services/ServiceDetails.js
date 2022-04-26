import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import pagebg from '../../Assets/pagebg.png';
import './Services.css';
import { useParams } from 'react-router-dom';
import { serviceContext } from '../../App';


const ServiceDetails = () => {
	const {serviceId} = useParams();
	const [services] = useContext(serviceContext);
	const service = services.find(item => item.id === +serviceId);
	// console.log(service);

	return (
		<main style={{ backgroundImage: `url(${pagebg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '76vh', width:'100%'}}>
			<Container className='page' fluid>
				<div className="row">
					<div className="col-md-4 col-12">
						<img src={service?.img} className="img-fluid card-img" alt='service'/>
					</div>
					<div className="col-md-8 col-12">
						<h1 className='text-white'>{service?.title}</h1>
						<div className="full-description">
							<p className='tex-white'>{service?.description}</p> 
						</div>

						<div className="d-flex text-white text-decoration-none">
							<button className='btn text-white bg-black text-capitalize border me-1'> <i className="fal fa-cart-plus"></i> add to cart </button>
							<button className='btn text-white bg-black text-capitalize border ms-1'> <i className="fal fa-luggage-cart"></i> buy now </button>
						</div>
					</div>
				</div>
			</Container>
		</main>
	);
};

export default ServiceDetails;