import * as clearType from '../../constants/actionConstants';

export default function clearState(clearTypeValue){
    return function (dispatch) {
        if(clearTypeValue === "signup"){
            dispatch({
                type: clearType.ClEAR_SIGNUP_USER
            })
        }   
    }
}