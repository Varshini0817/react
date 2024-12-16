import User from "./User";
import UserClass from "./UserClass";
import React from "react";



class AboutUs extends React.Component  {

    constructor(props){
        super(props)
        console.log("Parent constructor")
    }
    
    componentDidMount(){
        console.log("Parent Component did mount")
    }

    render(){
        console.log("Parent render")
    return (
        <div className="about">
            <h1> About us page!</h1>
            {/* <User name={"Veda"} location={"Visakhapatnam"}/> */}
            <UserClass name={"Varshini"} location={"Vizianagaram"}/>
            <UserClass name={"Second"} location={"Vizianagaram"}/>
        </div>
        
    )
}
}

export default AboutUs;
