1. What is "conditional rendering"?

When you want to change what you are displaying based on some condition.

When we want to only sometimes display something on the page
based on a condition of some sort

2. When would you use &&?

If you want to display somehting or not display it
If you want to check the first part is truthy, and if it is the second part will get displayed

When you want to either display something or NOT display it

3. When would you use a ternary?

If you want to decide between different options.

When you need to decide which thing among 2 options to display


4. What if you need to decide between > 2 options on
   what to display?

You can use other JavaScript like if/else or switch etc, separately declared,
Or you can chain ternaries (not advised)

Use an `if...else if... else` conditional or a `switch` statement


IMPORTANT NOTE:

The && and Ternary can happen DIRECTLY inside your Function, 
The IF/Switch CANNOT, it has to be outside.

function App() {
    return (
        <div>{____ && <SomeJSXElement />}</div>
        OR
        <div>{____ ? <SomeJSXElement /> : <SomeOtherElement>}</div>
    )
}

function App() {
    let someVar
    if () {
        someVar = <SomeJSX />
    } else if() {
        
    } else {
        
    }
    return (
        <div>{if()}</div>
    )
}