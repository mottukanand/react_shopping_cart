import React ,{Component} from 'react'
import {BrowserRouter as Router,Switch, Route, Redirect} from 'react-router-dom';
import Home from '../components/home'

class AppRoute extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </Router>
        )
    }
}

export default AppRoute