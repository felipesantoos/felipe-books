import "./style.css";

function Item({text}) {
    return (
        <li className="item"><p>{text}</p></li>
    );
}

export default Item;
