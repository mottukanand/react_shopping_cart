import * as signupType from '../../constants/actionConstants';
import { performRequest } from '../../services/index';
import {reset} from 'redux-form';

export default function signupAction(signUpData){
    const headers ={"Content-Type": "application/json"}

    return dispatch => {
        dispatch({
            type: signupType.SIGNUP_USER_REQUEST
        })

        return performRequest('post', '/api/users/sign_up.json',headers, signUpData)
            .then((response) => {
                if(response.data.status === 200 && response.data.success === true){
                    dispatch({
                        type: signupType.SIGNUP_USER_SUCCESS,
                        payload: response
                    })
                    dispatch(reset('signupForm'))
                }else{
                    dispatch({
                        type: signupType.SIGNUP_USER_SUCCESS_ERROR,
                        payload : response
                    })
                }
                
                
            })
            .catch((error) => {
                dispatch({
                    type: signupType.SIGNUP_USER_FAILURE,
                    payload: error
                })
            })
    }
}