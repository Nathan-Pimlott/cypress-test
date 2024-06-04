import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  function onClick(type: 'add' | 'subtract') {
    switch (type) {
      case 'add':
        setCount(count+1)
        break;
      case 'subtract':
        setCount(count-1)
        break;
    }
  }
  return (
    <>
      <h1>Cypress Test</h1>
      <div className="card">
        <button
          id='subtract-button' 
          onClick={() => onClick('subtract')}
        >
          -
        </button>
        <button id='add-button' onClick={() => onClick('add')}>
          +
        </button>
        <p id='current-count'>
          Count is {count}
        </p>
      </div>
    </>
  )
}