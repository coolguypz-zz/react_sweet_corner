import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {getCartTotals,getActiveCart} from '../../action/index'
import {connect} from 'react-redux'
// import Nav from 'react-bootstrap/Nav'


 class Cart_widget extends Component {

  componentDidMount(){
   this.props.getActiveCart()
  }
  
  render() {
    const {cartTotal} = this.props;
    let itemCount = 0;
    if(cartTotal){
      itemCount = cartTotal.items
    }
    return (
          <li className="menuList nav-item nav-link menuList">
            <Link to="/cart" className="link">
              <i className="material-icons">shopping_cart</i>
              <span className="cart-item-count align-middle">{itemCount==0 ? null:itemCount}</span>
          </Link>
          </li>
    )
  }
}

function mapStateToProps(state){

  return{
    cartTotal:state.cart.total
  }
}
export default connect(mapStateToProps,{getCartTotals,getActiveCart})(Cart_widget);


