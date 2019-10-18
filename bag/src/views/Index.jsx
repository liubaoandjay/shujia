import React, { Component } from 'react'
import Home from './Home'
import Bag from './Bag'
import {Route,NavLink} from 'react-router-dom'

class Index extends Component{
    render() {
        return (
            <div>
                <div>
                    <NavLink to="/index/home">首页</NavLink>
                    <NavLink to="/index/bag">书包</NavLink>
                </div>
                <Route path="/index/home" component={Home}></Route>
                <Route path="/index/bag" component={Bag}></Route>
            </div>
        )
    }
}
export default Index