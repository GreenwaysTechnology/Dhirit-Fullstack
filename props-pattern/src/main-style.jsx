import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const Header = () => {

    return <div>
        <h1 style={styles.heading}>Header</h1>
        <h2 style={{ color: 'blue', fontFamily: "sans-serif" }}>Your Company Goes Here</h2>
    </div>
}
const styles = {
    heading: {
        color: 'red'
    }
}


const App = () => {
    return <Header/>   
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
