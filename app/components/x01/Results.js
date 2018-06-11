import React, { Component } from "react";
import SetTable from "../common/SetTable";
import { Link } from 'react-router-dom'

export default class Results extends Component {
    constructor() {
        super();
        this.url = window.location.href.includes('cpu') ? '/cpu' : '/pvp';
        this.state = {
            p160: 0,
            p1100: 0,
            p1120: 0,
            p1140: 0,
            p1160: 0,
            p1180: 0,

            p260: 0,
            p2100: 0,
            p2120: 0,
            p2140: 0,
            p2160: 0,
            p2180: 0,
        }

        this.renderWinner = this.renderWinner.bind(this);
        this.player1ThrowRender = this.player1ThrowRender.bind(this);
        this.player2ThrowRender = this.player2ThrowRender.bind(this);
        this.setScores = this.setScores.bind(this);
        this.buttonsRender = this.buttonsRender.bind(this);
        this.scoresRender = this.scoresRender.bind(this);
    }

    componentWillMount() {
        this.setScores();
    }

    renderWinner() {
        if (this.props.gameWinner === "p1") {
            return "Player 1"
        } else {
            return "Player 2"
        }
    }

    setScores() {
        const player1Scores = this.props.p1RoundScores;
        const player2Scores = this.props.p2RoundScores;
        let p160 = 0;
        let p1100 = 0;
        let p1120 = 0;
        let p1140 = 0;
        let p1160 = 0;
        let p1180 = 0;
        let p260 = 0;
        let p2100 = 0;
        let p2120 = 0;
        let p2140 = 0;
        let p2160 = 0;
        let p2180 = 0;

        for (var i in player1Scores) {
            if (player1Scores[i] >= 60 && player1Scores[i] < 100) {
                p160++;
            } else if (player1Scores[i] >= 100 && player1Scores[i] < 120) {
                p1100++;
            } else if (player1Scores[i] >= 120 && player1Scores[i] < 140) {
                p1120++;
            } else if (player1Scores[i] >= 140 && player1Scores[i] < 160) {
                p1140++;
            } else if (player1Scores[i] >= 160 && player1Scores[i] < 180) {
                p1160++;
            } else if (player1Scores[i] === 180) {
                p1180++;
            }
        }

        for (var i in player2Scores) {
            if (player2Scores[i] >= 60 && player2Scores[i] < 100) {
                p260++;
            } else if (player2Scores[i] >= 100 && player2Scores[i] < 120) {
                p2100++;
            } else if (player2Scores[i] >= 120 && player2Scores[i] < 140) {
                p2120++;
            } else if (player2Scores[i] >= 140 && player2Scores[i] < 160) {
                p2140++;
            } else if (player2Scores[i] >= 160 && player2Scores[i] < 180) {
                p2160++;
            } else if (player2Scores[i] === 180) {
                p2180++;
            }
        }

        this.setState({ p160 });
        this.setState({ p1100 });
        this.setState({ p1120 });
        this.setState({ p1140 });
        this.setState({ p1160 });
        this.setState({ p1180 });

        this.setState({ p260 });
        this.setState({ p2100 });
        this.setState({ p2120 });
        this.setState({ p2140 });
        this.setState({ p2160 });
        this.setState({ p2180 });
    }

    scoresRender() {
        return (
            <div className='row'>
                <div className='col-12'>
                    <div className='row'>
                        <div className='col-4 text-center'>
                            {this.state.p160}
                        </div>
                        <div className='col-4 text-center'>
                            60+
                    </div>
                        <div className='col-4 text-center'>
                            {this.state.p260}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4 text-center'>
                            {this.state.p1100}
                        </div>
                        <div className='col-4 text-center'>
                            100+
                    </div>
                        <div className='col-4 text-center'>
                            {this.state.p2100}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4 text-center'>
                            {this.state.p1120}
                        </div>
                        <div className='col-4 text-center'>
                            120+
                    </div>
                        <div className='col-4 text-center'>
                            {this.state.p2120}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4 text-center'>
                            {this.state.p1140}
                        </div>
                        <div className='col-4 text-center'>
                            140+
                    </div>
                        <div className='col-4 text-center'>
                            {this.state.p2140}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4 text-center'>
                            {this.state.p1160}
                        </div>
                        <div className='col-4 text-center'>
                            160+
                    </div>
                        <div className='col-4 text-center'>
                            {this.state.p2160}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4 text-center'>
                            {this.state.p1180}
                        </div>
                        <div className='col-4 text-center'>
                            180
                    </div>
                        <div className='col-4 text-center'>
                            {this.state.p2180}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    player1ThrowRender() {
        return this.props.p1Throws;
    }

    player2ThrowRender() {
        return this.props.p2Throws;
    }

    buttonsRender() {
        let setSettings = parseInt(localStorage.getItem('sets'));
        setSettings = Math.ceil(setSettings / 2);

        if (this.props.p1Sets >= setSettings || this.props.p2Sets >= setSettings) {
            return (
                <div className='row'>
                    <div className='col-12'>
                        <div className="row">
                            <div className="col-sm-12 col-md-3 offset-md-3 text-center miss">
                                <button type="button" className="btn" onClick={() => { this.props.gameX01Reset() }}>
                                    Play Again
                        </button>
                            </div>
                            <div className="col-sm-12 col-md-3 text-center miss">
                                <button type="button" className="btn" onClick={() => {
                                    location.assign('/x01');
                                }}>
                                    Pick New x01
                        </button>
                            </div>
                        </div>
                        <div className="row">
                            <br />
                            <div className="col-md-6 offset-md-3 col-sm-12 text-center undo">
                                <button type="button" className="btn" onClick={() => { location.assign('/cricket') }}>
                                    Play Cricket
                        </button>
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
                            <div className="col-6 col-md-3 offset-md-3 text-center number p2-multiple">
                                <button type="button" className="btn" data-toggle="modal" data-target="#reloadModal">
                                    Reset Set
                        </button>
                            </div>
                            <div className="col-6 col-md-3 text-center number p1-multiple">
                                <button type="button" className="btn" onClick={() => { this.props.continueSet() }}>
                                    Continue Set
                        </button>
                            </div>
                        </div>
                        <div className="row">
                            <br />
                            <div className="col-md-6 offset-md-3 col-sm-12 text-center undo">
                                <Link to={{
                                    pathname: `${this.url}/cricket`,
                                }}>
                                    <button type="button" className="btn">
                                        Play Cricket
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
        }
    }

    render() {
        return (
            <div className="results-screen">
                <div className="row">
                    <div className="col set-header text-center">
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
                    <div className='col-3'>
                        <div className="row">
                            <div className="col-12 player1-results text-center">
                                Player 1
                    </div>
                            <div className="col-12 throws text-center">
                                Throws: {this.player1ThrowRender()}
                            </div>
                        </div>
                    </div>
                    <div className='col-6 x01-stats'>
                        {this.scoresRender()}
                    </div>
                    <div className='col-3'>
                        <div className="row">
                            <div className="col-12 player1-results text-center">
                                Player 2
                    </div>
                            <div className="col-12 throws text-center">
                                Throws: {this.player2ThrowRender()}
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
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.props.gameX01Reset() }}>Yes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
