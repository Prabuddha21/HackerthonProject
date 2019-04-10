'use strict';

import React, {Component} from 'react';

export default class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            user: [{
                id: "Tourist1",
                firstName: "Tom",
                lastName: "Vanz",
                password: "1234",
                email: "tourist@tour.com",
                country: "UK"
            }]
        }
    }

    onLoginSubmit(event){
        event.preventDefault();
        event.stopPropagation();

    }

    render() {
        return <div className="login">
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
            </div>;
    }
}