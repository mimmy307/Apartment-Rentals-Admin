import './App.css'
import AccomodationList from './components/AccomodationList'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'


function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Sidebar />
        <AccomodationList />
      </div>
      <Footer />

    </div>
    
      
    
  )}

export default App
