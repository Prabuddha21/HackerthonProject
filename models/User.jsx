'use strict';

import React from 'react';

const User = function (props) {

    const {user} = props;
    return <tr>
        <td>{user.id}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.country}</td>
    </tr>
};
