import { createStore, combineReducers, applyMiddleware } from 'redux'
// Redux thunk just allows to make asynchronous request for action creater// It is sort of like a middleware
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { producListReducers } from './reducers/productReducers'

const reducer = combineReducers({
    productList: producListReducers,
})
const initialState = {}
const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store