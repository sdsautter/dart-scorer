import React, { Component } from "react";

export default class MobileModalView extends Component {
    constructor() {
        super();

        this.playersRender = this.playersRender.bind(this);
        this.nameRender = this.nameRender.bind(this);
        this.throwRowRender = this.throwRowRender.bind(this);
        this.modalToggle = this.modalToggle.bind(this);
        this.playerButtonsRender = this.playerButtonsRender.bind(this);
    }

    modalToggle() {
        this.props.modalSwitch();
    }

    nameRender() {
        if (this.props.activeThrower === "p1") {
            return "Player 1";
        } else {
            return "Player 2";
        }
    }

    playersRender() {
        if (this.props.activeThrower === "p1") {
            return (
                <div className="row top-row">
                    <div className="col-6 text-center player border-right p1-active">
                        Player 1
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
                        Player 1
                    </div>
                    <div className="col-6 text-center player border-left p2-active">
                        Player 2
                    </div>
                </div>
            )
        }

    }

    throwRowRender() {
        //Renders either an input or a text area depending on the screen width
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
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 1) }}>17x1</button>
                        </div>
                        <div className="col-2 number text-center p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 2) }}>17x2</button>
                        </div>
                        <div className="col-2 border-right number text-center p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 3) }}>17x3</button>
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
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 1) }}>16x1</button>
                        </div>
                        <div className="col-2 number text-center p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 2) }}>16x2</button>
                        </div>
                        <div className="col-2 border-right number text-center p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 3) }}>16x3</button>
                        </div>
                        <div className="col-2 right-mark text-center align-self-center">
                            {this.props.markProgress(2, 16)}
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
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 1) }}>17x1</button>
                        </div>
                        <div className="col-2 number text-center p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 2) }}>17x2</button>
                        </div>
                        <div className="col-2 border-right number text-center p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 3) }}>17x3</button>
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
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 1) }}>16x1</button>
                        </div>
                        <div className="col-2 number text-center p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 2) }}>16x2</button>
                        </div>
                        <div className="col-2 border-right number text-center p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 3) }}>16x3</button>
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

    playerButtonsRender() {
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
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 1) }}>20x1</button>
                        </div>
                        <div className="col-2 number text-center p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 2) }}>20x2</button>
                        </div>
                        <div className="col-2 border-right number text-center p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 3) }}>20x3</button>
                        </div>
                        <div className="col-2 right-mark text-center align-self-center">
                            {this.props.markProgress(2, 20)}
                        </div>
                        <div className="col-1 text-center align-self-center points-label">
                            <span className='right-label'>Points:</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-center align-self-start points-score">
                            {this.props.renderP1Score()}
                        </div>
                        <div className="col-2 left-mark text-center align-self-center">
                            {this.props.markProgress(1, 19)}
                        </div>
                        <div className="col-2 border-left text-center number p1-single">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 1) }}>19x1</button>
                        </div>
                        <div className="col-2 number text-center p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 2) }}>19x2</button>
                        </div>
                        <div className="col-2 border-right number text-center p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 3) }}>19x3</button>
                        </div>
                        <div className="col-2 right-mark text-center align-self-center">
                            {this.props.markProgress(2, 19)}
                        </div>
                        <div className="col-1 text-center align-self-start points-score">
                            {this.props.renderP2Score()}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 left-mark offset-1 text-center align-self-center">
                            {this.props.markProgress(1, 18)}
                        </div>
                        <div className="col-2 border-left text-center number p1-single">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 1) }}>18x1</button>
                        </div>
                        <div className="col-2 number text-center p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 2) }}>18x2</button>
                        </div>
                        <div className="col-2 border-right number text-center p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 3) }}>18x3</button>
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
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 1) }}>15x1</button>
                        </div>
                        <div className="col-2 number text-center p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 2) }}>15x2</button>
                        </div>
                        <div className="col-2 border-right number text-center p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 3) }}>15x3</button>
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
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 1) }}>Bull</button>
                        </div>
                        <div className="col-3 border-right number text-center p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 2) }}>Bullx2</button>
                        </div>
                        <div className="col-2 right-mark text-center align-self-center">
                            {this.props.markProgress(2, 25)}
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.activeThrower === 'p2') {
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
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 1) }}>20x1</button>
                        </div>
                        <div className="col-2 number text-center p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 2) }}>20x2</button>
                        </div>
                        <div className="col-2 border-right number text-center p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 3) }}>20x3</button>
                        </div>
                        <div className="col-2 right-mark text-center align-self-center">
                            {this.props.markProgress(2, 20)}
                        </div>
                        <div className="col-1 text-center align-self-center points-label">
                            <span className='right-label'>Points:</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-center align-self-start points-score">
                            {this.props.renderP1Score()}
                        </div>
                        <div className="col-2 left-mark text-center align-self-center">
                            {this.props.markProgress(1, 19)}
                        </div>
                        <div className="col-2 border-left text-center number p2-single">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 1) }}>19x1</button>
                        </div>
                        <div className="col-2 number text-center p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 2) }}>19x2</button>
                        </div>
                        <div className="col-2 border-right number text-center p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 3) }}>19x3</button>
                        </div>
                        <div className="col-2 right-mark text-center align-self-center">
                            {this.props.markProgress(2, 19)}
                        </div>
                        <div className="col-1 text-center align-self-start points-score">
                            {this.props.renderP2Score()}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 left-mark offset-1 text-center align-self-center">
                            {this.props.markProgress(1, 18)}
                        </div>
                        <div className="col-2 border-left text-center number p2-single">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 1) }}>18x1</button>
                        </div>
                        <div className="col-2 number text-center p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 2) }}>18x2</button>
                        </div>
                        <div className="col-2 border-right number text-center p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 3) }}>18x3</button>
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
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 1) }}>15x1</button>
                        </div>
                        <div className="col-2 number text-center p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 2) }}>15x2</button>
                        </div>
                        <div className="col-2 border-right number text-center p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 3) }}>15x3</button>
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
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 1) }}>Bull</button>
                        </div>
                        <div className="col-3 border-right number text-center p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 2) }}>Bullx2</button>
                        </div>
                        <div className="col-2 right-mark text-center align-self-center">
                            {this.props.markProgress(2, 25)}
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        //Renders either an input or a text area depending on the screen width
        return (
            <div className='container-fluid'>
                {this.playersRender()}
                {this.playerButtonsRender()}
                <div className="row miss-undo-row">
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
                </div>
                <div className="row">
                    <div className="col-6 text-center start-over">
                        <button type="button" className="btn" data-toggle="modal" data-target="#reloadModal">
                            <img className="icon" src="/assets/images/svg/reload.svg" alt="restart game"></img>
                        </button>
                    </div>
                    <div className="col-6 text-center start-over">
                        <button type="button" className="btn" data-toggle="modal" data-target="#exitModal">
                            <img className="icon" src="/assets/images/svg/home.svg" alt="home screen"></img>
                        </button>
                    </div>
                </div>
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
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { location.assign('/cricket') }}>Yes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exitModal" tabIndex="-1" role="dialog" aria-labelledby="exitModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exitModalLabel">Exit Game</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal">No</button>
                                    </div>
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { location.assign('/') }}>Yes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}