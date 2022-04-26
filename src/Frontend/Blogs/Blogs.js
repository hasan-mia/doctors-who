import React from 'react';
import { Container } from 'react-bootstrap';
import pagebg from '../../Assets/pagebg3.jpg';
import Blog from './Blog';
import './Blogs.css';
const Blogs = () => {
	return (
		<main style={{ backgroundImage: `url(${pagebg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100%'}}>
			<Container fluid className='services mt-5'>
				<div className="row gx-3">
					<Blog></Blog>
				</div>
			</Container>
		</main>
	);
};

export default Blogs;