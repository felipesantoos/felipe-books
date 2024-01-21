import logo from "../../../assets/images/logo.svg";
import "./style.css";

function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="App logo" className="logo-image"/>
            <p className="logo-text"><strong>Alura</strong>Books</p>
        </div>
    );
}

export default Logo;
