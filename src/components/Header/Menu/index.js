import "./style.css";
import Strings from "../../../constants/Strings";
import Item from "./Item";

function Menu() {
    let options = [Strings.Categories, Strings.MyBookshelf, Strings.Favorites]
    return (
        <ul className="menu">
            {options.map((option) => (<Item text={option} />))}
        </ul>
    );
}

export default Menu;
