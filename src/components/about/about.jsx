import React from 'react';
import './about.scss'
import box1 from '../../assets/images/box1.png'

export default props=>{
  return (
    <div>
      {/* <h1 className="center">About Page</h1> */}
      <div>
            <div className="row">
                <div className="col-md-7">
                  <h2>
                  Delicious cupcakes, magical moments!
                  </h2>
                  <p>
                    Sweet Corner is growing fast. Our delicious cupcakes of all sizes, shapes and
                    colors and tastes are creating a real wow factor.
                  </p>
                  <p>
                    Our delicious cupcakes are different from other bakeries. Why? Well, not only are
                    our cupcakes and baked goods prepared fresh every day, we also create
                    personalized cupcakes in any size and shape just for you! Simply delicious and
                    unique.
                  </p>
                  <p>
                    Our expert bakers create stunning cupcakes in any flavor, color, size or shape
                    you choose.
                  </p>
                  <p>
                    Have you seen a stunning cupcake in a magazine, a TV show or on the internet?
                    Want something unique to reflect a character or personality? Sweet Corner's
                    cupcakes are baked with love and that's why we can create perfect and unique
                    cupcake for you.
                  </p>
                  <p>
                    No idea is too creative for our bakers at Sweet Corner cupcakes. Contact us today
                    to discuss you special cupcake. 
                  </p>
                </div>
                <div className="col-md-2 aside1"></div>
                <div className="col-md-3 aside2"></div>
                <img src={box1} className='mt-3 mb-3' alt="box1.png"/>
            </div>
        </div>
    </div>
  )
}

