import store from "../../../../Redux/ReduxStore/Store";
import Results from "../Results/Results";
import "./ResulOfQuestionsMale.css";

function ResulOfQuestionsMale(): JSX.Element {
    return (
        <div className="ResulOfQuestionsMale">
             <h1>Sex:Male </h1>
            <Results  signsOfPain={{...store.getState().PainsAppState.signsOFPain}}/>
        </div>
    );
}

export default ResulOfQuestionsMale;
