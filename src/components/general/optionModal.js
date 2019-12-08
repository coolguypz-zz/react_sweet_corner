import React from "react";

export default props => {
   return (
      <div className="modal-dialog" role="document">
         <div className="modal-content">
            <div className="modal-header">
               <h5 className="modal-title" id="exampleModalLabel">
                  {props.name}
               </h5>
               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
               </button>
            </div>
            <div className="modal-body">
               <div className="modal-title ml-3 row" id="exampleModalLabel">
                  <div
                     className="col-md-6 close center"
                     data-dismiss="modal"
                     aria-label="Close"
                     onClick={() => props.history.push("/products")}>
                     <button className="btn btn-info">Continue Shopping</button>
                  </div>
                  <div
                     className="col-md-6 close center"
                     data-dismiss="modal"
                     aria-label="Close"
                     onClick={()=>props.history.push("/cart")}>
                     <button className="btn btn-info">Go to Cart</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

