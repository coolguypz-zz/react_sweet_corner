import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import productsReducer from './products_reducer';
import cart_reducer from './cart_reducer';
import order_reducer from './order_reducer'
import user_reducer from './user_reducer'



const rootReducer = combineReducers({
  form: formReducer,
  products: productsReducer,
  cart:cart_reducer,
  order:order_reducer,
  user:user_reducer,
});

export default rootReducer;
