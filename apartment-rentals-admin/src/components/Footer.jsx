import "../components/Footer.css"
import githubIcon from "../assets/images/githubicon.png"
function Footer(){
    return(
        <div className="footer">
        <img src={githubIcon}/>
        <a href="https://github.com/mimmy307/Apartment-Rentals-Admin" target="_blank" rel="noopener noreferrer">
        GitHub Repository
        </a>
        </div>
    )
}

export default Footer