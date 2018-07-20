import React, { Component } from "react";
import Login from './Login';
import { Link } from 'react-router-dom'
import Signup from './Signup';
import axios from 'axios';
import SettingsMenu from '../common/SettingsMenu';


export default class NavMenu extends Component {
    constructor() {

        super();

        this.state = {
            menu: 'menu',
            loggedIn: false
        }
        this.menuNavButton = this.menuNavButton.bind(this);
        this.setMenuState = this.setMenuState.bind(this);
        this.conditionalModalRender = this.conditionalModalRender.bind(this);
        this.loggedInSwitch = this.loggedInSwitch.bind(this);
        this.conditionalMenuRender = this.conditionalMenuRender.bind(this);
        this.gameReset = this.gameReset.bind(this);
        this.nameRender = this.nameRender.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            if (this.props.username !== 'guest') {
                this.loggedInSwitch(true);
            }
        }, 500)
    }

    loggedInSwitch(loggedIn) {
        this.setState({ loggedIn })
    }

    nameRender() {
        if (this.props.gameState === 'playing') {
            return;
        } else {
            return this.props.username
        }
    }

    menuNavButton() {
        return (
            <div className='sound-toggle'>
                <span id='navName' data-toggle="modal" data-target="#menu" onClick={() => {
                    this.setMenuState('menu');
                }}>{this.nameRender()}</span>
                <span data-toggle="modal" data-target="#menu" onClick={() => {
                    this.setMenuState('menu');
                }} ><img src="/assets/images/menu-dots3.png" className='menu-dots' /></span>
            </div>
        )
    }

    gameReset() {
        if (this.props.gameX01Reset) {
            this.props.gameX01Reset();
        } else if (this.props.gameCricketReset) {
            this.props.gameCricketReset();
        }
    }

    conditionalMenuRender() {
        const newGamePath = window.location.href.includes('pvp') ? '/pvp' : '/cpu';
        if (this.state.loggedIn && this.props.gameState !== 'playing') {
            return (
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="menuLabel">Menu</h5>
                    </div>
                    <div className="modal-body">
                        <div className='row'>
                            <div className='col-8 offset-2'>
                                <button type="button" className="bttn-jelly" onClick={() => {
                                    axios.post('/logout')
                                        .then(() => {
                                            this.setMenuState('menu');
                                            this.loggedInSwitch(false);
                                            this.props.setUsername('guest');
                                        })
                                }}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.loggedIn && this.props.gameState === 'playing') {
            return (
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="menuLabel">Menu</h5>
                    </div>
                    <div className="modal-body">
                        <div className='row'>
                            <div className='col-8 offset-2 modal-menu p2-single'>
                                <button type="button" className="bttn-jelly" onClick={() => {
                                    axios.post('/logout')
                                        .then(() => {
                                            this.setMenuState('menu');
                                            this.loggedInSwitch(false);
                                            this.props.setUsername('guest');
                                        })
                                }}>Logout</button>
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-8 offset-2 modal-menu p1-multiple'>
                                <button type="button" className="bttn-jelly" onClick={() => {
                                    this.setMenuState('settings');
                                }}>Settings</button>
                            </div>
                            <div className='col-8 offset-2 modal-menu p1-multiple'>
                                <button type="button" className="bttn-jelly" onClick={() => {
                                    this.setMenuState('reset');
                                }}>
                                    Reset Set
                                </button>
                            </div>
                            <div className='col-8 offset-2 modal-menu p2-multiple'>
                                <button type="button" className="bttn-jelly" onClick={() => {
                                    this.setMenuState('home');
                                }}>Home</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (!this.state.loggedIn && this.props.gameState !== 'playing') {
            return (
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="menuLabel">Menu</h5>
                    </div>
                    <div className="modal-body">
                        <div className='row'>
                            <div className='col-4 offset-1 p1-multiple'>
                                <button type="button" className="bttn-jelly" onClick={() => {
                                    this.setMenuState('login')
                                }}>Login</button>
                            </div>
                            <div className='col-4 offset-2 p1-single'>
                                <button type="button" className="bttn-jelly" onClick={() => {
                                    this.setMenuState('signup');
                                }}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (!this.state.LoggedIn && this.props.gameState === 'playing') {
            return (<div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="menuLabel">Menu</h5>
                </div>
                <div className="modal-body">
                    <div className='row'>
                        <div className='col p1-multiple'>
                            <button type="button" className="bttn-jelly" onClick={() => {
                                this.setMenuState('login')
                            }}>Login</button>
                        </div>
                        <div className='col p1-single'>
                            <button type="button" className="bttn-jelly" onClick={() => {
                                this.setMenuState('signup');
                            }}>Sign Up</button>
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className='col-8 offset-2 modal-menu p1-multiple'>
                            <button type="button" className="bttn-jelly" onClick={() => {
                                this.setMenuState('settings');
                            }}>Settings</button>
                        </div>
                        <div className='col-8 offset-2 modal-menu p1-multiple'>
                            <button type="button" className="bttn-jelly" onClick={() => {
                                this.setMenuState('reset');
                            }}>
                                Reset Set
                                </button>
                        </div>
                        <div className='col-8 offset-2 modal-menu p2-multiple'>
                            <button type="button" className="bttn-jelly" onClick={() => {
                                this.setMenuState('home');
                            }}>Home</button>
                        </div>
                    </div>
                </div>
            </div >
            )
        }
    }

    conditionalModalRender() {
        switch (this.state.menu) {
            case 'menu':
                return this.conditionalMenuRender();
            case 'login':
                return (
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="menuLabel">Login</h5>
                        </div>
                        <div className="modal-body">
                            <Login
                                setUsername={this.props.setUsername}
                                setMenuState={this.setMenuState}
                                username={this.props.username}
                                loggedIn={this.state.loggedIn}
                                loggedInSwitch={this.loggedInSwitch}
                            />
                        </div>
                    </div>
                )
            case 'logout':
                return (
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="menuLabel">Logout</h5>
                        </div>
                        <div className="modal-body">
                            <button type="button" className="bttn-jelly" onClick={() => {
                                axios.post('/logout')
                                    .then(() => {
                                        this.setMenuState('menu');
                                        this.loggedInSwitch(false);
                                        this.props.setUsername('guest');
                                    })
                            }}>Logout</button>
                        </div>
                    </div>
                )
            case 'signup':
                return (
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="menuLabel">Sign Up</h5>
                        </div>
                        <div className="modal-body">
                            <Signup
                                setUsername={this.props.setUsername}
                                setMenuState={this.setMenuState}
                                username={this.props.username}
                                loggedIn={this.state.loggedIn}
                                loggedInSwitch={this.loggedInSwitch}
                                setMenuState={this.setMenuState}
                            />
                        </div>
                    </div>
                );
            case 'reset':
                return (
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="reloadModalLabel">Start Set Over</h5>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-6 offset-3 text-center p1-multiple">
                                    <button type="button" className="bttn-jelly" onClick={() => {
                                        this.setMenuState('menu');
                                    }}>No</button>
                                </div>
                            </div>
                            <br />
                            <div className='row'>
                                <div className="col-6 offset-3 text-center p2-multiple">
                                    <button type="button" className="bttn-jelly" onClick={() => {
                                        this.gameReset();
                                        $("#menu").modal("hide");
                                        $('body').removeClass('modal-open');
                                        $('.modal-backdrop').remove();
                                    }}>Yes</button>
                                </div>
                            </div>
                        </div>
                    </div>)
            case 'home':
                return (
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exitModalLabel">Exit Game</h5>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-6 offset-3 text-center p1-multiple">
                                    <button type="button" className="bttn-jelly" onClick={() => {
                                        this.setMenuState('menu');
                                    }}>No</button>
                                </div>
                            </div>
                            <br />
                            <div className='row'>
                                <div className="col-6 offset-3 text-center p2-multiple">
                                    <Link to={{
                                        pathname: '/home',
                                    }}>
                                        <button type="button" className="bttn-jelly" onClick={() => {
                                            $("#menu").modal("hide");
                                            $('body').removeClass('modal-open');
                                            $('.modal-backdrop').remove();
                                        }}>Yes</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            case 'settings':
                return (
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="menuLabel">Settings</h5>
                        </div>
                        <div className="modal-body">
                            <SettingsMenu
                                setMenuState={this.setMenuState}
                                gestureSwitch={this.props.gestureSwitch}
                            />
                        </div>
                    </div>
                )
            default:
                break;
        }
    }

    setMenuState(menu) {
        this.setState({ menu });
    }

    render() {
        return (
            <div>
                {this.menuNavButton()}
                <div className="modal fade" id="menu" tabIndex="-1" role="dialog" aria-labelledby="menuLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        {this.conditionalModalRender()}
                    </div>
                </div>
            </div>
        )


    }
}