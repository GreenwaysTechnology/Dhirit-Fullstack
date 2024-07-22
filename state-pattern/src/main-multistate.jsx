import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

class Review extends React.Component {

    state = {
        like: 0,
        dislike: 0
    }
    //listener
    onLike = () => {
        this.setState((prevState) => {
            //return immutable object
            return { ...prevState, like: prevState.like + 1 }
        })
    }
    onDislike = () => {
        this.setState((prevState) => {
            //return immutable object
            return { ...prevState, dislike: prevState.dislike + 1 }
        })
    }

    render() {
        console.log(this.state)
        return <>
            <h1>Review</h1>
            <h2>Like: {this.state.like} Dislike: {this.state.dislike}</h2>
            <button onClick={this.onLike}>Like</button>
            <button onClick={this.onDislike}>Dislike</button>

        </>
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
