import { useState } from "react";
import {useNavigate} from "react-router-dom"

function AddListing({handleAddListing}){
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [city, setCity] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [rating, setRating] = useState(0);
    const [price, setPrice] = useState("");
    const [accomodates, setAccomodates] = useState(0);
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
    const handleAccomodates= (e) =>{setAccomodates(e.target.value)};
    const handleBedrooms= (e) =>{setBedrooms(e.target.value)};
    const handleBathrooms= (e) =>{setBathrooms(e.target.value)};
    const handleDescription= (e) =>{setDescription(e.target.value)};
    const handleNeighborhoodOverview= (e) =>{setNeighborhoodOverview(e.target.value)};

    const nav = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();

        handleAddListing({name, image, city, propertyType, rating, price, accomodates, bedrooms,bathrooms, description, neighborhoodOverview})
        nav("/")
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Add Accomodation</h2>
            <div>
                <label>Accomodation Name</label>
                <input name= "name" type="text" value={name} onChange={handleName}/>

                <label> Image</label>
                <input name= "image" type="url" value={image} onChange={handleImage} />

                <label>City, Country</label>
                <input name="city,country" type="text" value= {city} onChange={handleCity} />

                <label>Property Type</label>
                <input name="property type" type="text" value={propertyType} onChange={handlePropertyType} />

                <label>Rating</label>
                <input name="rating" type="number" value={rating} onChange={handleRating} />

                <label>Nightly Rate</label>
                <input name="nightly rate" type="text" value={price} onChange={handlePrice} />

                <label>Accomodates</label>
                <input name="accomodates" type="number" value={accomodates} onChange={handleAccomodates} />

                <label>Bedrooms</label>
                <input name="bedrooms" type="number" value={bedrooms} onChange={handleBedrooms}/>

                <label>Bathrooms</label>
                <input name="bathrooms" type="number" value={bathrooms} onChange={handleBathrooms}/>

                <label>Property Description</label>
                <input name="property description" type="text" value={description} onChange={handleDescription}/>

                <label>Neighborhood Overview</label>
                <input name="neighborhood Overview" type="text" value={neighborhoodOverview} onChange={handleNeighborhoodOverview} />
                
            </div>
            <button type="submit">Create</button>
        </form>

    )
    

}

export default AddListing