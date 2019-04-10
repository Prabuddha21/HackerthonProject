'use strict';

import React, {Component} from 'react';

import Home from './components/Home';

export default class AppContainer extends Component{

    constructor(props){
        super(props);
        this.setState({
            users:[]
        })
    }

    render() {
        return <div>
            <Home/>
        </div>;
    }
}