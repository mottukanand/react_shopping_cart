import * as loginType from '../../constants/actionConstants';
import { performRequest } from '../../services/index';
import {reset} from 'redux-form';

export default function loginAction(loginData){
    const headers ={"Content-Type": "application/json"}

    return dispatch => {
        dispatch({
            type: loginType.LOGIN_USER_REQUEST
        })

        return performRequest('post', '/api/users/sign_in.json',headers, loginData)
            .then((response) => {
                if(response.data.status === 200 && response.data.success === true){
                    localStorage.setItem('auth_token',response.data.data.user.auth_token)
                    localStorage.setItem('first_name',response.data.data.user.first_name)
                    dispatch({
                        type: loginType.LOGIN_USER_SUCCESS,
                        payload: response
                    })
                    dispatch(reset('loginForm'))
                }else{
                    dispatch({
                        type: loginType.LOGIN_USER_SUCCESS_ERROR,
                        payload: response
                    })
                }
            })
            .catch((error) => {
                dispatch({
                    type: loginType.LOGIN_USER_FAILURE,
                    payload: error
                })
            })
    }
}