import React, { Component } from "react";
import SetTable from "../common/SetTable";
import { Link } from 'react-router-dom';
export default class Results extends Component {
    constructor() {
        super();
        this.url = window.location.href.includes('cpu') ? '/cpu' : '/pvp';
        this.state = {
            p1ppd: 0,
            p1CheckoutShots: 0,
            p1CheckoutPercent: 0,
            p1CheckInShots: 0,
            p1CheckInPercent: 0,
            p126: 0,
            p160: 0,
            p1100: 0,
            p1120: 0,
            p1140: 0,
            p1160: 0,
            p1180: 0,
            p1ppdSet: 0,
            p1CheckoutShotsSet: 0,
            p1CheckoutPercentSet: 0,
            p1CheckInShotsSet: 0,
            p1CheckInPercentSet: 0,
            p126Set: 0,
            p160Set: 0,
            p1100Set: 0,
            p1120Set: 0,
            p1140Set: 0,
            p1160Set: 0,
            p1180Set: 0,

            p2ppd: 0,
            p2CheckoutShots: 0,
            p2CheckoutPercent: 0,
            p2CheckInShots: 0,
            p2CheckInPercent: 0,
            p226: 0,
            p260: 0,
            p2100: 0,
            p2120: 0,
            p2140: 0,
            p2160: 0,
            p2180: 0,
            p2ppdSet: 0,
            p2CheckoutShotsSet: 0,
            p2CheckoutPercentSet: 0,
            p2CheckInShotsSet: 0,
            p2CheckInPercentSet: 0,
            p226Set: 0,
            p260Set: 0,
            p2100Set: 0,
            p2120Set: 0,
            p2140Set: 0,
            p2160Set: 0,
            p2180Set: 0,
        }

        this.renderWinner = this.renderWinner.bind(this);
        this.player1ThrowRender = this.player1ThrowRender.bind(this);
        this.player2ThrowRender = this.player2ThrowRender.bind(this);
        this.setLegScores = this.setLegScores.bind(this);
        this.setSetScores = this.setSetScores.bind(this);
        this.buttonsRender = this.buttonsRender.bind(this);
        this.renderTable = this.renderTable.bind(this);
        this.twentySixRow = this.twentySixRow.bind(this);
        this.sixtyRow = this.sixtyRow.bind(this);
        this.oneHundredRow = this.oneHundredRow.bind(this);
        this.oneTwentyRow = this.oneTwentyRow.bind(this);
        this.oneFortyRow = this.oneFortyRow.bind(this);
        this.oneSixtyRow = this.oneSixtyRow.bind(this);
        this.oneEightyRow = this.oneEightyRow.bind(this);
        this.setLegPpd = this.setLegPpd.bind(this);
        this.setSetPpd = this.setSetPpd.bind(this);
        this.setLegCheckout = this.setLegCheckout.bind(this);
        this.setSetCheckout = this.setSetCheckout.bind(this);
        this.setLegCheckIn = this.setLegCheckIn.bind(this);
        this.setSetCheckIn = this.setSetCheckIn.bind(this);
        this.throwRow = this.throwRow.bind(this);
        this.ppdRow = this.ppdRow.bind(this);
        this.checkInChancesRow = this.checkInChancesRow.bind(this);
        this.checkInPercentRow = this.checkInPercentRow.bind(this);
        this.checkoutChancesRow = this.checkoutChancesRow.bind(this);
        this.checkoutPercentRow = this.checkoutPercentRow.bind(this);
    }

    componentDidMount() {
        this.setLegScores();
        this.setLegPpd();
        this.setLegCheckIn();
        this.setSetScores();
        this.setSetPpd();
        this.setSetCheckout();

        if (this.props.gameOptions === 'dido') {
            this.setLegCheckout();
            this.setSetCheckIn();
        }
    }

    renderWinner() {
        if (this.props.gameWinner === "p1") {
            return "Player 1"
        } else {
            return "Player 2"
        }
    }

