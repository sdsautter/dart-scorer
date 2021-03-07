import React, { Component } from "react";
import Cricket from "./cricket/Cricket.js";
import X01 from "./x01/X01.js";
import ChooseGame from './common/ChooseGame';
import LoginScreen from './common/LoginScreen';
import SignupScreen from './common/SignupScreen';
import MainMenu from './common/MainMenu';
import UserStats from './stats/UserStats';
import BotDifficulty from './common/BotDifficulty';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import RulesPage from "./common/RulesPage.js";
import SettingsMainMenu from "./common/SettingsMainMenu.js";
import NavMenu from './navMenu/NavMenu';
import axios from 'axios';

export default class Master extends Component {
    constructor() {
        super();

        this.state = {
            username: 'Player 1',
            loggedIn: true
        }

        this.setUsername = this.setUsername.bind(this);
        this.loggedInSwitch = this.loggedInSwitch.bind(this);
    }

    componentWillMount() {
        axios.get('/username')
            .then((username) => {
                this.setUsername(username.data);
                if (username.data !== 'guest') {
                    this.setState({ loggedIn: true });
                }
            });
        if (this.state.username === '') {
            this.setUsername('Player 1');
        }

        if (localStorage.getItem('sounds') !== 'off') {
            localStorage.setItem('sounds', 'on');
        }
        if (localStorage.getItem('multiple') !== 'vertical') {
            localStorage.setItem('multiple', 'horizontal');
        }

        if (localStorage.getItem('legs') == null) {
            localStorage.setItem('legs', 1);
        }

        if (localStorage.getItem('sets') == null) {
            localStorage.setItem('sets', 3);
        }
    }

    loggedInSwitch(loggedIn) {
        this.setState({ loggedIn });
    }

    setUsername(username) {
        this.setState({ username });
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid z-index-2">
                    <Route exact path='/' render={({ match }) => {
                        {/* if (this.state.username === 'guest') {
                            return <LoginScreen
                                username={this.state.username}
                                loggedInSwitch={this.loggedInSwitch}
                                setUsername={this.setUsername}
                            /> */}
                        {/* } else { */}
                            return <MainMenu
                                match={match}
                                username={this.state.username}
                                setUsername={this.setUsername}
                            />
                        {/* } */}
                    }} />
                    {/* <Route exact path='/login' render={({ match }) => {
                        return <LoginScreen
                            username={this.state.username}
                            loggedInSwitch={this.loggedInSwitch}
                            setUsername={this.setUsername}
                        />
                    }} />
                    <Route exact path='/signup' render={({ match }) => {
                        return <SignupScreen
                            setUsername={this.setUsername}
                            loggedInSwitch={this.loggedInSwitch}
                        />
                    }} /> */}
                    <Route exact path='/home' render={({ match }) => {
                        return <MainMenu
                            match={match}
                            username={this.state.username}
                            setUsername={this.setUsername}
                        />
                    }} />
                    <Route exact path='/pvp' render={({ match }) => {
                        return <ChooseGame
                            match={match}
                            username={this.state.username}
                            setUsername={this.setUsername}
                        />
                    }} />
                    <Route exact path='/cpu' render={({ match }) => {
                        return <ChooseGame
                            match={match}
                            username={this.state.username}
                            setUsername={this.setUsername}
                        />
                    }} />
                    <Route path='/settings' render={({ match }) => {
                        return <SettingsMainMenu
                            match={match}
                            username={this.state.username}
                            setUsername={this.setUsername}
                        />
                    }} />
                    <Route path='/rules' render={({ match }) => {
                        return <RulesPage
                            match={match}
                            username={this.state.username}
                            setUsername={this.setUsername}
                        />
                    }} />
                    <Route exact path='/cpu/:gameType' render={({ match }) => {
                        return <BotDifficulty
                            match={match}
                            username={this.state.username}
                            setUsername={this.setUsername}
                        />
                    }} />
                    <Route exact path='/cpu/x01/:botDifficulty' render={({ match }) => {
                        return <X01
                            match={match}
                            username={this.state.username}
                            setUsername={this.setUsername}
                        />
                    }} />
                    <Route exact path='/cpu/cricket/:botDifficulty' render={({ match }) => {
                        return <Cricket
                            match={match}
                            username={this.state.username}
                            setUsername={this.setUsername}
                        />
                    }} />
                    <Route path='/pvp/x01' render={({ match }) => {
                        return <X01
                            match={match}
                            username={this.state.username}
                            setUsername={this.setUsername}
                        />
                    }} />
                    <Route path='/pvp/cricket' render={({ match }) => {
                        return <Cricket
                            match={match}
                            username={this.state.username}
                            setUsername={this.setUsername}
                        />
                    }} />
                    <Route exact path='/user/:username' render={({ match }) => {
                        return <UserStats
                            match={match}
                            setUsername={this.setUsername}
                            username={this.state.username}
                        />
                    }} />
                </div>
            </BrowserRouter>
        )
    }
}