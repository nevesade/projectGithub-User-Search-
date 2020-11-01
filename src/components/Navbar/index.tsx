import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';


const Navbar = () => (

    <nav className="row bg-primary main-nav ">
        <div className="col-4">
            <Link to="/" className="nav-logo-text"> 
                <h5> Bootcamp DevSuperior </h5>

            </Link>

        </div>

        
        

    </nav>

);

export default Navbar;

