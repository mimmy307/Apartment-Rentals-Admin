import './App.css'
import AccomodationDetails from './pages/AccomodationDetails'
import AccomodationList from './pages/AccomodationList'
import FavouritesList from './pages/FavouritesList'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Routes, Route} from "react-router-dom"
import { useState } from 'react'
import accomodationData from  "./assets/listings.json"
import AddListing from './pages/AddListing'
import NotFoundPage from "./pages/NotFoundPage"
import AboutPage from './pages/AboutPage'

function App() {
  const [favouritePlans, setFavouritePlans] = useState([])
  const [accomodationList, setAccomodationList] = useState(accomodationData)

  function addToFavourites(id){
    const favouritePlan = accomodationList.find(plan => plan.id ===id)
      if (favouritePlan){
        if (!favouritePlans.find(plan => plan.id === id)){
          setFavouritePlans([favouritePlan, ...favouritePlans])
        }
      }
    }

  function deletePlan (id){
    const filteredPlans = accomodationList.filter(plan => plan.id !== id);
    setAccomodationList(filteredPlans)

    const updatedFavouritePlans = favouritePlans.filter(plan => plan.id !== id);
    setFavouritePlans(updatedFavouritePlans);
  }

  const handleAddListing = (newlisting) => {
    const updatedListing = [newlisting, ...accomodationList]
    setAccomodationList(updatedListing);
}

  return (
    <div className="App">
      <Navbar />
      <Sidebar  />
      <div className='main-container'>
        <Routes>
          <Route path="/" element={<AccomodationList accomodationList={accomodationList} addToFavourites={addToFavourites}/>} />
          <Route path ="/accomodation/:accomodationId" element={<AccomodationDetails accomodationList={accomodationList}/>} />
          <Route path ="/favourites" element= {<FavouritesList favouritePlans={favouritePlans} deletePlan={deletePlan} /> }/>
          <Route path ="/add-listing" element ={<AddListing handleAddListing={handleAddListing}/>} />
          <Route path ="/about" element ={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
   </div>
    
      
    
  )}

export default App
