import ReactDOM from 'react-dom/client'

//DOM element creation
//here we mix html + js code => jsx
const HeadingElement = <h1>Hello React!</h1>
// const rootElement =  document.getElementById('root')
// const root=ReactDOM.createRoot(rootElement)
// //vdom into real dom
// root.render(HeadingElement)

ReactDOM.createRoot(document.getElementById('root')).render(HeadingElement)