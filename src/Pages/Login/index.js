import React, { Component, Fragment } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';
import './Login.css';

import { connect } from 'react-redux';
import * as actions from '../../Actions/Auth';
import history from '../../history';

import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://18.217.81.139:3000',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export async function userLogin(userName, passWord) {
    const token = await instance.post('/users/login', {
        userName: userName,
        passWord: passWord
    });
    console.log('token:', token);
    return token;
};

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: 'cuong',
            passWord: 'cuong',
            userNameError: false,
            passWordError: false,
            loginError: false
        }

        // this.userName = React.createRef();
        // this.passWord = React.createRef();


        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        const token = localStorage.getItem('accessToken');
        // if (token) {
        //     window.location.replace('http://localhost:3000');
        // }
    }



    handleLogin = async (e) => {
        e.preventDefault();
        let error = false;
        // this.props.userSignin(this.state.userName, this.state.passWord);
        if (this.state.userName === '') {
            this.setState({ userNameError: true });
            error = true;
        } else {
            this.setState({ userNameError: false })
        }
        if (this.state.passWord === '') {
            this.setState({ passWordError: true });
            error = true;
        } else {
            this.setState({ passWordError: false })
        }

        if (error === false) {
            try {
                const res = await userLogin(this.state.userName, this.state.passWord);
                localStorage.setItem('accessToken', res.data);
                const token = localStorage.getItem('accessToken');
                console.log('this.history', history);
                if (token) {
                    // window.location.replace('http://localhost:3000');
                    //history.push('/');
                    console.log('history', history);
                    history.goBack();
                }

            } catch (error) {

            }
        }

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        const LoginFail = (
            <Message
                error
                header="Faild"
                list={[
                    this.state.userNameError,
                    this.state.passWordError
                ]}
            />
        )

        return (
            <Fragment>

                <div className="login-form">
                    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 500 }}>
                            {
                                this.state.error ? LoginFail : ''
                            }
                            <Header as='h2' color='blue'>Log-in To Your Account  </Header>
                            <Segment >
                                <Form.Input error={this.state.userNameError} refs={this.userName} fluid icon='user' iconPosition='left' placeholder='Username' size='large' name='userName' onChange={this.handleChange} value={this.state.userName} />
                                <Form.Input error={this.state.passWordError} refs={this.passWord} fluid icon='lock' iconPosition='left' placeholder='Password' type='password' size='large' name='passWord' onChange={this.handleChange} value={this.state.passWord} />
                                <Button fluid size='large' color='blue' onClick={this.handleLogin} >Login</Button>
                            </Segment>
                            <Message>
                                New to us? <a href='#'>Sign Up</a>
                            </Message>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);