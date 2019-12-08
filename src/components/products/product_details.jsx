import React, { Component } from "react";
import { connect } from "react-redux";
import { clearProductDetails, getProductDetails, addItemToCart } from "../../action/index";
import Money from "../general/money";
import "bootstrap/dist/css/bootstrap.css";
import "./products.scss";
import Modal from "../general/modal";

class ProductDetails extends Component {
   constructor(props) {
      super(props);
   }
   state = {
      quantity: 1,
   };

   componentDidMount = () => {
      if (this.props.match == undefined) return false;
      const {
         getProductDetails,
         match: { params },
      } = this.props;
      getProductDetails(params.product_id);
   };

   componentWillMount = () => {
      this.props.clearProductDetails();
   };

   incrementQTY = () => {
      const { quantity } = this.state;
      this.setState({
         quantity: quantity + 1,
      });
   };

   decrementQTY = () => {
      const { quantity } = this.state;
      if (quantity == 1) return quantity;
      this.setState({
         quantity: quantity - 1,
      });
   };

   handleAddToCart = async () => {
      const { id } = this.props.details;
      const { quantity } = this.state;
      await this.props.addItemToCart(id, quantity);
      // this.props.history.push("/cart");
   };

   render() {
      const { details } = this.props;
      if (details == null) {
         return <h1>Loading product</h1>;
      }

      return (
         <div className="product-details row">
            <div className="col-md-4 col-sm-12 m-1">
               <Modal
                  imgUrl={details.image.url}
                  {...details}
                  {...this.props}
                  addToCart={this.handleAddToCart}
                  history={this.props.history}
               />
            </div>

            <div className="col-md-7 col-sm-12 detailsparent">
               <div className="details ">
                  <h2 className="m-3">{details.name}</h2>
                  <p className="m-3 fancy">{details.caption}</p>
                  <h3 className="m-3">Description</h3>
                  <p className="m-3">{details.description}</p>
                  <h2 className="m-3 float-right">
                     <Money cost={details.cost} />
                  </h2>
               </div>
               <div className="product-quantity right mb-3">
                  <h2 className="left">Quantity</h2>
                  <div className="quantity-controls">
                     <button className="btn btn-quantity" onClick={this.decrementQTY}>
                        -
                     </button>
                     <span className="quantity"> {this.state.quantity} </span>
                     <button className="btn btn-quantity" onClick={this.incrementQTY}>
                        +
                     </button>
                  </div>
                  {/* <button className="btn addToCart ml-4" onClick={this.handleAddToCart}>
              Add To Cart
            </button> */}
                  <button
                     className="btn btn-info  addToCart ml-4"
                     data-toggle="modal"
                     data-target="#addToCart"
                     alt=""
                     onClick={this.handleAddToCart}>
                     Add to cart
                  </button>
               </div>
            </div>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return {
      details: state.products.details,
   };
}

export default connect(
   mapStateToProps,
   { getProductDetails, clearProductDetails, addItemToCart },
)(ProductDetails);
