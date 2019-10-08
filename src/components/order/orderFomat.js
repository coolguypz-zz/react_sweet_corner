import React from "react";
import Money from "../general/money";

export default props => {
   const { orderDetail } = props;

   return (
      <>
         <div className="row">
            <div className="col-md-12 text-center d-block">
               <h2 className="d-inline">Status:</h2>
               <h2 className="text-warning d-inline ml-3">{orderDetail.status}</h2>
            </div>
            <div className="col-md-12 text-center d-block mt-3 mb-3">
               <h3 className="d-inline">Order #:</h3>
               <h3 className="text-info d-inline ml-3">{orderDetail.id}</h3>
            </div>
            <div className="col-md-12 text-center d-block mt-3 mb-3">
               <h5 className="d-inline text-secondary">** Save order number to check order status in the future **</h5>
            </div>
            <div className="col-md-12  d-block mt-2 mb-2">
               <h4 className="d-inline">Order Placed : {new Date(orderDetail.createdAt).toLocaleString()}</h4>
            </div>
            <div className="col-md-12  d-block mt-2 mb-2">
               <h4 className="d-inline">
                  Order Total Items:{" "}
                  {orderDetail.itemCount == 1 ? `${orderDetail.itemCount} Piece` : `${orderDetail.itemCount} Pieces`}{" "}
               </h4>
            </div>
            <div className="col-md-12  d-block mt-2 mb-2">
               <h4 className="d-inline">
                  Order Total Cost: <Money cost={orderDetail.total} />
               </h4>
            </div>
            <div className="col-md-12  d-block mt-2 mb-2">
               <h4 className="d-inline">Order Items:</h4>
            </div>
         </div>
      </>
   );
};
