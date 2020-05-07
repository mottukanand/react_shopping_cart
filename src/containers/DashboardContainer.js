import { connect } from "react-redux";
import Dashboard from '../components/Dashboard'
import cartProductAction from '../redux/actions/addProductAction';
import logOut from '../redux/actions/logOutAction';


const mapStateToProps = state=>{
    return{
        cartProduct:state.cartProduct,
        logoutStatus : state.logout
    }
}
const mapDispatchToProps = dispatch => ({
    cartProductAction: (product) =>dispatch(cartProductAction(product)),
    logOut:() => dispatch(logOut())
})

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)