import {  Route, Routes } from "react-router-dom";
import QuestionOne from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/FemalesQuetionArea/QuestionOne/QuestionOne";
import QuestionTwo from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/FemalesQuetionArea/QuestionTwo/QuestionTwo";
import QuestionThree from './../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/FemalesQuetionArea/QuestionThree/QuestionThree';
import QuestionFour from './../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/FemalesQuetionArea/QuestionFour/QuestionFour';
import QuestionFive from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/FemalesQuetionArea/QuestionFive/QuestionFive";
import QuestionSix from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/FemalesQuetionArea/QuestionSix/QuestionSix";
import QuestionSeven from './../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/FemalesQuetionArea/QuestionSeven/QuestionSeven';
import QuestionEight from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/FemalesQuetionArea/QuestionEight/QuestionEight";
import QuestionNine from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/FemalesQuetionArea/QuestionNine/QuestionNine";
import QuestionTen from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/FemalesQuetionArea/QuestionTen/QuestionTen";
import MaleOrFemalePage from './../../HomeArea/MaleOrFemalePage/MaleOrFemalePage';
import HomePage from "../../HomeArea/HomePage/HomePage";
import QuestionOneForMale from './../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/MalesQuetionArea/QuestionOneForMale/QuestionOneForMale';
import QuestionTwoForMale from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/MalesQuetionArea/QuestionTwoForMale/QuestionTwoForMale";
import QuestionFourForMale from './../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/MalesQuetionArea/QuestionFourForMale/QuestionFourForMale';
import QuestionThreeForMale from './../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/MalesQuetionArea/QuestionThreeForMale/QuestionThreeForMale';
import QuestionFiveForMale from './../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/MalesQuetionArea/QuestionFiveForMale/QuestionFiveForMale';
import QuestionSixForMale from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/MalesQuetionArea/QuestionSixForMale/QuestionSixForMale";
import QuestionSevenForMale from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/MalesQuetionArea/QuestionSevenForMale/QuestionSevenForMale";
import QuestionEightForMale from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/MalesQuetionArea/QuestionEightForMale/QuestionEightForMale";
import QuestionNineForMale from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/MalesQuetionArea/QuestionNineForMale/QuestionNineForMale";
import Results from './../../HomeArea/ResultOFAllQuestions/Results/Results';
import QuestionTenForMale from './../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/MalesQuetionArea/QuestionTenForMale/QuestionTenForMale';
import ResulOfQuestionsMale from './../../HomeArea/ResultOFAllQuestions/ResulOfQuestionsMale/ResulOfQuestionsMale';
import AddPatient from './../../PatientsArea/AddPatient/AddPatient';
import ResulOfQuestionsFemal from './../../HomeArea/ResultOFAllQuestions/ResulOfQuestionsFemal/ResulOfQuestionsFemal';
import Layout from './../Layout/Layout';
function Routing(): JSX.Element {
    return (
        <div className="Routing">
       <Routes> 
       <Route path="/HomePage" element={<HomePage/>} /> 
       <Route path="/MaleOrFemalePage" element={<MaleOrFemalePage/>} /> 
       <Route path="/question-one-for-female" element={<QuestionOne/>} /> 
       <Route path="/QuestionTwo" element={<QuestionTwo/>} />
       <Route path="/QuestionThree" element={<QuestionThree/>}/>
       <Route path="/QuestionFour" element={<QuestionFour/>}/>
       <Route path="/QuestionFive" element={<QuestionFive/>}/>
       <Route path="/QuestionSix" element={<QuestionSix/>} />
       <Route path="/QuestionSeven" element={<QuestionSeven/>}/>
       <Route path="/QuestionEight" element={<QuestionEight/>}/> 
       <Route path="/QuestionNine" element={<QuestionNine/>}/> 
       <Route path="/QuestionTen" element={<QuestionTen/>}/>
       <Route path="/question-one-for-Male" element={<QuestionOneForMale/>}/> 
       <Route path="/QuestionTwoForMale" element={<QuestionTwoForMale/>}/> 
       <Route path="/QuestionThreeForMale" element={<QuestionThreeForMale/>}/>
       <Route path="/QuestionFourForMale" element={<QuestionFourForMale/>}/>
       <Route path="/QuestionFiveForMale" element={<QuestionFiveForMale/>}/>
       <Route path="/QuestionSixForMale" element={<QuestionSixForMale/>}/>
       <Route path="/QuestionSevenForMale" element={<QuestionSevenForMale/>}/>
       <Route path="/QuestionEightForMale" element={<QuestionEightForMale/>} /> 
       <Route path="/QuestionNineForMale" element={<QuestionNineForMale/>} /> 
       <Route path="/QuestionTenForMale" element={<QuestionTenForMale/>} /> 
       <Route path="/ResulOfQuestionsMale" element={<ResulOfQuestionsMale/>}/> 
       <Route path="/ResulOfQuestionsFemal" element={<ResulOfQuestionsFemal/>}/> 
       <Route path="/Results" element={<Results/>}/> 
       <Route path="/AddPatient" element={<AddPatient/>}/> 
       <Route path="*" element={<MaleOrFemalePage/>}/>
      </Routes> 
        </div>
    );
}

export default Routing;
