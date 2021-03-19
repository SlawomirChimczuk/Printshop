import React, { Fragment } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import { removeFromCart } from '../actions/removeAction';
import { showFormHandle } from '../actions/showForm';
import { PaymentForm } from './PaymentForm';


const BasketPage = ({cartProps, removeFromCart, showFormHandle}) => {
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
            {cartProps.cartPrice === 0 ? <h2 className="empty">Your basket is empty!</h2> : <h2>TOTAL PRICE: {cartProps.cartPrice}$</h2>}
            {cartProps.cartPrice === 0 ? false : <button className="next" onClick={() => showFormHandle()}>Go to payment</button>}
            {cartProps.showForm ? (cartProps.cartPrice !== 0 ? <PaymentForm /> : cartProps.showForm = false ) : false}
        </Router>
    );
}

const mapStateToProps = state => ({
    cartProps: state.cartState
});
 
export default connect(mapStateToProps, {removeFromCart,showFormHandle})(BasketPage);