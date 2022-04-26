import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import pagebg from '../../Assets/pagebg.jpg';
import { auth } from '../../Firebase/Firebase.init';
import './Form.css';

const Register = () => {
	  const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });

    const [showPass, setShowPass] = useState(false);

    const [createUserWithEmailAndPassword, user, loading, hookError] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleEmail = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }
    };
    const handlePassword = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };

    const handleConfirmPassword = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Password's don't match" });
            setUserInfo({ ...userInfo, confirmPass: "" });
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        toast.success("Email vaification link sent");
    };

    useEffect(() => {
        if (hookError) {
            switch (hookError?.code) {
                case "auth/invalid-email":
                    toast.error("Please provide a valid email");
                    break;
                case "auth/invalid-password":
                    toast.error("Wrong password!!");
                    break;
                default:
                    toast.error("Something went wrong");
            }
        }
    }, [hookError]);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/checkout" || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);

	return (
		<main style={{ backgroundImage: `url(${pagebg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '76vh'}}>
			<div className='page flex'>
				<div className="form-container">
					<h2 className="page-title">Sign Up</h2>
					<form onSubmit={handleRegister} className="flex">
						<div class="form-floating mb-3">
							<input type="email" onChange={handleEmail} class="form-control" id="floatingInput" placeholder="name@example.com"/>
							<label for="floatingInput">Email address</label>
						</div>
						{errors?.email && <p className="error">{errors.email}</p>}
						<div class="form-floating mb-3">
							<input type={showPass ? "text" : "password"} onChange={handlePassword} class="form-control" id="floatingPassword" placeholder="Password"/>
							<span className="position-relative mt" onClick={() => setShowPass(!showPass)}><i class="fal fa-eye"></i></span>
							<label for="floatingPassword">Password</label>
						</div>
						{errors?.password && <p className="error">{errors.password}</p>}
						<div class="form-floating">
							<input type="password" onChange={handleConfirmPassword} class="form-control" id="floatingConfirmPassword" placeholder="Confirm Password"/>
							<label for="floatingConfirmPassword">Confirm Password</label>
						</div>
						<button type='btn' className='btn btn-dark'>Register</button>
						<ToastContainer/>
					</form>
				</div>
				<p className='text-white text-center bg-black'>Allready have an account?<Link to='/login' className='text-decoration-none'> Click here</Link></p>
			</div>
		</main>
	);
};

export default Register;