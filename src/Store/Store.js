import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from './reducers/RootReducers';

const store = createStore(RootReducer,applyMiddleware(thunk))

export default store;