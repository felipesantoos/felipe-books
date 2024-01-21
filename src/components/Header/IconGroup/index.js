import profile from "../../../assets/images/profile.svg";
import bag from "../../../assets/images/bag.svg";
import Icon from "./Icon";
import "./style.css";
import Icons from "../../../constants/Icons";

function IconGroup() {
    let icons = [
        {img: profile, alt: Icons.Profile},
        {img: bag, alt: Icons.Bag}
    ]
    return (
        <ul className="icon-group">
            {icons.map((icon => (<Icon img={icon.img} alt={icon.alt} />)))}
        </ul>
    );
}

export default IconGroup;
