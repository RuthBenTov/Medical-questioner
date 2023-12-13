import "./QuestionEightForMaleWithHebHelp.css";
import imageQuestionEightForMaleWithHebHelp1 from  "./../../../../../../Assets/Images/imagesForMalesQuetion/Picture15.gif";
import imageQuestionEightForMaleWithHebHelp2 from  "./../../../../../../Assets/Images/imagesForMalesQuetion/Picture16.gif";
import { Link, useNavigate } from "react-router-dom";
import PossibilityOfBackTothetweenQuestions from "../../../../PossibilityOfBackTothetweenQuestions/PossibilityOfBackTothetweenQuestions";
import PossibilityOfNextTothetweenQuestions from './../../../../PossibilityOfNextTothetweenQuestions/PossibilityOfNextTothetweenQuestions';
import store from "../../../../../../Redux/ReduxStore/Store";
import signsOfPainsStateService from "../../../../../../Services/SignsOfPainsAppStateServic/Signs-of-pains-app-state-servic";
function QuestionEightForMaleWithHebHelp(): JSX.Element {
    const navigate = useNavigate();
    const signsOfPaint = {...store.getState().PainsAppState.signsOFPain};      
    function  wellHappenClickHandlerOnQuestionEightForMaleWithHebHelpImage():void{
        if( signsOfPaint.PainWhileSwallowing === true) {
            signsOfPaint.PainWhileSwallowing = false;
            if(signsOfPaint.numberOfSignsOfPain !== undefined) {
                signsOfPaint.numberOfSignsOfPain -= 1;
            }
            signsOfPainsStateService.getSignsOfPainsState(signsOfPaint); 
            navigate('/QuestionNineForMaleWithHebHelp');
        }
    else{
    signsOfPaint.PainWhileSwallowing = false;
    signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain ;
    signsOfPainsStateService.getSignsOfPainsState(signsOfPaint); 
    navigate('/QuestionNineForMaleWithHebHelp');
}
    
    }
    function  badlyHappenClickHandlerOnQuestionEightForMaleWithHebHelpImage():void{
        if(signsOfPaint.PainWhileSwallowing === true) {
            signsOfPaint.PainWhileSwallowing = true;
                if(signsOfPaint.numberOfSignsOfPain !== undefined){
                    signsOfPaint.numberOfSignsOfPain = signsOfPaint.numberOfSignsOfPain;;
                }
                signsOfPainsStateService.getSignsOfPainsState(signsOfPaint); 
                navigate('/QuestionNineForMaleWithHebHelp');
    
        }
        else{
            if(signsOfPaint.numberOfSignsOfPain !== undefined){
                signsOfPaint.numberOfSignsOfPain += 1;
            }
        signsOfPaint.PainWhileSwallowing = true;
        signsOfPainsStateService.getSignsOfPainsState(signsOfPaint); 
        navigate('/QuestionNineForMaleWithHebHelp');
    }
    }
    return (
        <div className="QuestionEightForMaleWithHebHelp">
                 <div>
        <img src={imageQuestionEightForMaleWithHebHelp1} onClick={badlyHappenClickHandlerOnQuestionEightForMaleWithHebHelpImage}/>
        <br/>
        <Link to={"/QuestionSevenForMaleWithHebHelp"}title="חזור">
        <PossibilityOfBackTothetweenQuestions/>
        </Link>
        <Link to={'/QuestionNineForMaleWithHebHelp'} title="הבא">
        <PossibilityOfNextTothetweenQuestions/>
        </Link>
        </div>
        <div>
        <img src={imageQuestionEightForMaleWithHebHelp2} onClick={ wellHappenClickHandlerOnQuestionEightForMaleWithHebHelpImage}/>
            <br/>
            <Link to={"/HelpSentenceToQuestionOne"} title="
לפניך מוצגות שתי תמונות המייצגות חוויה של כאבים בזמן בליעה
יש לבחור בתמונה הנכונה עבורך. 
 " ><label>  
            <svg className="SvgQuestionOne Box"  width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
             <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
             <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
             </svg>  
            </label>
            </Link>
           </div>	
        </div>
    );
}

export default QuestionEightForMaleWithHebHelp;
