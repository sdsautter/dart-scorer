import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavMenu from '../navMenu/NavMenu';

export default class MainMenu extends Component {
    constructor() {
        super();

        this.state = {
            username: ''
        }

        this.setUsername = this.setUsername.bind(this);
    }

    componentWillMount() {
        this.setUsername();
    }

    setUsername() {
        axios.get('/username')
            .then(username => {
                if (username) {
                    this.setState({ username: username.data });
                }
            })
    }

    render() {
        return (
            <div>
                <NavMenu setUsername={this.props.setUsername}
                    username={this.props.username}
                    setUsername={this.props.setUsername}
                />
                <div className="row top-row">
                    <div className="col main-menu-title text-center">
                        Dart Score Fun!
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center main-menu-button">
                        <Link to={{
                            pathname: '/pvp',
                        }}><button className="bttn-jelly bttn-lg">Multiplayer</button></Link>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-12 text-center main-menu-button">
                        <Link to={{
                            pathname: '/cpu',
                        }}><button className="bttn-jelly bttn-lg">Single Player</button></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center main-menu-button">
                        <Link to={{
                            pathname: '/rules',
                        }}><button className="bttn-jelly bttn-lg">Rules</button></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center main-menu-button">
                        <Link to={{
                            pathname: `/user/${this.props.username}`,
                        }}><button className="bttn-jelly bttn-lg">Stats</button></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center main-menu-button">
                        <Link to={{
                            pathname: '/settings',
                        }}><button className="bttn-jelly bttn-lg">Settings</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
