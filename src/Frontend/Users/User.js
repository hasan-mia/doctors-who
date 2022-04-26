import React from 'react';
import { Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import pagebg from '../../Assets/pagebg5.jpg';
import { auth } from '../../Firebase/Firebase.init';
import './User.css';

const User = () => {
	const [user] = useAuthState(auth);
	console.log(user?.email);
	return (
		<main style={{ backgroundImage: `url(${pagebg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '76vh'}}>
			<Container className='page'>
				<div className="page-title">
					<h1>Welcome</h1>
				</div>

				<div className='row'>
					<div className="col-md-12 col-12">
						<div className="user-profile pt-5">
							<div className="user-name text-center text-white text-uppercase">
								<h1>{
							user?.displayName ? <span className='text-center'>{user?.displayName}</span> : <span className='text-center'>{user?.email}</span>
							}</h1>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</main>
	);
};

export default User;