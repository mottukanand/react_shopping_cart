import { connect } from "react-redux";
import Login from '../components/Login'
import loginAction from '../redux/actions/loginAction';
import clearState from '../redux/actions/clearStateAction';


const mapStateToProps = state=>{
    return{
        loginStatus:state.login,
    }
}

const mapDispatchToProps = dispatch => ({

    loginAction: (loginData) => dispatch(loginAction(loginData)),
    clearState : (clear_type) => dispatch(clearState(clear_type))
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)