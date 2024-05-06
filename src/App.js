/**
 * Components are written like JavaScript arrow functions 
 * 
 * In the component, you must explicitly return the code that you want rendered on the browser.
 * 
 * Also, the first letter of components must be capitalized
 */

const App =()=> {
    return (
        <>
            <h1>Hello World</h1>
            <h2>This is much better...</h2>
            <p>Now, we are ready to react.</p>
        </>
    )
}

// To export a component, we write export default...
export default App