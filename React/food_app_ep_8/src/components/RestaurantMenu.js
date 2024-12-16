import { useState, useEffect } from "react";
import { RES_INFO_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resid } = useParams();
    console.log(resid)
    useEffect( ()=>{
        fetchMenu()
    },[])

    const fetchMenu = async () => {
        const data = await fetch(RES_INFO_URL + resid);


        const json = await data.json();
        console.log(json.data)
        //console.log(json?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)

        setResInfo(json.data)
    }


    if(resInfo === null) return <Shimmer/>
    //console.log(resInfo)
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    //const { name, price} 
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
                <ul>
                    {itemCards.map(item => 
                    <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name} - {" Rs."} 
                        {item?.card?.info?.defaultPrice /100 || item?.card?.info?.price /100  ||  item?.card?.info?.finalPrice /100 }
                    </li>
                )}
                </ul>
        </div>
    )
}

export default RestaurantMenu;