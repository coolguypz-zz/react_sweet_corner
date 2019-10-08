import types from "./type";
import axios from "axios";

const BASE_URL = "http://api.sc.lfzprototypes.com";

function tokenCheck() {
   const cartToken = localStorage.getItem("sc-cart-token");
   const token = localStorage.getItem("token");
   if (token) {
     localStorage.removeItem("sc-cart-token")
      return {
         headers: {
            Authorization: localStorage.getItem("token"),
         },
      };
   } else if (cartToken) {
      return {
         headers: {
            "X-Cart-Token": localStorage.getItem("sc-cart-token"),
         },
      };
   } else {
      return null;
   }
}

export const getAllProducts = () => async dispatch => {
   try {
      const resp = await axios.get(`${BASE_URL}/api/products`);
      dispatch({
         type: types.GET_ALL_PRODUCTS,
         products: resp.data.products,
      });
   } catch (err) {
      console.log(err);
   }
};

export const getProductDetails = productId => async dispatch => {
   try {
      const response = await axios.get(`${BASE_URL}/api/products/${productId}`);
      dispatch({
         type: types.GET_PRODUCT_DETAILS,
         product: response.data,
      });
   } catch (err) {
      console.log(err);
   }
};

export const clearProductDetails = () => ({ type: types.CLEAR_PRODUCT_DETAILS });

export const addItemToCart = (productId, quantity) => async dispatch => {
   try {
      const axiosConfig = tokenCheck();

      const resp = await axios.post(
         `${BASE_URL}/api/cart/items/${productId}`,
         {
            quantity: quantity,
         },
         axiosConfig,
      );

      localStorage.setItem("sc-cart-token", resp.data.cartToken);

      dispatch({
         type: types.ADD_ITEM_TO_CART,
         cartTotal: resp.data.total,
      });
   } catch (error) {
      console.log("Add Item To Cart Error:", error.message);
   }
};

export const getActiveCart = () => async dispatch => {
   try {
      const axiosConfig = tokenCheck();

      const resp = await axios.get(`${BASE_URL}/api/cart`, axiosConfig);

      dispatch({
         type: types.GET_ACTIVE_CART,
         cart: resp.data,
      });
   } catch (err) {
      console.error(err);
   }
};

export const getCartTotals = () => async dispatch => {
   try {
      const axiosConfig = tokenCheck();

      const resp = axios.get(`${BASE_URL}/api/cart/totals`, axiosConfig);

      dispatch({
         type: types.GET_CART_TOTALS,
         total: resp.data,
      });
   } catch (erro) {
      console.error(erro);
   }
};

export const createGuessOrder = guest => async dispatch => {
   try {
      const axiosConfig = tokenCheck();

      const res = await axios.post(`${BASE_URL}/api/orders/guest`, guest, axiosConfig);

      localStorage.removeItem("sc-cart-token");

      dispatch({
         type: types.CREATE_GUEST_ORDER,
         order: {
            id: res.data.id,
            message: res.data.message,
         },
      });

      return {
         email: guest.email,
         order_Id: res.data.id,
      };
   } catch (error) {
      console.log("Error from Guess checkout", error);
   }
};

export const getGuestOrderDetails = (email, orderId) => async dispatch => {
   try {
      const res = await axios.get(`http://api.sc.lfzprototypes.com/api/orders/guest/${orderId}?email=${email}`);

      dispatch({
         type: types.GET_GUEST_ORDER_DETAILS,
         orderDetail: res,
      });
   } catch (err) {
      console.log("getGuestOrderDetails", err);
   }
};

export const itemDelete = id => async dispatch => {
   try {
      const axiosConfig = tokenCheck();

      const res = await axios.delete(`${BASE_URL}/api/cart/items/${id}`, axiosConfig);

      dispatch({
         type: types.ITEM_DELETE,
         data: res,
      });
   } catch (error) {
      console.log("itemDelete has error", error);
   }
};

export const quantityChange = (id, quantity) => async dispatch => {
   try {
      const axiosConfig = tokenCheck();

      const res = await axios.patch(
         `${BASE_URL}/api/cart/items/${id}`,
         {
            quantity: quantity,
         },
         axiosConfig,
      );

      dispatch({
         type: types.ADD_QTY,
         payload: res.data,
      });
   } catch (e) {
      console.log("quantityChange has e", e);
   }
};

export const createCustomerAccount = value => async dispatch => {
   try {
      const payload = {
         email: value.email,
         firstName: value.firstname,
         lastName: value.lastname,
         password: value.password,
      };

      const axiosConfig = tokenCheck();

      const res = await axios.post(`${BASE_URL}/auth/create-account`, payload, axiosConfig);

      localStorage.setItem("sc-cart-token", res.data.cartToken);
   } catch (error) {
      console.log("singIn error", error);
   }
};

export const signIn = value => async dispatch => {
   try {
      const axiosConfig = tokenCheck();
      const payload = {
         email: value.email,
         password: value.password,
      };
      const res = await axios.post(`${BASE_URL}/auth/sign-in`, payload, axiosConfig);
      dispatch({
         type: types.USER_LOGIN,
         payload: res.data,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.removeItem("sc-cart-token");
   } catch {
      return 401;
   }
};

export const getJWTsignIn = () => async dispatch => {
   try {
      const axiosConfig = tokenCheck();

      const res = await axios.get(`${BASE_URL}/auth/sign-in`, axiosConfig);
      localStorage.removeItem("sc-cart-token");

      dispatch({
         type: types.ACTIVE_USER_LOGIN,
         payload: res.data,
      });
   } catch (err) {
      console.error(err);
   }
};

export const CreateUserCheckout = () => async dispatch => {
   try {
      const axiosConfig = tokenCheck();
      await axios.post(`${BASE_URL}/api/orders`, {}, axiosConfig);
      const res= await axios.get(`${BASE_URL}/api/orders`, axiosConfig);
      console.log("getUserCheckout-res", res);
      // localStorage.removeItem("sc-cart-token");
      dispatch({
         type: types.GET_USER_CHECKOUT,
         payload: res.data,
      });
   } catch (err) {
      console.error(err);
   }
};

export const getUserCheckout = () => async dispatch => {
  try {
     const axiosConfig = tokenCheck();
     const res= await axios.get(`${BASE_URL}/api/orders`, axiosConfig);

     dispatch({
        type: types.GET_USER_CHECKOUT,
        payload: res.data,
     });
  } catch (err) {
     console.error(err);
  }
};

export const getUserCheckoutItem = (orderId) => async dispatch => {
  try {
    console.log("getUserCheckoutItem-orderId", orderId);

     const axiosConfig = tokenCheck();
     const res= await axios.get(`${BASE_URL}/api/orders/${orderId}`, axiosConfig);
     console.log("getUserCheckoutItem-res", res);
     dispatch({
        type: types.GET_USER_ORDER_DETAIL,
        payload: res.data,
     });
  } catch (err) {
     console.error(err);
  }
};

export const logoutSignIn = () => {
   localStorage.removeItem("token");
   return {
      type: types.LOG_OUT,
      payload: null,
   };
};




