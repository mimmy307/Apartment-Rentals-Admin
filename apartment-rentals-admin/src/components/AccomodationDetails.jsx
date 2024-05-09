import accomodationData from "../assets/listings.json"
import {useParams} from "react-router-dom"

function AccomodationDetails(){
    const{accomodationId} = useParams()
    const accomodationProfile = accomodationData.find((accomodation) => accomodation.id === accomodationId)
    
    return(
    <div className="accomodation-details-page" >
        {accomodationProfile &&(
            <div>
            
            </div>  
        )}
    </div>  
    )
}

export default AccomodationDetails