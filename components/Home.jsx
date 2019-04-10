'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component{

    constructor(props){
        super(props);
    }

    render() {
        return <div className="home">
            <div className="home-container" align="horizontal" >
                <div className="siteDetails" align="left">
                    <img src="" alt="home image"/>
                </div>
            </div>
        </div>;
    }
}


