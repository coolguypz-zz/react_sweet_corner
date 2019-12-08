import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './cart_widget.jsx'
import User from './user.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import './nav.scss';

export default props => {
   return (
    <nav className="navbar navbar-expand-lg navbar-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className={`navbar-nav mr-auto`}>
           <li className="nav-item nav-link active ">
               <Link className={`menuList link`}
               to="/">Home</Link>
           </li>
           <li className="nav-item nav-link">
               <Link className={`menuList link `}
               to="/about">About Us</Link>
           </li>
           <li className="nav-item nav-link">
               <Link className={`menuList link `}
               to="/products">Products</Link>
           </li>
           <li className="nav-item nav-link">
               <Link className={`menuList link `}
               to="/services">Services</Link>
           </li>
           <li className="nav-item nav-link">
               <Link className={`menuList link `}
               to="/contact">Contact</Link>
           </li>
           <User/>
           <CartWidget/>
       </ul>
       </div>
    </nav>
   );
}


