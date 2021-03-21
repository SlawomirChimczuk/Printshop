import {ADD_PRINT_CART} from './types'

export const addCart = (printName) =>{
    return (dispatch) => {
        dispatch({
            type: ADD_PRINT_CART,
            payload: printName
        })
    }
} 