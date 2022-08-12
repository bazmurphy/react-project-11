import React from "react"

export default function OneJoke(props) {

    const [isShown, setIsShown] = React.useState(false)

    function toggle() {
        setIsShown(prevIsShown => {
            return prevIsShown = !prevIsShown;
        })
    }
   
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {/* if props.setup is falsy then don't display the h3 at all */}
            {/* if props.setup is truthy then display the h3 */}
            {isShown && <p>{props.punchline}</p>}
            {/* if isShown is falsy then don't display the p at all */}
            {/* if isShown is truthy then display the p */}
            <button onClick={toggle}>Show Punchline</button>
            <hr />
        </div>
    )
}

// 01
// Challenge:
// - Create state `isShown` (boolean, default to `false`)
// - Add a button that toggles the value back and forth

// 02
// Challenge:
// - Only display the punchline paragraph if `isShown` is true

// const condition1 = true
// const condition2 = true
// if (condition1 && condition2) {
//     // this code here will run
// }

// const condition1 = true
// const condition2 = false
// if (condition1 && condition2) {
//     // this code here will NOT run
// }

// the computer CHECKS THE FIRST CONDITION, 
// AND IF ITS TRUTHY IT CONTINUES TO CHECK THE SECOND CONDITION
// BUT IF ITS FALSEY IT SKIPS EVERTYTHING
// BECAUSE IT KNOWS THE FIRST VALUE IS FALSY EVERYTHING AFTER THE && IS REDUNDANT TO CHECK

// When we click the Button, REACT will Re-Render the Component because its STATE has changed
// And when its running through the code, isShown will be true, and therefore the p will be displayed.

// In REACT when you have an element that you either want to display or not display at all..
// using the && Logical Operator is a really concise and great way to do that.