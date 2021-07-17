import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                                <Link to="/" className="li">Home</Link>
                                <Link to="/about" className="li">About Us</Link>
                                <Link to="/dashboard" className="li">Dashboard</Link>
                                <Link to="/login" className="li">Login</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
