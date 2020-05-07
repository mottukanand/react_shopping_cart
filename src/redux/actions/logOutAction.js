import * as logOutType from '../../constants/actionConstants';
import { performRequest } from '../../services/index';

export default function logoutAction(){
    let token = localStorage.getItem("auth_token") || null
    const headers ={"Content-Type": "application/json","AUTH_TOKEN":token}

    return function (dispatch) {
        return performRequest('delete', '/api/users/sign_out.json',headers)
            .then((response) => {
                if(response.statusText === "OK"){
                    
                    dispatch({
                        type: logOutType.LOGOUT_USER_SUCCESS,
                        payload: response
                    })
                    dispatch({
                        type: logOutType.USER_LOGOUT
                    })
                    localStorage.clear()
                    
                }
            })
            .catch((error) => {
                dispatch({
                    type: logOutType.LOGOUT_USER_FAILURE,
                    payload: error
                })
            })
    }
}