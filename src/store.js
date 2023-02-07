import rootReducer from "./reducers";
import {createStore} from 'redux'

const store =  createStore(rootReducer)

console.log('Hello',store);
export default store;

