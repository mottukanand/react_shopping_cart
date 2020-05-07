import * as logOutType from '../../constants/actionConstants';

export function logOutReducer(state = null, action) {
    switch (action.type) {
        case logOutType.LOGOUT_USER_REQUEST:
            return { ...state ,isLoading:true};

        case logOutType.LOGOUT_USER_SUCCESS:
            return {
                ...state, logoutFlag : true,isLoading:false
            }

        case logOutType.LOGOUT_USER_FAILURE:
            return {
                ...state,
                error: action.payload.response,
                isLoading:false
            };
        default:
            return state;
    }
}