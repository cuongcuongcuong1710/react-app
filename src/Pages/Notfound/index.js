import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import {BrowserRouter, withRouter } from 'react-router-dom';
import history from '../../history';

// const BrowserHistory = require('react-router/lib/BrowserHistory').default;
class Notfound extends Component {
    render() {
        return (
            <div>
                <h3> Page Not Found </h3>
                <Button onClick={history.goBack}>Back</Button>
            </div>
        );
    }
}

export default Notfound;