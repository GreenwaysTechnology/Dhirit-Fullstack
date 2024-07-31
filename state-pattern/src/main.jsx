import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { produce } from 'immer';

class Posts extends React.Component {
    //declare state
    state = {
        posts: [], //data 
        error: null, //error
        isLoading: false//spinner
    }

    
    async componentDidMount() {
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(url);
            const posts = await response.json()
            //populate data with state
            this.setState((prevState) => {
                return produce(prevState, (draft) => {
                    //fill api response with state
                    draft.posts = posts
                    draft.isLoading = true
                })
            })
        }
        catch (err) {
            this.setState((prevState) => {
                return produce(prevState, (draft) => {
                    //fill api response with state
                    draft.err = err
                })
            })
        }
    }

    render() {
        //show different ui based on different state: conditional rendering
        const { posts, error, isLoading } = this.state
        if (error) {
            return <div>
                <h1>Error : {error.message}</h1>
            </div>
        } else if (!isLoading) {
            return <h2>Loading...</h2>
        } else {
            return <div>
                <h1>Posts</h1>
                <hr />
                <ul>
                    {
                        posts.map(post => {
                            return <li>{post.title}</li>
                        })
                    }
                </ul>
            </div>
        }
    }

}


const App = () => {
    return <>
        <Posts />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
