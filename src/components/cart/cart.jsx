import React, { Component } from "react";
import { connect } from "react-redux";
import { getActiveCart, quantityChange, itemDelete, CreateUserCheckout } from "../../action/index";
import { Link } from "react-router-dom";
import Money from "../general/money";
import "./cart.scss";

class Cart extends Component {
   incrementQTY = (id, quantity) => {
      this.props.quantityChange(id, quantity);
   };

   decrementQTY = (id, quantity) => {
      this.props.quantityChange(id, quantity);
   };

   itemDeleteFromCart = id => {
      this.props.itemDelete(id);
   };

   goBackToDetail = (id, quantity) => {
      if (event.target.id == "containerRow") {
         this.props.history.push(`/products/${id}`);
      } else if (event.target.id === "increment") {
         this.incrementQTY(id, quantity);
      } else if (event.target.id === "decrement") {
         this.decrementQTY(id, quantity);
      }
   };

   componentDidMount() {
      this.props.getActiveCart();
   }

   userGuestCheckout = () => {
      const token = localStorage.getItem("token");
      if (token) {
         this.props.CreateUserCheckout();
      }
   };

   render = () => {
      const { cartItem, total } = this.props;
      const token = localStorage.getItem("token");
      if (cartItem == null) return false;
      return (
         <div>
            <h1 className="center m-4">Cart</h1>
            <table className="table table-hover">
               <thead>
                  <tr>
                     <th scope="col "></th>
                     <th scope="col">Product</th>
                     <th scope="col">Each</th>
                     <th scope="col">quantity</th>
                     <th scope="col ml-3">Total</th>
                     <th scope="col"></th>
                  </tr>
               </thead>
               <tbody>
                  {cartItem.map(item => {
                     return (
                        <tr key={item.itemId} id="containerRow" onClick={() => this.goBackToDetail(item.productId)}>
                           <th scope="row">
                              <img src={item.thumbnail.url} className="h-50 rounded" alt="" />
                           </th>
                           <td>{item.name}</td>
                           <td>
                              <Money cost={item.each} />
                           </td>
                           <td className="quantity-cart">
                              <div className="d-inline-block quantity-middle ">{item.quantity}</div>
                              <div className="d-inline-block ml-3">
                                 <div
                                    className=" d-block arrow m-1"
                                    id="increment"
                                    onClick={() => this.incrementQTY(item.itemId, 1)}>
                                    <i className="fas fa-caret-up p-2"></i>
                                 </div>
                                 <div
                                    className="d-block arrow mb-4"
                                    id="decrement"
                                    onClick={item.quantity > 1 ? () => this.decrementQTY(item.itemId, -1) : () => {}}>
                                    {
                                       // item.quantity > 1 &&
                                       <i className="fas fa-caret-down p-2"></i>
                                    }
                                 </div>
                              </div>
                           </td>
                           <td>
                              <Money cost={item.total} />
                           </td>
                           <td>
                              <button className="btn-danger" onClick={() => this.itemDeleteFromCart(item.itemId)}>
                                 Delete
                              </button>
                           </td>
                        </tr>
                     );
                  })}
               </tbody>
               <thead>
                  <tr>
                     <th scope="col"></th>
                     <th colSpan="2">
                        <h3>Cart Total :</h3>
                     </th>
                     <th scope="col">
                        <h4>{total.items}</h4>
                     </th>
                     <th scope="2">
                        <h4>
                           <Money cost={total.cost} />
                        </h4>
                     </th>
                     <th scope="col"></th>
                  </tr>
               </thead>
            </table>
            <div className="center">
               <Link to={token ? "/checkout/userCheckout" : "/checkout/guest"} className="guest-checkout-link">
                  <button className="w-25 mh-100 m-4 p-3 bg-warning" onClick={this.userGuestCheckout}>
                     {token ? "Check Out" : "Checkout As Guest"}
                  </button>
               </Link>
            </div>
         </div>
      );
   };
}

function mapStateToProps(state) {
   return {
      cartItem: state.cart.items,
      total: state.cart.total,
      user: state.user.user,
      logged: state.user.loggedIn,
   };
}

export default connect(
   mapStateToProps,
   {
      getActiveCart,
      quantityChange,
      itemDelete,
      CreateUserCheckout,
   },
)(Cart);
