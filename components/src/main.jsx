// import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'

// const Hello = ()=> {

//     return <h1>Hello
// }

// const Greeter = () => {
//     return <div>
//         <h1>IBM Welcomes you</h1>
//         <p>This is paragraph</p>
//     </div>
// }

//Fragements
// const Greeter = () => {
//     return <React.Fragment>
//         <h1>IBM Welcomes you</h1>
//         <p>This is paragraph</p>
//     </React.Fragment>
// }

// const Greeter = () => {
//     return <Fragment>
//         <h1>IBM Welcomes you</h1>
//         <p>This is paragraph</p>
//     </Fragment>
// }
const Greeter = () => {
    return <>
        <h1>IBM Welcomes you</h1>
        <p>This is paragraph</p>
    </>
}

// ReactDOM.createRoot(document.getElementById('root')).render(<Hello></Hello>)
ReactDOM.createRoot(document.getElementById('root')).render(<Greeter />)


