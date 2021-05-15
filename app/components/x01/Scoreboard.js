import React, { Component } from "react";
import ScoreInput from "./ScoreInput.js";
import Numpad from "./Numpad.js";
import PlayerRender from '../common/PlayerRender';
import ShotHistory from './views/ShotHistory';
export default class Scoreboard extends Component {
    constructor() {
        super();

        this.playersRender = this.playersRender.bind(this);
        this.inputRender = this.inputRender.bind(this);
        this.player2NameRender = this.player2NameRender.bind(this);
    }

    componentDidMount() {
        this.props.setOriginalScore(parseInt(this.props.x01Game));
        this.props.doubleInOptionsCheck();
        this.props.resetThrowLog();
    }

    player2NameRender(botGame) {
        return botGame ? "Bot" : "Player 2"
    }

    playersRender() {
        var intViewportWidth = window.innerWidth;
        //Renders either an input or a text area depending on the screen width
        if (intViewportWidth < 720) {
            if (this.props.activeThrower === "p1") {
                return (
                    <div className="row">
                        <div className="col-6 text-center padding-top player border-right p1-active">
                            Player 1
                        </div>
                        <div className="col-6 text-center padding-top player border-left inactive-thrower">
                            {this.player2NameRender(this.props.botGame)}
                            </div>
                    </div>
                )
            } else {
                return (
                    <div className="row">
                        <div className="col-6 text-center padding-top player border-right inactive-thrower">
                            Player 1
                        </div>
                        <div className="col-6 text-center padding-top player border-left p2-active">
                            {this.player2NameRender(this.props.botGame)}
                            </div>
                    </div>
                )
            }
        }
        else {
            return (
                <PlayerRender
                    activeThrower={this.props.activeThrower}
                    gameX01Reset={this.props.gameX01Reset}
                    botGame={this.props.botGame}
                    username={this.props.username}
                />
            )
        }
    }

    inputRender() {
        if (this.props.gameOptions === "numpad") {
            return (
                <Numpad
                    username={this.props.username}
                    diddle={this.props.diddle}
                    setDiddleTrue={this.props.setDiddleTrue}
                    setActiveThrower={this.props.setActiveThrower}
                    activeThrower={this.props.activeThrower}
                    numpadScore={this.props.numpadScore}
                    numpadUndo={this.props.numpadUndo}
                    gameState={this.props.gameState}
                    setGameWinner={this.props.setGameWinner}
                    gameStateOver={this.props.gameStateOver}
                    gameOverModal={this.props.gameOverModal}
                    undoGameOver={this.props.undoGameOver}
                    botGame={this.props.botGame}
                    p1RoundStartScore={this.props.p1RoundStartScore}
                    p1RoundScores={this.props.p1RoundScores}
                    p2RoundStartScore={this.props.p2RoundStartScore}
                    p2RoundScores={this.props.p2RoundScores}
                />
            )
        } else {
            return (
                <div>
                    <ScoreInput
                        username={this.props.username}
                        diddle={this.props.diddle}
                        setDiddleTrue={this.props.setDiddleTrue}
                        setActiveThrower={this.props.setActiveThrower}
                        activeThrower={this.props.activeThrower}
                        endTurn={this.props.endTurn}
                        botGame={this.props.botGame}
                        score={this.props.score}
                        miss={this.props.miss}
                        undo={this.props.undo}
                        activeThrows={this.props.activeThrows}
                        gameX01Reset={this.props.gameX01Reset}
                        setGameWinner={this.props.setGameWinner}
                        gameStateOver={this.props.gameStateOver}
                        gameOverModal={this.props.gameOverModal}
                        undoGameOver={this.props.undoGameOver}
                        singleGesture={this.props.singleGesture}
                        multipleGesture={this.props.multipleGesture}
                        p1RoundStartScore={this.props.p1RoundStartScore}
                        p1RoundScores={this.props.p1RoundScores}
                        p2RoundStartScore={this.props.p2RoundStartScore}
                        p2RoundScores={this.props.p2RoundScores}
                    />
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.playersRender()}
                <div className="row">
                    <div className="col-6 points-score text-center border-right">
                        {this.props.renderP1Score()}
                    </div>
                    <div className="col-6 points-score text-center border-left">
                        {this.props.renderP2Score()}
                    </div>
                </div>
                {this.inputRender()}
                <div className="modal fade" id="p1ShotModal" tabIndex="-1" role="dialog" aria-labelledby="p1ShotModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <ShotHistory
                                p1RoundStartScore={this.props.p1RoundStartScore}
                                p1RoundScores={this.props.p1RoundScores}
                                p2RoundStartScore={this.props.p2RoundStartScore}
                                p2RoundScores={this.props.p2RoundScores}
                                p1='p1'
                            />
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="p2ShotModal" tabIndex="-1" role="dialog" aria-labelledby="p2ShotModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <ShotHistory
                                p1RoundStartScore={this.props.p1RoundStartScore}
                                p1RoundScores={this.props.p1RoundScores}
                                p2RoundStartScore={this.props.p2RoundStartScore}
                                p2RoundScores={this.props.p2RoundScores}
                            />
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
