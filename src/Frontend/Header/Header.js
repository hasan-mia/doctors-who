import React from 'react';
import { Container, Form, FormControl, Nav, Navbar,Button} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase/Firebase.init';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'
import './Header.css';
import { signOut } from 'firebase/auth';
const Header = () => {
	const [user] = useAuthState(auth);
	return (
		<header>
			<Navbar className='bg-black' expand="lg" fixed="top">
				<Container fluid>
					<Navbar.Brand as={Link} to='/'>
						<img src={logo} alt="" className='logo w-75'/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll">
						<i className='fas fa-line-height text-white'></i>
					</Navbar.Toggle>
					<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto my-2 my-lg-0" >
						<Nav.Link as={Link} to='/' className='text-uppercase'>Home</Nav.Link>
						<Nav.Link as={Link} to='/blogs' className='text-uppercase'>Blogs</Nav.Link>
						<Nav.Link as={Link} to="/about" className='text-uppercase'>About Me</Nav.Link>	
						{/* <Nav.Link as={Link} to="/contact" className='text-uppercase'>Contact</Nav.Link>	 */}
					</Nav>
					<Form className="d-flex ms-auto ms-30 header">
						<FormControl type="search" placeholder="Search" className="me-auto" aria-label="Search"/>
						<Button className="bg-dark search-btn"> <i className='fas fa-search'></i> </Button>
					</Form>
					<Nav className="ms-auto my-2 my-lg-0 users">	
						{
							!user? <Nav.Link as={Link} to='/login' className='text-uppercase'><i className="fal fa-sign-out-alt"></i> Login</Nav.Link>
							:  
							<Nav.Link onClick={() => signOut(auth)} className='text-uppercase'><i className="far fa-power-off"></i> Logout</Nav.Link>
						}
						
						<Nav.Link as={Link} to='/user' className='text-uppercase'><i className="fal fa-address-card fs-5"></i></Nav.Link>	
					</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;