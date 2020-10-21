import React from 'react';
import {connect} from 'react-redux';
import {addCart} from '../actions/addAction'

const Collection = (props) =>{
    

    return(
        <div className="gallery">
            <img src={props.image} alt="Print"/>
            <p>Print Name: {props.name}</p> 
            <p>Print Price: {props.price} $</p>
            <button onClick={() => props.addCart(props.id)}>Add Print</button>
        </div>
    )
}

export default connect(null, {addCart})(Collection);