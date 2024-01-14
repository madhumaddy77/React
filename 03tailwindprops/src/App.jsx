import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card'


function App(username, btnText="visit me") {
  const [count, setCount] = useState(0)
  let myobj={
    username:"madhu",
    framework:"react"
  }

  let newArr = [1, 2, 3]


  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 '>Tailwind Test</h1>
    <Card username="chaiaurcode" btnText="click me" />
    <Card username="hitesh"  btnText="Explore me"/>
  
  
    
   </>
  )
}

export default App
