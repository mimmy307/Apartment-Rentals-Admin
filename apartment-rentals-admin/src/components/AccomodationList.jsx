import accomodationData from "../assets/rentals.json"
import { useState } from "react"

function AccomodationList(){
    const [accomodationList] = useState(accomodationData)

    return(
        <div>
            {accomodationList.map( list => (
                <div key = {list.id} className = "listContainer">
                    <img src = {list.picture_url} alt = "accomodation image" />
                    <div>
                        <h3>{list.name}</h3>
                        <h4>{list.city}, {list.country}</h4>
                        <div>
                        <span>
                            <img src= "" alt= ""/> 
                            <p>Accomodates: {list.accommodates}</p>
                        </span> 
                        <span>
                            <img src= "" alt= ""/> 
                            <p>{list.bedrooms} Bedrooms</p>
                        </span>
                        </div>
                    </div>
                    <div>
                    {/*bookmark button*/}
                    <p> Price: {list.price}</p>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default AccomodationList