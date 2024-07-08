import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const List = props => {
    return <div>
        <ul>
            {
                props.names.map(name=>{
                    return <li>{name}</li>
                })
            }
        </ul>
    </div>
}

const App = () => {
    const names = ['Subramanian', 'Murugan', 'Geetha', 'DhiviyaSree', 'Shirisha']
    return <div>
        <h1>List</h1>
        <List names={names}/>
    </div>

}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)