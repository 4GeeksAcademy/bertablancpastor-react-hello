import React from "react";

//Navbar component
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary text-center p-3 bg-secondary">
            <div className="container">
                <a className="navbar-brand   text-white" href="#">Start Bootsrap</a>
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;