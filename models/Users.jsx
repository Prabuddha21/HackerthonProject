'use static';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import User from './User';

export default class Users extends Component{

    constructor(props){
        super(props);
        this.setState({
            users: PropTypes.array
        });
    }

    render() {
        return;
    }
}