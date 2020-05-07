import React ,{Component} from 'react'
import {BrowserRouter as Router,Switch, Route, Redirect} from 'react-router-dom';
import SignupContainer from '../containers/SignupContainer'
import LoginContainer from '../containers/LoginContainer'
import DashboardContainer from '../containers/DashboardContainer'

class AppRoute extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" render={(props) => (!localStorage.auth_token? (<SignupContainer {...props}/>) : (<Redirect to="/dashboard"/>))}/>
                    <Route exact path="/login" component={LoginContainer}/>
                    <Route exact path="/dashboard" render={(props) => (!localStorage.auth_token? (<Redirect to="/"/>) : (<DashboardContainer {...props}/>))}/>         
                </Switch>
            </Router>
        )
    }
}

export default AppRoute