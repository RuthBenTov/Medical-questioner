import "./QuestionTwoWithHebHelp.css";
import ImageQuestionTwoWithHebHelp1 from   "./../../../../../../Assets/Images/imagesForFemalesQuetion/Picture3.jpg";
import ImageQuestionTwoWithHebHelp2 from   "./../../../../../../Assets/Images/imagesForFemalesQuetion/Picture4.jpg";
import { Link, useNavigate } from "react-router-dom";
import store from "../../../../../../Redux/ReduxStore/Store";
import PossibilityOfBackTothetweenQuestions from "../../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from './../../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions';
import signsOfPainsStateService from "../../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";


function QuestionTwoWithHebHelp(): JSX.Element {
    const navigate = useNavigate();
    const signsOfPaint = {...store.getState().PainsAppState.signsOFPain};      
    function  wellHappenClickHandlerOnQuestionTwoWithHebHelpForFemaleImage():void{
        if(signsOfPaint.difficultrySwallowingSolidFood === true) {
            if(signsOfPaint.numberOfSignsOfPain !== undefined) {
                signsOfPaint.numberOfSignsOfPain -= 1;
                signsOfPaint.difficultrySwallowingSolidFood = false;
                signsOfPainsStateService.getSignsOfPainsState(signsOfPaint); 
                navigate('/QuestionThreeWithHebHelp');
            }
    }
    else{
    signsOfPaint.difficultrySwallowingSolidFood = false;
    signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain ;
    signsOfPainsStateService.getSignsOfPainsState(signsOfPaint); 
    navigate('/QuestionThreeWithHebHelp');
}
    }
    function  badlyHappenClickHandlerOnQuestionTwoWithHebHelpForFemaleImage():void{
        if(signsOfPaint.difficultrySwallowingSolidFood === true) {
            signsOfPaint.difficultrySwallowingSolidFood = true;
            if(signsOfPaint.numberOfSignsOfPain !== undefined){
                signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;
            }
           signsOfPainsStateService.getSignsOfPainsState(signsOfPaint); 
           navigate('/QuestionThreeWithHebHelp');
        }
        else{
            if(signsOfPaint.numberOfSignsOfPain !== undefined){
            signsOfPaint.numberOfSignsOfPain += 1;
            }
            signsOfPaint.difficultrySwallowingSolidFood = true;
            signsOfPainsStateService.getSignsOfPainsState(signsOfPaint); 
            navigate('/QuestionThreeWithHebHelp');
        }
    }
    return (
        <div className="QuestionTwoWithHebHelp">
         <div> 
      
      <img src={ImageQuestionTwoWithHebHelp1} onClick={ badlyHappenClickHandlerOnQuestionTwoWithHebHelpForFemaleImage}/>
      <br/>
      <Link to={"/QuestionOneWithHebHelp"} title="חזור"><label>
      <PossibilityOfBackTothetweenQuestions/>
      </label></Link>
      <Link to={"/QuestionThreeWithHebHelp"} title="הבא"><label>
      <PossibilityOfNextTothetweenQuestions/>
      </label></Link>
      </div>
      <div>
        <img src={ImageQuestionTwoWithHebHelp2}  onClick={wellHappenClickHandlerOnQuestionTwoWithHebHelpForFemaleImage}/>
        <br/>
        <Link to={""} title="
        לפניך מוצגות שתי תמונות המייצגות חוויה שקשורה ליכולת שלך לאכול מזון מוצק. 
        יש לבחור בתמונה הנכונה עבורך.  "> 
        <svg className="SvgQuestionOne Box"  width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
       </svg>
        </Link>
       </div>
			
        </div>
    );
}

export default QuestionTwoWithHebHelp;
