import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button, Container } from 'semantic-ui-react';
import history from '../../history';

class MenuLayout extends Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }
    

    state = { activeItem: '' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    handleLogout = e => {
        e.preventDefault();
        localStorage.removeItem('accessToken');

        const token = localStorage.getItem('accessToken');
        if (!token) {
            //window.location.replace('http://localhost:3000');
            
            history.goBack();
        }
    }

    render() {

        const { activeItem } = this.state;
        const { fixed } = this.state;

        const userLink = (
            <Button onClick={this.handleLogout}>Log-out</Button>
        )

        const guestLink = (
            <Fragment>
                <Button as={Link} to='/login' inverted={!fixed}>Log-in</Button>
                <Button as={Link} to='/signup' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>Sign Up</Button>
            </Fragment>
        )

        return (
            <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                // inverted
                // pointing
                // secondary
                size='large'
                style={{ fontSize: '1.2em', border: 0 }}
            >
                <Container >
                    {/* <Menu.Item as={Link} to='/' active={activeItem === 'home'}>Home</Menu.Item>
                    <Menu.Item as={Link} to='/products' active={activeItem === 'products'}>Products</Menu.Item> */}
                    <Menu.Item name='home' as={Link} to='/' active={activeItem === 'home'} onClick={this.handleItemClick} />
                    <Menu.Item name='products' as={Link} to='/products' active={activeItem === 'products'} onClick={this.handleItemClick} />
                    <Menu.Item position='right'>
                        {/* {
                            localStorage.getItem('accessToken') ? '' : <Button as={Link} to='/login' inverted={!fixed}>Log in</Button>
                        }
                        <Button as={Link} to='/login' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>Sign Up</Button> */}
                        {
                            localStorage.getItem('accessToken') ? userLink : guestLink
                        }
                    </Menu.Item>
                </Container>
            </Menu>



            // <Visibility
            //     once={false}
            //     onBottomPassed={this.showFixedMenu}
            //     onBottomPassedReverse={this.hideFixedMenu}
            // >
            //     <Menu fixed={fixed ? 'top' : null} inverted color='blue' secondary >
            //         <Container className='wrapper-container'>
            //             <Menu.Item as={Link} to='/' >
            //                 {/* {<Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />} */}
            //                 Home
            //         </Menu.Item>
            //             <Menu.Item as={Link} to='/products'>Products</Menu.Item>
            //             <Menu.Item as={Link} to='/login' position='right'>Login</Menu.Item>
            //             <Menu.Item as='a'>Sign up</Menu.Item>
            //         </Container>
            //     </Menu>
            // </Visibility>



            // <Segment >
            //     <Container inverted >
            //         <Menu inverted pointing secondary fluid>
            //             <Menu.Item as={Link} to="/" name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            //             <Menu.Item as={Link} to="/products" name='products' active={activeItem === 'products'} onClick={this.handleItemClick} />
            //             <Menu.Item position="right">
            //                 <Button as={Link} to="login">Log in</Button>
            //                 <Button as={Link} to="login" style={{ marginLeft: '1em' }}>Sign up</Button>
            //             </Menu.Item>
            //             {/* <Menu.Item as={Link} to="/login" name='login' active={activeItem === 'login'} onClick={this.handleItemClick} /> */}
            //         </Menu>
            //     </Container>
            // </Segment>



        );
    }
}

export default MenuLayout;