import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import POSTS from './mock-data/posts'

const Posts = ({ posts }) => {
    return <>
        {
            posts.map(post => {
                return <section key={post.id}>
                     <h1>{post.id}</h1>
                     <h3>{post.title}</h3>
                     <p style={{fontFamily:'sans-serif', color:'Highlight'}}>{post.body}</p>
                </section>
            })
        }
    </>
}

const App = () => {
    return <div>
        <h1>POSTS</h1>
        <Posts posts={POSTS} />
    </div>

}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)