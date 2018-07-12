import React, { Component } from "react";
import Hammer from 'react-hammerjs';
import { Link } from 'react-router-dom'

export default class MobileModalView extends Component {
    constructor() {
        super();

        this.chooseGameUrl = window.location.href.includes('cpu') ? '/cpu' : '/pvp';
        this.playersRender = this.playersRender.bind(this);
        this.nameRender = this.nameRender.bind(this);
        this.throwRowRender = this.throwRowRender.bind(this);
        this.missRowRender = this.missRowRender.bind(this);
        this.modalToggle = this.modalToggle.bind(this);
        this.playerButtonsRender = this.playerButtonsRender.bind(this);
    }

    modalToggle() {
        this.props.modalSwitch();
    }

    nameRender() {
        if (this.props.activeThrower === "p1") {
            return this.props.username
        } else {
            return "Player 2";
        }
    }

    playersRender() {
        if (!this.props.botGame) {
            if (this.props.activeThrower === "p1") {
                return (
                    <div className="row top-row">
                        <div className="col-6 text-center player border-right p1-active">
                            {this.props.username}
                        </div>
                        <div className="col-6 text-center player border-left inactive-thrower">
                            Player 2
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="row top-row">
                        <div className="col-6 text-center player border-right inactive-thrower">
                            {this.props.username}
                    </div>
                        <div className="col-6 text-center player border-left p2-active">
                            Player 2
                    </div>
                    </div>
                )
            }
        } else {
            if (this.props.activeThrower === "p1") {
                return (
                    <div className="row top-row">
                        <div className="col-6 text-center player border-right p1-active">
                            Human
                        </div>
                        <div className="col-6 text-center player border-left inactive-thrower">
                            Bot
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="row top-row">
                        <div className="col-6 text-center player border-right inactive-thrower">
                            Human
                    </div>
                        <div className="col-6 text-center player border-left p2-active">
                            Bot
                    </div>
                    </div>
                )
            }
        }
    }

