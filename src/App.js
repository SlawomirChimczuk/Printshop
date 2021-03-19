import React, { useEffect } from 'react';
import './App.css';
import basket from './basket.png'
import home from './home.png'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import HomePage from './pages/HomePage';
import BasketPage from './pages/BasketPage';
import {connect} from 'react-redux';
import {getCartAmount} from './actions/getAction';


function App(props) {

    useEffect(()=>{
        getCartAmount();
    }, [])
    return (
        <Router>
            <div className="App">
                <h1>Print Shop</h1>
                <Route path="/" component={HomePage} exact/>
                <Route path="/basket" component={BasketPage} />
                <NavLink to="/basket" className="basket" exact>
                    <img src={basket} alt=""/>
                    <div className="basket-bg"></div>
                </NavLink>
                <div className="counter">{props.cartProps.printsInCart}</div>
                <NavLink to="/" className="home"> 
                    <img src={home} alt=""/>
                </NavLink>
            </div>
        </Router>
    );
}

const mapStateToProps = state => ({
    cartProps: state.cartState
})

export default connect(mapStateToProps, {getCartAmount})(App);
