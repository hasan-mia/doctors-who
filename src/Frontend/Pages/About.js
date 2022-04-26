import React from 'react';
import pagebg from '../../Assets/pagebg2.jpg'
import { Container } from 'react-bootstrap';
import './Pages.css';
const About = () => {
	return (
		<main style={{ backgroundImage: `url(${pagebg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100%'}}>
			<Container>
				<div className="page-title">
					<h1>About Me</h1>
				</div>
				<div className="row">
					<div className="col-md-6 col-12">
						<img src="https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?t=st=1650302379~exp=1650302979~hmac=d87c6d17a48ac533a57b4fe58546b61934a5665b229cb75242c7f55041afee2f" alt="" className='h-75 w-100 mt-5 rounded-pill'/>
					</div>
					<div className="col-md-6 col-12">
						<div className='about-me my-lg-5'>
							<div className="name">
								<h1>Md. Hasan Mia</h1>
								<h6>Junior Full Stack Developer</h6>
							</div>
							<div className="description">
								<p>I am Hasan, want to be a junior full stuck Developer.I'm so passionate on this sector.</p>  
								<p>Now my goal is to become a professional junior full stack developer in 2022 and get a job</p>
							</div>
							<div className="extra-field">
								<h5>I am Expert in:</h5>
								<li>HTML5 & CSS3</li>
								<li>Boostrap, Tailwind & Foundation</li>
								<li>Javascript, PHP</li>
								<li>React, Laravel & Wordpress</li>
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
			</Container>
		</main>
	);
};

export default About;