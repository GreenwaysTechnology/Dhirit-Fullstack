import { configureStore } from '@reduxjs/toolkit'
import { produce } from 'immer'
import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider, useDispatch, useSelector } from 'react-redux'

//action constant
const incrementBy = 'counter/incrementBy'


const IncrementReducer = (state = { counter: 10 }, action) => {
    //biz logic
    switch (action.type) {
        case incrementBy:
            return produce(state, (draft) => {
                draft.counter += action.payload
            })
        default:
            //default state
            return state;
    }

}
//create store Object
const appStore = configureStore({
    reducer: {
        increment: IncrementReducer,
    }
})
//react coding
const Increment = () => {
    const state = useSelector((state) => {
        //appState.reducerName
        return state.increment
    })
    const dispatch = useDispatch()

    const [input, setInput] = useState(2)


    //action creator

    function incrementAction(payload) {
        return {
            type: incrementBy,
            payload: payload
        }
    }


    return <div>
        <h1>Incrementor : {state.counter}</h1>
        <h3>{input}</h3>
        <input type='number' onInput={(evt) => {
            setInput(evt.target.value)
        }} value={input} />
        <button onClick={() => {
            //passing input to the reducer via action object
            dispatch(incrementAction(parseInt(input)))
        }}>+</button>
    </div>
}

const Counter = props => {
    return <>
        <Increment />
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