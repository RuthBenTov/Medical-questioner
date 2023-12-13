import store from "../../../../../Redux/ReduxStore/Store";
import ResultsInHeb from "../ResultsInHeb/ResultsInHeb";
import "./ResulOfQuestionsFemaleInHeb.css";

function ResulOfQuestionsFemaleInHeb(): JSX.Element {
    console.log(store.getState().PainsAppState.signsOFPain);
    return (
        <div className="ResulOfQuestionsFemaleInHeb">
			  <h1>מין:נקבה</h1>
              <ResultsInHeb signsOfPain={{...store.getState().PainsAppState.signsOFPain}}/>
        </div>
    );
}

export default ResulOfQuestionsFemaleInHeb;
