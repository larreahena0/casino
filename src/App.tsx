import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState<number>(0)

  return (
    <>
      <h1>Contador 1</h1>
      <p>{counter}</p>
      <button onClick={() => setCounter((counter) => counter + 1)}>+</button>
    </>
  )
}

export default App
