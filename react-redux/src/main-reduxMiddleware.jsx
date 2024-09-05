import { configureStore, createSlice } from '@reduxjs/toolkit'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider, useDispatch, useSelector } from 'react-redux'
import logger from 'redux-logger'

const counterSlice = createSlice({
    initialState: { counter: 0 },
    name: 'counter',
    reducers: {
        //reducer logic
        increment(state, action) {
            //logic
            state.counter++
        },
        decrement(state, action) {
            //logic
            state.counter--
        }
    }
})

//Extract Reducer from slice
const CounterReducer = counterSlice.reducer

//Extract actions (actionCreator) from the slice
const {increment,decrement} = counterSlice.actions

//create store Object
const appStore = configureStore({
    reducer: {
        //name:Reference
        counter: CounterReducer
    },
    middleware:(getDefaultMiddleware=>getDefaultMiddleware().concat(logger))
})
//react coding

const Counter = props => {

    //read value from redux
    const state = useSelector((state) => {
        //appState.reducerName
        return state.counter
    })
    const dispatch = useDispatch()

    const onIncrement = () => {
         dispatch(increment())
    }

    return <div>
        <h1>Counter -React -Redux</h1>
        <h2>Counter : {state.counter}</h2>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch(decrement())
        }}>-</button>

    </div>
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
