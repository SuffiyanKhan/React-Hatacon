import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { sigupButton } from '../../Services/signup';
import { loginWithGoogle } from '../../Services/loginWithGoogle';
import { Link } from 'react-router-dom';
import './signup.css';

function AppSignup() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = async (formData) => {
        try {
            setIsLoading(true);
            const signupData = await sigupButton(formData);
            reset();
            setIsLoading(false);
        } catch (error) {
            console.error('Error during signup:', error);
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <h4>Signup</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
                            <input type="text" placeholder="Full Name" id="" className="input form-control" {...register("name", { required: true })} />
                            {errors.name && <span className="text-capitalize fw-semibold">required name</span>}
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                            <input type="email" placeholder="Email" id="" className="input form-control" {...register("email", { required: true })} />
                            {errors.email && <span className="text-capitalize fw-semibold">required email</span>}
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                            <input type="password" placeholder="Password" id="" className="input form-control" {...register("password", { required: true })} />
                            {errors.password && <span className="text-capitalize fw-semibold">required password</span>}
                        </div>
                        <div className="d-flex justify-content-center mt-5">
                            <button className="btn btn-light mt-3" type="submit" disabled={isLoading}>
                                {isLoading ? 'Signing up...' : 'Signup'}
                            </button>
                        </div>
                    </form>
                    <p className="fs-5 d-flex justify-content-center mt-2">or</p>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-light" onClick={() => loginWithGoogle()} disabled={isLoading}>
                            {isLoading ? 'Signing up...' : 'Signup with Google'}
                        </button>
                    </div>
                    <div className="d-flex justify-content-center mt-2">
                        <p className="fw-semibolder">I already have an account! <Link to={"/login"} className="text-dark">Login</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppSignup;
