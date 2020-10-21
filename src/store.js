import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer'; 
import thunk from 'redux-thunk';

const installState = {};
const middleware = [thunk];

const store = createStore(rootReducer, installState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
 