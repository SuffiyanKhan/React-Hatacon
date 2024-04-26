import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { loginWithGoogle } from '../../Services/loginWithGoogle'
import { login } from '../../Services/login'

function AppLogin() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onsubmit = async (e) => {
        const loginUser = await login(e)
        reset()
    }
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <h4>Login</h4>
                    <form onSubmit={handleSubmit(onsubmit)} className='mt-5'>
                        <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                            <input type="email" placeholder='Email' id="" class="input form-control" {...register("email", { required: true })} />
                            {errors.email && <span className='text-capitalize fw-semibold' >required email</span>}
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                            <input type="password" placeholder='Password' id="" class="input form-control" {...register("password", { required: true })} />
                            {errors.password && <span className='text-capitalize fw-semibold' >required password</span>}
                        </div>
                        <div className="d-flex justify-content-center mt-5">
                            <button className='btn btn-light mt-3' type='submit' >Login</button>
                        </div>
                    </form>
                    <p className='fs-5 d-flex justify-content-center mt-2' >or</p>
                    <div className="d-flex justify-content-center">
                        <button className='btn btn-light ' onClick={() => { loginWithGoogle() }} >Login with google</button>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <p className='fw-semibolder' >I have no an account! <Link to={"/"} className='text-dark'>Signup</Link> </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppLogin