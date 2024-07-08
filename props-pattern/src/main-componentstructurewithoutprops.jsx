import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const Page = () => {
    return <h1>Page</h1>
}
const Header = () => {
    return <h1>Header</h1>
}
const Footer = () => {
    return <h1>Footer</h1>
}
const Layout = () => {
    return <div>
        <Header />
        <Page />
        <Footer />
    </div>
}

const App = () => {
    return <>
        <Layout />
    </>

}



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)