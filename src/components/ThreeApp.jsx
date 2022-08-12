import React from "react"

import ThreeJoke from "./ThreeJoke"
import threeJokesData from "../data/threeJokesData"

export default function ThreeApp() {

  const jokeElements = threeJokesData.map(joke => {
    return (
        <ThreeJoke
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