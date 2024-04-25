import React from 'react'
import { useForm } from 'react-hook-form'
import { sigupButton } from '../../Services/signup'
import { loginWithGoogle } from '../../Services/loginWithGoogle'
import { Link } from 'react-router-dom'
import './signup.css'
function Signup() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    let  onsubmit = async (e) => {
        const signupData = await sigupButton(e)
        reset()
    }
   let loginWithGoogleBtn =async()=>{
    return await loginWithGoogle()
   }
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <h4>Signup</h4>
                    <form onSubmit={handleSubmit(onsubmit)} >
                        <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
                            <input type="text" placeholder='Full Name' id="" class="input form-control" {...register("name", { required: true })} />
                            {errors.name && <span className='text-capitalize fw-semibold' >required name</span>}
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                            <input type="email" placeholder='Email' id="" class="input form-control" {...register("email", { required: true })} />
                            {errors.email && <span className='text-capitalize fw-semibold' >required email</span>}
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                            <input type="password" placeholder='Password' id="" class="input form-control" {...register("password", { required: true })} />
                            {errors.password && <span className='text-capitalize fw-semibold' >required password</span>}
                        </div>
                        <div className="d-flex justify-content-center mt-5">
                            <button className='btn btn-light mt-3' type='submit' >Signup</button>
                            
                        </div>
                        

                    </form>
                    <p className='fs-5 d-flex justify-content-center mt-2' >or</p>
                    {/* <hr className="hr-text" data-content="OR" /> */}
                    <div className="d-flex justify-content-center">
                    <button className='btn btn-light ' onClick={() => {loginWithGoogleBtn()}} >Signup with google</button>
                    </div>

                    <div className="d-flex justify-content-center mt-2">
                        <p className='fw-semibolder' >I have already an account! <Link className=''>Login</Link> </p>
                        </div>
                </div>
            </div>

        </>
    )
}

export default Signup