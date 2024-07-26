import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

class Review extends React.Component {

    state = {
        house: {
            name: 'RavenClaw',
            points: 10
        }
    }

    render() {
        return <>
            <h1>Review</h1>
            <h2>House {this.state.house.name}</h2>
            <h2>Points {this.state.house.points}</h2>
            <button onClick={() => {
                this.setState((prevState) => {
                    //return immutable object
                    return {
                        ...prevState, //level-0 copy
                        house: {
                            ...prevState.house, // level -1 copy
                            points: prevState.house.points + 2
                        }

                    }
                })
            }}>Like</button>

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