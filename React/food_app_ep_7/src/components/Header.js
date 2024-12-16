import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = ()=>{
    //let btnNameReact = "Login";
    const [ btnNameReact , setBtnNameReact] = useState("Login");

    console.log("Header rendered")

    useEffect(()=>{
        console.log("useEffect called")
    },[btnNameReact])
    
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul>
                    {/* <li><a href="/">Home</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li>Cart</li> */}

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li>Cart</li>

                    <button className="login" onClick={() => {
                        btnNameReact === "Login"? setBtnNameReact("Logout"): setBtnNameReact("Login")
                        
                        //console.log(btnNameReact)
                    }}
                    >{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;