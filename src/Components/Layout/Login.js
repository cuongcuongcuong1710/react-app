import React from 'react';

class Login extends React.Component {
    render() {
        const Component = this.props.children;
        return (
            <React.Fragment>
                {Component}
            </React.Fragment>
        );
    }
}

export default Login;