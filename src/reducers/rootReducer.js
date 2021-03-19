import {combineReducers} from 'redux';
import printsReducer from './printsReducer';
import cartReducer from './cartReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    prints: printsReducer,
    cartState: cartReducer,
    form: formReducer
})

export default rootReducer;