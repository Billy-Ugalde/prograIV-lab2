//renderisa la imagen 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCounter } from './Hooks/useCounter'
import Counter from './Components/Counter'
import { Component } from 'react'
function App() {




  //Hook
  //useState is a hook that lets you
  //add react state to function components

  //count es un contador que inicia en 0
  //que cuando el contador llegue al 5 imprima un mensaje

  return (

    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Counter />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
