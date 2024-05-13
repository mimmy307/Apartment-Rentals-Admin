import accomodationData from  "../assets/listings.json"
import { useState } from "react"
import "../components/AccomodationList.css"
import AccomodationCard from "./AccomodationCard"
import {Link} from "react-router-dom"

function AccomodationList(){
    const [accomodationList] = useState(accomodationData)

    return(
        <div className="accomodation-list-container">
            {accomodationList.map( list => (
                <Link key={list.id} to={`/accomodation/${list.id}`} className="link">
                <AccomodationCard  list={list} />
                </Link>
            ))}
        </div>
    )
}

export default AccomodationList