    setLegCheckout() {
        const p1CheckoutShots = this.props.p1CheckoutShots;
        const p2CheckoutShots = this.props.p2CheckoutShots;
        let p1CheckoutPercent, p2CheckoutPercent;

        if (this.props.gameWinner === 'p1') {
            p1CheckoutPercent = (1 / p1CheckoutShots) * 100;
            p2CheckoutPercent = 0;
        } else {
            p2CheckoutPercent = (1 / p2CheckoutShots) * 100;
            p1CheckoutPercent = 0;
        }
        this.setState({ p1CheckoutShots });
        this.setState({ p1CheckoutPercent });
        this.setState({ p2CheckoutShots });
        this.setState({ p2CheckoutPercent });
    }

    setLegCheckIn() {
        const p1CheckInShots = this.props.p1CheckInShots;
        const p2CheckInShots = this.props.p2CheckInShots;
        const player1Scores = this.props.p1RoundScores;
        const player2Scores = this.props.p2RoundScores;
        let p1CheckInPercent = 0, p2CheckInPercent = 0, p1InShot = 0, p2InShot = 0;

        for (var i in player1Scores) {
            if (parseInt(player1Scores[i]) > 0) {
                p1InShot = 1;
            }
        }
        for (var i in player2Scores) {
            if (parseInt(player2Scores[i]) > 0) {
                p2InShot = 1;
            }
        }

        if (p1CheckInShots > 0) {
            p1CheckInPercent = (p1InShot / p1CheckInShots) * 100;
        } else {
            p1CheckInPercent = 0;
        }
        if (p2CheckInShots > 0) {
            p2CheckInPercent = (p2InShot / p2CheckInShots) * 100;
        } else {
            p2CheckInPercent = 0;
        }

        this.setState({ p1CheckInShots });
        this.setState({ p1CheckInPercent });
        this.setState({ p2CheckInShots });
        this.setState({ p2CheckInPercent });
    }

    setSetCheckout() {
        const p1CheckoutShotsSet = this.props.p1CheckoutShotsHistory;
        const p2CheckoutShotsSet = this.props.p2CheckoutShotsHistory;
        const setHistory = this.props.setHistory;
        let p1Wins = this.props.p1Legs;
        let p2Wins = this.props.p2Legs;

        if (p1Wins === 0 && p2Wins === 0 && setHistory.length < 1) {
            if (this.props.gameWinner === 'p1') {
                p1Wins = 1;
            } else {
                p2Wins = 1;
            }
        }

        for (var i in setHistory) {
            p1Wins += setHistory[i].p1;
            p2Wins += setHistory[i].p2;
        }
        let p1CheckoutPercentSet = 0, p2CheckoutPercentSet = 0;
        p1CheckoutPercentSet = (p1Wins / p1CheckoutShotsSet) * 100;
        p2CheckoutPercentSet = (p2Wins / p2CheckoutShotsSet) * 100;
        p1CheckoutPercentSet = isNaN(p1CheckoutPercentSet) ? 0 : p1CheckoutPercentSet;
        p2CheckoutPercentSet = isNaN(p2CheckoutPercentSet) ? 0 : p2CheckoutPercentSet;

        this.setState({ p1CheckoutShotsSet });
        this.setState({ p1CheckoutPercentSet });
        this.setState({ p2CheckoutShotsSet });
        this.setState({ p2CheckoutPercentSet });
    }

    setSetCheckIn() {
        const p1CheckInShotsSet = this.props.p1CheckInShotsHistory;
        const p2CheckInShotsSet = this.props.p2CheckInShotsHistory;
        const p1CheckInHistory = this.props.p1CheckInHistory;
        const p2CheckInHistory = this.props.p2CheckInHistory;
        let p1Ins = 0, p2Ins = 0, p1CheckInPercentSet = 0, p2CheckInPercentSet = 0;
        for (var i in p1CheckInHistory) {
            if (p1CheckInHistory[i]) p1Ins++
        }
        for (var i in p2CheckInHistory) {
            if (p2CheckInHistory[i]) p2Ins++
        }

        p1CheckInPercentSet = (p1Ins / p1CheckInShotsSet) * 100;
        p2CheckInPercentSet = (p2Ins / p2CheckInShotsSet) * 100;
        p1CheckInPercentSet = isNaN(p1CheckInPercentSet) ? 0 : p1CheckInPercentSet;
        p2CheckInPercentSet = isNaN(p2CheckInPercentSet) ? 0 : p2CheckInPercentSet;

        this.setState({ p1CheckInShotsSet });
        this.setState({ p1CheckInPercentSet });
        this.setState({ p2CheckInShotsSet });
        this.setState({ p2CheckInPercentSet });
    }

