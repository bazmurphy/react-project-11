import React from "react"

import OneJoke from "./OneJoke"
import oneJokesData from "../data/oneJokesData"

export default function OneApp() {

  const jokeElements = oneJokesData.map(joke => {
    return (
        <OneJoke
            key={joke.id}
            setup={joke.setup} 
            punchline={joke.punchline} 
        />
      )
  })

  return (
      <div>
          {jokeElements}
      </div>
  )

}