import React, { Component } from "react";
import DesktopView from './DesktopView';
import TabletView from './TabletView';
import MobileView from './MobileView';
import MobileModalView from './MobileModal';

export default class Scoreboard extends Component {
    constructor() {
        super();
    }

    render() {
        var viewWidth = window.innerWidth;
        if (viewWidth < 720) {
            return (
                <MobileView
                    score={this.props.score}
                    miss={this.props.miss}
                    botGame={this.props.botGame}
                    endTurn={this.props.endTurn}
                    activeThrower={this.props.activeThrower}
                    activeThrows={this.props.activeThrows}
                    renderP1Score={this.props.renderP1Score}
                    renderP2Score={this.props.renderP2Score}
                    markProgress={this.props.markProgress}
                    undo={this.props.undo}
                />
            )
        } else {
            return (
                <DesktopView
                    score={this.props.score}
                    miss={this.props.miss}
                    endTurn={this.props.endTurn}
                    botGame={this.props.botGame}
                    activeThrower={this.props.activeThrower}
                    activeThrows={this.props.activeThrows}
                    renderP1Score={this.props.renderP1Score}
                    renderP2Score={this.props.renderP2Score}
                    markProgress={this.props.markProgress}
                    undo={this.props.undo}
                    gameCricketReset={this.props.gameCricketReset}
                />
            )
        }
    }
}