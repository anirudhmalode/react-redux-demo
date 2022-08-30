import React from 'react'
import { useSelector } from 'react-redux';

function HooksCakecontainer() {
    const numberOfcakes = useSelector(state => state.numberOfcakes)
  return (
    <div>
        <h1> Hooks </h1>
        <h3> number of cakes - {numberOfcakes} </h3>
        <button> buy Cake </button>
    </div>
  )
}

export default HooksCakecontainer