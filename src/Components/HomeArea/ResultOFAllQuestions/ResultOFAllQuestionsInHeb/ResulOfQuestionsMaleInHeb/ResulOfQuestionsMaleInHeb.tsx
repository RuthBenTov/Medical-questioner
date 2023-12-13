import store from "../../../../../Redux/ReduxStore/Store";
import ResultsInHeb from "../ResultsInHeb/ResultsInHeb";
import "./ResulOfQuestionsMaleInHeb.css";

function ResulOfQuestionsMaleInHeb(): JSX.Element {
    console.log(store.getState().PainsAppState.signsOFPain);
    return (
        <div className="ResulOfQuestionsMaleInHeb">
			 <h1> מיו:זכר </h1>
             <ResultsInHeb signsOfPain={{...store.getState().PainsAppState.signsOFPain}}/>
        </div>
    );
}

export default ResulOfQuestionsMaleInHeb;
