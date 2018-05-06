import React, { Component } from "react";

export default class Scoreboard extends Component {
    constructor() {
        super();

        this.playersRender = this.playersRender.bind(this);
        this.viewportRender = this.viewportRender.bind(this);
        this.nameRender = this.nameRender.bind(this);
        this.throwRowRender = this.throwRowRender.bind(this);
    }

    nameRender() {
        if (this.props.activeThrower === "p1") {
            return "Player 1";
        } else {
            return "Player 2";
        }
    }

    playersRender(intViewportWidth) {
        if (intViewportWidth < 720) {
            if (this.props.activeThrower === "p1") {
                return (
                    <div className="row top-row">
                        <div className="col-6 text-center player border-right active-thrower">
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
                        <div className="col-6 text-center player border-left active-thrower">
                            Player 2
                    </div>
                    </div>
                )
            }
        } else {
            if (this.props.activeThrower === "p1") {
                return (
                    <div>
                        <div className="row top-row">
                            <div className="col-1 start-over">
                                <button type="button" className="btn" data-toggle="modal" data-target="#reloadModal">
                                    <img className="icon" src="/assets/images/svg/reload.svg" alt="restart game"></img>
                                </button>
                                {/* <button type="button" className="btn" onClick={() => { location.assign('/cricket') }}>
                            <img className="icon" src="/assets/images/svg/reload.svg" alt="restart game"></img>
                        </button> */}
                            </div>
                            <div className="col-5 text-center player border-right active-thrower">
                                Player 1
                    </div>
                            <div className="col-5 text-center player border-left inactive-thrower">
                                Player 2
                    </div>
                            <div className="col-1 start-over">
                                <button type="button" className="btn" data-toggle="modal" data-target="#exitModal">
                                    <img className="icon" src="/assets/images/svg/home.svg" alt="restart game"></img>
                                </button>
                                {/* <button type="button" className="btn" onClick={() => { location.assign('/') }}>
                                <img className="icon" src="/assets/images/svg/home.svg" alt="restart game"></img>
                            </button> */}
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
            } else {
                return (
                    <div>
                        <div className="row top-row">
                            <div className="col-1 start-over">
                                <button type="button" className="btn" data-toggle="modal" data-target="#reloadModal">
                                    <img className="icon" src="/assets/images/svg/reload.svg" alt="restart game"></img>
                                </button>
                                {/* <button type="button" className="btn" onClick={() => { location.assign('/cricket') }}>
                                <img className="icon" src="/assets/images/svg/reload.svg" alt="restart game"></img>
                            </button> */}
                            </div>
                            <div className="col-5 text-center player border-right inactive-thrower">
                                Player 1
                    </div>
                            <div className="col-5 text-center player border-left active-thrower">
                                Player 2
                    </div>
                            <div className="col-1 start-over">
                                <button type="button" className="btn" data-toggle="modal" data-target="#exitModal">
                                    <img className="icon" src="/assets/images/svg/home.svg" alt="restart game"></img>
                                </button>
                                {/* <button type="button" className="btn" onClick={() => { location.assign('/') }}>
                                <img className="icon" src="/assets/images/svg/home.svg" alt="restart game"></img>
                            </button> */}
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
    }

    throwRowRender(intViewportWidth) {
        //Renders either an input or a text area depending on the screen width
        if (intViewportWidth < 720) {
            if (this.props.activeThrower === 'p1') {
                return (
                    <div>
                        <div className="row">
                            <div className="col-2 text-center align-self-center points-label">
                                Throw:
                    </div>
                            <div className="col-2 text-center align-self-center">
                                {this.props.markProgress(1, 17)}
                            </div>
                            <div className="col-4 text-center border-left border-right number">
                                <button type="button" className="btn text-center" data-toggle="modal" data-target="#twentyModal">
                                    17
                        </button>
                            </div>
                            <div className="col-2 text-center align-self-center">
                                {this.props.markProgress(2, 17)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 text-center align-self-start points-score">
                                {this.props.activeThrows + 1}
                            </div>
                            <div className="col-2 text-center align-self-center">
                                {this.props.markProgress(1, 16)}
                            </div>
                            <div className="col-4 text-center border-left border-right number">
                                <button type="button" className="btn" data-toggle="modal" data-target="#nineteenModal">
                                    16
                        </button>
                            </div>
                            <div className="col-2 text-center align-self-center">
                                {this.props.markProgress(2, 16)}
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div>
                        <div className="row">
                            <div className="col-2 offset-2 text-center align-self-center">
                                {this.props.markProgress(1, 17)}
                            </div>
                            <div className="col-4 text-center border-left border-right number">
                                <button type="button" className="btn text-center" data-toggle="modal" data-target="#twentyModal">
                                    17
                        </button>
                            </div>
                            <div className="col-2 text-center align-self-center">
                                {this.props.markProgress(2, 17)}
                            </div>
                            <div className="col-2 text-center align-self-center points-label">
                                Throw:
                    </div>
                        </div>
                        <div className="row">
                            <div className="col-2 offset-2 text-center align-self-center">
                                {this.props.markProgress(1, 16)}
                            </div>
                            <div className="col-4 text-center border-left border-right number">
                                <button type="button" className="btn" data-toggle="modal" data-target="#nineteenModal">
                                    16
                        </button>
                            </div>
                            <div className="col-2 text-center align-self-center">
                                {this.props.markProgress(2, 16)}
                            </div>
                            <div className="col-2 text-center align-self-start points-score">
                                {this.props.activeThrows}
                            </div>
                        </div>
                    </div>
                )
            }
        } else if (intViewportWidth < 900) {
            if (this.props.activeThrower === 'p1') {
                return (
                    <div>
                        <div className="row">
                            <div className="col-3 text-center align-self-center points-label">
                                Throw:
                    </div>
                            <div className="col-1 text-center align-self-center">
                                {this.props.markProgress(1, 17)}
                            </div>
                            <div className="col-1 border-left text-center number">
                                17
                    </div>
                            <div className="col-1 text-center number">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 1) }}>S</button>
                            </div>
                            <div className="col-1 number text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 2) }}>D</button>
                            </div>
                            <div className="col-1 border-right number text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 3) }}>T</button>
                            </div>
                            <div className="col-1 text-center align-self-center">
                                {this.props.markProgress(2, 17)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 text-center align-self-center points-score">
                                {this.props.activeThrows + 1}
                            </div>
                            <div className="col-1 text-center align-self-center">
                                {this.props.markProgress(1, 16)}
                            </div>
                            <div className="col-1 border-left text-center number">
                                16
                    </div>
                            <div className="col-1 text-center number">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 1) }}>S</button>
                            </div>
                            <div className="col-1 number text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 2) }}>D</button>
                            </div>
                            <div className="col-1 border-right number text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 3) }}>T</button>
                            </div>
                            <div className="col-1 text-center align-self-center">
                                {this.props.markProgress(2, 16)}
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div>
                        <div className="row">
                            <div className="col-1 offset-3 text-center align-self-center">
                                {this.props.markProgress(1, 17)}
                            </div>
                            <div className="col-1 border-left text-center number">
                                17
                    </div>
                            <div className="col-1 text-center number">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 1) }}>S</button>
                            </div>
                            <div className="col-1 number text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 2) }}>D</button>
                            </div>
                            <div className="col-1 border-right number text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 3) }}>T</button>
                            </div>
                            <div className="col-1 text-center align-self-center">
                                {this.props.markProgress(2, 17)}
                            </div>
                            <div className="col-3 text-center align-self-center points-label">
                                Throw:
                    </div>
                        </div>
                        <div className="row">
                            <div className="col-1 offset-3 text-center align-self-center">
                                {this.props.markProgress(1, 16)}
                            </div>
                            <div className="col-1 border-left text-center number">
                                16
                    </div>
                            <div className="col-1 text-center number">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 1) }}>S</button>
                            </div>
                            <div className="col-1 number text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 2) }}>D</button>
                            </div>
                            <div className="col-1 border-right number text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 3) }}>T</button>
                            </div>
                            <div className="col-1 text-center align-self-center">
                                {this.props.markProgress(2, 16)}
                            </div>
                            <div className="col-3 text-center align-self-center points-score">
                                {this.props.activeThrows + 1}
                            </div>
                        </div>
                    </div>
                )
            }
        }
        else {
            if (this.props.activeThrower === 'p1') {
                return (
                    <div>
                        <div className="row">
                            <div className="col-3 text-center align-self-center points-label">
                                Throw:
                    </div>
                            <div className="col-1 text-center align-self-center">
                                {this.props.markProgress(1, 17)}
                            </div>
                            <div className="col-1 border-left text-center number">
                                17
                    </div>
                            <div className="col-1 text-center number">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 1) }}>Single</button>
                            </div>
                            <div className="col-1 number text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 2) }}>Double</button>
                            </div>
                            <div className="col-1 border-right number text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 3) }}>Triple</button>
                            </div>
                            <div className="col-1 text-center align-self-center">
                                {this.props.markProgress(2, 17)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 text-center align-self-center points-score">
                                {this.props.activeThrows + 1}
                            </div>
                            <div className="col-1 text-center align-self-center">
                                {this.props.markProgress(1, 16)}
                            </div>
                            <div className="col-1 border-left text-center number">
                                16
                    </div>
                            <div className="col-1 text-center number">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 1) }}>Single</button>
                            </div>
                            <div className="col-1 number text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 2) }}>Double</button>
                            </div>
                            <div className="col-1 border-right number text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 3) }}>Triple</button>
                            </div>
                            <div className="col-1 text-center align-self-center">
                                {this.props.markProgress(2, 16)}
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div>
                        <div className="row">
                            <div className="col-1 offset-3 text-center align-self-center">
                                {this.props.markProgress(1, 17)}
                            </div>
                            <div className="col-1 border-left text-center number">
                                17
                    </div>
                            <div className="col-1 text-center number">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 1) }}>Single</button>
                            </div>
                            <div className="col-1 number text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 2) }}>Double</button>
                            </div>
                            <div className="col-1 border-right number text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 3) }}>Triple</button>
                            </div>
                            <div className="col-1 text-center align-self-center">
                                {this.props.markProgress(2, 17)}
                            </div>
                            <div className="col-3 text-center align-self-center points-label">
                                Throw:
                    </div>
                        </div>
                        <div className="row">
                            <div className="col-1 offset-3 text-center align-self-center">
                                {this.props.markProgress(1, 16)}
                            </div>
                            <div className="col-1 border-left text-center number">
                                16
                    </div>
                            <div className="col-1 text-center number">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 1) }}>Single</button>
                            </div>
                            <div className="col-1 number text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 2) }}>Double</button>
                            </div>
                            <div className="col-1 border-right number text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 3) }}>Triple</button>
                            </div>
                            <div className="col-1 text-center align-self-center">
                                {this.props.markProgress(2, 16)}
                            </div>
                            <div className="col-3 text-center align-self-center points-score">
                                {this.props.activeThrows + 1}
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }

    viewportRender() {
        var intViewportWidth = window.innerWidth;
        //Renders either an input or a text area depending on the screen width
        if (intViewportWidth < 720) {
            return (
                <div className="container-fluid">
                    {this.playersRender(intViewportWidth)}
                    <div className="row">
                        <div className="col-2 text-center align-self-center points-label">
                            Points:
                    </div>
                        <div className="col-2 text-center align-self-center">
                            {this.props.markProgress(1, 20)}
                        </div>
                        <div className="col-4 text-center border-left border-right number">
                            <button type="button" className="btn text-center" data-toggle="modal" data-target="#twentyModal">
                                20
                        </button>
                        </div>
                        <div className="col-2 text-center align-self-center">
                            {this.props.markProgress(2, 20)}
                        </div>
                        <div className="col-2 text-center align-self-center points-label">
                            Points:
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-2 text-center align-self-start points-score">
                            {this.props.renderP1Score()}
                        </div>
                        <div className="col-2 text-center align-self-center">
                            {this.props.markProgress(1, 19)}
                        </div>
                        <div className="col-4 text-center border-left border-right number">
                            <button type="button" className="btn" data-toggle="modal" data-target="#nineteenModal">
                                19
                        </button>
                        </div>
                        <div className="col-2 text-center align-self-center">
                            {this.props.markProgress(2, 19)}
                        </div>
                        <div className="col-2 text-center align-self-start points-score">
                            {this.props.renderP2Score()}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 offset-2 text-center align-self-center">
                            {this.props.markProgress(1, 18)}
                        </div>
                        <div className="col-4 text-center border-left border-right number">
                            <button type="button" className="btn" data-toggle="modal" data-target="#eightteenModal">
                                18
                        </button>
                        </div>
                        <div className="col-2 text-center align-self-center">
                            {this.props.markProgress(2, 18)}
                        </div>
                    </div>
                    {this.throwRowRender(intViewportWidth)}
                    <div className="row">
                        <div className="col-2 offset-2 text-center align-self-center">
                            {this.props.markProgress(1, 15)}
                        </div>
                        <div className="col-4 text-center border-left border-right number">
                            <button type="button" className="btn" data-toggle="modal" data-target="#fifteenModal">
                                15
                        </button>
                        </div>
                        <div className="col-2 text-center align-self-center">
                            {this.props.markProgress(2, 15)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 offset-2 text-center align-self-center">
                            {this.props.markProgress(1, 25)}
                        </div>
                        <div className="col-4 text-center border-left border-right number">
                            <button type="button" className="btn" data-toggle="modal" data-target="#bullModal">
                                Bull
                        </button>
                        </div>
                        <div className="col-2 text-center align-self-center">
                            {this.props.markProgress(2, 25)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 text-center miss">
                            <button type="button" className="btn" onClick={() => { this.props.miss() }}>
                                Miss
                        </button>
                        </div>
                        <div className="col-6 text-center undo">
                            <button type="button" className="btn" onClick={() => { this.props.undo() }}>
                                Undo
                        </button>
                        </div>
                    </div>
                    <br />
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
                    <div className="modal fade" id="twentyModal" tabIndex="-1" role="dialog" aria-labelledby="twentyModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="twentyModalLabel">20</h5>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(20, 1) }}>Single</button>
                                        </div>
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(20, 2) }}>Double</button>
                                        </div>
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(20, 3) }}>Triple</button>
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
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(19, 1) }}>Single</button>
                                        </div>
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(19, 2) }}>Double</button>
                                        </div>
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(19, 3) }}>Triple</button>
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
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(18, 1) }}>Single</button>
                                        </div>
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(18, 2) }}>Double</button>
                                        </div>
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(18, 3) }}>Triple</button>
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
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(17, 1) }}>Single</button>
                                        </div>
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(17, 2) }}>Double</button>
                                        </div>
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(17, 3) }}>Triple</button>
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
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(16, 1) }}>Single</button>
                                        </div>
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(16, 2) }}>Double</button>
                                        </div>
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(16, 3) }}>Triple</button>
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
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(15, 1) }}>Single</button>
                                        </div>
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(15, 2) }}>Double</button>
                                        </div>
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(15, 3) }}>Triple</button>
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
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(25, 1) }}>Single</button>
                                        </div>
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.score(25, 2) }}>Double</button>
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
        } else if (intViewportWidth < 900) {
            return (
                <div className="container-fluid">
                    {this.playersRender(intViewportWidth)}
                    <div className="row">
                        <div className="col-3 text-center align-self-center points-label">
                            Points:
                    </div>
                        <div className="col-1 text-center align-self-center">
                            {this.props.markProgress(1, 20)}
                        </div>
                        <div className="col-1 border-left text-center number">
                            20
                    </div>
                        <div className="col-1 text-center number">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 1) }}>S</button>
                        </div>
                        <div className="col-1 number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 2) }}>D</button>
                        </div>
                        <div className="col-1 border-right number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 3) }}>T</button>
                        </div>
                        <div className="col-1 text-center align-self-center">
                            {this.props.markProgress(2, 20)}
                        </div>
                        <div className="col-3 text-center align-self-center points-label">
                            Points:
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-3 text-center align-self-center points-score">
                            {this.props.renderP1Score()}
                        </div>
                        <div className="col-1 text-center align-self-center">
                            {this.props.markProgress(1, 19)}
                        </div>
                        <div className="col-1 border-left text-center number">
                            19
                    </div>
                        <div className="col-1 text-center number">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 1) }}>S</button>
                        </div>
                        <div className="col-1 number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 2) }}>D</button>
                        </div>
                        <div className="col-1 border-right number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 3) }}>T</button>
                        </div>
                        <div className="col-1 text-center align-self-center">
                            {this.props.markProgress(2, 19)}
                        </div>
                        <div className="col-3 text-center align-self-center points-score">
                            {this.props.renderP2Score()}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 offset-3 text-center align-self-center">
                            {this.props.markProgress(1, 18)}
                        </div>
                        <div className="col-1 border-left text-center number">
                            18
                    </div>
                        <div className="col-1 text-center number">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 1) }}>S</button>
                        </div>
                        <div className="col-1 number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 2) }}>D</button>
                        </div>
                        <div className="col-1 border-right number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 3) }}>T</button>
                        </div>
                        <div className="col-1 text-center align-self-center">
                            {this.props.markProgress(2, 18)}
                        </div>
                    </div>
                    {this.throwRowRender(intViewportWidth)}
                    <div className="row">
                        <div className="col-1 offset-3 text-center align-self-center">
                            {this.props.markProgress(1, 15)}
                        </div>
                        <div className="col-1 border-left text-center number">
                            15
                    </div>
                        <div className="col-1 text-center number">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 1) }}>S</button>
                        </div>
                        <div className="col-1 number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 2) }}>D</button>
                        </div>
                        <div className="col-1 border-right number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 3) }}>T</button>
                        </div>
                        <div className="col-1 text-center align-self-center">
                            {this.props.markProgress(2, 15)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 offset-3 text-center align-self-center">
                            {this.props.markProgress(1, 25)}
                        </div>
                        <div className="col-1 border-left text-center number">
                            Bull
                    </div>
                        <div className="col text-center number">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 1) }}>S</button>
                        </div>
                        <div className="col border-right number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 2) }}>D</button>
                        </div>
                        <div className="col-1 text-center align-self-center">
                            {this.props.markProgress(2, 25)}
                        </div>
                        <div className="col-3">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 text-center miss">
                            <button type="button" className="btn" onClick={() => { this.props.miss() }}>
                                Miss
                        </button>
                        </div>
                        <div className="col-6 text-center undo">
                            <button type="button" className="btn" onClick={() => { this.props.undo() }}>
                                Undo
                        </button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container-fluid">
                    {this.playersRender(intViewportWidth)}
                    <div className="row">
                        <div className="col-3 text-center align-self-center points-label">
                            Points:
                    </div>
                        <div className="col-1 text-center align-self-center">
                            {this.props.markProgress(1, 20)}
                        </div>
                        <div className="col-1 border-left text-center number">
                            20
                    </div>
                        <div className="col-1 text-center number">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 1) }}>Single</button>
                        </div>
                        <div className="col-1 number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 2) }}>Double</button>
                        </div>
                        <div className="col-1 border-right number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 3) }}>Triple</button>
                        </div>
                        <div className="col-1 text-center align-self-center">
                            {this.props.markProgress(2, 20)}
                        </div>
                        <div className="col-3 text-center align-self-center points-label">
                            Points:
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-3 text-center align-self-center points-score">
                            {this.props.renderP1Score()}
                        </div>
                        <div className="col-1 text-center align-self-center">
                            {this.props.markProgress(1, 19)}
                        </div>
                        <div className="col-1 border-left text-center number">
                            19
                    </div>
                        <div className="col-1 text-center number">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 1) }}>Single</button>
                        </div>
                        <div className="col-1 number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 2) }}>Double</button>
                        </div>
                        <div className="col-1 border-right number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 3) }}>Triple</button>
                        </div>
                        <div className="col-1 text-center align-self-center">
                            {this.props.markProgress(2, 19)}
                        </div>
                        <div className="col-3 text-center align-self-center points-score">
                            {this.props.renderP2Score()}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 offset-3 text-center align-self-center">
                            {this.props.markProgress(1, 18)}
                        </div>
                        <div className="col-1 border-left text-center number">
                            18
                    </div>
                        <div className="col-1 text-center number">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 1) }}>Single</button>
                        </div>
                        <div className="col-1 number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 2) }}>Double</button>
                        </div>
                        <div className="col-1 border-right number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 3) }}>Triple</button>
                        </div>
                        <div className="col-1 text-center align-self-center">
                            {this.props.markProgress(2, 18)}
                        </div>
                    </div>
                    {this.throwRowRender(intViewportWidth)}
                    <div className="row">
                        <div className="col-1 offset-3 text-center align-self-center">
                            {this.props.markProgress(1, 15)}
                        </div>
                        <div className="col-1 border-left text-center number">
                            15
                    </div>
                        <div className="col-1 text-center number">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 1) }}>Single</button>
                        </div>
                        <div className="col-1 number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 2) }}>Double</button>
                        </div>
                        <div className="col-1 border-right number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 3) }}>Triple</button>
                        </div>
                        <div className="col-1 text-center align-self-center">
                            {this.props.markProgress(2, 15)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 offset-3 text-center align-self-center">
                            {this.props.markProgress(1, 25)}
                        </div>
                        <div className="col-1 border-left text-center number">
                            Bull
                    </div>
                        <div className="col text-center number">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 1) }}>Single</button>
                        </div>
                        <div className="col border-right number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 2) }}>Double</button>
                        </div>
                        <div className="col-1 text-center align-self-center">
                            {this.props.markProgress(2, 25)}
                        </div>
                        <div className="col-3">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 text-center miss">
                            <button type="button" className="btn" onClick={() => { this.props.miss() }}>
                                Miss
                        </button>
                        </div>
                        <div className="col-6 text-center undo">
                            <button type="button" className="btn" onClick={() => { this.props.undo() }}>
                                Undo
                        </button>
                        </div>
                    </div>

                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.viewportRender()}
            </div>
        )
    }
}