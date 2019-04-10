'use strict';

import React, {Component} from 'react';

import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';

export default class AppContainer extends Component{

    constructor(props){
        super(props);
        this.setState({
            users:[]
        })
    }

    // signUp(user){
    //     this.setState(function (state) {
    //         users: state.users.concat();
    //     })
    // }

    render() {
        return <div>
            <Home/>
            <SignUp/>
            <Login/>
        </div>;
    }
}