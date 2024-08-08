import React, { useState } from "react"

class Review extends React.Component {

  state = {
    like: 0
  }
  onIncrement = () => {
    this.setState((prevState) => {
      return {
        like: prevState.like + 1
      }
    })
  }
  render() {
    return <>
      <h1>{this.state.like}</h1>
      <button onClick={this.onIncrement}>+</button>
    </>
  }
}

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const onIncrement = () => {
    // setCounter((prevState) => {
    //   return prevState + 1
    // })
    setCounter(counter + 1)
  }
  return <>
    <h1>{counter}</h1>
    <button onClick={onIncrement}>+</button>
  </>

}


export default function App() {
  return <div>
    <Counter />
  </div>
}