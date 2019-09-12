import React from 'react';
import './home.scss';
import cupcakes from '../../assets/images/cupcakes.png'

export default props => {
    return (
        <div>
            {/* <h3 className="center">Home Page</h3> */}
            <div className="row">
                <div className="col-md-8">
                    <h2>We cherish the sweet moments...</h2>
                    <p>our daily grind and our delight in having tasty treats.</p>
                    <p>We have been baking gourmet cupcakes, 100% from scratch, from the very first day.  We only use the finest of natural ingredients available.</p>
                    <h2>Happiness in one bite!</h2>
                    <p>We provide services for Weddings, Bar &amp; Bat Mitvahs, Birthdays, Showers, Corporate Events, and any other special occasion!</p>
                    <p>Our expert bakers are waiting to make memorable, unique cupcake creations; bursting with freshness and flavor just for you!</p>
                    <p>Their delicious taste, great variety and fine flavors will delight you!  The best choice for a chic dessert!  How can you possibly resist?</p>
                </div>
                <div className="col-md-4 aside">
                </div>
                <div className="col cupcakes">
                    <img src={cupcakes} className='mt-3 mb-3' alt="cupcakes.png"/>
                </div>
            </div>
        </div>
    );
}