import { configureStore } from '@reduxjs/toolkit'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider, useDispatch, useSelector } from 'react-redux'

//redux coding
//reducer 
const CounterReducer = (state = { counter: 10 }, action) => {
    //biz logic
    switch (action.type) {
        case 'counter/increment':
            //immutable logic
            return { ...state, counter: state.counter + 1 }
        case 'counter/decrement':
            //immutable logic
            return { ...state, counter: state.counter - 1 }
        default:
            //default state
            return state;
    }

}
//create store Object
const appStore = configureStore({
    reducer: {
        //name:Reference
        counter: CounterReducer
    }
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
        console.log('increment')
        //dispactch an action to redux
        const incrementAction = {
            type: 'counter/increment'
        }
        dispatch(incrementAction)
    }

    return <div>
        <h1>Counter -React -Redux</h1>
        <h2>Counter : {state.counter}</h2>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: 'counter/decrement' })
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
