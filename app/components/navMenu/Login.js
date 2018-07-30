import React, { Component } from "react";
import axios from "axios";


export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            loginUsername: '',
            loginPassword: '',
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
                    return this.props.setUsername(this.state.loginUsername);
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
        return (
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
                    </form>
                    <div className="row">
                        <div className="col-12 text-center p2-multiple" id='loginBack'>
                            <button type="button" className="bttn-jelly bttn-lg" onClick={() => {
                                this.props.setMenuState('menu');
                            }}>Back</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}