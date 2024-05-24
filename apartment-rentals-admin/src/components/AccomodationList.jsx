// import accomodationData from  "../assets/listings.json"
// import { useState } from "react"
import { Link } from "react-router-dom"
import "../components/AccomodationList.css"
import AccomodationCard from "./AccomodationCard"

function AccomodationList({accomodationList, addToFavourites}){

    return(
        <div >
        <Link to="/add-listing">
        <button className="add-button"> Add Accomodation</button>
        </Link>

        <div className="accomodation-list-main">
            {accomodationList.map( list => (
                <AccomodationCard key={list.id} list={list} addToFavourites={addToFavourites}/>
    
            ))}
        </div>
        </div>
    )
}

export default AccomodationList