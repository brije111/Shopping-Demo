import { combineReducers } from 'redux'
import CartReducer from './CartReducer'
import ProductReducer from './ProductReducer'

const rootReducer = combineReducers({
    r_product:ProductReducer,
    r_cart:CartReducer
})

export default rootReducer;