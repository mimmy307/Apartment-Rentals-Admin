import './App.css'
import AccomodationDetails from './components/AccomodationDetails'
import AccomodationList from './components/AccomodationList'
import FavouritesList from './components/FavouritesList'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Routes, Route} from "react-router-dom"
import { useState } from 'react'
import accomodationData from  "./assets/listings.json"

function App() {
  const [favouritePlans, setFavouritePlans] = useState([])
  const [accomodationList, setAccomodationList] = useState(accomodationData)
  
  function addToFavourites(id){
    let favouritePlan;
    const filteredPlans = accomodationList.filter(plan =>{
      if (plan.id === id){
        favouritePlan = plan;
        return false;
      }
      return true
    });

    setAccomodationList(filteredPlans);
    setFavouritePlans([favouritePlan, ...favouritePlans])

  }

  function deletePlan (id){
    const filteredPlans = accomodationList.filter(plan => plan.id !== id);
    setAccomodationList(filteredPlans)

    const updatedFavouritePlans = favouritePlans.filter(plan => plan.id !== id);
    setFavouritePlans(updatedFavouritePlans);
  }

  return (
    <div className="App">
      <Navbar />
      <Sidebar  />
      <div className='main-container'>
        <Routes>
          <Route path="/" element={<AccomodationList accomodationList={accomodationList} addToFavourites={addToFavourites}/>} />
          <Route path ="/accomodation/:accomodationId" element={<AccomodationDetails />} />
          <Route path ="/favourites" element= {<FavouritesList favouritePlans={favouritePlans} deletePlan={deletePlan} /> }/>
        </Routes>
      </div>
      <Footer />
   </div>
    
      
    
  )}

export default App
