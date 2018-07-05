import React, { Component } from "react";
import Cricket from "./cricket/Cricket.js";
import X01 from "./x01/X01.js";
import ChooseGame from './common/ChooseGame';
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
            username: ''
        }

        this.setUsername = this.setUsername.bind(this);
    }

    componentWillMount() {
        axios.get('/username')
            .then((username) => {
                this.setUsername(username.data);
            }
            )
        if (this.state.username === '') {
            this.setUsername('guest');
        }
    }

    setUsername(username) {
        this.setState({ username })
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid z-index-2">
                    <Route exact path='/' render={({ match }) => {
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