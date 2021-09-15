import { createStore } from 'redux'
import cakeReducer from './cakes/cakeReducer'
import iceCreamReducer from './iceCreams/IceCreamReducer'
import rootReducer from './rootReducer'

const store = createStore(rootReducer)
// const store = createStore(cakeReducer)

export default store