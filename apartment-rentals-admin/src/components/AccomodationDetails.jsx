import accomodationData from "../assets/listings.json"
import {useParams} from "react-router-dom"

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
               
                <div> 
                    <img src ={accomodationProfile.picture_url} alt ="accomodation image" />
                    <div> 
                    <h4>{accomodationProfile.neighbourhood}</h4>
                    {/* room-type */}
                    {/* rating */}
                    {/* favorites button */}
                    {/* price label */}
                    </div>
                </div>
                
                <div> 
                    {/* icons : bedroom, bath, accomodates */}
                </div>

                <p> description</p>

            </div>  
        )}
    </div>  
    )
}

export default AccomodationDetails