import React from "react";
import { getActiveCart, getUserCheckout, getUserCheckoutItem } from "../../action/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Money from "../general/money";
import { Link } from "react-router-dom";

const userCheckout = props => {
   const userCheckout = useSelector(state => state.user);

   const dispatch = useDispatch();

   const getId = orderId => {
      dispatch(getUserCheckoutItem(orderId));
   };

   useEffect(() => {
      dispatch(getActiveCart());
      // dispatch(getUserCheckout())
   });

   if (userCheckout.checkout == null) return false;
   const lastOrderCreate = userCheckout.checkout.orders;
   if (lastOrderCreate == undefined) return false;
   console.log("lastOrderCreate", lastOrderCreate);
   return (
      <table className="table table-striped">
         <thead>
            <tr>
               <th scope="col">#</th>
               <th scope="col">create Date</th>
               <th scope="col">itemCount</th>
               <th scope="col">status</th>
               <th scope="col">total</th>
            </tr>
         </thead>
         <tbody>
            {lastOrderCreate.map((v, i) => {
               return (
                  <tr className="userOrderList" key={i} onClick={() => getId(v.id)}>
                     <th scope="row">{i}</th>
                     <td>{new Date(v.createdAt).toLocaleString()}</td>
                     <td>{v.itemCount}</td>
                     <td className={v.status == "Pending" ? "text-warning" : "text-sucess"}>{v.status}</td>
                     <td>
                        <Money cost={v.total} />
                     </td>
                     <td>
                        <Link to="/checkout/userOrderDetail" className="btn btn-primary">
                           Check out
                        </Link>
                     </td>
                  </tr>
               );
            })}
         </tbody>
      </table>
   );
};

export default userCheckout;


