import { useState } from 'react'
import './App.css'

function App() {

  let [count, setCount] = useState(0);

  return (
    <>
      <p>Count updation logic</p>
      <div className="card">
        <button className = "count-button" onClick = {() => setCount(count + 1)}>
          Click, and the increased count is:  {count}
        </button>

        <button className = "decrement-button" onClick = {() => {setCount(count - 1)}}>
          Click, and the reduced count is: {count}
        </button>
      </div>
    </>
  )
}

export default App
