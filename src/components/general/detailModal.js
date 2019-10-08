import React from "react";

export default props => {
   return (
      <div className="modal-dialog" role="document" data-target="#productDetailsShow">
         <div className="modal-content">
            <div className="modal-header">
               <h5 className="modal-title" id="productDetailsShow">
                  {props.name}
               </h5>
               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
               </button>
            </div>

            <div className="modal-body">
               <div className="modal-title ml-3 row" id="productDetailsShow">
                  <div className="col-md-12">
                     <p>Caption : {props.caption}</p>
                     <p>Calories : {props.calories}</p>
                  </div>
                  <div className="col-md-6">
                     <h5>Allergy</h5>
                     <p>Dairy : {props.allergy.dairy ? "true" : "false"}</p>
                     <p>Gluten : {props.allergy.gluten ? "true" : "false"}</p>
                     <p>Nuts : {props.allergy.nuts ? "true" : "false"}</p>
                  </div>
                  <div className="col-md-6">
                     <h5>Nutrition</h5>
                     <p>Carbs : {props.nutrition.carbs}</p>
                     <p>Fat : {props.nutrition.fat}</p>
                     <p>Sugar : {props.nutrition.sugar}</p>
                  </div>
               </div>

               <img
                  src={props.imgUrl}
                  className="img-thumbnail"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#productDetailsShow"
                  alt=""
               />
            </div>
         </div>
      </div>
   );
};
