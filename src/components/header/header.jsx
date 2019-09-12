import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './header.scss';
import Nav from '../nav/nav.jsx'


export default props => {
    return (
        <div className='row'>
        <div className='header'> 
            <div className='backimg'>
            <Nav/>
            <img className ='logo' src='logo.png' alt="logo.png"/>
            <div className="fancy">We deliver cupcakes for the important events in your life!</div>
            </div>
        </div>
        </div>
    );
}