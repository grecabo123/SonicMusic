import React from 'react'
import logo from '../assets/Logo/logo.png'
import { Button } from 'primereact/button'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Navbar() {

    const history = useHistory()

    return (
        <div className="navbar navbar-expand-lg border-nav bg-white bg-shadow px-4">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">
                    <img src={logo} alt="" width={70} className='img-responsive' />
                </a>
                <span className='navbar-toggler' data-bs-target="#navb" data-bs-toggle="collapse">
                </span>
            </div>
            <div className="collapse navbar-collapse" id='navb'>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Button className='p-button' text label='Home' onClick={() => window.location.href = "/"} />
                    </li>
                    <li className="nav-item">
                        <Button className='p-button' text label='About' />
                    </li>
                    <li className="nav-item">
                        <Button className='p-button' label='Register' onClick={() => history.push(`/register`)} text />

                    </li>
                    <li className="nav-item">
                        <Button className='p-button' text label='Login' onClick={() => history.push(`/login`)} />
                    </li>
                    <li className="nav-item ms-auto">
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar