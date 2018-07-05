import React, { Component } from "react";

export default class MobileModal extends Component {
    constructor() {
        super();
        this.chooseGameUrl = window.location.href.includes('cpu') ? '/cpu' : '/pvp';
        this.nameRender = this.nameRender.bind(this);
        this.playerButtonsRender = this.playerButtonsRender.bind(this);
        this.missUndoRow = this.missUndoRow.bind(this);
    }

    nameRender() {
        if (this.props.activeThrower === "p1") {
            return "Player 1";
        } else {
            return "Player 2";
        }
    }

    playerButtonsRender() {
        if (!this.props.gameOverModal) {
            if (this.props.activeThrower === 'p1') {
                return (
                    <div className="row">
                        <br />
                        <div className="col-4 text-right number p1-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#twentyModal">
                                20
                        </button>
                        </div>
                        <div className="col-4 text-right number p1-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#nineteenModal">
                                19
                        </button>
                        </div>

                        <div className="col-4 text-right number p1-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#eightteenModal">
                                18
                        </button>
                        </div>

                        <div className="col-4 text-right number p1-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#seventeenModal">
                                17
                        </button>
                        </div>

                        <div className="col-4 text-right number p1-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#sixteenModal">
                                16
                        </button>
                        </div>

                        <div className="col-4 text-right number p1-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#fifteenModal">
                                15
                        </button>
                        </div>
                        <div className="col-4 text-right number p1-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#fourteenModal">
                                14
                        </button>
                        </div>

                        <div className="col-4 text-right number p1-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#thirteenModal">
                                13
                        </button>
                        </div>

                        <div className="col-4 text-right number p1-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#twelveModal">
                                12
                        </button>
                        </div>

                        <div className="col-4 text-right number p1-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#elevenModal">
                                11
                        </button>
                        </div>

                        <div className="col-4 text-right number p1-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#tenModal">
                                10
                        </button>
                        </div>

                        <div className="col-4 text-right number p1-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#nineModal">
                                9
                        </button>
                        </div>

                        <div className="col-4 text-right number p1-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#eightModal">
                                8
                        </button>
                        </div>

                        <div className="col-4 text-right number p1-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#sevenModal">
                                7
                        </button>
                        </div>

                        <div className="col-4 text-right number p1-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#sixModal">
                                6
                        </button>
                        </div>

                        <div className="col-4 text-right number p1-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#fiveModal">
                                5
                        </button>
                        </div>

                        <div className="col-4 text-right number p1-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#fourModal">
                                4
                        </button>
                        </div>

                        <div className="col-4 text-right number p1-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#threeModal">
                                3
                        </button>
                        </div>

                        <div className="col-4 text-right number p1-single">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#twoModal">
                                2
                        </button>
                        </div>
                        <div className="col-4 text-right number p1-single">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#oneModal">
                                1
                        </button>
                        </div>

                        <div className="col-4 text-right number p1-multiple">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#bullModal">
                                Bull
                        </button>
                        </div>
                    </div>
                )
            } else if (this.props.activeThrower === 'p2') {
                return (
                    <div className="row">
                        <br />
                        <div className="col-4 text-right number p2-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#twentyModal">
                                20
                        </button>
                        </div>
                        <div className="col-4 text-right number p2-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#nineteenModal">
                                19
                        </button>
                        </div>

                        <div className="col-4 text-right number p2-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#eightteenModal">
                                18
                        </button>
                        </div>

                        <div className="col-4 text-right number p2-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#seventeenModal">
                                17
                        </button>
                        </div>

                        <div className="col-4 text-right number p2-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#sixteenModal">
                                16
                        </button>
                        </div>

                        <div className="col-4 text-right number p2-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#fifteenModal">
                                15
                        </button>
                        </div>
                        <div className="col-4 text-right number p2-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#fourteenModal">
                                14
                        </button>
                        </div>

                        <div className="col-4 text-right number p2-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#thirteenModal">
                                13
                        </button>
                        </div>

                        <div className="col-4 text-right number p2-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#twelveModal">
                                12
                        </button>
                        </div>

                        <div className="col-4 text-right number p2-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#elevenModal">
                                11
                        </button>
                        </div>

                        <div className="col-4 text-right number p2-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#tenModal">
                                10
                        </button>
                        </div>

                        <div className="col-4 text-right number p2-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#nineModal">
                                9
                        </button>
                        </div>

                        <div className="col-4 text-right number p2-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#eightModal">
                                8
                        </button>
                        </div>

                        <div className="col-4 text-right number p2-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#sevenModal">
                                7
                        </button>
                        </div>

                        <div className="col-4 text-right number p2-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#sixModal">
                                6
                        </button>
                        </div>

                        <div className="col-4 text-right number p2-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#fiveModal">
                                5
                        </button>
                        </div>

                        <div className="col-4 text-right number p2-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#fourModal">
                                4
                        </button>
                        </div>

                        <div className="col-4 text-right number p2-single border-bottom">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#threeModal">
                                3
                        </button>
                        </div>

                        <div className="col-4 text-right number p2-single">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#twoModal">
                                2
                        </button>
                        </div>
                        <div className="col-4 text-right number p2-single">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#oneModal">
                                1
                        </button>
                        </div>

                        <div className="col-4 text-right number p2-multiple">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#bullModal">
                                Bull
                        </button>
                        </div>
                    </div>
                )
            }
        } else {
            return (
                <div>
                    <div className='row'>
                        <div className='col-12 text-center' id='x01GameOver'>
                            <h3>Game Over?</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-12 text-center p2-multiple game-over">
                            <br />
                            <br />
                            <br />
                            <button type="button" className="btn" onClick={() => { this.props.undoGameOver() }}>
                                Undo
                        </button>
                            <br />
                            <br />
                            <br />

                        </div>

                        <div className="col-12 text-center p1-multiple game-over">
                            <button type="button" className="btn" onClick={() => { this.props.gameStateOver() }}>
                                Confirm
                        </button>
                        </div>
                    </div>

                </div>
            )
        }
    }

