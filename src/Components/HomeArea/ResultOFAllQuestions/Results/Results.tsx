import SignsOfPain from "../../../../Models/SignsOfPainsModel/SignsOfPainModel/Signs-Of-Pain-Model";
import "./Results.css";
import Patient from '../../../../Models/PatientsModel/PatientModel/Patient-model';
import HandThumbsUp from "../../../shared/HandThumbsUp/HandThumbsUp";
import HandThumbDown from './../../../shared/HandThumbDown/HandThumbDown';
import { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
interface ResultsProps {
    signsOfPain?:SignsOfPain;
    patient?:Patient;

}

function Results(props:ResultsProps): JSX.Element {
  const navigate = useNavigate();
  function isChecked(args:SyntheticEvent){
    navigate("/AddPatient")
  }
    return (
        <div className="Results">
            <div className="ResultsDiv1 Box" >
            <h3>Details Of Patient </h3>
           <label>First Name:{props.patient?.firstName}</label> 
            <br/>
            <label>Last Name: {props.patient?.lastName}</label> 
            <br/>
            <label>birth Date:{props.patient?.birthDate}</label> 
            <br/>
            <label>age:{props.patient?.age}</label> 
            <br/>
            <label>country:{props.patient?.country}</label> 
            <br/>
            <label>city:{props.patient?.city}</label> 
            <br/>
            </div>
            <div  className="ResultsDiv2 Box"  >
            <h3> Results Of Signs Of Paint </h3>
           <label> Difficulty swallowing liquids:{props.signsOfPain?.difficultySwallowingLiquids?
           <HandThumbsUp/>:<HandThumbDown/>
           }</label> 
            <br/>
            <label>Difficultry swallowing solid food:{props.signsOfPain?.difficultrySwallowingSolidFood?
              <HandThumbsUp/>:<HandThumbDown/>
            }</label> 
            <br/>
            <label>Difficulty swallowing pills:{props.signsOfPain?.difficultySwallowingPills?
              <HandThumbsUp/>:<HandThumbDown/>
            }</label> 
            <br/>
            <label>Coughing while eating:{props.signsOfPain?.coughingWhileEating?
              <HandThumbsUp/>:<HandThumbDown/>
            }</label> 
            <br/>
            <label>Losing weight:{props.signsOfPain?.losingWeight?
              <HandThumbsUp/>:<HandThumbDown/>
            }</label> 
            <br/>
            <label>Choking during meals:{props.signsOfPain?.ChokingDuringMeals?
              <HandThumbsUp/>:<HandThumbDown/>
            }</label> 
            <br/>
            <label>Avoiding eating with others:{props.signsOfPain?.AvoidingEatingWithOthers?
              <HandThumbsUp/>:<HandThumbDown/>
            }</label> 
            <br/>
            <label>Pain while swallowing:{props.signsOfPain?.PainWhileSwallowing?
              <HandThumbsUp/>:<HandThumbDown/>
            }</label> 
            <br/>
            <label>Enjoying meals:{props.signsOfPain?.EnjoyingMeals?
              <HandThumbsUp/>:<HandThumbDown/>
            }</label> 
            <br/>
            <label>Feeling anxious about swallowing:{props.signsOfPain?.feelingAnxiousAboutSwallowing?
              <HandThumbsUp/>:<HandThumbDown/>
            }</label> 
            <br/>
            <label>Total:{props?.signsOfPain?.numberOfSignsOfPain} out of 10</label>
            </div>
            <br/>
            <p>Are Yuo agree to send the results to sips.study@gmail.com</p>
            <br/>
            <label><input type="checkbox" onChange={isChecked}/></label>
        </div>
    );
}

export default Results;
