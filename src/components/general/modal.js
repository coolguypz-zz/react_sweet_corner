import React from "react";
import "../products/products.scss";
import DetailModal from "./detailModal";
import OptionModal from "./optionModal";

export default props => {
   if (props == null) return false;
   return (
      <div>
         <img
            src={props.imgUrl}
            className="img-thumbnail zoom detailImg"
            data-toggle="modal"
            data-target="#productDetailsShow"
            alt=""
         />

         {/* <!-- Modal --> */}
         <div
            className="modal fade  bd-example-modal-lg"
            id="productDetailsShow"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <DetailModal {...props} />
         </div>

         {/* <button className="btn btn-info" data-toggle="modal" data-target="#addToCart" alt=""> Add to cart</button> */}

         <div
            className="modal fade  bd-example-modal-lg"
            id="addToCart"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <OptionModal {...props} />
         </div>
      </div>
   );
};
