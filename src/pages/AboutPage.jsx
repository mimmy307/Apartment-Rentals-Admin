import "../pages/AboutPage.css"

function AboutPage(){
    return(
        <div className="about-page">
        <h1>About Serene Stay Rentals </h1>
        <p>Welcome to Serene Stay Rentals, an Apartment Rentals Admin Dashboard - 
        a platform for managing apartment listings efficiently. This dashboard allows administrators to oversee 
        and manage the apartments displayed on the platform. With features, such as bookmarking favorite 
        apartments, the platform aims to enhance the management experience, 
        making navigation easier and more intuitive.</p>
        <h2>Project features</h2>
        <ul>
            <li>View, add, and manage apartment listings</li>
            <li>Bookmark favorite apartments for easier navigation</li>
        </ul>

        <h2>Meet the creator</h2>
        <div className="team-member">
        <h3>Mynorka Alexandra Daza</h3>
        <p>Mynorka Alexandra Daza is a web development student at Ironhack, 
        currently learning JavaScript, HTML, React, and CSS. 
        She has contributed to the development of the Apartment Rentals Admin Dashboard, 
        focusing on creating user-friendly experiences.</p>

        <p>Connect with Mynorka:</p>
        <ul>
            <li><a href="https://github.com/mimmy307" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/mynorka-alexandra-daza" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>

        </div>


        </div>
    )
}

export default AboutPage