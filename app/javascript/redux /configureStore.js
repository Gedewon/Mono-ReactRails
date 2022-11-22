import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import Greeting from './greeting'

const rootReducer = combineReducers({
    Greeting
});

const store = createStore(rootReducer, 
  applyMiddleware(thunk),
);

export default store;