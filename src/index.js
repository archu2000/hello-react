import React from 'react';
//inorder to render react element into the reactDOM
import ReactDOM from 'react-dom/client';

var element = <h1>Hello People!</h1>
//element = Hello World!
// document.getElementByID("root") will select element that renders
//inoder to select the element by ID, use root since already predefined in index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
// root.render(<h1>Welcome to my React App!</h1>)  //either hard-code or call the value
