import { combineReducers } from 'redux'
import cakeReducer from './cakes/cakeReducer'
import iceCreamReducer from './iceCreams/IceCreamReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer