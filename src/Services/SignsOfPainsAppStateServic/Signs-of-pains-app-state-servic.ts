import { addPainAction } from '../../Redux/SignsOfPainsAppState/signs-0f-pains-app-state';
import SignsOfPain from './../../Models/SignsOfPainsModel/SignsOfPainModel/Signs-Of-Pain-Model';
import store from './../../Redux/ReduxStore/Store';
class SignsOfPainsStateService {
    public getSignsOfPainsState(signsOfPains:SignsOfPain):void{
        if(signsOfPains!=null){
            store.dispatch(addPainAction(signsOfPains));

          }
    }


}
const  signsOfPainsStateService = new SignsOfPainsStateService

export default signsOfPainsStateService;