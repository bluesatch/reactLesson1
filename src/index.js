// import React from 'react' and ReactDOM from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

/*
access the root div from index.html; React 18 requires the createRoot() method from the ReactDOM object. 

createRoot() accepts a DOM element as its argument.

*/
const root = ReactDOM.createRoot(document.getElementById('root'))

console.log(root)

/**
 * The root container is a ReactDOM object. It has access to the render() method. 
 * The render() method simply tells us what to render to the browswer. 
 * It can either render pure html code or a React component.
 * 
 * Try to write more html code into the render method and see what happens. 
 * 
 * You may notice that the app will break if you try to add a sibling element. Also, if we grouped the elements into a parent container, it would defeat the purpose of using React. 
 * 

 */
// root.render(<h1>Hello World</h1>)

// root.render(<h1>Hello World</h1><h2>Does this work?</h2>) No! it does not.

// root.render(
//     <div>
//         <h1>Hello World</h1>
//         <h2>This works...but it can be done better</h2>
//     </div>
// )

// Note: In React we can use fragments. Fragments are angle brackets without a tag. <> </>

// root.render(
//     <>
//         <h1>Hello World</h1>
//         <h2>This works too...but it can be done better</h2>
//     </>
// )

/**
 * We will move our code into a component specifically App.js
 * 
 * import App.js to your index.js
 */

root.render(<App />)
