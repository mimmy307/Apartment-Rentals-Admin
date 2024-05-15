import  bedIcon from "../assets/images/bed-icon.png"
import peopleIcon from "../assets/images/people-icon.png"
import "../components/FavouriteList.css"
import { Link } from "react-router-dom";

function FavouritesList({favouritePlans, deletePlan}){
    return(
        <div>
            <h2>Favourites</h2>

            <div className="accomodation-list-container">
                {favouritePlans && favouritePlans.map((plan) => (
                    <div className = "accomodation-card" key= {plan.id}>
                        <img className="accomodation-img" src = {plan.picture_url} alt = "accomodation image" />
                        <div className="list-information">
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

                            <div className="labels">
                                {parseFloat(plan.price.replace('$', '')) <= 75 && (
                                    <span className="label-green">Budget-Friendly</span>
                                )}
                                {parseFloat(plan.price.replace('$', '')) >= 150 && (
                                    <span className="label-blue">Luxury</span>
                                )}
                            </div>
                        </div>
                        <div className="Delete-price">
                        <button  onClick={() => deletePlan (plan.id)}> Delete </button>
                        <p>{plan.price}/Night</p>  {/*make a nice label*/}
                    </div>
                 </div>

                ))}
            
            </div>
        </div>
  
    );
}

export default FavouritesList