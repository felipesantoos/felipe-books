import profile from "../../../assets/images/profile.svg";
import bag from "../../../assets/images/bag.svg";
import Icon from "./Icon";
import "./style.css";

function IconGroup() {
    let icons = [
        {img: profile, alt: "Profile icon"},
        {img: bag, alt: "Bag icon"}
    ]
    return (
        <ul className="icon-group">
            {icons.map((icon => (<Icon img={icon.img} alt={icon.alt} />)))}
        </ul>
    );
}

export default IconGroup;
