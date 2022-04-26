import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import {auth} from '../../Firebase/Firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import pagebg from '../../Assets/pagebg.jpg';

const ForgotPass = () => {
	const [email, setEmail] = useState('');
	const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
	
	
	return (
	<main style={{ backgroundImage: `url(${pagebg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '76vh'}}>
			<div className='page flex'>
				<div className="form-container mt-5">
					<div class="form-floating mb-0">
						<input type="email" onChange={(e) => setEmail(e.target.value)} value={email} class="form-control" id="floatingInput" placeholder="name@example.com"/>
						<label for="floatingInput">Email address</label>
					</div>
				</div>
				<button onClick={async () => {await sendPasswordResetEmail(); toast.success('Password Reset email sent..');}} type='btn' className='btn btn-dark'>Reset</button>
				<ToastContainer/>
			</div>
		</main>
	);
};

export default ForgotPass;