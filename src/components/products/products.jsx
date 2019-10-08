import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllProducts, getActiveCart } from "../../action/index.js";
import ProductItem from "./product_item";
import "./products.scss";
import "bootstrap/dist/css/bootstrap.css";

class Products extends Component {
  goToDetails = id => {
    this.props.history.push(`/products/${id}`);
  };

  componentDidMount = () => {
    this.props.getAllProducts();
    this.props.getActiveCart();
  };

  render() {
    const { products } = this.props;
    const productElements = products.map(product => {
      return <ProductItem key={product.id} {...product} goToDetails={() => this.goToDetails(product.id)} />;
    });
    return (
      <div className="products">
        <h1 className="center m-4">Shop our cupcakes</h1>
        <div className="row mb-5">{productElements}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products.list,
  };
}

export default connect(
  mapStateToProps,
  {
    getAllProducts,
    getActiveCart,
  },
)(Products);
