'use strict';

import React, {Component} from 'react';
import PropTypes from "prop-types";

export default class SignUp extends Component{

    static get PropTypes() {
        return {
            signUp: PropTypes.func
        }
    }

    constructor(props){
        super(props);
        // this.state = {
        //     id: "",
        //     firstName: "",
        //     lastName: "",
        //     password: "",
        //     email: "",
        //     country: ""
        // }
    }

    onSignUpSubmit(event){
        event.preventDefault();
        event.stopPropagation();
        if(this.id){
            this.props.signUp();
        }
    }

    render() {
        return<div className="signup">
            <form onSubmit={event => this.onSignUpSubmit(event)}>
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <td><label>First Name: </label></td>
                            <td><input type="text" id="fname"/></td>
                        </tr>
                        <tr>
                            <td><label>Last Name: </label></td>
                            <td><input type="text" id="lname"/></td>
                        </tr>
                        <tr>
                            <td><label>Email: </label></td>
                            <td><input type="text" id="email"/></td>
                        </tr>
                        <tr>
                            <td><label>Country: </label></td>
                            <td><input type="text" id="country"/></td>
                        </tr>
                        <tr>
                            <td><label>Password: </label></td>
                            <td><input type="text" id="pass"/></td>
                        </tr>
                        <tr>
                            <td><label>Repeat Password: </label></td>
                            <td><input type="text" id="rePass"/></td>
                        </tr>
                        <tr>
                            <td><button type="submit">Sign up</button></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </form>
        </div>
    }
}