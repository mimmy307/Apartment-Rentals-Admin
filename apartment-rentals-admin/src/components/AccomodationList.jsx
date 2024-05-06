import accomodationData from "../assets/rentals.json"
import { useState } from "react"
import  bedIcon from "../assets/images/bed-icon.png"
import peopleIcon from "../assets/images/people-icon.png"
import "../components/AccomodationList.css"
function AccomodationList(){
    const [accomodationList] = useState(accomodationData)

    return(
        <div className="accomodation-list-container">
            {accomodationList.map( list => (
                <div key = {list.id} className = "list-container">
                    <img src = {list.picture_url.url} alt = "accomodation image" />
                    <div className="list-information">
                        <h3>{list.name}</h3>
                        <h4>{list.city}, {list.country}</h4>
                        <span>
                            <img src= {peopleIcon} alt= ""/> 
                            <p>Accomodates: {list.accommodates}</p>
                        </span> 
                        <span>
                            <img src= {bedIcon} alt= ""/> 
                            <p>{list.bedrooms} Bedrooms</p>
                        </span>
                    </div>
                    <div className="bookmark-price">
                    <button> ♡ </button>
                    <p> Price: {list.price}</p>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default AccomodationList