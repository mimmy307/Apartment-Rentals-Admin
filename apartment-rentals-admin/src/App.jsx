import './App.css'
import AccomodationDetails from './components/AccomodationDetails'
import AccomodationList from './components/AccomodationList'
import FavoritesList from './components/FavoritesList'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar />
      <div className='main-container'>
        <Sidebar  />
        <Routes>
        <Route path="/" element={<AccomodationList />} />
        <Route path ="/accomodation/:accomodationId" element={<AccomodationDetails />} />
        <Route path ="/favorites" element= {<FavoritesList />} />
        </Routes>
      </div>
      <Footer />
   </div>
    
      
    
  )}

export default App
