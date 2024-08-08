import React, { useState } from "react"

const Review = () => {
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)
    return <>
        <h1>{like} {dislike}</h1>
        <button onClick={() => {
            setLike(like + 1)
        }}>Like</button>
        <button onClick={() => {
            setDislike(dislike + 1)
        }}>Dislike</button>
    </>

}


export default function App() {
    return <div>
        <Review />
    </div>
}