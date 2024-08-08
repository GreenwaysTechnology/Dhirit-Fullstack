import React, { useState } from "react"
import { produce } from "immer"

const Review = () => {

    const [review, setReview] = useState({ like: 0, dislike: 0 })

    return <>
        <h1>{review.like} {review.dislike}</h1>
        <button onClick={() => {
            setReview((prevState) => {
                // return { ...prevState, like: prevState.like + 1 }
                return produce(prevState, (draft) => {
                    draft.like += 1
                })
            })
        }}>Like</button>
        <button onClick={() => {
            setReview((prevState) => {
                // return { ...prevState, dislike: prevState.dislike + 1 }
                return produce(prevState, (draft) => {
                    draft.dislike += 1
                })
            })
        }}>Dislike</button>
    </>

}


export default function App() {
    return <div>
        <Review />
    </div>
}