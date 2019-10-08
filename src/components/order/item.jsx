import React, { Component } from 'react'
import Money from '../general/money'
import './guest_order_details.scss'

export default class item extends Component {
  render() {
    console.log("this.props.item",this.props.item);
    const {item,itemCount,total} = this.props;    
    if(item == null) return false;
    return (
      <div className='table-responsive-sm'>
        <table className="table table-borderless  table-hover">
  <thead>
    <tr>
      <th scope="col "></th>
      <th scope="col">Product</th>
      <th scope="col">Each</th>
      <th scope="col">quantity</th>
      <th scope="col ml-3">Total</th>
    </tr>
  </thead>
  <tbody>
    {item.map(v => {
      return(
        <tr key={v.id}>
        <th scope="row">
          <img src={v.product.thumbnail.url} className='h-50 rounded' alt=""/>
        </th>
        <td>{v.product.name}</td>
        <td><Money cost ={v.each}/></td>
        <td>{v.quantity}</td>
        <td><Money cost={v.total}/></td>
      </tr>
    )})}
  </tbody>
  <thead>
    <tr>
      <th scope="col"></th>
      <th colSpan="2"><h3>Cart Total :</h3></th>
      <th scope="col"><h4>{itemCount}</h4></th>
      <th scope="col"><h4><Money cost = {total}/></h4></th>
    </tr>
  </thead>
</table> 
</div>
)
  }
}

