import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state={
        cnt : 2
       }
       console.log(this.props.name + " Child constructor")
    }
    
    componentDidMount(){
        console.log(this.props.name + " Child Component did mount")
    }

    componentWillUnmount(){
        console.log(this.props.name+ " Component unmounted")
    }
    render() {
        
        console.log(this.props.name + " Child render")
        const {name, location} = this.props;
        const {cnt} = this.state;
        return (
            <div className="user-card">
                <h2>{name}</h2>
                <h3>{location}</h3>
                <h3>Cnt: {cnt}</h3>
                <button 
                    onClick={()=>{
                        this.setState({
                            cnt : cnt+1
                        })
                    }}>Count</button>
            </div>
        )
    }
}

export default UserClass;