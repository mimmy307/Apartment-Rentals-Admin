import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {v4 as uuidv4} from "uuid"
import "../components/AddListing.css"

function AddListing({handleAddListing}){
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [city, setCity] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [rating, setRating] = useState(0);
    const [price, setPrice] = useState("");
    const [accommodates, setAccomodates] = useState(0);
    const [bedrooms, setBedrooms] = useState(0);
    const [bathrooms, setBathrooms] = useState(0);
    const [description, setDescription] = useState("");
    const [neighborhoodOverview, setNeighborhoodOverview] = useState("")

    const handleName = (e) =>{setName(e.target.value)};
    const handleImage = (e) =>{setImage(e.target.value)};
    const handleCity = (e) =>{setCity(e.target.value)};
    const handlePropertyType= (e) =>{setPropertyType(e.target.value)};
    const handleRating= (e) =>{setRating(e.target.value)};
    const handlePrice = (e) =>{setPrice(e.target.value)};
    const handleAccommodates= (e) =>{setAccomodates(e.target.value)};
    const handleBedrooms= (e) =>{setBedrooms(e.target.value)};
    const handleBathrooms= (e) =>{setBathrooms(e.target.value)};
    const handleDescription= (e) =>{setDescription(e.target.value)};
    const handleNeighborhoodOverview= (e) =>{setNeighborhoodOverview(e.target.value)};

    const nav = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();

        handleAddListing({
            id: uuidv4(), 
            name, 
            picture_url: image, 
            neighbourhood: city, 
            property_type: propertyType, 
            review_scores_rating: rating, 
            price, 
            accommodates, 
            bedrooms, 
            bathrooms, 
            description, 
            neighborhood_overview: neighborhoodOverview})
        nav("/")
    }

    return(
        <form onSubmit={handleSubmit} className="form-container">
            <h2>Add Accomodation</h2>
            <div className="form-grid">
            <div className="form-group">
                <label>Accomodation Name</label>
                <input name= "name" type="text" value={name} onChange={handleName}/>
            </div>
            <div className="form-group">
                <label> Image</label>
                <input name= "image" type="url" value={image} onChange={handleImage} />
            </div>
            <div className="form-group">
                <label>City, Country</label>
                <input name="city,country" type="text" value= {city} onChange={handleCity} />
            </div>
            <div className="form-group"> 
                <label>Property Type</label>
                <input name="property type" type="text" value={propertyType} onChange={handlePropertyType} />
            </div>
            <div className="form-group"> 
                <label>Rating</label>
                <input name="rating" type="number" value={rating} onChange={handleRating} />
            </div>
            <div className="form-group"> 
                <label>Nightly Rate</label>
                <input name="nightly rate" type="text" value={price} onChange={handlePrice} />
            </div>
            <div className="form-group"> 
                <label>Accomodates</label>
                <input name="accommodates" type="number" value={accommodates} onChange={handleAccommodates} />
            </div>
            <div className="form-group"> 
                <label>Bedrooms</label>
                <input name="bedrooms" type="number" value={bedrooms} onChange={handleBedrooms}/>
            </div>
            <div className="form-group"> 
                <label>Bathrooms</label>
                <input name="bathrooms" type="number" value={bathrooms} onChange={handleBathrooms}/>
            </div>
            <div className="form-group"> 
                <label>Property Description</label>
                <textarea name="property description"  value={description} onChange={handleDescription}/>
             </div>
            <div className="form-group">
                <label>Neighborhood Overview</label>
                <textarea name="neighborhood Overview" value={neighborhoodOverview} onChange={handleNeighborhoodOverview} />
            </div>
            </div>
            <button type="submit" className="submit-button">Create</button>
        </form>

    )
    

}

export default AddListing