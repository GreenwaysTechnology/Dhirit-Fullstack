import { configureStore, createReducer } from '@reduxjs/toolkit'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider, useDispatch, useSelector } from 'react-redux'

const initialState ={ counter: 10 }

const increment = 'counter/increment'
const decrement ='counter/decrement'
//Redux toolkit api:
const CounterReducer=createReducer(initialState,(builder)=>{
    builder.addCase(increment,(state,action)=>{
        state.counter++
    }).addCase(decrement,(state,action)=>{
        state.counter--
    }).addDefaultCase((state,action)=>{})
})


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
