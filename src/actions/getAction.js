import {INCREASE_CART_NUMBER} from './types'

export const getCartAmount = () => {
     return(dispatch) =>{
        dispatch({
            type: INCREASE_CART_NUMBER
        })
    }
} 