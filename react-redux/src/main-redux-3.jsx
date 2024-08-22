import { configureStore } from '@reduxjs/toolkit'
import { produce } from 'immer'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider, useDispatch, useSelector } from 'react-redux'

const IncrementReducer = (state = { counter: 10 }, action) => {
    //biz logic
    switch (action.type) {
        case 'counter/increment':
            return produce(state, (draft) => {
                draft.counter += 1
            })
        default:
            //default state
            return state;
    }

}

const DecrementReducer = (state = { counter: 10 }, action) => {
    //biz logic
    switch (action.type) {
        case 'counter/decrement':
            return produce(state, (draft) => {
                draft.counter -= 1
            })
        default:
            //default state
            return state;
    }

}
//create store Object
const appStore = configureStore({
    reducer: {
        //name:Reference
        increment: IncrementReducer,
        decrement: DecrementReducer
    }
})
//react coding
const Increment = () => {
    const state = useSelector((state) => {
        //appState.reducerName
        return state.increment
    })
    const dispatch = useDispatch()

    return <div>
        <h1>Incrementor : {state.counter}</h1>
        <button onClick={() => {
            dispatch({ type: 'counter/increment' })
        }}>+</button>
    </div>
}

const Decrement = () => {
    const state = useSelector((state) => {
        //appState.reducerName
        return state.decrement
    })
    const dispatch = useDispatch()

    return <div>
        <h1>Decrementor : {state.counter}</h1>
        <button onClick={() => {
            dispatch({ type: 'counter/decrement' })
        }}>+</button>
    </div>
}

const Counter = props => {
    return <>
        <Increment />
        <hr />
        <Decrement></Decrement>
    </>
}

const App = () => {
    return <Provider store={appStore}>
        <Counter />
    </Provider>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>

)
