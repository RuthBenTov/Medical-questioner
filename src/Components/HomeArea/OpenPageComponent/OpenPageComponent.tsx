import { Link } from "react-router-dom";
import Logo from "../../LayoutArea/Logo/Logo";
import HomePage from "../HomePage/HomePage";
import "./OpenPageComponent.css";

function OpenPageComponent(): JSX.Element {
    return (
        <div className="OpenPageComponent">
		<div>
          <label>
          SWALLOWING IMPAIRMENT PICTORIAL SURVEY
        </label>
        <br/>
         <label>
        שאלון חזותי לאיתור הפרעות בליעה                 
        </label>
            </div>
            <div>
            <Logo/>
            </div>
            <div>
            </div>
        </div>
    );
}

export default OpenPageComponent;
