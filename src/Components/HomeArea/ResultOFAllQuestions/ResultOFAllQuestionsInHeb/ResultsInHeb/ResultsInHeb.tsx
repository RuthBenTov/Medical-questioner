import { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import Patient from "../../../../../Models/PatientsModel/PatientModel/Patient-model";
import SignsOfPain from "../../../../../Models/SignsOfPainsModel/SignsOfPainModel/Signs-Of-Pain-Model";
import AddPatientInHeb from "../../../../PatientsArea/AddPatientInHeb/AddPatientInHeb";
import HandThumbDown from "../../../../shared/HandThumbDown/HandThumbDown";
import HandThumbsUp from "../../../../shared/HandThumbsUp/HandThumbsUp";
import "./ResultsInHeb.css";
interface ResultsProps {
    signsOfPain?:SignsOfPain;
    patient?:Patient;

}

function ResultsInHeb(props:ResultsProps): JSX.Element {
    const navigate = useNavigate();
    function isChecked(args:SyntheticEvent){
      navigate("/AddPatientInHeb");
    }
    console.log("Results")
    console.log(props.signsOfPain);
    return (
        <div className="ResultsInHeb">
            <div className="div1 Box">
            <h1> פרטי  החולה</h1>
           <label>{props.patient?.firstName}:שם פרטי</label> 
            <br/>
            <label> {props.patient?.lastName}:שם משפחה</label> 
            <br/>
            <label>{props.patient?.birthDate}:שנת לידה</label> 
            <br/>
            <label>{props.patient?.age}:גיל</label> 
            <br/>
            <label>{props.patient?.country}:מדינה</label> 
            <br/>
            <label>{props.patient?.city}:עיר</label> 
            <br/>
            </div>
            <div  className="div2 Box">
            <h1>   תוצאות   החולה</h1>
           <label>{props.signsOfPain?.difficultySwallowingLiquids?<HandThumbsUp/>:<HandThumbDown/>}</label> 
           <label>:קושי בשתיית נוזלים</label> 
            <br/>
           
            <label>{props.signsOfPain?.difficultrySwallowingSolidFood?<HandThumbsUp/>:<HandThumbDown/>}</label>
            <label>:קושי באכילת מוצקים</label> 
            <br/>
           
            <label>{props.signsOfPain?.difficultySwallowingPills?<HandThumbsUp/>:<HandThumbDown/>}</label>
            <label>:קושי בבליעת תרופות</label> 
            <br/>
           
            <label>{props.signsOfPain?.coughingWhileEating?<HandThumbsUp/>:<HandThumbDown/>}</label>
            <label>:שיעול באכילה</label>
            <br/>
            <label>{props.signsOfPain?.losingWeight?<HandThumbsUp/>:<HandThumbDown/>}</label>
            <label>:ירידה במשקל</label> 
            <br/>
          
            <label>{props.signsOfPain?.ChokingDuringMeals?<HandThumbsUp/>:<HandThumbDown/>}</label> 
            <label>:מחנק בזמן האוכל</label> 
            <br/>
           
            <label>{props.signsOfPain?.AvoidingEatingWithOthers?<HandThumbsUp/>:<HandThumbDown/>}</label>
            <label> :המנעות מאכילה בחברה</label>
            <br/>
           
            <label>{props.signsOfPain?.PainWhileSwallowing?<HandThumbsUp/>:<HandThumbDown/>}</label> 
            <label> :כאב בבליעה</label> 
            <br/>
           
            <label>{props.signsOfPain?.EnjoyingMeals?<HandThumbsUp/>:<HandThumbDown/>}</label>
            <label>:הנאה מאכילה</label>
            <br/>
            <label>{props.signsOfPain?.feelingAnxiousAboutSwallowing?<HandThumbsUp/>:<HandThumbDown/>}</label>
            <label>:חרדה מאכילה</label>  
            <br/>
            <label>סך הכל:{props.signsOfPain?.numberOfSignsOfPain} תוצאות מתוך 10</label>
            </div>
            <br/>
            <p>האם אתה/את מסכים/מסכימה לשלוח את התוצאות ל
            <label> sips.study@gmail.com</label>
            </p>
            <br/>
            <label><input type="checkbox" onChange={isChecked}/></label>
        </div>
    );
}

export default ResultsInHeb;
