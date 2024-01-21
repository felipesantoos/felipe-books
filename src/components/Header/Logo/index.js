import felipeBooksLogo from "../../../assets/images/felipeBooksLogo.png";
import "./style.css";

function Logo() {
    return (
        <div className="logo">
            <img src={felipeBooksLogo} alt="App logo" className="logo-image"/>
            <p className="logo-text"><strong>Felipe</strong>Books</p>
        </div>
    );
}

export default Logo;
