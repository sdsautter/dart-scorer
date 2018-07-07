import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from 'react-router-dom';

export default class SignupScreen extends Component {
    constructor() {
        super();
        this.state = {
            signUpUsername: '',
            signUpPassword: '',
            confirmPassword: '',
            warning: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.signUpButton = this.signUpButton.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    signUpButton(event) {
        event.preventDefault();
        const username = this.state.signUpUsername.trim();
        if (username.length >= 3 && username.length <= 15) {
            if (this.state.signUpPassword === this.state.confirmPassword) {
                return axios.post('/signup', {
                    password: this.state.signUpPassword,
                    username: username.toLowerCase()
                })
                    .catch((error) => {
                        setTimeout(() => {
                            return axios.post('/login', {
                                username: username,
                                password: this.state.signUpPassword
                            })
                                .then(() => {
                                    this.props.loggedInSwitch(true);
                                    return this.props.setUsername(username);
                                })
                        }, 500)
                    });
            } else {
                this.setState({ warning: 'Passwords Don\'t Match' });
            }
        } else {
            this.setState({ warning: 'Username is not the right amount of characters' });

        }
    }

    render() {
        return (
            <div>
                <div className="row top-row">
                    <div className="col main-menu-title text-center">
                        Dart Score Fun!
                    </div>
                </div>
                <p className="form-warning">{this.state.warning}</p>
                <div className="row">
                    <div className="col-12 text-center login-container">
                        <form onSubmit={this.signUpButton}>
                            <div className="form-group">
                                <label className="username-label">Username
                                        <br />
                                    <input value={this.state.username} name='username' id="signUpUsername" type="text" className="validate form-control" onChange={this.handleChange} />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="password-label">Password
                                        <br />
                                    <input value={this.state.password} onChange={this.handleChange} name='password' id="signUpPassword" type="password" className="validate form-control" />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="password-label">Confirm Password
                                        <br />
                                    <input value={this.state.confirmPassword} onChange={this.handleChange} name='confirmPassword' id="confirmPassword" type="password" className="validate form-control" />
                                </label>
                            </div>
                            <div className='p1-multiple'>
                                <button type="submit" className='bttn-lg' id='signupButton' onClick={() => {
                                    $("#menu").modal("hide");
                                    $('body').removeClass('modal-open');
                                    $('.modal-backdrop').remove();
                                }}>Sign Up</button>
                            </div>
                        </form>
                        <div className="row">
                            <div className="col-12 text-center p2-multiple" id='signupBack'>
                                <Link to={{
                                    pathname: '/login',
                                }}><button type="button" className="bttn-lg">Back</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}