import {combineReducers} from 'redux';
import printsReducer from './printsReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    prints: printsReducer,
    cartState: cartReducer
})

export default rootReducer;