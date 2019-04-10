'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component{

    static get PropTypes() {
        return {
            addUser
        }
    }

    constructor(props){
        super(props);

    }

    onLoginSubmit(event){
        event.preventDefault();
        event.stopPropagation();

    }

    onSignUpSubmit(event){
        event.preventDefault();
        event.stopPropagation();
        if(this.name){

        }
    }

    render() {
        return <div className="home">
            <div className="home-container" align="horizontal" >
                <div className="siteDetails" align="left">
                    <image href="C:\Users\hp\Desktop\Blog\p3_4.png"/>
                </div>
                <div className="signup">
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
                <div className="login">
                    <form onSubmit={event => this.onLoginSubmit(event)}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label>Username </label><input type="text" id="username"/></td>
                                    <td><label>Password </label><input type="password" id="password"/></td>
                                    <td><button type="submit">Login</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </div>;
    }
}


