    import { configureStore } from '@reduxjs/toolkit'
    import { produce } from 'immer'
    import { StrictMode } from 'react'
    import { createRoot } from 'react-dom/client'
    import { Provider, useDispatch, useSelector } from 'react-redux'

    const IncrementReducer = (state = { counter: 10 }, action) => {
        //biz logic
        switch (action.type) {
            case 'counter/incrementBy':
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

        return <div>
            <h1>Incrementor : {state.counter}</h1>
            <button onClick={() => {
                //passing input to the reducer via action object
                dispatch({ type: 'counter/incrementBy', payload: 5 })
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
