import React from "react";
import { useDispatch } from "react-redux";
import { logoutSignIn } from "../../action/index";
import { Link } from "react-router-dom";
import { getUserCheckout } from "../../action/index";
import "./user.scss";

const loginList = props => {
   const dispatch = useDispatch();

   const logout = () => {
      dispatch(logoutSignIn());
   };
   const yourOrder = props => {
      dispatch(getUserCheckout());
   };

   const token = localStorage.getItem("token");

   return (
      <div className="dropdown-menu loginList" aria-labelledby="navbarDropdown">
         <div className="dropdown-item">
            {token ? (
               <Link to="/checkout/userCheckout" className="dropdown-item " onClick={yourOrder}>
                  Your Order
               </Link>
            ) : (
               ""
               //  <div className="dropdown-item" disabled>
               //     Your Order
               //  </div>
            )}
         </div>
         <div className="dropdown-item">
         {token ? <Link to="/Sign-In">Swich Account</Link> : ""}
         </div>
         <div className="dropdown-item">Your Account</div>
         <hr />
         <div className="dropdown-item dropdownList">
            {token ? <div onClick={logout}>Log Out</div> : <Link to="/Sign-In">Log In</Link>}
         </div>
      </div>
   );
};

export default loginList;
