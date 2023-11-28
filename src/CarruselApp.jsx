import { useState } from 'react'
import React from 'react'

import {teams} from './data'

export const CarruselApp = () => {

    const [counter, setCounter] = useState( 1 )

    const nextTeam = () =>{
        if (counter >= teams.length) {
            setCounter(1)
        }else setCounter(counter+1)
    }

    const previousTeam = () =>{
        if (counter <= 1) {
            setCounter(teams.length)
        }else setCounter(counter-1)
    }

  return (
    <>
        <div id="title"> <h1>NBA Teams</h1> </div>

        <div id="data">
            <img src={teams[counter-1].img}></img>
            <h3>{teams[counter-1].city}</h3>
            <h4>{teams[counter-1].name}</h4>
        </div>

        <div id="buttons">
            <button onClick={ previousTeam }> Previous </button>
            <button onClick={ nextTeam }> Next </button><br></br>
        </div>

    </>
  )
}

