import React from 'react';
import '../assets/css/app.scss';
import { Route } from 'react-router-dom';
import About from './about/about.jsx';
import Contact from './contact/contact.jsx';
import Footer from './footer/footer.jsx';
import Header from './header/header.jsx';
import Home from './home/home.jsx';
import Services from './services/services.jsx';

const App = () => (
    <div className="app">
        <div className="container">
            <Header/>
            <Route path='/About' component={About}></Route>
            <Route path ='/Contact' component={Contact}></Route>
            <Route path = '/' exact component={Home}></Route>
            <Route path = '/Services' component={Services}></Route>
            <Footer/>
        </div>
    </div>
);

export default App;
