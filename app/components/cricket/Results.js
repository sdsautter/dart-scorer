import React, { Component } from "react";
import SetTable from '../common/SetTable';
import { Link } from 'react-router-dom'
export default class Results extends Component {
    constructor() {
        super();
        this.state = {
            p13bull: 0,
            p14bull: 0,
            p15bull: 0,
            p16bull: 0,
            p15m: 0,
            p16m: 0,
            p17m: 0,
            p18m: 0,
            p19m: 0,
            p1mpr: 0,
            p23bull: 0,
            p24bull: 0,
            p25bull: 0,
            p26bull: 0,
            p25m: 0,
            p26m: 0,
            p27m: 0,
            p28m: 0,
            p29m: 0,
            p2mpr: 0,
        }
        this.url = window.location.href.includes('cpu') ? '/cpu' : '/pvp';
        this.renderWinner = this.renderWinner.bind(this);
        this.player1ThrowRender = this.player1ThrowRender.bind(this);
        this.player2ThrowRender = this.player2ThrowRender.bind(this);
        this.ButtonsRender = this.buttonsRender.bind(this);
        this.setStats = this.setStats.bind(this);
        this.renderTable = this.renderTable.bind(this);
        this.fiveMarkRow = this.fiveMarkRow.bind(this);
        this.sixMarkRow = this.sixMarkRow.bind(this);
        this.sevenMarkRow = this.sevenMarkRow.bind(this);
        this.eightMarkRow = this.eightMarkRow.bind(this);
        this.nineMarkRow = this.nineMarkRow.bind(this);
        this.threeBullRow = this.threeBullRow.bind(this);
        this.fourBullRow = this.fourBullRow.bind(this);
        this.fiveBullRow = this.fiveBullRow.bind(this);
        this.sixBullRow = this.sixBullRow.bind(this);

    }

    componentWillMount() {
        this.setStats();
    }

    setStats() {
        const p1Marks = this.props.p1Marks;
        const p2Marks = this.props.p2Marks;
        const p1Bulls = this.props.p1Bulls;
        const p2Bulls = this.props.p2Bulls;
        let p13bull = 0, p14bull = 0, p15bull = 0, p16bull = 0, p15m = 0, p16m = 0, p17m = 0, p18m = 0, p19m = 0, p1mpr = 0, p23bull = 0, p24bull = 0, p25bull = 0, p26bull = 0, p25m = 0, p26m = 0, p27m = 0, p28m = 0, p29m = 0, p2mpr = 0, p1Total = 0, p2Total = 0;
        for (var i in p1Marks) {
            p1Total += parseInt(p1Marks[i]);
            switch (parseInt(p1Marks[i])) {
                case 5:
                    p15m++;
                    break;
                case 6:
                    p16m++;
                    break;
                case 7:
                    p17m++;
                    break;
                case 8:
                    p18m++;
                    break;
                case 9:
                    p19m++;
                    break;
            }
        }

        for (var i in p2Marks) {
            p2Total += parseInt(p2Marks[i]);
            switch (parseInt(p2Marks[i])) {
                case 5:
                    p25m++;
                    break;
                case 6:
                    p26m++;
                    break;
                case 7:
                    p27m++;
                    break;
                case 8:
                    p28m++;
                    break;
                case 9:
                    p29m++;
                    break;
            }
        }

        for (var i in p1Bulls) {
            p1Total += p1Bulls[i];
            switch (p1Bulls[i]) {
                case 3:
                    p13bull++;
                    break;
                case 4:
                    p14bull++;
                    break;
                case 5:
                    p15bull++;
                    break;
                case 6:
                    p16bull++;
                    break;
            }
        }

        for (var i in p2Bulls) {
            p2Total += p2Bulls[i];
            switch (p2Bulls[i]) {
                case 3:
                    p23bull++;
                    break;
                case 4:
                    p24bull++;
                    break;
                case 5:
                    p25bull++;
                    break;
                case 6:
                    p26bull++;
                    break;
            }
        }

        p1mpr = p1Total / p1Marks.length;
        p2mpr = p2Total / p2Marks.length;

        this.setState({ p13bull });
        this.setState({ p14bull });
        this.setState({ p15bull });
        this.setState({ p16bull });
        this.setState({ p15m });
        this.setState({ p16m });
        this.setState({ p17m });
        this.setState({ p18m });
        this.setState({ p19m });
        this.setState({ p1mpr });

        this.setState({ p23bull });
        this.setState({ p24bull });
        this.setState({ p25bull });
        this.setState({ p26bull });
        this.setState({ p25m });
        this.setState({ p26m });
        this.setState({ p27m });
        this.setState({ p28m });
        this.setState({ p29m });
        this.setState({ p2mpr });
    }

