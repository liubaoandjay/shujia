import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from '../views/Login'
import Index from '../views/Index'
import Detail from '../views/detail'

class Router extends Component {
    render() {
        return (
            <Switch>
                <Redirect from="/" to="/login" exact></Redirect>
                <Route path="/login" component={Login} />
                <Route path="/index" component={Index} />
                <Route path="/detail/:id" component={Detail}/>
            </Switch>
        )
    }
}
export default Router