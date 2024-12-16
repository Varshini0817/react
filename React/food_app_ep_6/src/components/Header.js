import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = ()=>{
    //let btnNameReact = "Login";
    const [ btnNameReact , setBtnNameReact] = useState("Login");

    console.log("Header rendered")

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About Us</li>
                    <li>Cart</li>

                    <button className="login" onClick={() => {
                        btnNameReact === "Login"? setBtnNameReact("Logout"): setBtnNameReact("Login")
                        
                        console.log(btnNameReact)
                    }}
                    >{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;