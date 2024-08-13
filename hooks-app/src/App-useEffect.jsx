import React, { useEffect, useState } from "react"

const LifeCycle = () => {

    useEffect(() => {
        console.log('ComponentDidMount')
        return ()=> {
            console.log('Component Will unMount')
        }
    }, [])

}


export default function App() {
    return <div>
        <LifeCycle />
    </div>
}