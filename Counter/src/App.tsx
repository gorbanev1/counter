import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from "./components/Button/Button.tsx";
import {Counter} from "./components/counter/Counter.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter></Counter>
    </>
  )
}

export default App
