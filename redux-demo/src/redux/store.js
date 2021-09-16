import { createStore } from 'redux'
import logger from 'redux-logger'
import cakeReducer from './cakes/cakeReducer'
import iceCreamReducer from './iceCreams/IceCreamReducer'
import rootReducer from './rootReducer'

const store = createStore(rootReducer, applyMiddleware(logger))
// const store = createStore(cakeReducer)

export default store