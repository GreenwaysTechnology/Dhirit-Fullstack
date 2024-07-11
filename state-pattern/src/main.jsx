import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

class Review extends React.Component {

    state = {
        like: 10
    }
    //listener
    onIncrement = () => {
        //pure function and immutable.
        this.setState((prevState) => {
            //return immutable
            // return {
            //     like: prevState.like + 1
            // }
            // return Object.assign({}, prevState, { like: prevState.like + 1 })
            return { ...prevState, like: prevState.like + 1 }
        })
    }

    render() {
        console.log(this.state)
        const { like } = this.state
        return <div>
            <h1>Review</h1>
            {/* <h2>Like : {this.state.like}</h2> */}
            <h2>Like : {like}</h2>
            <button onClick={this.onIncrement}>Like</button>
        </div>
    }
}

const App = () => {
    return <Review />
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