    setLegPpd() {
        const player1Scores = this.props.p1RoundScores;
        const p1Throws = this.props.p1Throws - this.props.p1CheckoutShots - this.props.p1CheckInShots + 2;
        const player2Scores = this.props.p2RoundScores;
        const p2Throws = this.props.p2Throws - this.props.p2CheckoutShots - this.props.p2CheckInShots;
        let p1Total = 0, p2Total = 0, p1ppd = 0, p2ppd = 0;
        for (const i in player1Scores) {
            p1Total += player1Scores[i];
        }
        for (const i in player2Scores) {
            p2Total += player2Scores[i];
        }
        p1ppd = p1Throws <= 0 ? 0 : p1Total / p1Throws;
        p2ppd = p2Throws <= 0 ? 0 : p2Total / p2Throws;

        this.setState({ p1ppd });
        this.setState({ p2ppd });
    }

    setSetPpd() {
        const player1Scores = this.props.p1RoundScoresHistory;
        const p1Throws = this.props.p1ThrowsHistory - this.state.p1CheckoutShotsHistory - this.state.p1CheckInShotsHistory;
        const player2Scores = this.props.p2RoundScoresHistory;
        const p2Throws = this.props.p2ThrowsHistory - this.state.p2CheckoutShotsHistory - this.state.p2CheckInShotsHistory;
        let p1Total = 0, p2Total = 0, p1ppdSet = 0, p2ppdSet = 0;

        for (const i in player1Scores) {
            p1Total += player1Scores[i];
        }
        for (const i in player2Scores) {
            p2Total += player2Scores[i];
        }
        p1ppdSet = p1Throws <= 0 ? 0 : p1Total / p1Throws;
        p2ppdSet = p2Throws <= 0 ? 0 : p2Total / p2Throws;

        this.setState({ p1ppdSet });
        this.setState({ p2ppdSet });
    }

