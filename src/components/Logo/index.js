import logo from "../../assets/images/logo.svg";
import './style.css';

function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt="App logo"/>
            <p><strong>Alura</strong>Books</p>
        </div>
    );
}

export default Logo;
