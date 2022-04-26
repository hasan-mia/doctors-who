import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import pagebg from '../../Assets/pagebg.jpg';
import {auth} from '../../Firebase/Firebase.init';
import facbook from '../../Assets/facebook.png';
import google from '../../Assets/google.png';
import './Form.css';
const Login = () => {
	const [userInfo, setUserInfo] = useState({
		email: "",
		password: "",
	})
	const [errors, setErrors] = useState({
		email: "",
		password: "",
		general: "",
	})

	const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
	const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);
	const [signInWithFacebook, facbookuser, loading3, error] = useSignInWithFacebook(auth);

	const handleEmail = (e) => {
		const emailRegex = /\S+@\S+\.\S+/;
		const validEmail = emailRegex.test(e.target.value);

		if (validEmail) {
			setUserInfo({...userInfo, email: e.target.value})
			setErrors({...errors, email: ""})
		} else {
			setErrors({...errors, email: "Invalid email"})
			setUserInfo({...userInfo,email: ""})
		}
	}
	const handlePassword = (e) => {
		const passwordRegex = /.{6,}/;
		const validPassword = passwordRegex.test(e.target.value);

		if (validPassword) {
			setUserInfo({...userInfo, password: e.target.value });
			setErrors({...errors,password: ""});
		} else {
			setErrors({...errors, password: "Minimum 6 characters!" });
			setUserInfo({...userInfo,password: ""})
		}

	}

	const handleLogin = (e) => {
		e.preventDefault();
		signInWithEmail(userInfo.email, userInfo.password);

	}

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/checkout" || "/";

	useEffect(() => {
		if (user) {
			navigate(from);
		}
	}, [user]);

	useEffect(() => {
		const error = hookError || googleError;;
		if (error) {
			switch (error?.code) {
				case "auth/invalid-email":
					toast("Please provide a valid email");
					break;

				case "auth/invalid-password":
					toast("Wrong password!")
					break;
				default:
					toast("Something went wrong!")
			}
		}
	}, [hookError, googleError])

	return (
		<main style={{ backgroundImage: `url(${pagebg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '76vh'}}>
			<div className='page flex'>
				<div className="form-container">
					<h2 className="page-title">Sign In</h2>
					<form  onSubmit={handleLogin} className="flex">
						<div class="form-floating mb-3">
							<input type="email" onChange={handleEmail} class="form-control" id="floatingInput" placeholder="name@example.com"/>
							<label for="floatingInput">Email address</label>
						</div>
						{errors?.email && <p className="error">{errors.email}</p>}

						<div class="form-floating">
							<input type="password" onChange={handlePassword} class="form-control" id="floatingPassword" placeholder="Password"/>
							<label for="floatingPassword">Password</label>
						</div>
						{errors?.password && <p className="error">{errors.password}</p> }
						<button type='btn' className='btn btn-dark'>Login</button>
						<ToastContainer/>
					</form>
				</div>
				<p className='text-white text-center bg-black'>Forgot Password?<Link to='/resetpassword' className='text-decoration-none'> Click here</Link></p>
				<p className='text-white text-center bg-black'>Need an account?<Link to='/register' className='text-decoration-none'> Click here</Link></p>
				<div className='social-login'>
					<button onClick={() => signInWithGoogle()}> <img src={google} alt="" className='img-fluid' /> </button>
					<button onClick={() => signInWithFacebook()}> <img src={facbook} alt="" className='img-fluid' /> </button>
				</div>
			</div>
		</main>
	);
};

export default Login;