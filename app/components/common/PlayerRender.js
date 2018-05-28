import React, { Component } from "react";

export default class PlayerRender extends Component {
    constructor() {
        super();
        this.gameReset = this.gameReset.bind(this);
    }

    gameReset() {
        if (this.props.gameX01Reset) {
            this.props.gameX01Reset();
        } else if (this.props.gameCricketReset) {
            this.props.gameCricketReset();
        }
    }

    render() {
        if (this.props.activeThrower === "p1") {
            return (
                <div>
                    <div className="row top-row">
                        <div className="col-md-2 col-lg-1 start-over">
                            <button type="button" className="btn" data-toggle="modal" data-target="#reloadModal">
                                <img className="icon" src="/assets/images/svg/reload.svg" alt="restart game"></img>
                            </button>
                        </div>
                        <div className="col-md-4 col-lg-5 text-center player border-right active-thrower p1-active">
                            Player 1
                    </div>
                        <div className="col-md-4 col-lg-5 text-center player border-left inactive-thrower">
                            Player 2
                    </div>
                        <div className="col-lg-1 col-md-2 start-over">
                            <button type="button" className="btn" data-toggle="modal" data-target="#exitModal">
                                <img className="icon" src="/assets/images/svg/home.svg" alt="restart game"></img>
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
                                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.gameReset() }}>Yes</button>
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
        } else {
            return (
                <div>
                    <div className="row top-row">
                        <div className="col-lg-1 col-md-2 start-over">
                            <button type="button" className="btn" data-toggle="modal" data-target="#reloadModal">
                                <img className="icon" src="/assets/images/svg/reload.svg" alt="restart game"></img>
                            </button>
                        </div>
                        <div className="col-lg-5 col-md-4 text-center player border-right inactive-thrower">
                            Player 1
                    </div>
                        <div className="col-lg-5 col-md-4 text-center player border-left active-thrower p2-active">
                            Player 2
                    </div>
                        <div className="col-lg-1 col-md-2 start-over">
                            <button type="button" className="btn" data-toggle="modal" data-target="#exitModal">
                                <img className="icon" src="/assets/images/svg/home.svg" alt="restart game"></img>
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
                                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.gameReset() }}>Yes</button>
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
}