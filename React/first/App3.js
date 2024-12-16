import React from "react";
import ReactDOM from "react-dom/client";


//jsx HTML-like syntax , XML-like syntax but not HTML 

//jsx is converted to React.createElement=> ReactElement  just before it reaches 
//js engine as babel in parcel converts / transpiles and then to js object

const jsxHeading = (
    <h1 id="heading" className="head" tabIndex="4">Hello world jsx</h1>
);

//React Functional component

// const HeadingComponent = () =>{
//     return <h1>Hello from functional component</h1>
// }

const Title = ()=>{
    return <h2>Title</h2>
}

const HeadingComponent =  ()=> (
        <h3>Heyyy</h3>
    )
    

// const HeadingComponent = function (){(
//     <h3>Heyyy</h3>
// )
// }

const elem = <p>Para</p>
const tit = (
    <h1>Hello from jsx element
        {elem} 
    </h1>
    
);


const HeadingComponent2 = ()=> (
    <div id="heading">

        <Title/> {/* Component composition  React element inside a react element*/}
        {tit} {/* js expressions */}
        {console.log("Hello console")}
        <h2>{tit}</h2>

        {1000+2000}
        <h3>Heyyy</h3>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"))

//root.render(jsxHeading)
root.render(<HeadingComponent2/>)