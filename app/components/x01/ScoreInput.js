import React, { Component } from "react";
import DesktopInput from './views/DesktopInput';
import MobileGesture from './views/MobileGesture';
import MobileModal from './views/MobileModal';
import TabletInput from './views/TabletInput';

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
                        <div className='row align-items-center modal-toggle'>
                            <div className='col text-center align-self-center'>
                                <label className='align-self-center'>
                                    <span className='one-click-scoring'>Gesture Scoring</span>
                                    <input className="toggle" type="checkbox" onClick={this.changeMobileGesture} />
                                </label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4 text-center gesture'>
                                Tap for x1
                            </div>
                            <div className='col-4 text-center gesture'>
                                Swipe Up for x2
                            </div>
                            <div className='col-4 text-center gesture'>
                                Swipe Down for x3
                            </div>
                        </div>
                    </div >
                )
            } else {
                return (
                    <div>
                        <MobileModal
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
                        <div className='row align-items-center modal-toggle'>
                            <div className='col text-center align-self-center'>
                                <label className='align-self-center'>
                                    <span className='one-click-scoring'>Gesture Scoring</span>
                                    <input className="toggle" type="checkbox" onClick={this.changeMobileGesture} />
                                </label>
                            </div>
                        </div>
                    </div>
                )
            }
        } else if (intViewportWidth < 900) {
            return (

                <TabletInput
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
                />
            )
        } else {
            return (
                <DesktopInput
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
                />
            )
        }
    }
}
