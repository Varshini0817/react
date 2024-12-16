import resList from "../utils/mockdata";
import ResCard from "./ResCard";
import {useState} from "react";


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


const [listOfRestaurants, setlistOfRestaurants] = useState(resList);




    return (
        <div className="body">
            <div className="filter">
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
                    {listOfRestaurants.map((restaurant)=>(
                        <ResCard key={restaurant.info.id} resData= {restaurant}/>
                    ))}
            </div>
        </div>
    )
}

export default Body;