import React, { useState } from 'react'
import Navbar from '../layout/Navbar'
import { InputText } from 'primereact/inputtext'
import { Divider } from 'primereact/divider'
import { Button } from 'primereact/button'
import { PrimeIcons } from 'primereact/api';
import earpds from '../assets/images/ear.png'
import { Checkbox } from 'primereact/checkbox';
import { Password } from 'primereact/password'


function Register() {

    const [checked, setChecked] = useState(false);

    return (
        <div>
            <Navbar />
            <section class="p-3 p-md-4 p-xl-5">
                <div class="container">
                    <div class="card border-light-subtle shadow-sm border-0">
                        <div class="row g-0">
                            <div class="col-12 col-md-6">
                                <div class="d-flex align-items-center justify-content-center h-100">
                                    <div class="col-10 col-xl-8 py-3">
                                        <div className="text-center">
                                            <img class="img-fluid rounded mb-4" loading="lazy" src={earpds} width="160" height="50" alt="BootstrapBrain Logo" />
                                        </div>
                                        <Divider></Divider>
                                        <h2 class="h1 mb-4 text-center">Sonic Music </h2>
                                        <p class="lead m-0 roboto-regular">Discover melodies that soothe your soul and transport you to a world of tranquility and peace.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="card-body p-3 p-md-4 p-xl-5 border-0">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="mb-5">
                                                <h2 class="h3 roboto-bold">Registration</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <form action="#!">
                                        <div class="row gy-1 gy-md-2 overflow-hidden">
                                            <div class="col-6">
                                                <label for="firstName" class="form-label roboto-regular">First Name <span class="text-danger">*</span></label>
                                                <InputText className='w-100 p-inputtext-sm' />
                                            </div>
                                            <div class="col-6">
                                                <label for="lastName" class="form-label roboto-regular">Last Name <span class="text-danger">*</span></label>
                                                <InputText className='w-100 p-inputtext-sm' />
                                            </div>
                                            <div class="col-6">
                                                <label for="email" class="form-label roboto-regular">Email <span class="text-danger">*</span></label>
                                                <InputText className='w-100 p-inputtext-sm' />
                                            </div>
                                            <div class="col-6">
                                                <label for="password" class="form-label roboto-regular">Password <span class="text-danger">*</span></label>
                                                <Password className='w-100 p-inputtext-sm' toggleMask feedback={false} />
                                            </div>
                                            <div class="col-12">
                                                <label for="password" class="form-label roboto-regular">Valid ID <span class="text-danger">*</span></label>
                                                <InputText className='w-100 p-inputtext-sm' type='file' />
                                            </div>
                                            
                                            <div class="col-12">
                                                <div class="form-check">
                                                    <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                                                    <label class="form-check-label text-secondary" for="iAgree">
                                                        I agree to the <a href="#!" class="link-primary text-decoration-none">terms and conditions</a>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="d-grid">
                                                    <Button className='p-button p-button-info' label='Sign up' />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div class="row">
                                        <div class="col-12">
                                            <Divider align='center'>
                                                <em className='text-secondary'>or</em>
                                            </Divider>
                                            <p class="m-0 text-secondary text-center">Already have an account? <a href="#!" class="link-primary text-decoration-none">Sign in</a></p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <p class="mt-5 mb-4">Or sign up with</p>
                                            <div class="d-flex gap-3 flex-column flex-xl-row">
                                                <Button className='p-button-sm p-button-danger' icon={PrimeIcons.GOOGLE} label='Google' />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register