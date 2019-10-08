import React from 'react';
import '../assets/css/app.scss';
import { Route } from 'react-router-dom';
import About from './about/about.jsx';
import Contact from './contact/contact.jsx';
import Footer from './footer/footer.jsx';
import Header from './header/header.jsx';
import Home from './home/home.jsx';
import Services from './services/services.jsx';
import Products from './products/products.jsx'
import  ProductDetails from './products/product_details.jsx'
import Cart from './cart/cart.jsx'
import GuestCheckout from './checkout/guest_checkout'
import GuestOrderDetails from './order/guest_order_details.jsx'
import login from './login/login.jsx'
import CreateAccount from './createAccount/createAccount.jsx'
import UserCheckout from './checkout/userCheckout.jsx'
import UserOrderDetail from './order/user_order_detail.jsx'

const App = () => (
    <div className="app">
        <div className="container">
            <Header/>
            <Route path='/About' component={About}></Route>
            <Route path ='/Contact' component={Contact}></Route>
            <Route path = '/products' exact component={Products}></Route>
            <Route path = '/' exact component={Home}></Route>
            <Route path = '/Services' component={Services}></Route>
            <Route path="/products/:product_id" component={ProductDetails} />
            <Route path = '/cart' component={Cart}/>
            <Route path ='/orders/guest/:order_id' component={GuestOrderDetails}/>
            <Route path='/Sign-In' component={login}></Route>
            <Route path ='/createAccount' component={CreateAccount}></Route>
            <Route path ='/checkout/guest' component={GuestCheckout}/>
            <Route path ='/checkout/userCheckout' component={UserCheckout}></Route>
            <Route path ='/checkout/userOrderDetail' component={UserOrderDetail}></Route>
            <Footer/>
        </div>
    </div>
)

export default App;
