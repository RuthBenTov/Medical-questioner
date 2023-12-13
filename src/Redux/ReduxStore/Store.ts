import { combineReducers, createStore } from "redux";
import { PatientsReducer } from "../PatientsModelAppState/PatientsModel-AppState";
import { painsReducer } from "../SignsOfPainsAppState/signs-0f-pains-app-state";

    const Reducers = combineReducers({PainsAppState:painsReducer,PatientsAppState:PatientsReducer});
    const store = createStore(Reducers);      
    export default store;
   
    
    