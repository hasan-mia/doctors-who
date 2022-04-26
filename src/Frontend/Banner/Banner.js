import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import doctor from '../../Assets/doctor.png';
import useBanner from '../../Hooks/useBanner';
import './Banner.css'
const Banner = () => {
	const [banners] = useBanner([]);
	return (
		<Container className="pt-5" fluid>
				<div className="row">
					{/* Profile */}
					<div className="col-lg-5 col-md-6 col-12">
						<img src={doctor} alt="" className='img-fluid profile-image'/>
					</div>

					<div className="col-lg-7 col-md-6 col-12">
						<div className="flex my-lg-5">
							<Carousel>
							{
								banners.map(banner=>
									<Carousel.Item interval={15000}>
									<Carousel.Caption>
										<h1>{banner.title}</h1>
										<p>{banner.description}</p>
									</Carousel.Caption>
								</Carousel.Item>
									)
							}
							</Carousel>

							<div className='profile my-lg-5'>
								<div className="name">
									<h1>Dr. Jannatul Jarin</h1>
									<h5>Professor, Neurology</h5>
								</div>
								<div className="extra-field">
									<li>Neuromusculler Disease</li>
									<li>Neurology Adult</li>
									<li>Nerve Disorder</li>
								</div>
								<nav className='d-flex justify-content-center px-2 social-icon'>
									<li> <a href="#fb" className='text-decoration-none'> <i className="fab fa-facebook-square"></i> </a></li>
									<li> <a href="#tw" className='text-decoration-none'> <i className="fab fa-twitter"></i> </a></li>
									<li> <a href="#ins" className='text-decoration-none'> <i className="fab fa-instagram-square"></i> </a></li>
									<li> <a href="#link" className='text-decoration-none'> <i className="fab fa-linkedin"></i> </a></li>
								</nav>
								
							</div>
						</div>
					</div>
				</div>
		</Container>	
	);
};

export default Banner;