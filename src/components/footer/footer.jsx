import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './footer.scss'

export default props => {
  
  const year = new Date().getFullYear();

  return (
      <div>
          {/* <h1 className="center">This is the Footer</h1> */}
          <footer className='row'>
            <div className='dots col-md-3 '></div>
            <div className ='col-md-6 mt-4 center'>Copyright&copy; {year} SweetCorner All rights reserved</div>
            <div className ='col-md-3 center phoneimg'>800 264 2099</div>
          </footer>
      </div>
  );
}