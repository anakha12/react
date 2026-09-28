/**
*<div id="parent">
*   <div id="child">
*       <h1>I am h1 element</h1>
*   </div>
*</div>
 */

const parent=React.createElement('div',{id:"parent"},
    React.createElement('div',{id:"child"},
        [React.createElement('h1',{},"I am h1 element"),
        React.createElement('h2',{},"I am h2 tag")]
    )
)
console.log(parent)

// const heading=React.createElement("h1",{id:"heading"},"Hello from react");
        const root=ReactDOM.createRoot(document.getElementById('root'));
        root.render(parent)