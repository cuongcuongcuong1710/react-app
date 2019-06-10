import React from 'react';
import HeaderLayout from './../Header';
import FooterLayout from './../Footer';
import { Container } from 'semantic-ui-react';

class Layout extends React.Component {
    render() {
        const Component = this.props.children;
        return (
            <Container fluid  >
                <HeaderLayout />
                <Container  >
                    {Component}
                </Container>
                <FooterLayout />
            </Container>
        );
    }
}

export default Layout;
