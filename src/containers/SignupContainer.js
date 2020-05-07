import { connect } from "react-redux";
import Signup from '../components/Signup'
import signupAction from '../redux/actions/signupAction';


const mapStateToProps = state=>{
    return{
        signupStatus:state.signup,
    }
}

const mapDispatchToProps = dispatch => ({

    signupAction: (signupValues) => dispatch(signupAction(signupValues)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Signup)