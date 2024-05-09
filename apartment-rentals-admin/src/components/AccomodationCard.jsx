import  bedIcon from "../assets/images/bed-icon.png"
import peopleIcon from "../assets/images/people-icon.png"

function AccomodationCard({list}){
    return(
        <div className = "accomodation-card">
                    <img className="accomodation-img" src = {list.picture_url} alt = "accomodation image" />
                    <div className="list-information">
                        <h3>{list.name}</h3>
                        <h4>{list.neighbourhood}</h4>
                        <div className="icons-container">
                            <span>
                                <img src= {peopleIcon} alt= "people icon"/> 
                                <p>Accomodates {list.accommodates}</p>
                            </span> 
                            <span>
                                <img src= {bedIcon} alt= "bed icon"/> 
                                <p>{list.bedrooms} Bedrooms</p>
                            </span>
                        </div>

                        <div className="labels">
                            {parseFloat(list.price.replace('$', '')) <= 75 && (
                                <span className="label-green">Budget-Friendly</span>
                            )}
                            {parseFloat(list.price.replace('$', '')) >= 150 && (
                                <span className="label-blue">Luxury</span>
                            )}
                        </div>
                    </div>
                    <div className="bookmark-price">
                    <button> ♡ </button>
                    <p>{list.price}/Night</p>  {/*make a nice label*/}
                    </div>
                </div>
    )
}

export default AccomodationCard