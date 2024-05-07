import React, { useState } from 'react'
import Navbar from '../layout/Navbar'
import { InputText } from 'primereact/inputtext'
import { Divider } from 'primereact/divider'
import { Button } from 'primereact/button'
import { PrimeIcons } from 'primereact/api';
import earpds from '../assets/images/ear.png'
import { Checkbox } from 'primereact/checkbox';
import { Password } from 'primereact/password'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Login() {

    const [checked, setChecked] = useState(false);


    return (
        <div>
            <Navbar />
            <section className="p-3 p-md-4 p-xl-5">
                <div className="container">
                    <div className="card border-light-subtle shadow-sm border-0">
                        <div className="row g-0">
                            <div className="col-12 col-md-6">
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <div className="col-10 col-xl-8 py-3">
                                        <div className="text-center">
                                            <img className="img-fluid rounded mb-4" loading="lazy" src={earpds} width="160" height="50" alt="BootstrapBrain Logo" />
                                        </div>
                                        <Divider></Divider>
                                        <h2 className="h1 mb-4 text-center">Sonic Music </h2>
                                        <p className="lead m-0 roboto-regular">Discover melodies that soothe your soul and transport you to a world of tranquility and peace.</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="card-body p-3 p-md-4 p-xl-5 border-0">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mb-5">
                                                <h2 className="h3 roboto-bold">Login</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <form action="#!">
                                        <div className="row gy-1 gy-md-3 overflow-hidden">
                                            <div className="col-12">
                                                <label for="firstName" className="form-label roboto-regular">First Name <span className="text-danger">*</span></label>
                                                <InputText className='w-100 p-inputtext-sm' />
                                            </div>
                                            <div className="col-12">
                                                <label for="lastName" className="form-label roboto-regular">Last Name <span className="text-danger">*</span></label>
                                                <InputText className='w-100 p-inputtext-sm' />
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <Link>Create Account</Link>
                                                <Link>Forgot Password</Link>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid">
                                                    <Button className='p-button p-button-info' label='Sign up' />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    {/* <div className="row">
                                        <div className="col-12">
                                            <Divider align='center'>
                                                <em className='text-secondary'>or</em>
                                            </Divider>
                                            <p className="m-0 text-secondary text-center">Dont have an account? <Link to="/register" className="link-primary text-decoration-none">Sign up</Link></p>
                                        </div>
                                    </div> */}
                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login