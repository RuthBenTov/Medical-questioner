import { Route, Routes } from "react-router-dom";
import QuestionOneWithHebHelp from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/FemalesQuetionArea/FemalesQuetionWithHebHelp/QuestionOneWithHebHelp/QuestionOneWithHebHelp";
import MaleOrFemalePageWithHeb from "./../../HomeArea/MaleOrFemalePage/MaleOrFemalePageWithHeb/MaleOrFemalePageWithHeb";
import QuestionTwoWithHebHelp from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/FemalesQuetionArea/FemalesQuetionWithHebHelp/QuestionTwoWithHebHelp/QuestionTwoWithHebHelp";
import QuestionThreeWithHebHelp from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/FemalesQuetionArea/FemalesQuetionWithHebHelp/QuestionThreeWithHebHelp/QuestionThreeWithHebHelp";
import QuestionFourWithHebHelp from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/FemalesQuetionArea/FemalesQuetionWithHebHelp/QuestionFourWithHebHelp/QuestionFourWithHebHelp";
import QuestionFiveWithHebHelp from "./../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/FemalesQuetionArea/FemalesQuetionWithHebHelp/QuestionFiveWithHebHelp/QuestionFiveWithHebHelp";
import QuestionSixWithHebHelp from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/FemalesQuetionArea/FemalesQuetionWithHebHelp/QuestionSixWithHebHelp/QuestionSixWithHebHelp";
import QuestionSevenWithHebHelp from "./../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/FemalesQuetionArea/FemalesQuetionWithHebHelp/QuestionSevenWithHebHelp/QuestionSevenWithHebHelp";
import QuestionEightWithHebHelp from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/FemalesQuetionArea/FemalesQuetionWithHebHelp/QuestionEightWithHebHelp/QuestionEightWithHebHelp";
import QuestionNineWithHebHelp from "./../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/FemalesQuetionArea/FemalesQuetionWithHebHelp/QuestionNineWithHebHelp/QuestionNineWithHebHelp";
import QuestionTenWithHebHelp from "./../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/FemalesQuetionArea/FemalesQuetionWithHebHelp/QuestionTenWithHebHelp/QuestionTenWithHebHelp";
import QuestionOneForMaleWithHebHelp from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/MalesQuetionArea/MalesQuetionWithHebHelp/QuestionOneForMaleWithHebHelp/QuestionOneForMaleWithHebHelp";
import QuestionTwoForMaleWithHebHelp from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/MalesQuetionArea/MalesQuetionWithHebHelp/QuestionTwoForMaleWithHebHelp/QuestionTwoForMaleWithHebHelp";
import QuestionThreeForMaleWithHebHelp from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/MalesQuetionArea/MalesQuetionWithHebHelp/QuestionThreeForMaleWithHebHelp/QuestionThreeForMaleWithHebHelp";
import QuestionFourForMaleWithHebHelp from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/MalesQuetionArea/MalesQuetionWithHebHelp/QuestionFourForMaleWithHebHelp/QuestionFourForMaleWithHebHelp";
import QuestionFiveForMaleWithHebHelp from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/MalesQuetionArea/MalesQuetionWithHebHelp/QuestionFiveForMaleWithHebHelp/QuestionFiveForMaleWithHebHelp";
import QuestionSixForMaleWithHebHelp from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/MalesQuetionArea/MalesQuetionWithHebHelp/QuestionSixForMaleWithHebHelp/QuestionSixForMaleWithHebHelp";
import QuestionSevenForMaleWithHebHelp from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/MalesQuetionArea/MalesQuetionWithHebHelp/QuestionSevenForMaleWithHebHelp/QuestionSevenForMaleWithHebHelp";
import QuestionEightForMaleWithHebHelp from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/MalesQuetionArea/MalesQuetionWithHebHelp/QuestionEightForMaleWithHebHelp/QuestionEightForMaleWithHebHelp";
import QuestionNineForMaleWithHebHelp from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/MalesQuetionArea/MalesQuetionWithHebHelp/QuestionNineForMaleWithHebHelp/QuestionNineForMaleWithHebHelp";
import QuestionTenForMaleWithHebHelp from "../../HomeArea/SWALLOWINGPICTORIALQuestionsArea/MalesQuetionArea/MalesQuetionWithHebHelp/QuestionTenForMaleWithHebHelp/QuestionTenForMaleWithHebHelp";
import ResulOfQuestionsMaleInHeb from "./../../HomeArea/ResultOFAllQuestions/ResultOFAllQuestionsInHeb/ResulOfQuestionsMaleInHeb/ResulOfQuestionsMaleInHeb";
import ResulOfQuestionsFemaleInHeb from "./../../HomeArea/ResultOFAllQuestions/ResultOFAllQuestionsInHeb/ResulOfQuestionsFemaleInHeb/ResulOfQuestionsFemaleInHeb";
import ResultsInHeb from "./../../HomeArea/ResultOFAllQuestions/ResultOFAllQuestionsInHeb/ResultsInHeb/ResultsInHeb";
import AddPatientInHeb from "./../../PatientsArea/AddPatientInHeb/AddPatientInHeb";
import Layout from "../Layout/Layout";

