import React from "react"
import './App.css'

// import OneApp from "./components/OneApp"
// import TwoApp from "./components/TwoApp"
import ThreeApp from "./components/ThreeApp"
import FourApp from "./components/FourApp"

export default function App() {

  return (
      <div className="App">
        {/* <OneApp /> */}
        {/* <TwoApp /> */}
        <h1>Conditional Rendering</h1>
        <h2>Logical And Operator</h2>
        <p>{"{ someCondition && <SomeJSXElement />}"}</p>
        <ThreeApp />
        <img src="../images/logical-and-operator.png" alt="" />
        <h2>Ternary Operator</h2>
        <p>{"{ someCondition ? <SomeJSXElement/> : <SomeOtherJSXElement/>}"}</p>
        <FourApp />
        <img src="../images/tenary-operator.png" alt="" />
      </div>
  )

}