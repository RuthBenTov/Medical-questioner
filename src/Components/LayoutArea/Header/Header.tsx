import Logo from "../Logo/Logo";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <div>
            <h1>SWALLOWING IMPAIRMENT PICTORIAL SURVEY</h1>
            <h1> שאלון חזותי לאיתור הפרעות בליעה </h1>
            </div>

            <div>
            <Logo/>
            </div>
			
        </div>
    );
}

export default Header;
