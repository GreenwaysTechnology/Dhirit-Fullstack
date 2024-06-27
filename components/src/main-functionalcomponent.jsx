import React from 'react'
import ReactDOM from 'react-dom/client'

//functional pattern
// function Hello(){
//     //jsx element
//     return <h1>
//         Hello
//     </h1>
// }

// const Hello = () => {
//         return <h1>
//         Hello
//     </h1>
// }

const Hello = () => <h1>
    Hello
</h1>



// ReactDOM.createRoot(document.getElementById('root')).render(Hello())
ReactDOM.createRoot(document.getElementById('root')).render(<Hello></Hello>)

