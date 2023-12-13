import { useState } from "react";
import SignsOfPain from "../../../../Models/SignsOfPainsModel/SignsOfPainModel/Signs-Of-Pain-Model";
import store from "../../../../Redux/ReduxStore/Store";
import Results from "../Results/Results";
import "./ResulOfQuestionsFemal.css";

function ResulOfQuestionsFemal(): JSX.Element {
    //const[signsOfPaint, setSignsOfPaint]= useState<SignsOfPain>();
   //const getSignsOfPaintOject={...store.getState().PainsAppState.signsOFPain}
   //(getSignsOfPaintOject);

    return (
        <div className="ResulOfQuestionsFemal">
              <h1>Sex:Female </h1>
            <Results  signsOfPain={{...store.getState().PainsAppState.signsOFPain}}/>
			
        </div>
    );
}

export default ResulOfQuestionsFemal;