function RoutingHeb(): JSX.Element {
  return (
    <>
      <Routes>
        <Route
          path="/QuestionOneWithHebHelp"
          element={<QuestionOneWithHebHelp />}
        />
        <Route
          path="/QuestionTwoWithHebHelp"
          element={<QuestionTwoWithHebHelp />}
        />
        <Route
          path="/QuestionThreeWithHebHelp"
          element={<QuestionThreeWithHebHelp />}
        />
        <Route
          path="/QuestionFourWithHebHelp"
          element={<QuestionFourWithHebHelp />}
        />
        <Route
          path="/QuestionFiveWithHebHelp"
          element={<QuestionFiveWithHebHelp />}
        />
        <Route
          path="/QuestionSixWithHebHelp"
          element={<QuestionSixWithHebHelp />}
        />
        <Route
          path="/QuestionSevenWithHebHelp"
          element={<QuestionSevenWithHebHelp />}
        />
        <Route
          path="/QuestionEightWithHebHelp"
          element={<QuestionEightWithHebHelp />}
        />
        <Route
          path="/QuestionNineWithHebHelp"
          element={<QuestionNineWithHebHelp />}
        />
        <Route
          path="/QuestionTenWithHebHelp"
          element={<QuestionTenWithHebHelp />}
        />
        <Route
          path="/QuestionOneForMaleWithHebHelp"
          element={<QuestionOneForMaleWithHebHelp />}
        />
        <Route
          path="/QuestionTwoForMaleWithHebHelp"
          element={<QuestionTwoForMaleWithHebHelp />}
        />
        <Route
          path="/QuestionThreeForMaleWithHebHelp"
          element={<QuestionThreeForMaleWithHebHelp />}
        />
        <Route
          path="/QuestionFourForMaleWithHebHelp"
          element={<QuestionFourForMaleWithHebHelp />}
        />
        <Route
          path="/QuestionFiveForMaleWithHebHelp"
          element={<QuestionFiveForMaleWithHebHelp />}
        />
        <Route
          path="/QuestionSixForMaleWithHebHelp"
          element={<QuestionSixForMaleWithHebHelp />}
        />
        <Route
          path="/QuestionSevenForMaleWithHebHelp"
          element={<QuestionSevenForMaleWithHebHelp />}
        />
        <Route
          path="/QuestionEightForMaleWithHebHelp"
          element={<QuestionEightForMaleWithHebHelp />}
        />
        <Route
          path="/QuestionNineForMaleWithHebHelp"
          element={<QuestionNineForMaleWithHebHelp />}
        />
        <Route
          path="/QuestionTenForMaleWithHebHelp"
          element={<QuestionTenForMaleWithHebHelp />}
        />
        <Route
          path="/ResulOfQuestionsMaleInHeb"
          element={<ResulOfQuestionsMaleInHeb />}
        />
        <Route
          path="/ResulOfQuestionsFemaleInHeb"
          element={<ResulOfQuestionsFemaleInHeb />}
        />
        <Route path="/ResultsInHeb" element={<ResultsInHeb />} />
        <Route path="/AddPatientInHeb" element={<AddPatientInHeb />} />
        <Route path="*" element={<MaleOrFemalePageWithHeb />} />
      </Routes>
    </>
  );
}

export default RoutingHeb;
