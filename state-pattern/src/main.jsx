import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

class Review extends React.Component {

    state = {
        like: 10
    }
    //listener
    onIncrement = () => {
        console.log('onincrement')
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
