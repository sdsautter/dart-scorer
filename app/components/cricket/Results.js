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
            p1ThrowsSet: 0,
            p13bullSet: 0,
            p14bullSet: 0,
            p15bullSet: 0,
            p16bullSet: 0,
            p15mSet: 0,
            p16mSet: 0,
            p17mSet: 0,
            p18mSet: 0,
            p19mSet: 0,
            p1mprSet: 0,
            p2ThrowsSet: 0,
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
            p23bullSet: 0,
            p24bullSet: 0,
            p25bullSet: 0,
            p26bullSet: 0,
            p25mSet: 0,
            p26mSet: 0,
            p27mSet: 0,
            p28mSet: 0,
            p29mSet: 0,
            p2mprSet: 0
        }
        this.url = window.location.href.includes('cpu') ? '/cpu' : '/pvp';
        this.renderWinner = this.renderWinner.bind(this);
        this.player1ThrowRender = this.player1ThrowRender.bind(this);
        this.player2ThrowRender = this.player2ThrowRender.bind(this);
        this.ButtonsRender = this.buttonsRender.bind(this);
        this.setLegStats = this.setLegStats.bind(this);
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
        this.setSetStats = this.setSetStats.bind(this);

    }

    componentWillMount() {
        this.setLegStats();
        this.setSetStats();
    }

    setSetStats() {
        const p1Marks = this.props.p1MarksHistory;
        const p2Marks = this.props.p2MarksHistory;
        const p1Bulls = this.props.p1BullsHistory;
        const p2Bulls = this.props.p2BullsHistory;
        let p13bullSet = 0, p14bullSet = 0, p15bullSet = 0, p16bullSet = 0, p15mSet = 0, p16mSet = 0, p17mSet = 0, p18mSet = 0, p19mSet = 0, p1mprSet = 0, p23bullSet = 0, p24bullSet = 0, p25bullSet = 0, p26bullSet = 0, p25mSet = 0, p26mSet = 0, p27mSet = 0, p28mSet = 0, p29mSet = 0, p2mprSet = 0, p1Total = 0, p2Total = 0;
        for (var i in p1Marks) {
            p1Total += parseInt(p1Marks[i]);
            switch (parseInt(p1Marks[i])) {
                case 5:
                    p15mSet++;
                    break;
                case 6:
                    p16mSet++;
                    break;
                case 7:
                    p17mSet++;
                    break;
                case 8:
                    p18mSet++;
                    break;
                case 9:
                    p19mSet++;
                    break;
            }
        }

        for (var i in p2Marks) {
            p2Total += parseInt(p2Marks[i]);
            switch (parseInt(p2Marks[i])) {
                case 5:
                    p25mSet++;
                    break;
                case 6:
                    p26mSet++;
                    break;
                case 7:
                    p27mSet++;
                    break;
                case 8:
                    p28mSet++;
                    break;
                case 9:
                    p29mSet++;
                    break;
            }
        }

        for (var i in p1Bulls) {
            p1Total += p1Bulls[i];
            switch (p1Bulls[i]) {
                case 3:
                    p13bullSet++;
                    break;
                case 4:
                    p14bullSet++;
                    break;
                case 5:
                    p15bullSet++;
                    break;
                case 6:
                    p16bullSet++;
                    break;
            }
        }

        for (var i in p2Bulls) {
            p2Total += p2Bulls[i];
            switch (p2Bulls[i]) {
                case 3:
                    p23bullSet++;
                    break;
                case 4:
                    p24bullSet++;
                    break;
                case 5:
                    p25bullSet++;
                    break;
                case 6:
                    p26bullSet++;
                    break;
            }
        }

        p1mprSet = p1Total / p1Marks.length;
        p2mprSet = p2Total / p2Marks.length;

        this.setState({ p13bullSet });
        this.setState({ p14bullSet });
        this.setState({ p15bullSet });
        this.setState({ p16bullSet });
        this.setState({ p15mSet });
        this.setState({ p16mSet });
        this.setState({ p17mSet });
        this.setState({ p18mSet });
        this.setState({ p19mSet });
        this.setState({ p1mprSet });
        this.setState({ p1ThrowsSet: this.props.p1ThrowsHistory });

        this.setState({ p23bullSet });
        this.setState({ p24bullSet });
        this.setState({ p25bullSet });
        this.setState({ p26bullSet });
        this.setState({ p25mSet });
        this.setState({ p26mSet });
        this.setState({ p27mSet });
        this.setState({ p28mSet });
        this.setState({ p29mSet });
        this.setState({ p2mprSet });
        this.setState({ p2ThrowsSet: this.props.p2ThrowsHistory });
    }

    setLegStats() {
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
        if (this.state.p15m > 0 || this.state.p25m > 0 || this.state.p15mSet > 0 || this.state.p25mSet > 0) {
            return (
                <tr>
                    <td>{this.state.p15m}</td>
                    <td>{this.state.p15mSet}</td>
                    <td>5 Mark</td>
                    <td>{this.state.p25m}</td>
                    <td>{this.state.p25mSet}</td>
                </tr>
            )
        }
    }
    sixMarkRow() {
        if (this.state.p16m > 0 || this.state.p26m > 0 || this.state.p16mSet > 0 || this.state.p26mSet > 0) {
            return (
                <tr>
                    <td>{this.state.p16m}</td>
                    <td>{this.state.p16mSet}</td>
                    <td>6 Mark</td>
                    <td>{this.state.p26m}</td>
                    <td>{this.state.p26mSet}</td>
                </tr>
            )
        }
    }
    sevenMarkRow() {
        if (this.state.p17m > 0 || this.state.p27m > 0 || this.state.p17mSet > 0 || this.state.p27mSet > 0) {
            return (
                <tr>
                    <td>{this.state.p17m}</td>
                    <td>{this.state.p17mSet}</td>
                    <td>7 Mark</td>
                    <td>{this.state.p27m}</td>
                    <td>{this.state.p27mSet}</td>
                </tr>
            )
        }
    }
    eightMarkRow() {
        if (this.state.p18m > 0 || this.state.p28m > 0 || this.state.p18mSet > 0 || this.state.p28mSet > 0) {
            return (
                <tr>
                    <td>{this.state.p18m}</td>
                    <td>{this.state.p18mSet}</td>
                    <td>8 Mark</td>
                    <td>{this.state.p28m}</td>
                    <td>{this.state.p28mSet}</td>
                </tr>
            )
        }
    }
    nineMarkRow() {
        if (this.state.p19m > 0 || this.state.p29m > 0 || this.state.p19mSet > 0 || this.state.p29mSet > 0) {
            return (
                <tr>
                    <td>{this.state.p19m}</td>
                    <td>{this.state.p19mSet}</td>
                    <td>9 Mark</td>
                    <td>{this.state.p29m}</td>
                    <td>{this.state.p29mSet}</td>
                </tr>
            )
        }
    }
    threeBullRow() {
        if (this.state.p13bull > 0 || this.state.p23bull > 0 || this.state.p13bullSet > 0 || this.state.p23bullSet > 0) {
            return (
                <tr>
                    <td>{this.state.p13bull}</td>
                    <td>{this.state.p13bullSet}</td>
                    <td>3 Bull</td>
                    <td>{this.state.p23bull}</td>
                    <td>{this.state.p23bullSet}</td>
                </tr>
            )
        }
    }
    fourBullRow() {
        if (this.state.p14bull > 0 || this.state.p24bull > 0 || this.state.p14bullSet > 0 || this.state.p24bullSet > 0) {
            return (
                <tr>
                    <td>{this.state.p14bull}</td>
                    <td>{this.state.p14bullSet}</td>
                    <td>4 Bull</td>
                    <td>{this.state.p24bull}</td>
                    <td>{this.state.p24bullSet}</td>
                </tr>
            )
        }
    }
    fiveBullRow() {
        if (this.state.p15bull > 0 || this.state.p25bull > 0 || this.state.p15bullSet > 0 || this.state.p25bullSet > 0) {
            return (
                <tr>
                    <td>{this.state.p15bull}</td>
                    <td>{this.state.p15bullSet}</td>
                    <td>5 Bull</td>
                    <td>{this.state.p25bull}</td>
                    <td>{this.state.p25bullSet}</td>
                </tr>
            )
        }
    }
    sixBullRow() {
        if (this.state.p16bull > 0 || this.state.p26bull > 0 || this.state.p16bullSet > 0 || this.state.p26bullSet > 0) {
            return (
                <tr>
                    <td>{this.state.p16bull}</td>
                    <td>{this.state.p16bullSet}</td>
                    <td>6 Bull</td>
                    <td>{this.state.p26bull}</td>
                    <td>{this.state.p26bullSet}</td>
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
                        <th scope="col">Set</th>
                        <th scope="col"></th>
                        <th scope="col">Leg</th>
                        <th scope="col">Set</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.p1Throws}</td>
                        <td>{this.state.p1ThrowsSet}</td>
                        <td>Throws</td>
                        <td>{this.props.p2Throws}</td>
                        <td>{this.state.p2ThrowsSet}</td>
                    </tr>
                    <tr>
                        <td>{parseFloat(this.state.p1mpr.toFixed(2))}</td>
                        <td>{parseFloat(this.state.p1mprSet.toFixed(2))}</td>
                        <td>Marks Per Round</td>
                        <td>{parseFloat(this.state.p2mpr.toFixed(2))}</td>
                        <td>{parseFloat(this.state.p2mprSet.toFixed(2))}</td>
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
                    <div className='col-12 col-md-3 offset-md-1'>
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
