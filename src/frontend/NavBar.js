import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="Images/TakeNote image.png" alt="TakeNote Logo" height="50" width="50" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" style={{ color: "white" }} aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/record" style={{ color: "white" }} className="nav-link">Record</a>
                        </li>
                        <li className="nav-item">
                            <a href="/about" style={{ color: "white" }} className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="/chat" style={{ color: "white" }} className="nav-link">Chat</a>
                        </li>
                        <li className="nav-item">
                            <a href="/lectures" style={{ color: "white" }} className="nav-link">Lectures</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar