import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"


const styleCard = {
    backgroundColor: "#f0f0f0"
}


const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            {/* <Body/> */}
            <Outlet/>
        </div>
    )
}

// const appRouter = createBrowserRouter([
//     {
//         path: "/",
//         element: <AppLayout/>,
//         errorElement: <Error/>
//     },
//     {
//         path: "about",
//         element: <AboutUs/>
//     },
//     {
//         path: "/contact",
//         element: <ContactUs/>
//     }
// ])

const appRouter = createBrowserRouter([
    {
       path : "/",
       element : <AppLayout />,
       children: [
        {
            path: "/",
            element : <Body />
        },
        {
            path : "/about",
            element : <AboutUs/>
        },
        {
            path : "/contact",
            element : <ContactUs/>
        },
        {
            path: "/restaurants/:resid",
            element: <RestaurantMenu />
        }
       ],
       errorElement: <Error/>
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)