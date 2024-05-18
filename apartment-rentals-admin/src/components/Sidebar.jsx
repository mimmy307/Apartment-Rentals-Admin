import "../components/Sidebar.css"
import { Link } from "react-router-dom"
// import logo from "../assets/images/Logo.png"
import logo from "../assets/images/SS (1).svg"

function Sidebar(){
    return (
        <div className="sidebar">
            <img src= {logo} />
            <div className="side-bar-text">
            <Link to="/"><p>Home</p></Link>
            <Link to="/favourites" > <p>Favourites</p></Link>
            <p>About</p>
            </div>
        </div>
    )

}

export default Sidebar