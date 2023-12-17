import { BrowserRouter, useNavigate } from "react-router-dom";
import "./Layout.css";
import Routing from "../Routing/Routing";
import HomePage from "../../HomeArea/HomePage/HomePage";
import { useState } from "react";
import RoutingHeb from "../RoutingHeb/RoutingHeb";
import Logo from "../Logo/Logo";
function Layout(): JSX.Element {
  const [firstStateStep, setFirstStateStep] = useState<boolean>(false);
  const [getEnglishWayStateStep, setEnglishWayStateStep] =
    useState<boolean>(false);
  const [getHebeWayStateStep, setHebeWayStateStep] = useState<boolean>(false);
  function ClickHandler(): void {
    setFirstStateStep(true);
  }
  function getEnglishWayClickHandler(): void {
    ClickHandler();
    setEnglishWayStateStep(true);
  }
  function getHebeWayClickHandler(): void {
    ClickHandler();
    setHebeWayStateStep(true);
  }

  if (!firstStateStep) {
    return (
      <div className="Layout1">
        <header>
          <h1>SWALLOWING IMPAIRMENT PICTORIAL SURVEY</h1>
          <h2> שאלון חזותי לאיתור הפרעות בליעה</h2>

          <Logo />
        </header>
        <aside>
          <div>
            <button
              className="ButtonINMain
                 Box"
              title="
                1. Yael Shapira-Galitz, MD
                2. Keren Lupu-Stein, SLP 
                3. Meital Sharon, SLP 
                4. Shir Bouaron-Sharafi, SLP
                5. Boaz Gantz, SLP"
            >
              {" "}
              Our team
            </button>
          </div>
          <div>
            <button
              className="ButtonINMain Box"
              title="
               To improve the existing variety of screening test to detect dysphagia we developed this online survey called SIPS – Swallowing Impairment Pictorial Survey. 
               The survey is image-based, and is easy and simple to use. 
               10 pairs of images are presented, each presenting a scenario that is common among people with disordered swallowing . 
               We hope this screening tool will aid medical teams to detect and treat people with swallowing disorders. 
               The survey was developed by a team of speech and language pathologists,  and an otolaryngologist.                
               "
            >
              {" "}
              About{" "}
            </button>
          </div>
        </aside>
        <main>
          <HomePage />
        </main>
        <aside>
          <div>
            <button
              className="ButtonINMain Box"
              title='
                        ד"ר יעל שפירא גליץ  רופאת אף אוזן וגרון. 

                             קרן לופו שטיין  קלינאית תקשורת. 

                                    מיטל שרון  קלינאית תקשורת. 

                               שיר בוארון שרפי  קלינאית תקשורת. 

                                        בעז גנץ  קלינאי תקשורת              
                '
            >
              הצוות שלנו
            </button>
          </div>
          <div>
            <button
              className="ButtonINMain Box"
              title="
               SIPS –. 
               על מנת לשפר את האמצעים הקיימים לביצוע בדיקות סקר לאיתור הפרעות בליעה, פיתחנו את השאלון המקוון שמופיע באתר הזה שנקרא 
               Swallowing Impairment Pictorial Survey
               נות
               השאלון מבוסס כולו על תמונות, והוא פשוט וקל לשימוש.
               
               השאלון מציג זוגות של תמונות, בהן מוצגים תרחישים אופיינים לאנשים ונשים עם קשיי בליעה.
             
               אנו מקווים שהשאלון יהווה כלי עזר לצוותים רפואיים ופארא-רפואיים באיתור וטיפול באוכלוסייה עם קשיי בליעה. 
               השאלון פותח על ידי צוות שכלל קלינאיות תקשורת ורופאת אף אוזן וגרון.                
               "
            >
              {" "}
              אודות{" "}
            </button>
          </div>
        </aside>
        <footer>
          <button
            className="ButtonINMain Box"
            onClick={getEnglishWayClickHandler}
          >
            {" "}
            START{" "}
          </button>
          <button className="ButtonINMain Box" onClick={getHebeWayClickHandler}>
            {" "}
            התחלה{" "}
          </button>
        </footer>
      </div>
    );
  } else {
    if (getEnglishWayStateStep && firstStateStep) {
      return (
        <BrowserRouter>
          <div className="Layout">
            <Routing />
          </div>
        </BrowserRouter>
      );
    }
    if (getHebeWayStateStep && firstStateStep) {
      return (
        <BrowserRouter>
          <div className="Layout">
            <RoutingHeb />
          </div>
        </BrowserRouter>
      );
    }
    return (
      <></>
      //   <BrowserRouter>
      //     <div className="Layout">
      //       <Routing/>
      //       </div>
      //  </BrowserRouter>
    );
  }
}

export default Layout;
