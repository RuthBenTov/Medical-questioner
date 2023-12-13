import Patient from './../../Models/PatientsModel/PatientModel/Patient-model';
export class PatientsModelAppState{
    public patientModelAppState?:Patient;
    constructor(){

    }
}
export enum PatientsModelActionType{
    AddPatientsModel="AddPatientsModel",
    UpDatePatientsModel="UpDatePatientsModel",
    DeletePatientsModel ="DeletePatientsModel",
    SetPatientsModels="SetPatientsModels",
}
export interface PatientsModelAction {
    type:PatientsModelActionType;
    payLoad:any;
}
export function addPatientsModelAction( Patient:Patient):PatientsModelAction{
    return { type:PatientsModelActionType.AddPatientsModel,payLoad:Patient}
}
export function upDatePatientsModelAction(PatientTOUpDate:Patient):PatientsModelAction{
    return { type:PatientsModelActionType.UpDatePatientsModel,payLoad:PatientTOUpDate }
}
export function deletePatientsModelAction(numberOfPatientTODelete:number):PatientsModelAction{
    return { type:PatientsModelActionType.DeletePatientsModel,payLoad:numberOfPatientTODelete}
}
export function setPatientsModelAction(setAllPatients:Patient[]):PatientsModelAction{
    return { type:PatientsModelActionType.SetPatientsModels,payLoad:setAllPatients}
}
export function PatientsReducer(paintAppState = new  PatientsModelAppState(),PatientAction:PatientsModelAction):PatientsModelAppState{
     const newPaintAppState:PatientsModelAppState = new PatientsModelAppState();
     switch(PatientAction.type){
        case PatientsModelActionType.AddPatientsModel:
            newPaintAppState.patientModelAppState = PatientAction.payLoad;
            sessionStorage.setItem("cernentPainst",PatientAction.payLoad);
            break;
            case PatientsModelActionType.UpDatePatientsModel:
                newPaintAppState.patientModelAppState = PatientAction.payLoad;
                sessionStorage.setItem("cernentPainstUpDate",PatientAction.payLoad);
                break;
                case PatientsModelActionType.DeletePatientsModel:
                   //
                    break;
                    case PatientsModelActionType.SetPatientsModels:
                        //
                         break;
     }
     return newPaintAppState;
}
