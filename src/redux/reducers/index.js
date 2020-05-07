import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import {signupReducer} from './signupReducer'
import {loginReducer} from './loginReducer'
import {cartProductReducer} from './addProductReducer'
import {logOutReducer} from './logoutReducer'

const appReducer = combineReducers({
    form: formReducer,
    signup : signupReducer,
    login : loginReducer,
    cartProduct : cartProductReducer,
    logOut : logOutReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
    return appReducer(state, action)
  }
export default rootReducer