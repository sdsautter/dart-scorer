import React, { Component } from "react";
import DesktopInput from './views/DesktopInput';
import MobileGesture from './views/MobileGesture';
import MobileModal from './views/MobileModal';
import TabletInput from './views/TabletInput';
import GestureToggle from './views/GestureToggle';

export default class ScoreInput extends Component {
    constructor() {
        super();

        this.state = {
            mobileGesture: true
        }
        this.changeMobileGesture = this.changeMobileGesture.bind(this);
    }

    changeMobileGesture() {
        const mobileGesture = this.state.mobileGesture ? false : true;
        this.setState({ mobileGesture })
    }

    render() {
        var intViewportWidth = window.innerWidth;
        //Renders either an input or a text area depending on the screen width
        if (intViewportWidth < 720) {
            if (this.state.mobileGesture) {
                return (
                    <div>
                        <MobileGesture
                            username={this.props.username}
                            diddle={this.props.diddle}
                            setDiddleTrue={this.props.setDiddleTrue}
                            setActiveThrower={this.props.setActiveThrower}
                            activeThrower={this.props.activeThrower}
                            score={this.props.score}
                            endTurn={this.props.endTurn}
                            miss={this.props.miss}
                            botGame={this.props.botGame}
                            undo={this.props.undo}
                            gameX01Reset={this.props.gameX01Reset}
                            activeThrows={this.props.activeThrows}
                            setGameWinner={this.props.setGameWinner}
                            gameStateOver={this.props.gameStateOver}
                            gameOverModal={this.props.gameOverModal}
                            undoGameOver={this.props.undoGameOver}
                            singleGesture={this.props.singleGesture}
                            multipleGesture={this.props.multipleGesture}
                        />
                        <GestureToggle
                            changeMobileGesture={this.changeMobileGesture}
                        >
                        </GestureToggle>
                    </div>
                )
            } else {
                return (
                    <div>
                        <MobileModal
                            username={this.props.username}
                            diddle={this.props.diddle}
                            setDiddleTrue={this.props.setDiddleTrue}
                            setActiveThrower={this.props.setActiveThrower}
                            activeThrower={this.props.activeThrower}
                            score={this.props.score}
                            endTurn={this.props.endTurn}
                            miss={this.props.miss}
                            botGame={this.props.botGame}
                            undo={this.props.undo}
                            gameX01Reset={this.props.gameX01Reset}
                            activeThrows={this.props.activeThrows}
                            setGameWinner={this.props.setGameWinner}
                            gameStateOver={this.props.gameStateOver}
                            gameOverModal={this.props.gameOverModal}
                            undoGameOver={this.props.undoGameOver}
                        />
                        <GestureToggle
                            changeMobileGesture={this.changeMobileGesture}
                        >
                        </GestureToggle>
                        <div className="modal fade" id="reloadModal" tabIndex="-1" role="dialog" aria-labelledby="reloadModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="reloadModalLabel">Start Game Over</h5>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col text-center">
                                                <button type="button" className="btn btn-success" data-dismiss="modal">No</button>
                                            </div>
                                            <div className="col text-center">
                                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.gameReset() }}>Yes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        } else if (intViewportWidth < 900) {
            return (

                <TabletInput
                    username={this.props.username}
                    diddle={this.props.diddle}
                    setDiddleTrue={this.props.setDiddleTrue}
                    setActiveThrower={this.props.setActiveThrower}
                    activeThrower={this.props.activeThrower}
                    botGame={this.props.botGame}
                    score={this.props.score}
                    miss={this.props.miss}
                    endTurn={this.props.endTurn}
                    undo={this.props.undo}
                    activeThrows={this.props.activeThrows}
                    setGameWinner={this.props.setGameWinner}
                    gameStateOver={this.props.gameStateOver}
                    gameOverModal={this.props.gameOverModal}
                    undoGameOver={this.props.undoGameOver}
                    p1RoundStartScore={this.props.p1RoundStartScore}
                    p1RoundScores={this.props.p1RoundScores}
                    p2RoundStartScore={this.props.p2RoundStartScore}
                    p2RoundScores={this.props.p2RoundScores}
                />
            )
        } else {
            return (
                <DesktopInput
                    username={this.props.username}
                    diddle={this.props.diddle}
                    setDiddleTrue={this.props.setDiddleTrue}
                    setActiveThrower={this.props.setActiveThrower}
                    activeThrower={this.props.activeThrower}
                    botGame={this.props.botGame}
                    score={this.props.score}
                    miss={this.props.miss}
                    undo={this.props.undo}
                    activeThrows={this.props.activeThrows}
                    endTurn={this.props.endTurn}
                    setGameWinner={this.props.setGameWinner}
                    gameStateOver={this.props.gameStateOver}
                    gameOverModal={this.props.gameOverModal}
                    undoGameOver={this.props.undoGameOver}
                    p1RoundStartScore={this.props.p1RoundStartScore}
                    p1RoundScores={this.props.p1RoundScores}
                    p2RoundStartScore={this.props.p2RoundStartScore}
                    p2RoundScores={this.props.p2RoundScores}
                />
            )
        }
    }
}
