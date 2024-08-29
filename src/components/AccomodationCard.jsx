import  bedIcon from "../assets/images/bed-icon.png"
import peopleIcon from "../assets/images/people-icon.png"
import { Link } from "react-router-dom"
import likeButton from "../assets/images/like-icon.png"
import { useState } from "react"

function AccomodationCard({list, addToFavourites}){
    const [isFavourite, setIsFavourite] = useState(false);
    const handleFavouriteClick = () =>{
        addToFavourites(list.id);
        setIsFavourite(!isFavourite)
    }

    return(
        <div className = "accomodation-card">
                    <img className="accomodation-img" src = {list.picture_url} alt = "accomodation image" />
                    <div className="list-information">
                        <Link key={list.id} to={`/accomodation/${list.id}`} className="link">
                        <h3>{list.name}</h3>
                        </Link>
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

                    </div>

                    <div className="bookmark-price">
                        <button 
                        className="favourite-button" 
                        onClick={handleFavouriteClick}
                        style={{ backgroundColor: isFavourite ? '#D77A61' : '' }}>
                            <img src={likeButton} />
                        </button>
                        <div className="labels">
                        {parseFloat(list.price.replace('$', '')) <= 75 && (
                                <span className="label1">Budget-Friendly</span>
                            )}
                         {parseFloat(list.price.replace('$', '')) >= 150 && (
                                <span className="label2">Luxury</span>
                            )}
                        <p className="price-label">{list.price}/Night</p>  
                        </div>
                    </div>
                </div>
    )
}

export default AccomodationCard