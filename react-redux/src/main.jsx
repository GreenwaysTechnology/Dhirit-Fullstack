import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { StrictMode,useEffect} from 'react'
import { createRoot } from 'react-dom/client'
import { Provider, useDispatch, useSelector } from 'react-redux'
import logger from 'redux-logger'

//thunk code:middleware code
const getPosts = createAsyncThunk('posts/getPosts', async (thunkAPI) => {
    //api call
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return posts
})

//slice :
const initialState = {
    entities: [],
    loading: false,

}
const postsSlice = createSlice({
    initialState,
    name: 'posts',
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getPosts.pending, (state, action) => {
            state.loading = true
        }).addCase(getPosts.fulfilled, (state, { payload }) => {
            state.loading = false
            state.entities = payload
        }).addCase(getPosts.rejected, (state, action) => {
            state.loading = false
        })
    }
})
const postReducer = postsSlice.reducer

//create store Object
const appStore = configureStore({
    reducer: {
        posts: postReducer
    },
    middleware: (getDefaultMiddleware => getDefaultMiddleware().concat(logger))
})
//react coding

function Post() {
    const dispatch = useDispatch()
    const { entities, loading } = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    if (loading) return <p>Loading...</p>

    return (
        <div>
            <h2>Blog Posts</h2>
            {entities.map((post) => (
                <p key={post.id}>{post.title}</p>
            ))}
        </div>
    )
}

const App = () => {
    return <Provider store={appStore}>
            <Post></Post>
    </Provider>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>

)
