import React, { Component } from "react";

export default class CricketStats extends Component {
    constructor({ match }) {
        super();

        this.state = {
            wins: 0,
            totalGames: 0,
            throws: 0,
            bestLeg: 0,
            mpr: 0,
            fiveMark: 0,
            sixMark: 0,
            sevenMark: 0,
            eightMark: 0,
            nineMark: 0,
            threeBull: 0,
            fourBull: 0,
            fiveBull: 0,
            sixBull: 0
        }

        this.setCricketStats = this.setCricketStats.bind(this);
        this.fiveMarkRow = this.fiveMarkRow.bind(this);
        this.sixMarkRow = this.sixMarkRow.bind(this);
        this.sevenMarkRow = this.sevenMarkRow.bind(this);
        this.eightMarkRow = this.eightMarkRow.bind(this);
        this.nineMarkRow = this.nineMarkRow.bind(this);
        this.threeBullRow = this.threeBullRow.bind(this);
        this.fourBullRow = this.fourBullRow.bind(this);
        this.fiveBullRow = this.fiveBullRow.bind(this);
        this.sixBullRow = this.sixBullRow.bind(this);
        this.allStarPointsRender = this.allStarPointsRender.bind(this);
        this.gameStatsRender = this.gameStatsRender.bind(this);
    }

    componentDidMount() {
        this.setCricketStats(this.props.cricket);
    }

    setCricketStats(games) {
        let wins = 0;
        let totalGames = 0;
        let throws = 0;
        let bestLeg = 0;
        let marks = [];
        let bulls = [];
        let totalMarks = 0;
        let mpr = 0;
        let fiveMark = 0;
        let sixMark = 0;
        let sevenMark = 0;
        let eightMark = 0;
        let nineMark = 0;
        let threeBull = 0;
        let fourBull = 0;
        let fiveBull = 0;
        let sixBull = 0;
        games.forEach(game => {
            let gameMarks = game.marks;
            let gameBulls = game.bulls;
            if (game.win) {
                wins++;
                if (bestLeg === 0) {
                    bestLeg = game.throws;
                } else if (game.throws < bestLeg) {
                    bestLeg = game.throws;
                }
            }
            totalGames++;
            throws += game.throws;
            gameMarks.forEach(mark => {
                marks.push(mark);
            })
            if (gameBulls.length > 0) {
                gameBulls.forEach(bull => {
                    bulls.push(bull);
                })
            }
        });

        for (var i in marks) {
            totalMarks += parseInt(marks[i]);
            switch (parseInt(marks[i])) {
                case 5:
                    fiveMark++;
                    break;
                case 6:
                    sixMark++;
                    break;
                case 7:
                    sevenMark++;
                    break;
                case 8:
                    eightMark++;
                    break;
                case 9:
                    nineMark++;
                    break;
            }
        }

        for (var i in bulls) {
            totalMarks += bulls[i];
            switch (bulls[i]) {
                case 3:
                    threeBull++;
                    break;
                case 4:
                    fourBull++;
                    break;
                case 5:
                    fiveBull++;
                    break;
                case 6:
                    sixBull++;
                    break;
            }
        }

        mpr = totalMarks / marks.length;

        this.setState({ wins });
        this.setState({ totalGames });
        this.setState({ throws });
        this.setState({ bestLeg });
        this.setState({ mpr });
        this.setState({ fiveMark });
        this.setState({ sixMark });
        this.setState({ sevenMark });
        this.setState({ eightMark });
        this.setState({ nineMark });
        this.setState({ threeBull });
        this.setState({ fourBull });
        this.setState({ fiveBull });
        this.setState({ sixBull });
    }


    fiveMarkRow() {
        if (this.state.fiveMark > 0) {
            return (
                <tr>
                    <td>5 Mark</td>
                    <td>{this.state.fiveMark}</td>
                </tr>
            )
        }
    }

    sixMarkRow() {
        if (this.state.sixMark > 0) {
            return (
                <tr>
                    <td>6 Mark</td>
                    <td>{this.state.sixMark}</td>
                </tr>
            )
        }
    }
    sevenMarkRow() {
        if (this.state.sevenMark > 0) {
            return (
                <tr>
                    <td>7 Mark</td>
                    <td>{this.state.sevenMark}</td>
                </tr>
            )
        }
    }
    eightMarkRow() {
        if (this.state.eightMark > 0) {
            return (
                <tr>
                    <td>8 Mark</td>
                    <td>{this.state.eightMark}</td>
                </tr>
            )
        }
    }
    nineMarkRow() {
        if (this.state.nineMark > 0) {
            return (
                <tr>
                    <td>9 Mark</td>
                    <td>{this.state.nineMark}</td>
                </tr>
            )
        }
    }
    threeBullRow() {
        if (this.state.threeBull > 0) {
            return (
                <tr>
                    <td>3 Bull</td>
                    <td>{this.state.threeBull}</td>
                </tr>
            )
        }
    }
    fourBullRow() {
        if (this.state.fourBull > 0) {
            return (
                <tr>
                    <td>4 Bull</td>
                    <td>{this.state.fourBull}</td>
                </tr>
            )
        }
    }
    fiveBullRow() {
        if (this.state.fiveBull > 0) {
            return (
                <tr>
                    <td>5 Bull</td>
                    <td>{this.state.fiveBull}</td>
                </tr>
            )
        }
    }
    sixBullRow() {
        if (this.state.sixBull > 0) {
            return (
                <tr>
                    <td>6 Bull</td>
                    <td>{this.state.sixBull}</td>
                </tr>
            )
        }
    }

    gameStatsRender() {
        return (
            <table className='cricket-table text-center align-self-center'>
                <tbody>
                    <tr>
                        <td>Best Leg</td>
                        <td>{this.state.bestLeg}</td>
                    </tr>
                    <tr>
                        <td>Wins</td>
                        <td>{this.state.wins}</td>
                    </tr>
                    <tr>
                        <td>Total Legs</td>
                        <td>{this.state.totalGames}</td>
                    </tr>
                    <tr>
                        <td>Win Percent</td>
                        <td>{`${parseInt((this.state.wins / this.state.totalGames) * 100)}%`}</td>
                    </tr>
                    <tr>
                        <td>Throws</td>
                        <td>{this.state.throws}</td>
                    </tr>
                    <tr>
                        <td>Marks Per Round</td>
                        <td>{parseFloat(this.state.mpr.toFixed(2))}</td>
                    </tr>
                </tbody>
            </table>
        )
    }

    allStarPointsRender() {
        return (
            <table className='cricket-table text-center align-self-center'>
                <tbody>
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

    render() {
        if (this.props.username === 'guest') {
            return (
                <div className='row text-center'>
                    <div className='col-12 guest-stat'>
                        <h3>Guest stats are not tracked</h3>
                    </div>
                </div>)

        } else if (this.state.totalGames === 0) {
            return (
                <div className='row text-center'>
                    <div className='col-12 guest-stat'>
                        <h3>No cricket games played</h3>
                    </div>
                </div>)
        } else {
            return (
                <div className='row text-center'>
                    <div className='col-6'>
                        {this.gameStatsRender()}
                    </div>
                    <div className='col-6'>
                        {this.allStarPointsRender()}
                    </div>
                </div>)
        }
    }
}