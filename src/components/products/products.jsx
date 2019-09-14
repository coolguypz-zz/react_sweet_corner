import React, { Component } from 'react'
import './products.scss'

export default class products extends Component {

  componentDidMount=()=>{
    console.log("componentDidMount products");
  }
  render() {
    return (
      <div className='products'>
        <h1 className="center">Shop our cupcakes</h1>
      </div>
    )
  }
}
