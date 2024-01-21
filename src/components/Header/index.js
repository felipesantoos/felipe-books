import Logo from "./Logo";
import "./style.css";
import Menu from "./Menu";
import IconGroup from "./IconGroup";

function Header() {
    return (
        <header className="header">
            <Logo />
            <Menu />
            <IconGroup />
        </header>
    );
}

export default Header;