    missUndoRow() {
        if (!this.props.gameOverModal) {
            return (
                <div className="row miss-undo-row" id='x01MobileUndoRow'>
                    <div className="col-3 text-center end-turn">
                        <button type="button" className="btn" onClick={() => { this.props.endTurn() }}>
                            End Turn
                        </button>
                    </div>
                    <div className="col-6 text-center miss">
                        <button type="button" className="btn" onClick={() => { this.props.miss() }}>
                            Miss
                        </button>
                    </div>
                    <div className="col-3 text-center undo">
                        <button type="button" className="btn" onClick={() => { this.props.undo() }}>
                            Undo
                        </button>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            <div>
                <div className='row' id='x01MobileThrow'>
                    <div className="col-3 text-center start-over mobile-start-over">
                        <button type="button" className="btn" data-toggle="modal" data-target="#p1ShotModal">
                            Shots
                        </button>
                    </div>
                    <div className='col-6 throw-borders text-center align-self-center' id='mobileThrow'>
                        Throw: <span>{this.props.activeThrows + 1}</span>
                    </div>
                    <div className="col-3 text-center start-over mobile-start-over">
                        <button type="button" className="btn" data-toggle="modal" data-target="#p2ShotModal">
                            Shots
                        </button>
                    </div>
                </div>
                {this.playerButtonsRender()}
                {this.missUndoRow()}
                <div className="modal fade" id="twentyModal" tabIndex="-1" role="dialog" aria-labelledby="twentyModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="twentyModalLabel">20</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(20, 1) }}>x1</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(20, 2) }}>x2</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(20, 3) }}>x3</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="nineteenModal" tabIndex="-1" role="dialog" aria-labelledby="nineteenModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="nineteenModalLabel">19</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(19, 1) }}>x1</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(19, 2) }}>x2</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(19, 3) }}>x3</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="eightteenModal" tabIndex="-1" role="dialog" aria-labelledby="eightteenModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="eightteenModalLabel">18</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(18, 1) }}>x1</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(18, 2) }}>x2</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(18, 3) }}>x3</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="seventeenModal" tabIndex="-1" role="dialog" aria-labelledby="seventeenModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="seventeenModalLabel">17</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(17, 1) }}>x1</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(17, 2) }}>x2</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(17, 3) }}>x3</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="sixteenModal" tabIndex="-1" role="dialog" aria-labelledby="sixteenModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="sixteenModalLabel">16</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(16, 1) }}>x1</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(16, 2) }}>x2</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(16, 3) }}>x3</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="fifteenModal" tabIndex="-1" role="dialog" aria-labelledby="fifteenModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="fifteenModalLabel">15</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(15, 1) }}>x1</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(15, 2) }}>x2</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(15, 3) }}>x3</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="fourteenModal" tabIndex="-1" role="dialog" aria-labelledby="fourteenModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="fourteenModalLabel">14</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(14, 1) }}>x1</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(14, 2) }}>x2</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(14, 3) }}>x3</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="thirteenModal" tabIndex="-1" role="dialog" aria-labelledby="thirteenModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="thirteenModalLabel">13</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(13, 1) }}>x1</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(13, 2) }}>x2</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(13, 3) }}>x3</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="twelveModal" tabIndex="-1" role="dialog" aria-labelledby="twelveModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="twelveModalLabel">12</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(12, 1) }}>x1</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(12, 2) }}>x2</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(12, 3) }}>x3</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="elevenModal" tabIndex="-1" role="dialog" aria-labelledby="elevenModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="elevenModalLabel">11</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(11, 1) }}>x1</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(11, 2) }}>x2</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(11, 3) }}>x3</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="tenModal" tabIndex="-1" role="dialog" aria-labelledby="tenModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="tenModalLabel">10</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(10, 1) }}>x1</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(10, 2) }}>x2</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(10, 3) }}>x3</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="nineModal" tabIndex="-1" role="dialog" aria-labelledby="nineModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="nineModalLabel">9</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(9, 1) }}>x1</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(9, 2) }}>x2</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(9, 3) }}>x3</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="eightModal" tabIndex="-1" role="dialog" aria-labelledby="eightModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="eightModalLabel">8</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(8, 1) }}>x1</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(8, 2) }}>x2</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(8, 3) }}>x3</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="sevenModal" tabIndex="-1" role="dialog" aria-labelledby="sevenModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="sevenModalLabel">7</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(7, 1) }}>x1</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(7, 2) }}>x2</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(7, 3) }}>x3</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="sixModal" tabIndex="-1" role="dialog" aria-labelledby="sixModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="sixModalLabel">6</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(6, 1) }}>x1</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(6, 2) }}>x2</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(6, 3) }}>x3</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="fiveModal" tabIndex="-1" role="dialog" aria-labelledby="fiveModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="fiveModalLabel">5</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(5, 1) }}>x1</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(5, 2) }}>x2</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(5, 3) }}>x3</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="fourModal" tabIndex="-1" role="dialog" aria-labelledby="fourModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="fourModalLabel">4</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(4, 1) }}>x1</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(4, 2) }}>x2</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(4, 3) }}>x3</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="threeModal" tabIndex="-1" role="dialog" aria-labelledby="threeModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="threeModalLabel">3</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(3, 1) }}>x1</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(3, 2) }}>x2</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(3, 3) }}>x3</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="twoModal" tabIndex="-1" role="dialog" aria-labelledby="twoModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="twoModalLabel">2</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(2, 1) }}>x1</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(2, 2) }}>x2</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(2, 3) }}>x3</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="oneModal" tabIndex="-1" role="dialog" aria-labelledby="oneModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="oneModalLabel">1</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(1, 1) }}>x1</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(1, 2) }}>x2</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(1, 3) }}>x3</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="bullModal" tabIndex="-1" role="dialog" aria-labelledby="bullModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="bullModalLabel">Bull</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(25, 1) }}>x1</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(25, 2) }}>x2</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )

    }
}