    fiveMarkRow() {
        if (this.state.p15m > 0 || this.state.p25m > 0) {
            return (
                <tr>
                    <td>{this.state.p15m}</td>
                    <td>5 Mark</td>
                    <td>{this.state.p25m}</td>
                </tr>
            )
        }
    }
    sixMarkRow() {
        if (this.state.p16m > 0 || this.state.p26m > 0) {
            return (
                <tr>
                    <td>{this.state.p16m}</td>
                    <td>6 Mark</td>
                    <td>{this.state.p26m}</td>
                </tr>
            )
        }
    }
    sevenMarkRow() {
        if (this.state.p17m > 0 || this.state.p27m > 0) {
            return (
                <tr>
                    <td>{this.state.p17m}</td>
                    <td>7 Mark</td>
                    <td>{this.state.p27m}</td>
                </tr>
            )
        }
    }
    eightMarkRow() {
        if (this.state.p18m > 0 || this.state.p28m > 0) {
            return (
                <tr>
                    <td>{this.state.p18m}</td>
                    <td>8 Mark</td>
                    <td>{this.state.p28m}</td>
                </tr>
            )
        }
    }
    nineMarkRow() {
        if (this.state.p19m > 0 || this.state.p29m > 0) {
            return (
                <tr>
                    <td>{this.state.p19m}</td>
                    <td>9 Mark</td>
                    <td>{this.state.p29m}</td>
                </tr>
            )
        }
    }
    threeBullRow() {
        if (this.state.p13bull > 0 || this.state.p23bull > 0) {
            return (
                <tr>
                    <td>{this.state.p13bull}</td>
                    <td>3 Bull</td>
                    <td>{this.state.p23bull}</td>
                </tr>
            )
        }
    }
    fourBullRow() {
        if (this.state.p14bull > 0 || this.state.p24bull > 0) {
            return (
                <tr>
                    <td>{this.state.p14bull}</td>
                    <td>4 Bull</td>
                    <td>{this.state.p24bull}</td>
                </tr>
            )
        }
    }
    fiveBullRow() {
        if (this.state.p15bull > 0 || this.state.p25bull > 0) {
            return (
                <tr>
                    <td>{this.state.p15bull}</td>
                    <td>5 Bull</td>
                    <td>{this.state.p25bull}</td>
                </tr>
            )
        }
    }
    sixBullRow() {
        if (this.state.p16bull > 0 || this.state.p26bull > 0) {
            return (
                <tr>
                    <td>{this.state.p16bull}</td>
                    <td>6 Bull</td>
                    <td>{this.state.p26bull}</td>
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
                        <td>{parseFloat(this.state.p1mpr.toFixed(2))}</td>
                        <td>Marks Per Round</td>
                        <td>{parseFloat(this.state.p2mpr.toFixed(2))}</td>
                    </tr>
                    {this.fiveMarkRow()}
                    {this.sixMarkRow()}
                    {this.sevenMarkRow()}
                    {this.eightMarkRow()}
                    {this.nineMarkRow()}
                    {this.threeBullRow()}
                    {this.fourBullRow()}
                    {this.fiveBullRow()}
                    {this.sixBullRow()}
                </tbody>
            </table>
        )
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

        var viewWidth = window.innerWidth;
        if (viewWidth >= 720) {
            if (this.props.p1Sets >= setSettings || this.props.p2Sets >= setSettings) {
                return (
                    <div>
                        <div className='row'>
                            <div className="col-8 offset-2 text-center p1-multiple">
                                <button type="button" className="btn" onClick={() => { this.props.gameCricketReset() }}>
                                    Play Again
                        </button>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className='col-12'>
                                <div className="row">
                                    <br />
                                    <div className="col-6 col-md-8 offset-md-2 text-center undo">
                                        <button type="button" className="btn" data-toggle="modal" data-target="#x01Modal">
                                            Choose Game
                            </button>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-6 col-8 offset-2 text-center miss">
                                        <button type="button" className="btn" data-toggle="modal" data-target="#homeModal">
                                            Home
                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div>
                        <div className="row">
                            <div className="col-6 col-md-8 offset-md-2 text-center p1-multiple">
                                <button type="button" className="btn" onClick={() => { this.props.continueSet() }}>
                                    Continue Set
                        </button>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-6 col-md-8 offset-md-2 text-center p2-multiple">
                                <button type="button" className="btn" data-toggle="modal" data-target="#reloadModal">
                                    Reset Set
                        </button>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className='col-12'>
                                <div className="row">
                                    <br />
                                    <div className="col-6 col-md-8 offset-md-2 text-center undo">
                                        <button type="button" className="btn" data-toggle="modal" data-target="#x01Modal">
                                            Choose Game
                            </button>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-6 col-8 offset-2 text-center miss">
                                        <button type="button" className="btn" data-toggle="modal" data-target="#homeModal">
                                            Home
                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        } else {
            if (this.props.p1Sets >= setSettings || this.props.p2Sets >= setSettings) {
                return (
                    <div className='row'>
                        <div className="col-4 text-center p1-multiple">
                            <button type="button" className="btn" onClick={() => { this.props.gameCricketReset() }}>
                                Play Again
                        </button>
                        </div>
                        <div className="col-4 text-center undo">
                            <button type="button" className="btn" data-toggle="modal" data-target="#x01Modal">
                                Choose Game
                            </button>
                        </div>
                        <div className="col-4 text-center miss">
                            <button type="button" className="btn" data-toggle="modal" data-target="#homeModal">
                                Home
                        </button>
                        </div>
                    </div >
                )
            } else {
                return (
                    <div className="row">
                        <div className="col-6 text-center continue-set">
                            <button type="button" className="btn" onClick={() => { this.props.continueSet() }}>
                                Continue Set
                        </button>
                        </div>
                        <div className="col-6 text-center reset-set">
                            <button type="button" className="btn" data-toggle="modal" data-target="#reloadModal">
                                Reset Set
                        </button>
                        </div>
                        <div className="col-6 text-center undo">
                            <button type="button" className="btn" data-toggle="modal" data-target="#x01Modal">
                                Choose Game
                            </button>
                        </div>
                        <div className="col-6 text-center miss">
                            <button type="button" className="btn" data-toggle="modal" data-target="#homeModal">
                                Home
                        </button>
                        </div>
                    </div>
                )
            }
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
                <div className='row text-center'>
                    <div className='col-12 col-md-8 offset-md-1 text-center align-self-center'>
                        {this.renderTable()}
                    </div>
                    <div className='col-12 col-md-3'>
                        {this.buttonsRender()}
                    </div>
                </div>
                <br />
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
                <div className="modal fade" id="x01Modal" tabIndex="-1" role="dialog" aria-labelledby="x01ModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="x01ModalLabel">Choose Game Screen</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal">Cancel</button>
                                    </div>
                                    <div className="col text-center">
                                        <button type="button" className="btn" data-dismiss='modal' onClick={() => { window.location.href = this.url }}>
                                            Yes
                                    </button>
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
