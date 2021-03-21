import { REMOVE_FROM_CART } from './types';

export const removeFromCart = (id) => {
    return (dispatch) => {
        console.log('123')
        dispatch({
                type: REMOVE_FROM_CART,
                payload: id
            })
    }
}
