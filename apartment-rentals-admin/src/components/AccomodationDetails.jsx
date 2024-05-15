import accomodationData from "../assets/listings.json"
import {useParams} from "react-router-dom"
import "../components/AccomodationDetails.css"
import  bedIcon from "../assets/images/bed-icon.png"
import peopleIcon from "../assets/images/people-icon.png"
import bathIcon from "../assets/images/bath-icon.png"

function AccomodationDetails(){
    const{accomodationId} = useParams()
    const accomodationProfile = accomodationData.find((accomodation) => accomodation.id ===  Number(accomodationId))
    console.log(accomodationProfile)
    console.log(accomodationId)
    console.log(typeof accomodationId)

    return(
    <div className="accomodation-details-page" >
        {accomodationProfile && (
            <div>
                <h1>{accomodationProfile.name}</h1>
               
                <div className="first-container"> 
                    <img src ={accomodationProfile.picture_url} alt ="accomodation image" />
                    <div className="info-container"> 
                    <h4>{accomodationProfile.neighbourhood}</h4>
                    <p>{accomodationProfile.property_type}</p>
                    <p>Rating: {accomodationProfile.review_scores_rating}/5</p>
                    <p>{accomodationProfile.price} / Night</p>
                    </div>
                </div>
                
                <div className="icons-info"> 
                    <div>
                        <img src= {peopleIcon} alt= "people icon"/> 
                        <p>Accomodates {accomodationProfile.accommodates}</p>
                    </div> 
                    <div>
                        <img src= {bathIcon} alt= "bat icon"/> 
                        <p>{accomodationProfile.bathrooms} Bathrooms</p>
                    </div>
                    <div>
                        <img src= {bedIcon} alt= "bed icon"/> 
                        <p>{accomodationProfile.bedrooms} Bedrooms</p>
                    </div>
                </div>

                <div className="rental-description">
                <h3>About this place</h3>
                <p>{accomodationProfile.description}</p>
                <h3>Neighbourhood overview</h3>
                <p>{accomodationProfile.neighborhood_overview}</p>
                <br/>
                </div>

            </div>  
        )}
    </div>  
    )
}

export default AccomodationDetails