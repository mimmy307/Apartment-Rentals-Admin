
import {useParams} from "react-router-dom"
import "../pages/AccomodationDetails.css"
import  bedIcon from "../assets/images/bed-icon.png"
import peopleIcon from "../assets/images/people-icon.png"
import bathIcon from "../assets/images/bath-icon.png"
import rating from "../assets/images/rating.png"

function AccomodationDetails({accomodationList}){
    const{accomodationId} = useParams()
    const accomodationProfile = accomodationList.find((accomodation) => accomodation.id == (accomodationId))
    

    return(
    <div className="accomodation-details-page" >
        {accomodationProfile && (
            <div>
                <h1>{accomodationProfile.name}</h1>
               
                <div className="first-container"> 
                    <img src ={accomodationProfile.picture_url} alt ="accomodation image" />
                    <div className="info-container"> 
                    <div>
                        <h4>{accomodationProfile.neighbourhood}</h4>
                        <p className="property-type">{accomodationProfile.property_type}</p>
                        <p className="rating"> 
                            <img src={rating} /> 
                            {accomodationProfile.review_scores_rating} Rating
                        </p>
                    </div>
                    <div >
                        <p className="price">{accomodationProfile.price} / Night</p>
                        <p className="reserve">Reserve</p>
                    </div>
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
                <hr />

                <div className="rental-description">
                <h3>About this place</h3>
                <p>{accomodationProfile.description}</p>
                <h3>Neighbourhood overview</h3>
                <p>{accomodationProfile.neighborhood_overview}</p>
                <br/>
                <br/>
                </div>

            </div>  
        )}
    </div>  
    )
}

export default AccomodationDetails