import "../components/Sidebar.css"
import { Link } from "react-router-dom"

function Sidebar(){
    return (
        <div className="sidebar">
            <img src="https://placehold.co/100x100?text=SS" /> {/*logo placeholder*/}
            <Link to="/"><p>Home</p></Link>
            <Link to="/favourites" > <p>Favourites</p></Link>
            <p>About</p>
        </div>
    )

}

export default Sidebar