import React, { Component, Fragment } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';

import { connect } from 'react-redux';
import * as actions from '../../Actions/Auth';


import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://18.217.81.139:3000',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export async function userSignup(infoUser) {
    const user = await instance.post('/users/register', infoUser);
    console.log('user sau khi call api register:', user);
    return user;
};

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: 'minhcuong',
            email: 'asd@gmailc.com',
            userName: 'cuong',
            passWord: 'cuong',

        }

        // this.userName = React.createRef();
        // this.passWord = React.createRef();


        this.handleSubmit = this.handleSubmit.bind(this);

        const token = localStorage.getItem('accessToken');
        if (token) {
            window.location.replace('http://localhost:3000');
        }
    }



    handleSubmit = async (e) => {
        e.preventDefault();
        let error = false;
        // this.props.userSignin(this.state.userName, this.state.passWord);
        // if (this.state.userName === '') {
        //     this.setState({ userNameError: true });
        //     error = true;
        // } else {
        //     this.setState({ userNameError: false })
        // }
        // if (this.state.passWord === '') {
        //     this.setState({ passWordError: true });
        //     error = true;
        // } else {
        //     this.setState({ passWordError: false })
        // }

        if (error === false) {
            try {
                const res = await userSignup(this.state);
                localStorage.setItem('infoUser', res.data);
                const user = localStorage.getItem('infoUser');
                if (user) {
                    window.location.replace('http://localhost:3000');
                }
            } catch (error) {

            }
        }

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        return (
            <Fragment>

                <div className="login-form">
                    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 500 }}>

                            <Header as='h2' color='blue'> Sign Up </Header>
                            <Segment >
                                <Form.Input  fluid icon='male' iconPosition='left' placeholder='FirstName' size='large' name='firstName' onChange={this.handleChange} value={this.state.firstName} />
                                <Form.Input  fluid icon='mail' iconPosition='left' placeholder='Email' size='large' name='email' onChange={this.handleChange} value={this.state.email} />
                                <Form.Input error={this.state.userNameError} fluid icon='user' iconPosition='left' placeholder='Username' size='large' name='userName' onChange={this.handleChange} value={this.state.userName} />
                                <Form.Input error={this.state.passWordError} fluid icon='lock' iconPosition='left' placeholder='Password' type='password' size='large' name='passWord' onChange={this.handleChange} value={this.state.passWord} />
                                <Button fluid size='large' color='blue' onClick={this.handleSubmit} >Sign Up</Button>
                            </Segment>
                            {/* <Message>
                                New to us? <a href='#'>Sign Up</a>
                            </Message> */}
                        </Grid.Column>
                    </Grid>

                </div>

                {/* <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Button type='submit' onClick={this.handleLogin}>Submit</Button>
  </Form> */}
            </Fragment>

        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.loginReducer
    }
}

const mapDispatchToProps = dispatch => {

    return {
        userSignin: () => {
            dispatch(actions.userSigninAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);