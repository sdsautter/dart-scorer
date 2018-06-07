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
