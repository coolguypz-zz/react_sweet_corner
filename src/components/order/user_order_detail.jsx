import React from "react";
import { getActiveCart } from "../../action/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import OrderFomat from "./orderFomat";
import Item from "./item.jsx";

const userOrderDetail = () => {
   const userCheckout = useSelector(state => state.order.details);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getActiveCart());
   });
   if (userCheckout == null) return false;
   return (
      <div className="row">
         <div className=" center mb-4 mt-4 col-md-8 offset-md-2">
            <h1 className=" mr-2 text-info d-inline text-uppercase">{}</h1>
            <h1 className=" d-inline">Order Details</h1>
         </div>
         <OrderFomat orderDetail={userCheckout} />
         <div className="col-md-12">
            <Item item={userCheckout.items} {...userCheckout} />
         </div>
      </div>
   );
};

export default userOrderDetail;
