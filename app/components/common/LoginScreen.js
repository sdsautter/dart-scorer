import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from 'react-router-dom';

export default class LoginScreen extends Component {
    constructor() {
        super();
        this.state = {
            loginUsername: '',
            loginPassword: '',
            redirect: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginButton = this.loginButton.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    loginButton(event) {
        event.preventDefault();
        return axios.post('/login', {
            username: this.state.loginUsername,
            password: this.state.loginPassword
        })
            .then((res) => {
                if (res.data.toLowerCase() === this.state.loginUsername.toLowerCase()) {
                    this.props.loggedInSwitch(true);
                    this.props.setUsername(this.state.loginUsername);
                    return this.setState({ redirect: true });
                } else {
                    return null;
                }
            })
            .catch(function (error) {
                console.log("Error logging in");
                console.log(error);
            });
    }


    render() {
        if (this.state.redirect) {
            return <Redirect push to="/home" />;
        }
        return (
            <div>
                <div className="row top-row">
                    <div className="col main-menu-title text-center">
                        Dart Score Fun!
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 login-container">
                        <form id='idForm' onSubmit={this.loginButton}>
                            <div className="form-group text-center">
                                <label className="username-label">Username
                            <br />
                                    <input value={this.state.loginEmail} name='username' type='text' id="loginUsername" className="validate form-control" onChange={this.handleChange} />
                                </label>
                            </div>
                            <div className="form-group text-center">
                                <label className="password-label">Password
                            <br />
                                    <input value={this.state.loginPassword} name='password' id="loginPassword" type="password" className="validate form-control" onChange={this.handleChange} />
                                </label>
                            </div>
                            <div className='p1-multiple' id='loginButton'>
                                <button type="submit" className="bttn-jelly bttn-lg" onClick={() => {
                                    setTimeout(() => {
                                        if (this.props.username === this.state.loginUsername) {
                                            $("#menu").modal("hide");
                                            $('body').removeClass('modal-open');
                                            $('.modal-backdrop').remove();
                                        }
                                    }, 500)

                                }}>Log In</button>
                            </div>
                            <div className="p1-single" id='loginSignup'>
                                <Link to={{
                                    pathname: '/signup',
                                }}><button type="button" className="bttn-jelly bttn-lg">Sign Up</button></Link>
                        </div>
                            <div className="p2-multiple" id='loginBack'>
                                <Link to={{
                                    pathname: '/home',
                                }}><button type="button" className="bttn-jelly bttn-lg" onClick={() => {
                                    this.props.loggedInSwitch(true);
                                }}>Continue As Guest</button></Link>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}