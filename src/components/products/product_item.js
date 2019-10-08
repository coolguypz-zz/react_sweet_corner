import React from 'react'
import Money from '../general/money'
import './products.scss'
import 'bootstrap/dist/css/bootstrap.css'


const product_items = (props) => {
  return ( 
    <div className="product-item col-md-4 center productItem" onClick={props.goToDetails}>
    <h3 className='pt-2'>{props.name}</h3>
    <img src={props.thumbnail.url} className='m-3 img-thumbnail '/>
    <div className='m-2'>{props.caption}</div>
    <div className='m-4'><Money cost={props.cost}/></div>
    </div>
   );
}
 
export default product_items;