    throwRowRender() {
        //Renders either an input or a text area depending on the screen width
        if (!this.props.gameOverModal) {
            if (this.props.activeThrower === 'p1') {
                return (
                    <div>
                        <div className="row">
                            <div className="col-1 text-center align-self-center points-label">
                                Throw:
                    </div>
                            <div className="col-2 left-mark text-center align-self-center">
                                {this.props.markProgress(1, 17)}
                            </div>
                            <div className="col-2 border-left text-center number p1-single">
                                <Hammer
                                    onDoubleTap={(event) => {
                                        event.preventDefault();
                                    }}>
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 1) }}>17</button>
                                </Hammer>
                            </div>
                            <div className="col-2 number text-center p1-multiple">
                                <Hammer
                                    onDoubleTap={(event) => {
                                        event.preventDefault();
                                    }}>
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 2) }}>x2</button>
                                </Hammer>
                            </div>
                            <div className="col-2 border-right number text-center p1-multiple">
                                <Hammer
                                    onDoubleTap={(event) => {
                                        event.preventDefault();
                                    }}>
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 3) }}>x3</button>
                                </Hammer>
                            </div>
                            <div className="col-2 right-mark text-center align-self-center">
                                {this.props.markProgress(2, 17)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1 text-center align-self-start points-score">
                                {this.props.activeThrows + 1}
                            </div>
                            <div className="col-2 left-mark text-center align-self-center">
                                {this.props.markProgress(1, 16)}
                            </div>
                            <div className="col-2 border-left text-center number p1-single">
                                <Hammer
                                    onDoubleTap={(event) => {
                                        event.preventDefault();
                                    }}>
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 1) }}>16</button>
                                </Hammer>
                            </div>
                            <div className="col-2 number text-center p1-multiple">
                                <Hammer
                                    onDoubleTap={(event) => {
                                        event.preventDefault();
                                    }}>
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 2) }}>x2</button>
                                </Hammer>
                            </div>
                            <div className="col-2 border-right number text-center p1-multiple">
                                <Hammer
                                    onDoubleTap={(event) => {
                                        event.preventDefault();
                                    }}>
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 3) }}>x3</button>
                                </Hammer>
                            </div>
                            <div className="col-2 right-mark text-center align-self-center">
                                {this.props.markProgress(2, 16)}
                            </div>
                        </div>
                    </div>
                )
            } else {
                if (!this.props.botGame) {
                    return (
                        <div>
                            <div className="row">
                                <div className="col-2 left-mark offset-1 text-center align-self-center">
                                    {this.props.markProgress(1, 17)}
                                </div>
                                <div className="col-2 border-left text-center number p2-single">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 1) }}>17</button>
                                    </Hammer>
                                </div>
                                <div className="col-2 number text-center p2-multiple">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 2) }}>x2</button>
                                    </Hammer>
                                </div>
                                <div className="col-2 border-right number text-center p2-multiple">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 3) }}>x3</button>
                                    </Hammer>
                                </div>
                                <div className="col-2 right-mark text-center align-self-center">
                                    {this.props.markProgress(2, 17)}
                                </div>
                                <div className="col-1 right-label text-center align-self-center points-label">
                                    Throw:
                    </div>
                            </div>
                            <div className="row">
                                <div className="col-2 left-mark offset-1 text-center align-self-center">
                                    {this.props.markProgress(1, 16)}
                                </div>
                                <div className="col-2 border-left text-center number p2-single">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 1) }}>16</button>
                                    </Hammer>
                                </div>
                                <div className="col-2 number text-center p2-multiple">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 2) }}>x2</button>
                                    </Hammer>
                                </div>
                                <div className="col-2 border-right number text-center p2-multiple">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 3) }}>x3</button>
                                    </Hammer>
                                </div>
                                <div className="col-2 right-mark text-center align-self-center">
                                    {this.props.markProgress(2, 16)}
                                </div>
                                <div className="col-1 right-label text-center align-self-start points-score">
                                    {this.props.activeThrows + 1}
                                </div>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <div className="row">
                                <div className="col-2 left-mark offset-1 text-center align-self-center">
                                    {this.props.markProgress(1, 17)}
                                </div>
                                <div className="col-2 border-left text-center number p2-single">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 1) }}
                                            disabled>17</button>
                                    </Hammer>
                                </div>
                                <div className="col-2 number text-center p2-multiple">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 2) }}
                                            disabled>x2</button>
                                    </Hammer>
                                </div>
                                <div className="col-2 border-right number text-center p2-multiple">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 3) }}
                                            disabled>x3</button>
                                    </Hammer>
                                </div>
                                <div className="col-2 right-mark text-center align-self-center">
                                    {this.props.markProgress(2, 17)}
                                </div>
                                <div className="col-1 right-label text-center align-self-center points-label">
                                    Throw:
                    </div>
                            </div>
                            <div className="row">
                                <div className="col-2 left-mark offset-1 text-center align-self-center">
                                    {this.props.markProgress(1, 16)}
                                </div>
                                <div className="col-2 border-left text-center number p2-single">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 1) }}
                                            disabled>16</button>
                                    </Hammer>
                                </div>
                                <div className="col-2 number text-center p2-multiple">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 2) }}
                                            disabled>x2</button>
                                    </Hammer>
                                </div>
                                <div className="col-2 border-right number text-center p2-multiple">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 3) }}
                                            disabled>x3</button>
                                    </Hammer>
                                </div>
                                <div className="col-2 right-mark text-center align-self-center">
                                    {this.props.markProgress(2, 16)}
                                </div>
                                <div className="col-1 right-label text-center align-self-start points-score">
                                    {this.props.activeThrows + 1}
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        } else {
            return (
                <div>
                    <div className="row">
                        <div className="col-2 left-mark offset-1 text-center align-self-center">
                        </div>
                        <div className="col-6 text-center number p2-single">
                        </div>
                        <div className="col-2 right-mark text-center align-self-center">
                        </div>
                        <div className="col-1 right-label text-center align-self-center points-label">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 left-mark offset-1 text-center align-self-center">
                        </div>
                        <div className="col-6 text-center p2-multiple game-over">
                            <Hammer
                                onDoubleTap={(event) => {
                                    event.preventDefault();
                                }}>
                                <button type="button" className="bttn-jelly" onClick={() => { this.props.undoGameOver() }}>
                                    Undo
                        </button>
                            </Hammer>
                        </div>
                        <div className="col-2 right-mark text-center align-self-center">
                        </div>
                        <div className="col-1 right-label text-center align-self-start points-score">
                        </div>
                    </div>
                </div>
            )
        }
    }

    playerButtonsRender() {
        if (!this.props.gameOverModal && this.props.diddle) {
            if (this.props.activeThrower === 'p1') {
                return (
                    <div>
                        <div className="row">
                            <div className="col-1 text-center align-self-center points-label">
                                Points:
                    </div>
                            <div className="col-2 left-mark text-center align-self-center">
                                {this.props.markProgress(1, 20)}
                            </div>
                            <div className="col-2 border-left text-center number p1-single">
                                <Hammer
                                    onDoubleTap={(event) => {
                                        event.preventDefault();
                                    }}>
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 1) }}>20</button>
                                </Hammer>
                            </div>
                            <div className="col-2 number text-center p1-multiple">
                                <Hammer
                                    onDoubleTap={(event) => {
                                        event.preventDefault();
                                    }}>
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 2) }}>x2</button>
                                </Hammer>
                            </div>
                            <div className="col-2 border-right number text-center p1-multiple">
                                <Hammer
                                    onDoubleTap={(event) => {
                                        event.preventDefault();
                                    }}>
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 3) }}>x3</button>
                                </Hammer>
                            </div>
                            <div className="col-2 right-mark text-center align-self-center">
                                {this.props.markProgress(2, 20)}
                            </div>
                            <div className="col-1 text-center align-self-center points-label">
                                <span className='right-label'>Points:</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1 mobile-p1 text-center align-self-start points-score">
                                {this.props.renderP1Score()}
                            </div>
                            <div className="col-2 left-mark text-center align-self-center">
                                {this.props.markProgress(1, 19)}
                            </div>
                            <div className="col-2 border-left text-center number p1-single">
                                <Hammer
                                    onDoubleTap={(event) => {
                                        event.preventDefault();
                                    }}>
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 1) }}>19</button>
                                </Hammer>
                            </div>
                            <div className="col-2 number text-center p1-multiple">
                                <Hammer
                                    onDoubleTap={(event) => {
                                        event.preventDefault();
                                    }}>
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 2) }}>x2</button>
                                </Hammer>
                            </div>
                            <div className="col-2 border-right number text-center p1-multiple">
                                <Hammer
                                    onDoubleTap={(event) => {
                                        event.preventDefault();
                                    }}>
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 3) }}>x3</button>
                                </Hammer>
                            </div>
                            <div className="col-2 right-mark text-center align-self-center">
                                {this.props.markProgress(2, 19)}
                            </div>
                            <div className="col-1 mobile-p2 text-center align-self-start points-score">
                                {this.props.renderP2Score()}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 left-mark offset-1 text-center align-self-center">
                                {this.props.markProgress(1, 18)}
                            </div>
                            <div className="col-2 border-left text-center number p1-single">
                                <Hammer
                                    onDoubleTap={(event) => {
                                        event.preventDefault();
                                    }}>
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 1) }}>18</button>
                                </Hammer>
                            </div>
                            <div className="col-2 number text-center p1-multiple">
                                <Hammer
                                    onDoubleTap={(event) => {
                                        event.preventDefault();
                                    }}>
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 2) }}>x2</button>
                                </Hammer>
                            </div>
                            <div className="col-2 border-right number text-center p1-multiple">
                                <Hammer
                                    onDoubleTap={(event) => {
                                        event.preventDefault();
                                    }}>
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 3) }}>x3</button>
                                </Hammer>
                            </div>
                            <div className="col-2 right-mark text-center align-self-center">
                                {this.props.markProgress(2, 18)}
                            </div>
                        </div>
                        {this.throwRowRender()}
                        <div className="row">
                            <div className="col-2 left-mark offset-1 text-center align-self-center">
                                {this.props.markProgress(1, 15)}
                            </div>
                            <div className="col-2 border-left text-center number  p1-single">
                                <Hammer
                                    onDoubleTap={(event) => {
                                        event.preventDefault();
                                    }}>
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 1) }}>15</button>
                                </Hammer>
                            </div>
                            <div className="col-2 number text-center p1-multiple">
                                <Hammer
                                    onDoubleTap={(event) => {
                                        event.preventDefault();
                                    }}>
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 2) }}>x2</button>
                                </Hammer>
                            </div>
                            <div className="col-2 border-right number text-center p1-multiple">
                                <Hammer
                                    onDoubleTap={(event) => {
                                        event.preventDefault();
                                    }}>
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 3) }}>x3</button>
                                </Hammer>
                            </div>
                            <div className="col-2 right-mark text-center align-self-center">
                                {this.props.markProgress(2, 15)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 left-mark offset-1 text-center align-self-center">
                                {this.props.markProgress(1, 25)}
                            </div>
                            <div className="col-3 border-left text-center number p1-multiple">
                                <Hammer
                                    onDoubleTap={(event) => {
                                        event.preventDefault();
                                    }}>
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 1) }}>Bull</button>
                                </Hammer>
                            </div>
                            <div className="col-3 border-right number text-center p2-multiple">
                                <Hammer
                                    onDoubleTap={(event) => {
                                        event.preventDefault();
                                    }}>
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 2) }}>x2</button>
                                </Hammer>
                            </div>
                            <div className="col-2 right-mark text-center align-self-center">
                                {this.props.markProgress(2, 25)}
                            </div>
                        </div>
                    </div>
                )
            } else if (this.props.activeThrower === 'p2') {
                if (!this.props.botGame) {
                    return (
                        <div>
                            <div className="row">
                                <div className="col-1 text-center align-self-center points-label">
                                    Points:
                    </div>
                                <div className="col-2 left-mark text-center align-self-center">
                                    {this.props.markProgress(1, 20)}
                                </div>
                                <div className="col-2 border-left text-center number p2-single">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 1) }}>20</button>
                                    </Hammer>
                                </div>
                                <div className="col-2 number text-center p2-multiple">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 2) }}>x2</button>
                                    </Hammer>
                                </div>
                                <div className="col-2 border-right number text-center p2-multiple">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 3) }}>x3</button>
                                    </Hammer>
                                </div>
                                <div className="col-2 right-mark text-center align-self-center">
                                    {this.props.markProgress(2, 20)}
                                </div>
                                <div className="col-1 text-center align-self-center points-label">
                                    <span className='right-label'>Points:</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1 mobile-p1 text-center align-self-start points-score">
                                    {this.props.renderP1Score()}
                                </div>
                                <div className="col-2 left-mark text-center align-self-center">
                                    {this.props.markProgress(1, 19)}
                                </div>
                                <div className="col-2 border-left text-center number p2-single">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 1) }}>19</button>
                                    </Hammer>
                                </div>
                                <div className="col-2 number text-center p2-multiple">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 2) }}>x2</button>
                                    </Hammer>
                                </div>
                                <div className="col-2 border-right number text-center p2-multiple">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 3) }}>x3</button>
                                    </Hammer>
                                </div>
                                <div className="col-2 right-mark text-center align-self-center">
                                    {this.props.markProgress(2, 19)}
                                </div>
                                <div className="col-1 mobile-p2 text-center align-self-start points-score">
                                    {this.props.renderP2Score()}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2 left-mark offset-1 text-center align-self-center">
                                    {this.props.markProgress(1, 18)}
                                </div>
                                <div className="col-2 border-left text-center number p2-single">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 1) }}>18</button>
                                    </Hammer>
                                </div>
                                <div className="col-2 number text-center p2-multiple">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 2) }}>x2</button>
                                    </Hammer>
                                </div>
                                <div className="col-2 border-right number text-center p2-multiple">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 3) }}>x3</button>
                                    </Hammer>
                                </div>
                                <div className="col-2 right-mark text-center align-self-center">
                                    {this.props.markProgress(2, 18)}
                                </div>
                            </div>
                            {this.throwRowRender()}
                            <div className="row">
                                <div className="col-2 left-mark offset-1 text-center align-self-center">
                                    {this.props.markProgress(1, 15)}
                                </div>
                                <div className="col-2 border-left text-center number  p2-single">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 1) }}>15</button>
                                    </Hammer>
                                </div>
                                <div className="col-2 number text-center p2-multiple">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 2) }}>x2</button>
                                    </Hammer>
                                </div>
                                <div className="col-2 border-right number text-center p2-multiple">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 3) }}>x3</button>
                                    </Hammer>
                                </div>
                                <div className="col-2 right-mark text-center align-self-center">
                                    {this.props.markProgress(2, 15)}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2 left-mark offset-1 text-center align-self-center">
                                    {this.props.markProgress(1, 25)}
                                </div>
                                <div className="col-3 border-left text-center number p1-multiple">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 1) }}
                                        >Bull</button>
                                    </Hammer>
                                </div>
                                <div className="col-3 border-right number text-center p2-multiple">
                                    <Hammer
                                        onDoubleTap={(event) => {
                                            event.preventDefault();
                                        }}>
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 2) }}>x2</button>
                                    </Hammer>
                                </div>
                                <div className="col-2 right-mark text-center align-self-center">
                                    {this.props.markProgress(2, 25)}
                                </div>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <div className="row">
                                <div className="col-1 text-center align-self-center points-label">
                                    Points:
                    </div>
                                <div className="col-2 left-mark text-center align-self-center">
                                    {this.props.markProgress(1, 20)}
                                </div>
                                <div className="col-2 border-left text-center number p2-single">
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 1) }} disabled>20</button>
                                </div>
                                <div className="col-2 number text-center p2-multiple">
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 2) }} disabled>x2</button>
                                </div>
                                <div className="col-2 border-right number text-center p2-multiple">
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 3) }} disabled>x3</button>
                                </div>
                                <div className="col-2 right-mark text-center align-self-center">
                                    {this.props.markProgress(2, 20)}
                                </div>
                                <div className="col-1 text-center align-self-center points-label">
                                    <span className='right-label'>Points:</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1 mobile-p1 text-center align-self-start points-score">
                                    {this.props.renderP1Score()}
                                </div>
                                <div className="col-2 left-mark text-center align-self-center">
                                    {this.props.markProgress(1, 19)}
                                </div>
                                <div className="col-2 border-left text-center number p2-single">
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 1) }} disabled>19</button>
                                </div>
                                <div className="col-2 number text-center p2-multiple">
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 2) }} disabled>x2</button>
                                </div>
                                <div className="col-2 border-right number text-center p2-multiple">
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 3) }} disabled>x3</button>
                                </div>
                                <div className="col-2 right-mark text-center align-self-center">
                                    {this.props.markProgress(2, 19)}
                                </div>
                                <div className="col-1 mobile-p2 text-center align-self-start points-score">
                                    {this.props.renderP2Score()}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2 left-mark offset-1 text-center align-self-center">
                                    {this.props.markProgress(1, 18)}
                                </div>
                                <div className="col-2 border-left text-center number p2-single">
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 1) }} disabled>18</button>
                                </div>
                                <div className="col-2 number text-center p2-multiple">
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 2) }} disabled>x2</button>
                                </div>
                                <div className="col-2 border-right number text-center p2-multiple">
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 3) }} disabled>x3</button>
                                </div>
                                <div className="col-2 right-mark text-center align-self-center">
                                    {this.props.markProgress(2, 18)}
                                </div>
                            </div>
                            {this.throwRowRender()}
                            <div className="row">
                                <div className="col-2 left-mark offset-1 text-center align-self-center">
                                    {this.props.markProgress(1, 15)}
                                </div>
                                <div className="col-2 border-left text-center number  p2-single">
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 1) }} disabled>15</button>
                                </div>
                                <div className="col-2 number text-center p2-multiple">
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 2) }} disabled>x2</button>
                                </div>
                                <div className="col-2 border-right number text-center p2-multiple">
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 3) }} disabled>x3</button>
                                </div>
                                <div className="col-2 right-mark text-center align-self-center">
                                    {this.props.markProgress(2, 15)}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2 left-mark offset-1 text-center align-self-center">
                                    {this.props.markProgress(1, 25)}
                                </div>
                                <div className="col-3 border-left text-center number p1-multiple">
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 1) }} disabled>Bull</button>
                                </div>
                                <div className="col-3 border-right number text-center p2-multiple">
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 2) }} disabled>x2</button>
                                </div>
                                <div className="col-2 right-mark text-center align-self-center">
                                    {this.props.markProgress(2, 25)}
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        }  else if (!this.props.gameOverModal && !this.props.diddle) { 
            return (
                <div className='col text-center'>
                    <div className='row text-center'>
                        <div className="col text-center p1-single">
                            <h1>Diddle Winner?</h1>
                        </div>
                    </div>
                    <br />
                    <div className='row text-center'>
                        <div className="col-6 offset-3 text-center p2-multiple">
                            <button type="button" className="bttn-jelly bttn-lg" onClick={() => { 
                                this.props.setActiveThrower('p1') 
                                this.props.setDiddleTrue();
                                }}>
                                {this.props.username}
                        </button>
                        </div>
                    </div>
                    <br />
                    <div className='row text-center'>
                        <div className="col-6 offset-3 text-center p1-multiple">
                            <button type="button" className="bttn-jelly bttn-lg" onClick={() => { 
                                this.props.setActiveThrower('p2') 
                                this.props.setDiddleTrue();
                            }}>
                                Player 2
                        </button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="row">
                        <div className="col-1 text-center align-self-center points-label">
                            Points:
                </div>
                        <div className="col-2 left-mark text-center align-self-center">
                        </div>
                        <div className="col-6  text-center number p1-single">
                            <h3>Game</h3>
                        </div>
                        <div className="col-2 right-mark text-center align-self-center">
                        </div>
                        <div className="col-1 text-center align-self-center points-label">
                            <span className='right-label'>Points:</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 mobile-p1 text-center align-self-start points-score">
                            {this.props.renderP1Score()}
                        </div>
                        <div className="col-2 left-mark text-center align-self-center">
                        </div>
                        <div className="col-6  text-center number p1-single">
                            <h3>Over?</h3>
                        </div>
                        <div className="col-2 right-mark text-center align-self-center">
                        </div>
                        <div className="col-1 mobile-p2 text-center align-self-start points-score">
                            {this.props.renderP2Score()}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 left-mark offset-1 text-center align-self-center">
                        </div>
                        <div className="col-6  text-center number p1-single">
                        </div>
                        <div className="col-2 right-mark text-center align-self-center">
                        </div>
                    </div>
                    {this.throwRowRender()}
                    <div className="row">
                        <div className="col-2 left-mark offset-1 text-center align-self-center">
                        </div>
                        <div className="col-6 text-center p2-multiple game-over">

                        </div>
                        <div className="col-2 right-mark text-center align-self-center">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 left-mark offset-1 text-center align-self-center">
                        </div>
                        <div className="col-6 text-center p1-multiple game-over">
                            <button type="button" className="bttn-jelly" onClick={() => { this.props.gameStateOver() }}>
                                Confirm
                        </button>
                        </div>
                        <div className="col-2 right-mark text-center align-self-center">
                        </div>
                    </div>
                </div>
            )
        }
    }

    missRowRender() {
        if (!this.props.gameOverModal && this.props.diddle) {
            if (!this.props.botGame || this.props.activeThrower === 'p1') {
                return (<div className="row miss-undo-row">
                    <div className="col-4 text-center end-turn">
                        <button type="button" className="btn" onClick={() => { this.props.endTurn() }}>
                            End Turn
                </button>
                    </div>
                    <div className="col-4 text-center miss">
                        <button type="button" className="btn" onClick={() => { this.props.miss() }}>
                            Miss
                </button>
                    </div>
                    <div className="col-4 text-center undo">
                        <button type="button" className="btn" onClick={() => { this.props.undo() }}>
                            Undo
                </button>
                    </div>
                </div>)
            } else {
                return (<div className="row miss-undo-row">
                    <div className="col-4 text-center end-turn">
                        <button type="button" className="btn" onClick={() => { this.props.endTurn() }} disabled>
                            End Turn
                </button>
                    </div>
                    <div className="col-4 text-center miss">
                        <button type="button" className="btn" onClick={() => { this.props.miss() }} disabled>
                            Miss
                </button>
                    </div>
                    <div className="col-4 text-center undo">
                        <button type="button" className="btn" onClick={() => { this.props.undo() }} disabled>
                            Undo
                </button>
                    </div>
                </div>)
            }
        } else {
            return null;
        }
    }

    render() {
        //Renders either an input or a text area depending on the screen width
        return (
            <div style={{padding: 0}}>
                {this.playersRender()}
                {this.playerButtonsRender()}
                {this.missRowRender()}
            </div>
        )
    }
}