import React, { Component } from "react";
import SetTable from "../common/SetTable";
import { Link } from 'react-router-dom';

export default class Results extends Component {
    constructor() {
        super();
        this.url = window.location.href.includes('cpu') ? '/cpu' : '/pvp';
        this.state = {
            p1ppd: 0,
            p160: 0,
            p1100: 0,
            p1120: 0,
            p1140: 0,
            p1160: 0,
            p1180: 0,

            p2ppd: 0,
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
        this.renderTable = this.renderTable.bind(this);
        this.sixtyRow = this.sixtyRow.bind(this);
        this.oneHundredRow = this.oneHundredRow.bind(this);
        this.oneTwentyRow = this.oneTwentyRow.bind(this);
        this.oneFortyRow = this.oneFortyRow.bind(this);
        this.oneSixtyRow = this.oneSixtyRow.bind(this);
        this.oneEightyRow = this.oneEightyRow.bind(this);
        this.setPpd = this.setPpd.bind(this);
    }

    componentWillMount() {
        this.setScores();
        this.setPpd();
    }

    renderWinner() {
        if (this.props.gameWinner === "p1") {
            return "Player 1"
        } else {
            return "Player 2"
        }
    }

    setPpd() {
        const player1Scores = this.props.p1RoundScores;
        const p1Throws = this.props.p1Throws;
        const player2Scores = this.props.p2RoundScores;
        const p2Throws = this.props.p2Throws;
        let p1Total = 0, p2Total = 0, p1ppd = 0, p2ppd = 0;
        for (const i in player1Scores) {
            p1Total += player1Scores[i];
        }
        for (const i in player2Scores) {
            p2Total += player2Scores[i];
        }
        p1ppd = p1Total / p1Throws;
        p2ppd = p2Total / p2Throws;
        if (p2ppd === NaN) {
            p2ppd = 0;
        }
        this.setState({ p1ppd });
        this.setState({ p2ppd });
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
        let p1ppd = 0;
        let p260 = 0;
        let p2100 = 0;
        let p2120 = 0;
        let p2140 = 0;
        let p2160 = 0;
        let p2180 = 0;
        let p2ppd = 0;

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

    sixtyRow() {
        if (this.state.p160 > 0 || this.state.p260 > 0) {
            return (
                <tr>
                    <td>{this.state.p160}</td>
                    <td>60+</td>
                    <td>{this.state.p260}</td>
                </tr>
            )
        }
    }

    oneHundredRow() {
        if (this.state.p1100 > 0 || this.state.p2100 > 0) {
            return (
                <tr>
                    <td>{this.state.p1100}</td>
                    <td>100+</td>
                    <td>{this.state.p2100}</td>
                </tr>
            )
        }
    }

    oneTwentyRow() {
        if (this.state.p1120 > 0 || this.state.p2120 > 0) {
            return (
                <tr>
                    <td>{this.state.p1120}</td>
                    <td>120+</td>
                    <td>{this.state.p2120}</td>
                </tr>
            )
        }
    }
    oneFortyRow() {
        if (this.state.p1140 > 0 || this.state.p2140 > 0) {
            return (
                <tr>
                    <td>{this.state.p1140}</td>
                    <td>140+</td>
                    <td>{this.state.p2140}</td>
                </tr>
            )
        }
    }
    oneSixtyRow() {
        if (this.state.p1160 > 0 || this.state.p2160 > 0) {
            return (
                <tr>
                    <td>{this.state.p1160}</td>
                    <td>160+</td>
                    <td>{this.state.p2160}</td>
                </tr>
            )
        }
    }
    oneEightyRow() {
        if (this.state.p1180 > 0 || this.state.p2180 > 0) {
            return (
                <tr>
                    <td>{this.state.p1180}</td>
                    <td>180+</td>
                    <td>{this.state.p2180}</td>
                </tr>
            )
        }
    }

    renderTable() {
        return (
            <table className='cricket-table text-center align-self-center'>
                <thead>
                    <tr>
                        <th scope="col">Player 1</th>
                        <th scope="col"></th>
                        <th scope="col">Player 2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.p1Throws}</td>
                        <td>Throws</td>
                        <td>{this.props.p2Throws}</td>
                    </tr>
                    <tr>
                        <td>{parseFloat(this.state.p1ppd.toFixed(2))}</td>
                        <td>Points Per Dart</td>
                        <td>{parseFloat(this.state.p2ppd.toFixed(2))}</td>
                    </tr>
                    {this.sixtyRow()}
                    {this.oneHundredRow()}
                    {this.oneTwentyRow()}
                    {this.oneFortyRow()}
                    {this.oneSixtyRow()}
                    {this.oneEightyRow()}
                </tbody>
            </table>
        )
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
                            <div className="col-md-6 offset-md-3 col-sm-12 text-center p1-multiple">
                                <button type="button" className="btn" onClick={() => { this.props.gameX01Reset() }}>
                                    Play Again
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
                        <br />
                        <div className="row">
                            <div className="col-md-6 offset-md-3 col-sm-12 text-center miss">
                                <button type="button" className="btn" data-toggle="modal" data-target="#homeModal">
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
                    <div className='col-6 offset-3 x01-stats'>
                        {this.renderTable()}
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
            </div >
        )
    }
}
