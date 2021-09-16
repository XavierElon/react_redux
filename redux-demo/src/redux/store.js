import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import cakeReducer from './cakes/cakeReducer'
import iceCreamReducer from './iceCreams/IceCreamReducer'
import rootReducer from './rootReducer'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))
// const store = createStore(cakeReducer)

export default store