import Data from './data.json';
import { v4 as uuid } from 'uuid';
import { DISPLAY_ITEMS } from "../actions/types"

const initialState = Data;

const printsReducer = (state = initialState, action) =>{
    const {type,payload} = action;

    switch (type) {
        case DISPLAY_ITEMS:
        return [...state, {
            id: uuid(),
            image: payload.image,
            name: payload.name,
            price: payload.price
        }]
        
        default:
        return state;
    }
}
        
export default printsReducer
