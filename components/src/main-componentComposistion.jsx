import ReactDOM from 'react-dom/client'


const Profile = () => {
    return <section>
        <h3>Alan Turing</h3>
        <h4>Born : 23 June 1912</h4>
        <h4>Died : 7 June 1954 (aged 41)
            Wilmslow, Cheshire, England
        </h4>
    </section>
}

function Gallery() {
    return <>
        <h1>Scientists / Computer</h1>
        <Profile />
        <Profile />
        <Profile />
    </>
}

const App = <>
    <div>
        <Gallery />
    </div>
</>


ReactDOM.createRoot(document.getElementById('root')).render(<App />)


