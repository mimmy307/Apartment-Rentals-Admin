import  bedIcon from "../assets/images/bed-icon.png"
import peopleIcon from "../assets/images/people-icon.png"
import "../components/FavouriteList.css"
import { Link } from "react-router-dom";

function FavouritesList({favouritePlans, deletePlan}){
    return(
        <div>
            <h2 style={{color:"#577169", marginLeft:"20px"}}>Favourites</h2>

            <div className="accomodation-list-container">
                {favouritePlans && favouritePlans.map((plan) => (
                    <div className = "favourite-card" key= {plan.id}>
                        <img className="fav-accomodation-img" src = {plan.picture_url} alt = "accomodation image" />
                        <div className="fav-list-information">
                            <Link key={plan.id} to={`/accomodation/${plan.id}`} className="link">
                            <h3>{plan.name}</h3>
                            </Link>
                            <h4>{plan.neighbourhood}</h4>
                            
                            <div className="icons-container">
                                <span>
                                    <img src= {peopleIcon} alt= "people icon"/> 
                                    <p>Accomodates {plan.accommodates}</p>
                                </span> 
                                <span>
                                    <img src= {bedIcon} alt= "bed icon"/> 
                                    <p>{plan.bedrooms} Bedrooms</p>
                                </span>
                            </div>
                        </div>

                        <div className="delete-price">
                            <button  onClick={() => deletePlan (plan.id)}> Delete </button>
                            <div className="labels">
                                {parseFloat(plan.price.replace('$', '')) <= 75 && (
                                    <span className="label1">Budget-Friendly</span>
                                )}
                                {parseFloat(plan.price.replace('$', '')) >= 150 && (
                                    <span className="label2">Luxury</span>
                                )}
                                <p>{plan.price}/Night</p>
                            </div>

                        </div>
                   
                    </div>

                ))}
            
            </div>
        </div>
  
    );
}

export default FavouritesList