import React from "react"
import ReactDOM from "react-dom/client"

// const heading = React.createElement("h1",{id:"one"}, "Hello world from React")

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)

/*
    <div id="parent">
        <div id = "child">
            <h1> I'm h1 tag</h1>
        </div>
    </div>

const parent = React.createElement("div",
    {id: "parent"},
    React.createElement(
        "h1", 
        {id: "child"},
        "I'm h1 tag"
    )
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
*/

/*
  <div id="parent">
        <div id = "child1">
            <div id="child2">
                <h1> I'm h1 tag</h1>
            </div>
        </div>
    </div> 
    
    ReactElement(Object) => HTML(Browser Understands)


const parent = React.createElement("div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child1"},
        React.createElement("div",
            {id: "child2"},
            React.createElement(
                "h1",
            {},
            "I'm h1 tag")
        )
    )
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)

*/

/*
  <div id="parent">
        <div id = "child1">
            <div id="child2">
                <h1> I'm h1 tag</h1>
            </div>
        </div>
        <div id = "child3">
            <div id="child4">
                <h1> I'm h1 tag</h1>
            </div>
        </div>
    </div> 



const parent = React.createElement("div",
    {id: "parent"},
    [
        React.createElement(
        "div",
        {id: "child1"},
        React.createElement("div",
            {id: "child2"},
            React.createElement(
                "h1",
            {},
            "I'm h1 tag")
        )
    )
    ],
    [
        React.createElement(
        "div",
        {id: "child3"},
        React.createElement("div",
            {id: "child4"},
            React.createElement(
                "h1",
            {},
            "I'm h1 tag")
        )
    )]
)


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)

*/

/*
  <div id="parent"> 
    <div id="child1">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div> 
  </div>
*/

const parent = React.createElement("div",
    {id: "parent"},
    [React.createElement("div",{id: "child1"},
            React.createElement("h1",{}, "I'm h1 tag"),
            React.createElement("h2",{}, "I'm h2 tag")
    )],
    [React.createElement("div",{id: "child1"},
        React.createElement("h1",{}, "I'm h1 tag"),
        React.createElement("h2",{}, "I'm h2 tag")
    )]
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)