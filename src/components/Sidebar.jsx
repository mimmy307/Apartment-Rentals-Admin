import "../components/Sidebar.css"
import { NavLink } from "react-router-dom"
import logo from "../assets/images/SS (1).svg"

function Sidebar(){
    return (
        <div className="sidebar">
            <img src= {logo} />
            <div className="side-bar-text">
            <NavLink to="/" activeclassname="active-link" className="nav-link" >Home</NavLink>
            <NavLink to="/favourites" activeclassname="active-link" className="nav-link"  >Favourites</NavLink>
            <NavLink to="/about" activeclassname="active-link" className="nav-link"> About</NavLink>
            </div>
        </div>
    )

}

export default Sidebar