import accomodationData from "../assets/rentals.json"
import { useState } from "react"
import "../components/AccomodationList.css"
import AccomodationCard from "./AccomodationCard"

function AccomodationList(){
    const [accomodationList] = useState(accomodationData)

    return(
        <div className="accomodation-list-container">
            {accomodationList.map( list => (
                <AccomodationCard key = {list.id} list={list} />
            ))}
        </div>
    )
}

export default AccomodationList