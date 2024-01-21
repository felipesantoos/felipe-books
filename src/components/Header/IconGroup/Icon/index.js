import "./style.css";

function Icon({img, alt}) {
    return (
        <li className="icon"><img src={img} alt={alt}/></li>
    );
}

export default Icon;
