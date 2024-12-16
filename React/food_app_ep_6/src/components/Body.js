//import resList from "../utils/mockdata";
import ResCard from "./ResCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";


const Body = () =>{
    //local state variable - Super powerful variable

//     const [listOfRestaurants , setlistOfRestaurants]= useState([{"info": {
//     let listOfRestaurants = [{"info": {
//       "id": "378344",
//       "name": "Theobroma",
//       "cloudinaryImageId": "63dd75492c47fcec191132b8eb299ea5",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Desserts"
//       ],
//       "avgRating": 3.6,
//       "sla": {
//         "deliveryTime": 39,
//       }
//   }},
//   {
//     "info": {
//       "id": "655339",
//       "name": "KFC",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/1ba9479c-6527-4f4f-a2e6-f8c070a2171c_655339.JPG",
//         "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Burgers",
//         "Fast Food",
//         "Rolls & Wraps"
//       ],
//       "avgRating": 4.1,
//       "sla": {
//         "deliveryTime": 27,
//       }
//     }
//   }, 
//     ])

const [listOfRestaurants, setlistOfRestaurants] = useState([])
const [filteredRestaurants, setFilteredRestaurants] = useState([])
const [searchText, setSearchText] =  useState("");

    useEffect(()=>{
       // console.log("useEffect called")
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = 
        await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json();
        //optional chaining
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
    }

    //conditional rendering
    // if(listOfRestaurants.length === 0)
    // {
    //     //return <h1>Loading...</h1>
    //     return < Shimmer/>
    // }
    
    
    return listOfRestaurants.length ===0 ? (<Shimmer />): (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=> {
                        setSearchText(e.target.value)
                        }}/>
                    <button className="search-btn" onClick={() =>{
                        const filteredList = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurants(filteredList)
                    }}
                        >
                            Search</button>
                </div>
                <button className="filter-btn"
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setlistOfRestaurants(filteredList)
                    //console.log(listOfRestaurants)
                }}>Top Rated Restauarnts</button>
            </div>
            <div className="res-container" >
                {/*<ResCard resData = {resObj}/> */}
                {/* { resList.map(restuarant => 
                    (<ResCard key = {restuarant.info.id} resData={restuarant}/>))} */}
                    {filteredRestaurants.map((restaurant)=>(
                        <ResCard key={restaurant.info.id} resData= {restaurant}/>
                    ))}
            </div>
        </div>
    )
}

export default Body;