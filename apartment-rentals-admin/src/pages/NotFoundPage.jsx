import logo from "../assets/images/SS icon (2).svg"
import "../pages/NotFoundPage.css"

function NotFoundPage() {
  return (
    <div className="not-found">
      <img src={logo} alt="Logo" />
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFoundPage;