import { useRouteError } from "react-router-dom";

const Error = () =>{
    const error = useRouteError()
    console.log(error)
    return(
        <div>
            <h2>Oopss!!!</h2>
            <h3>Something went wrong!!!</h3>
            <h4>{error.status}: {error.statusText}</h4>
        </div>
    )
}

export default Error;