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
            if (this.props.modal) {
                return (
                    <div className='container-fluid'>
                        <MobileModalView
                            score={this.props.score}
                            miss={this.props.miss}
                            activeThrower={this.props.activeThrower}
                            activeThrows={this.props.activeThrows}
                            renderP1Score={this.props.renderP1Score}
                            renderP2Score={this.props.renderP2Score}
                            markProgress={this.props.markProgress}
                            undo={this.props.undo}
                            modalSwitch={this.props.modalSwitch}
                        />
                        <div className='row align-items-center modal-toggle'>
                            <div className='col align-self-center text-center'>
                                <label>
                                    <span className='one-click-scoring'>One Click Scoring</span>
                                    <input className="toggle" type="checkbox" onClick={this.props.modalSwitch} />
                                </label>
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className='container-fluid'>
                        <MobileView
                            score={this.props.score}
                            miss={this.props.miss}
                            activeThrower={this.props.activeThrower}
                            activeThrows={this.props.activeThrows}
                            renderP1Score={this.props.renderP1Score}
                            renderP2Score={this.props.renderP2Score}
                            markProgress={this.props.markProgress}
                            undo={this.props.undo}
                            modalSwitch={this.props.modalSwitch}
                        />
                        <div className='row align-items-center modal-toggle'>
                            <div className='col text-center align-self-center'>
                                <label className='align-self-center'>
                                    <span className='one-click-scoring'>One Click Scoring</span>
                                    <input className="toggle" type="checkbox" onClick={this.props.modalSwitch} />
                                </label>
                            </div>
                        </div>
                    </div>
                )
            }
        } else {
            return (
                <DesktopView
                    score={this.props.score}
                    miss={this.props.miss}
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