import React, { Component } from "react";
import SetTable from '../common/SetTable';
import { Link } from 'react-router-dom'
export default class Results extends Component {
    constructor() {
        super();
        this.url = window.location.href.includes('cpu') ? '/cpu' : '/pvp'
        this.renderWinner = this.renderWinner.bind(this);
        this.player1ThrowRender = this.player1ThrowRender.bind(this);
        this.player2ThrowRender = this.player2ThrowRender.bind(this);
        this.buttonsRender = this.buttonsRender.bind(this);
    }

    renderWinner() {
        if (this.props.gameWinner === "p1") {
            return "Player 1"
        } else {
            return "Player 2"
        }
    }

    player1ThrowRender() {
        return this.props.p1Throws;
    }

    player2ThrowRender() {
        return this.props.p2Throws;
    }

    renderMarks(player, marks) {
        return eval(`this.props.${player}${marks}m`);
    }

    buttonsRender() {
        let setSettings = parseInt(localStorage.getItem('sets'));
        setSettings = Math.ceil(setSettings / 2);

        if (this.props.p1Sets >= setSettings || this.props.p2Sets >= setSettings) {
            return (
                <div className='row'>
                    <div className='col-12'>
                        <div className="row">
                        <div className="col-md-6 offset-md-3 col-sm-12 text-center p1-multiple">
                                <button type="button" className="btn" onClick={() => { this.props.gameCricketReset() }}>
                                    Play Again
                        </button>
                            </div>
                        </div>
                        <div className="row">
                            <br />
                            <div className="col-md-6 offset-md-3 col-sm-12 text-center undo">                                <Link to={{
                                    pathname: `${this.url}/x01`,
                                }}>
                                    <button type="button" className="btn">
                                        Play x01
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 offset-md-3 col-sm-12 text-center miss">
                                <Link to={{
                                    pathname: `/`,
                                }}>
                                    <button type="button" className="btn">
                                        Home
                        </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='row'>
                    <div className='col-12'>
                        <div className="row">
                            <div className="col-md-3 col-sm-12 offset-md-3 text-center p2-multiple">
                                <button type="button" className="btn" data-toggle="modal" data-target="#reloadModal">
                                    Reset Set
                        </button>
                            </div>
                            <div className="col-md-3 col-sm-12 text-center p1-multiple">
                                <button type="button" className="btn" onClick={() => { this.props.continueSet() }}>
                                    Continue Set
                        </button>
                            </div>

                        </div>
                            <br />
                        <div className="row">
                            <div className="col-md-6 offset-md-3 col-sm-12 text-center miss">
                               
                                    <button type="button" className="btn"
                                    data-toggle="modal" data-target="#homeModal">
                                        Home
                        </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

    }

    render() {
        return (
            <div className="results-screen">
                <div className="row">
                    <div className="col text-center">
                        Sets
                    </div>
                </div>
                <SetTable
                    setHistory={this.props.setHistory}
                    p1Legs={this.props.p1Legs}
                    p2Legs={this.props.p2Legs}
                    p1Sets={this.props.p1Sets}
                    p2Sets={this.props.p2Sets}
                />
                <div className="row">
                    <div className="col player1-results text-center">
                        Player 1
                    </div>
                    <div className="col player-2 results text-center">
                        Player 2
                    </div>
                </div>
                <div className="row">
                    <div className="col throws text-center">
                        Throws: {this.player1ThrowRender()}
                    </div>
                    <div className="col throws text-center">
                        Throws: {this.player2ThrowRender()}
                    </div>
                </div>
                <div className='row cricket-results'>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-4 text-right'>
                                {this.renderMarks('p1', 5)}
                            </div>
                            <div className='col-4 text-center'>
                                5 marks
                            </div>
                            <div className='col-4 text-left'>
                                {this.renderMarks('p2', 5)}
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4 text-right'>
                                {this.renderMarks('p1', 6)}
                            </div>
                            <div className='col-4 text-center'>
                                6 marks
                            </div>
                            <div className='col-4 text-left'>
                                {this.renderMarks('p2', 6)}
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4 text-right'>
                                {this.renderMarks('p1', 7)}
                            </div>
                            <div className='col-4 text-center'>
                                7 marks
                            </div>
                            <div className='col-4 text-left'>
                                {this.renderMarks('p2', 7)}
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4 text-right'>
                                {this.renderMarks('p1', 8)}
                            </div>
                            <div className='col-4 text-center'>
                                8 marks
                            </div>
                            <div className='col-4 text-left'>
                                {this.renderMarks('p2', 8)}
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4 text-right'>
                                {this.renderMarks('p1', 9)}
                            </div>
                            <div className='col-4 text-center'>
                                9 marks
                            </div>
                            <div className='col-4 text-left'>
                                {this.renderMarks('p2', 9)}
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                {this.buttonsRender()}
                <div className="modal fade" id="reloadModal" tabIndex="-1" role="dialog" aria-labelledby="reloadModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="reloadModalLabel">Start Set Over</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal">No</button>
                                    </div>
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.gameCricketReset() }}>Yes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="homeModal" tabIndex="-1" role="dialog" aria-labelledby="homeModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="homeModalLabel">Exit Game</h5>
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
