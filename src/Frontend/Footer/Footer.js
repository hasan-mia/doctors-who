import React from 'react';
import logo from '../../Assets/logo.png'
import { Container } from 'react-bootstrap';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
	return (
		<footer className='bg-black w-100 mb-0 pt-2'>
			<Container>
				<div className="row gy-2">
					<div className='col-md-4 col-12'>
						<img src={logo} alt="" className='w-75 footer-logo'/>
					</div>
					<div className='col-md-3 col-12'>
						<div className="d-flex ms-sm-2">
							<nav className='d-flex align-self-center flex-column'> 
								<Link to='/' className='text-decoration-none mx-1 f-item'>Careere</Link>
								<Link to='/' className='text-decoration-none mx-1 f-item'>Services</Link>
								<Link to='/' className='text-decoration-none mx-1 f-item'>Blogs</Link>
							</nav>
							<nav className='d-flex align-self-center flex-column'> 
								<Link to='/' className='text-decoration-none f-item'>Careere</Link>
								<Link to='/' className='text-decoration-none f-item'>Services</Link>
								<Link to='/' className='text-decoration-none f-item'>Blogs</Link>
							</nav>
						</div>
					</div>
					<div className='col-md-4 col-12'>
						<div className='d-flex px-lg-2'>
							<Link to='/' className='text-decoration-none f-item-full'>
								<img src='https://i.imgur.com/Lu3wgaK.png' alt="android app" className="app-icon"/>
							</Link>
							<Link to='/' className='text-decoration-none f-item-full'>
								<img src='https://i.imgur.com/QTkXVsg.png' alt="aaple app" className="app-icon"/>
							</Link>
						</div>
						<nav className='d-flex justify-content-lg-end align-self-center'> 
							<Link to='/' className='text-decoration-none f-item-full'>Privacy Policy</Link>
							<Link to='/' className='text-decoration-none f-item-full'>Terms Condition</Link>
							<Link to='/' className='text-decoration-none f-item-full'>DMCA</Link>
						</nav>
					</div>
				</div>
				<div>
					<p className='text-white text-center fs-6 mb-0'>&copy; All Right Reserved by Doctors</p>
				</div>
			</Container>
		</footer>
	);
};
export default Footer;