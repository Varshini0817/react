import { useState } from "react";

const User = (props) => {

    const {name, location}  = props;
    const [cnt] = useState(0) 

    return (
        <div className="user-card">
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h3>Cnt : {cnt}</h3>
        </div>
    )
}

export default User;