// import accomodationData from  "../assets/listings.json"
// import { useState } from "react"
import "../components/AccomodationList.css"
import AccomodationCard from "./AccomodationCard"

function AccomodationList({accomodationList, addToFavourites}){
    // const [accomodationList] = useState(accomodationData)


    return(
        <div>
            {accomodationList.map( list => (
                <AccomodationCard key={list.id} list={list} addToFavourites={addToFavourites}/>
    
            ))}
        </div>
    )
}

export default AccomodationList