import * as loginType from '../../constants/actionConstants';

export function loginReducer(state = null, action) {
    switch (action.type) {
        case loginType.LOGIN_USER_REQUEST:
            return { ...state ,isLoading:true};

        case loginType.LOGIN_USER_SUCCESS:

            return {
                ...state, 
                loginUser: action.payload.data,
                isLoading:false
            }

        case loginType.LOGIN_USER_SUCCESS_ERROR:
                return {
                    ...state,
                    loginFieldError : action.payload.data,
                    isLoading:false
                }

        case loginType.LOGIN_USER_FAILURE:
            return {
                ...state,
                loginUserError: action.payload.response,
                isLoading:false
            };
        default:
            return state;
    }
}