import * as signupType from '../../constants/actionConstants';

export function signupReducer(state = null, action) {
    switch (action.type) {
        case signupType.SIGNUP_USER_REQUEST:
            return { ...state ,isLoading:true};

        case signupType.SIGNUP_USER_SUCCESS:

            return {
                ...state, 
                addUser: action.payload.data,
                isLoading:false
            }
        case signupType.SIGNUP_USER_SUCCESS_ERROR:
            return {
                ...state,
                fieldError : action.payload.data,
                isLoading:false
            }
        case signupType.SIGNUP_USER_FAILURE:
            return {
                ...state,
                addUserError: action.payload.response,
                isLoading:false
            };

        case signupType.ClEAR_SIGNUP_USER:
            return {
                state : null
            };
        default:
            return state;
    }
}