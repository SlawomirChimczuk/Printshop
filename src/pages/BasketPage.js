import React, { Fragment } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import { removeFromCart } from '../actions/removeAction';

const BasketPage = ({cartProps, removeFromCart}) => {
    let printsInCart = [];

    Object.keys(cartProps.printsItems).forEach(function(item){
        if(cartProps.printsItems[item].added){
            printsInCart.push(cartProps.printsItems[item])
        }
    }) 

    printsInCart = printsInCart.map(printsItems => {
        return (
            <Fragment key={printsItems.id}>
                <div className="cart">
                    <img src={printsItems.image} alt="Print" />
                    <p>Print Name: <span>{printsItems.name}</span></p>
                    <p>Print Price: <span>{printsItems.price}$ </span></p>
                    <p>Quantity <span>{printsItems.number}</span></p>
                    <button onClick={() => removeFromCart(printsItems.id)}>Remove</button>
                </div>
            </Fragment>
        )
    });

    return ( 
        <Router>
            <div>
                {printsInCart}
            </div>
            <h2>TOTAL PRICE: {cartProps.cartPrice}</h2>
            
        </Router>
    );
}

const mapStateToProps = state => ({
    cartProps: state.cartState
});
 
export default connect(mapStateToProps, {removeFromCart})(BasketPage);