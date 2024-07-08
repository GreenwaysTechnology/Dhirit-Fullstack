import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// const Page = (props) => {
//     return <div>
//         {props.children}
//     </div>
// }

const User = (props) => {
    return <div>
        <img src={props.imageSrc} alt='Your Image' />
        <h1>{props.id}</h1>
        <p>{props.userName}</p>
        <p>{props.mail}</p>
        <p>{props.status ? "Available" : "Not Available"}</p>
    </div>
}
const Page = ({ children }) => {
    return <div>
        <p>Constant info</p>
        {children}
    </div>
}
const Header = (props) => {
    return <h1>{props.children}</h1>
}
const Footer = () => {
    return <h1>Footer</h1>
}
const Layout = (props) => {
    return <div>
        {props.children}
    </div>
}

const App = () => {
    const imageSrc = 'https://i.imgur.com/7vQD0fPs.jpg'
    return <>
        <Layout>
            <Header>
                <h1>Your Company</h1>
            </Header>
            <Page>
                <section>
                    This is section
                </section>
                <section>
                    This is section
                </section>
                <section>
                    This is section
                </section>
                <User userName={"Ram"} id={2} mail={"ram@gmail.com"} status={true} imageSrc={imageSrc} />
            </Page>
            <Footer />
        </Layout>
    </>

}



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)