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


export default class Master extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid z-index-2">
                    <Route exact path='/' component={MainMenu} />
                    <Route exact path='/pvp' component={ChooseGame} />
                    <Route exact path='/cpu' component={ChooseGame} />
                    <Route path='/settings' component={SettingsMainMenu} />
                    <Route path='/rules' component={RulesPage} />
                    <Route exact path='/cpu/:gameType' component={BotDifficulty} />
                    <Route exact path='/cpu/x01/:botDifficulty' component={X01} />
                    <Route exact path='/cpu/cricket/:botDifficulty' component={Cricket} />
                    <Route path='/pvp/x01' component={X01} />
                    <Route path='/pvp/cricket' component={Cricket} />
                    <Route exact path='/user/:username' component={UserStats} />
                </div>
            </BrowserRouter>
        )
    }
}