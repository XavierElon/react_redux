const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// Action
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'Buy ice cream action'
    }
}


// Reducer function
// (previousState, action) => newState
// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 10
}

// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }

//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }

//         default: return state
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer)
// const store = createStore(reducer)
const cakeStore = createStore(cakeReducer)
const iceCreamStore = createStore(iceCreamReducer)
console.log('Initial state', store.getState())
// console.log('Initial state', cakeStore.getState())
// console.log('Initial state', iceCreamStore.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
const unsubscribeCake = cakeStore.subscribe(() => console.log('Updated state', cakeStore.getState()))
const unsubscribeIceCream = iceCreamStore.subscribe(() => console.log('Updated state', iceCreamStore.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())

// cakeStore.dispatch(buyCake())
// cakeStore.dispatch(buyCake())
// cakeStore.dispatch(buyCake())
// iceCreamStore.dispatch(buyIceCream())
// iceCreamStore.dispatch(buyIceCream())
// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())
unsubscribeCake()
unsubscribeIceCream()