    setLegScores() {
        const player1Scores = this.props.p1RoundScores;
        const player2Scores = this.props.p2RoundScores;
        let p126 = 0;
        let p160 = 0;
        let p1100 = 0;
        let p1120 = 0;
        let p1140 = 0;
        let p1160 = 0;
        let p1180 = 0;
        let p226 = 0;
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
            } else if (player1Scores[i] === 26) {
                p126++;
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
            } else if (player2Scores[i] === 26) {
                p226++;
            }
        }

        this.setState({ p126 });
        this.setState({ p160 });
        this.setState({ p1100 });
        this.setState({ p1120 });
        this.setState({ p1140 });
        this.setState({ p1160 });
        this.setState({ p1180 });

        this.setState({ p226 });
        this.setState({ p260 });
        this.setState({ p2100 });
        this.setState({ p2120 });
        this.setState({ p2140 });
        this.setState({ p2160 });
        this.setState({ p2180 });

    }

    setSetScores() {
        const player1Scores = this.props.p1RoundScoresHistory;
        const player2Scores = this.props.p2RoundScoresHistory;
        let p126Set = 0;
        let p160Set = 0;
        let p1100Set = 0;
        let p1120Set = 0;
        let p1140Set = 0;
        let p1160Set = 0;
        let p1180Set = 0;
        let p226Set = 0;
        let p260Set = 0;
        let p2100Set = 0;
        let p2120Set = 0;
        let p2140Set = 0;
        let p2160Set = 0;
        let p2180Set = 0;

        for (var i in player1Scores) {
            if (player1Scores[i] >= 60 && player1Scores[i] < 100) {
                p160Set++;
            } else if (player1Scores[i] >= 100 && player1Scores[i] < 120) {
                p1100Set++;
            } else if (player1Scores[i] >= 120 && player1Scores[i] < 140) {
                p1120Set++;
            } else if (player1Scores[i] >= 140 && player1Scores[i] < 160) {
                p1140Set++;
            } else if (player1Scores[i] >= 160 && player1Scores[i] < 180) {
                p1160Set++;
            } else if (player1Scores[i] === 180) {
                p1180Set++;
            } else if (player1Scores[i] === 26) {
                p126Set++;
            }
        }

        for (var i in player2Scores) {
            if (player2Scores[i] >= 60 && player2Scores[i] < 100) {
                p260Set++;
            } else if (player2Scores[i] >= 100 && player2Scores[i] < 120) {
                p2100Set++;
            } else if (player2Scores[i] >= 120 && player2Scores[i] < 140) {
                p2120Set++;
            } else if (player2Scores[i] >= 140 && player2Scores[i] < 160) {
                p2140Set++;
            } else if (player2Scores[i] >= 160 && player2Scores[i] < 180) {
                p2160Set++;
            } else if (player2Scores[i] === 180) {
                p2180Set++;
            } else if (player2Scores[i] === 26) {
                p226Set++;
            }
        }

        this.setState({ p126Set });
        this.setState({ p160Set });
        this.setState({ p1100Set });
        this.setState({ p1120Set });
        this.setState({ p1140Set });
        this.setState({ p1160Set });
        this.setState({ p1180Set });

        this.setState({ p226Set });
        this.setState({ p260Set });
        this.setState({ p2100Set });
        this.setState({ p2120Set });
        this.setState({ p2140Set });
        this.setState({ p2160Set });
        this.setState({ p2180Set });
    }

    twentySixRow() {
        if (this.state.p126 > 0 || this.state.p126Set > 0 || this.state.p226 > 0 || this.state.p226Set > 0) {
            return (
                <tr>
                    <td>{this.state.p126}</td>
                    <td>{this.state.p126Set}</td>
                    <td>26</td>
                    <td>{this.state.p226}</td>
                    <td>{this.state.p226Set}</td>
                </tr>
            )
        }
    }

    sixtyRow() {
        if (this.state.p160 > 0 || this.state.p160Set > 0 || this.state.p260 > 0 || this.state.p260Set > 0) {
            return (
                <tr>
                    <td>{this.state.p160}</td>
                    <td>{this.state.p160Set}</td>
                    <td>60+</td>
                    <td>{this.state.p260}</td>
                    <td>{this.state.p260Set}</td>
                </tr>
            )
        }
    }

    oneHundredRow() {
        if (this.state.p1100 > 0 || this.state.p1100Set > 0 || this.state.p2100 > 0 || this.state.p2100Set > 0) {
            return (
                <tr>
                    <td>{this.state.p1100}</td>
                    <td>{this.state.p1100Set}</td>
                    <td>100+</td>
                    <td>{this.state.p2100}</td>
                    <td>{this.state.p2100Set}</td>
                </tr>
            )
        }
    }

    oneTwentyRow() {
        if (this.state.p1120 > 0 || this.state.p1120Set > 0 || this.state.p2120 > 0 || this.state.p2120Set > 0) {
            return (
                <tr>
                    <td>{this.state.p1120}</td>
                    <td>{this.state.p1120Set}</td>
                    <td>120+</td>
                    <td>{this.state.p2120}</td>
                    <td>{this.state.p2120Set}</td>
                </tr>
            )
        }
    }
    oneFortyRow() {
        if (this.state.p1140 > 0 || this.state.p1140Set > 0 || this.state.p2140 > 0 || this.state.p2140Set > 0) {
            return (
                <tr>
                    <td>{this.state.p1140}</td>
                    <td>{this.state.p1140Set}</td>
                    <td>140+</td>
                    <td>{this.state.p2140}</td>
                    <td>{this.state.p2140Set}</td>
                </tr>
            )
        }
    }
    oneSixtyRow() {
        if (this.state.p1160 > 0 || this.state.p1160Set > 0 || this.state.p2160 > 0 || this.state.p2160Set > 0) {
            return (
                <tr>
                    <td>{this.state.p1160}</td>
                    <td>{this.state.p1160Set}</td>
                    <td>160+</td>
                    <td>{this.state.p2160}</td>
                    <td>{this.state.p2160Set}</td>
                </tr>
            )
        }
    }
    oneEightyRow() {
        if (this.state.p1180 > 0 || this.state.p1180Set > 0 || this.state.p2180 > 0 || this.state.p2180Set > 0) {
            return (
                <tr>
                    <td>{this.state.p1180}</td>
                    <td>{this.state.p1180Set}</td>
                    <td>180!</td>
                    <td>{this.state.p2180}</td>
                    <td>{this.state.p2180Set}</td>
                </tr>
            )
        }
    }

    throwRow() {
        return (
            <tr>
                <td>{this.props.p1Throws}</td>
                <td>{this.props.p1ThrowsHistory}</td>
                <td>Throws</td>
                <td>{this.props.p2Throws}</td>
                <td>{this.props.p2ThrowsHistory}</td>
            </tr>
        )
    }

    ppdRow() {
        return (
            <tr>
                <td>{parseFloat(this.state.p1ppd.toFixed(2))}</td>
                <td>{parseFloat(this.state.p1ppdSet.toFixed(2))}</td>
                <td>Points Per Dart</td>
                <td>{parseFloat(this.state.p2ppd.toFixed(2))}</td>
                <td>{parseFloat(this.state.p2ppdSet.toFixed(2))}</td>
            </tr>
        )
    }

    checkoutChancesRow() {
        return (
            <tr>
                <td>{this.state.p1CheckoutShots}</td>
                <td>{this.state.p1CheckoutShotsSet}</td>
                <td>Checkout Chances</td>
                <td>{this.state.p2CheckoutShots}</td>
                <td>{this.state.p2CheckoutShotsSet}</td>
            </tr>
        )
    }

    checkoutPercentRow() {
        return (
            <tr>
                <td>{`${parseFloat(this.state.p1CheckoutPercent.toFixed(2))}%`}</td>
                <td>{`${parseFloat(this.state.p1CheckoutPercentSet.toFixed(2))}%`}</td>
                <td>Checkout Percent</td>
                <td>{`${parseFloat(this.state.p2CheckoutPercent.toFixed(2))}%`}</td>
                <td>{`${parseFloat(this.state.p2CheckoutPercentSet.toFixed(2))}%`}</td>
            </tr>
        )
    }

    checkInChancesRow() {
        if (parseInt(this.props.p1CheckInShots) > 0 || parseInt(this.props.p2CheckInShots) > 0) {
            return (
                <tr>
                    <td>{this.props.p1CheckInShots}</td>
                    <td>{this.props.p1CheckInShotsHistory}</td>
                    <td>Check-In Chances</td>
                    <td>{this.props.p2CheckInShots}</td>
                    <td>{this.props.p2CheckInShotsHistory}</td>
                </tr>
            )
        }
    }

    checkInPercentRow() {
        if (parseInt(this.props.p1CheckInShots) > 0 || parseInt(this.props.p2CheckInShots) > 0) {
            return (
                <tr>
                    <td>{`${parseFloat(this.state.p1CheckInPercent.toFixed(2))}%`}</td>
                    <td>{`${parseFloat(this.state.p1CheckInPercentSet.toFixed(2))}%`}</td>
                    <td>Check-In Percent</td>
                    <td>{`${parseFloat(this.state.p2CheckInPercent.toFixed(2))}%`}</td>
                    <td>{`${parseFloat(this.state.p2CheckInPercentSet.toFixed(2))}%`}</td>
                </tr>
            )
        }
    }

    renderTable() {
        return (
            <table className='cricket-table text-center align-self-center'>
                <thead>
                    <tr>
                        <th scope="col">Leg</th>
                        <th scope="col">Match</th>
                        <th scope="col"></th>
                        <th scope="col">Leg</th>
                        <th scope="col">Match</th>
                    </tr>
                </thead>
                <tbody>
                    {this.throwRow()}
                    {this.ppdRow()}
                    {this.checkInChancesRow()}
                    {this.checkInPercentRow()}
                    {this.checkoutChancesRow()}
                    {this.checkoutPercentRow()}
                    {this.twentySixRow()}
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
                            <div className="col-12 text-center p1-multiple">
                                <button type="button"  style={{width: "100%"}} className="bttn-jelly" onClick={() => { this.props.gameX01Reset() }}>
                                    Play Again
                        </button>
                            </div>
                        </div>
                        <div className="row">
                            <br />
                            <div className="col-12 text-center undo">
                                <Link to={{
                                    pathname: `${this.url}/cricket`,
                                }}>
                                    <button type="button" className="bttn-jelly">
                                        Play Cricket
                        </button>
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center miss">
                                <Link to={{
                                    pathname: `/`,
                                }}>
                                    <button type="button" className="bttn-jelly">
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
                <div className="row">
                    <div className="col-6 col-md-10 offset-md-1 text-center number p1-multiple">
                        <button type="button" className="bttn-jelly" onClick={() => { this.props.continueSet() }}>
                            Continue Match
                        </button>
                    </div>
                    <div className="col-6 col-md-10 offset-md-1 text-center number p2-multiple">
                        <button type="button" className="bttn-jelly" data-toggle="modal" data-target="#reloadModal">
                            Reset Match
                        </button>
                    </div>
                    <div className="col-6 col-md-10 offset-md-1 text-center undo">
                        <button type="button" className="bttn-jelly" data-toggle="modal" data-target="#x01Modal">
                            Choose Game
                            </button>
                    </div>
                    <div className="col-6 col-md-10 offset-md-1 text-center miss">
                        <button type="button" className="bttn-jelly" data-toggle="modal" data-target="#homeModal">
                            Home
                        </button>
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
                    <div className='col-12 col-md-7 offset-md-1 x01-stats'>
                        <div className='row'>
                            <div className='col player-name text-center'>
                                Player 1
                            </div>
                            <div className='col offset-6 player-name text-center'>
                                Player 2
                            </div>
                            {this.renderTable()}
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        {this.buttonsRender()}
                    </div>
                </div>
                <div className="modal fade" id="reloadModal" tabIndex="-1" role="dialog" aria-labelledby="reloadModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="reloadModalLabel">Start Set Over</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center p1-multiple">
                                        <button type="button" className="bttn-jelly" data-dismiss="modal">Cancel</button>
                                    </div>
                                    <div className="col text-center p2-multiple">
                                        <button type="button" className="bttn-jelly" data-dismiss="modal" onClick={() => { this.props.gameX01Reset() }}>Yes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="x01Modal" tabIndex="-1" role="dialog" aria-labelledby="x01ModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="x01ModalLabel">Choose Game Screen</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center p1-multiple">
                                        <button type="button" className="bttn-jelly" data-dismiss="modal">Cancel</button>
                                    </div>
                                    <div className="col text-center p2-multiple">
                                        <Link to={{
                                            pathname: this.url,
                                        }}>
                                            <button type="button" className="bttn-jelly" onClick={() => {
                                                $("#menu").modal("hide");
                                                $('body').removeClass('modal-open');
                                                $('.modal-backdrop').remove();
                                            }}>
                                                Yes
                                    </button></Link>
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
                                    <div className="col text-center p1-multiple">
                                        <button type="button" className="bttn-jelly" data-dismiss="modal">Cancel</button>
                                    </div>
                                    <div className="col text-center p2-multiple">
                                        <Link to={{
                                            pathname: '/home',
                                        }}>
                                            <button type="button" className="bttn-jelly" onClick={() => {
                                                $("#menu").modal("hide");
                                                $('body').removeClass('modal-open');
                                                $('.modal-backdrop').remove();
                                            }}>Yes</button></Link>
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
