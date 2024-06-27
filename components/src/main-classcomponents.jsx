import React from 'react'
import ReactDOM from 'react-dom/client'

class Hello extends React.Component {

    render(){
        return <h1>
            Hello
        </h1>
    }

}

ReactDOM.createRoot(document.getElementById('root')).render(<Hello></Hello>)

