import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class UserStats extends Component {
    constructor({ match }) {
        super();

        this.user = match.params.username;
        this.state = {
            game: '',
            cricket: {
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
            },
            x01: {
                wins: 0,
                totalGames: 0,
                throws: 0,
                bestLeg: 0,
                ppd: 0,
                twentySix: 0,
                sixty: 0,
                ton: 0,
                tonTwenty: 0,
                tonForty: 0,
                tonSixy: 0,
                tonEighty: 0,
                checkoutPercent: 0,
                checkInPercent: 0,
                highestCheckout: 0,
            }
        }

        this.setGame = this.setGame.bind(this);
        this.getCricketStats = this.getCricketStats.bind(this);
        this.getX01Stats = this.getX01Stats.bind(this);
        this.setCricketStats = this.setCricketStats.bind(this);
        this.setX01Stats = this.setX01Stats.bind(this);
        this.setX01Scores = this.setX01Scores.bind(this);
        this.setX01Ppd = this.setX01Ppd.bind(this);
        this.setX01BestLeg = this.setX01BestLeg.bind(this);
        this.setHighestCheckout = this.setHighestCheckout.bind(this);
        this.setX01Checkout = this.setX01Checkout.bind(this);
        this.setX01CheckIn = this.setX01CheckIn.bind(this);
        this.statsRender = this.statsRender.bind(this);
    }

    componentDidMount() {
        this.getCricketStats();
        this.getX01Stats();
    }

    getCricketStats() {
        axios.get(`/user/${this.user}/cricket`)
            .then(games => {
                this.setCricketStats(games.data)
            });
    }

    getX01Stats() {
        axios.get(`/user/${this.user}/x01`)
            .then(games => this.setX01Stats(games.data));
    }

    setCricketStats(games) {
        console.log(games);

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

        let cricket = {
            wins,
            totalGames,
            throws,
            bestLeg,
            mpr,
            fiveMark,
            sixMark,
            sevenMark,
            eightMark,
            nineMark,
            threeBull,
            fourBull,
            fiveBull,
            sixBull
        }

        this.setState({ cricket });
    }


    setX01Stats(games) {
        let roundScores = [];
        let throws = 0;
        let wins = 0;
        let totalGames = 0;
        let checkouts = 0;
        games.forEach(game => {
            if (game.win) wins++;
            checkouts += game.checkouts;
            throws += game.throws;
            totalGames++;
            game.roundScores.forEach(score => {
                roundScores.push(score);
            })
        })
        this.setX01Scores(roundScores);
        this.setX01Ppd(roundScores, throws);
        this.setX01BestLeg(games);
        this.setHighestCheckout(games);
        this.setX01Checkout(checkouts, wins);
        this.setX01CheckIn(games);

        this.setState({
            x01: {
                wins,
                totalGames,
                throws
            }
        });
    }

    setX01Checkout(checkouts, wins) {
        const checkoutPercent = (wins / checkouts) * 100;
        this.setState({ x01: { checkoutPercent } });
    }

    setX01CheckIn(games) {
        let checkInShots = 0, checkInSuccess = 0, checkInPercent;
        games.forEach(game => {
            const roundScores = game.roundScores;
            if (game.checkIns > 0) {
                checkInShots += game.checkIns;
            };
            for (var i in roundScores) {
                if (roundScores[i] > 0) {
                    return checkInSuccess++;
                }
            }
        });
        checkInPercent = (checkInSuccess / checkInShots) * 100;
        this.setState({ x01: { checkInPercent } });
    }

    setX01Scores(roundScores) {
        let twentySix = 0;
        let sixty = 0;
        let ton = 0;
        let tonTwenty = 0;
        let tonForty = 0;
        let tonSixty = 0;
        let tonEighty = 0;

        for (var i in roundScores) {
            if (roundScores[i] >= 60 && roundScores[i] < 100) {
                sixty++;
            } else if (roundScores[i] >= 100 && roundScores[i] < 120) {
                ton++;
            } else if (roundScores[i] >= 120 && roundScores[i] < 140) {
                tonTwenty++;
            } else if (roundScores[i] >= 140 && roundScores[i] < 160) {
                tonForty++;
            } else if (roundScores[i] >= 160 && roundScores[i] < 180) {
                tonSixty++;
            } else if (roundScores[i] === 180) {
                tonEighty++;
            } else if (roundScores[i] === 26) {
                twentySix++;
            }
        }

        return {
            twentySix,
            sixty,
            ton,
            tonTwenty,
            tonForty,
            tonSixty,
            tonEighty
        }

    }

    setX01BestLeg(games) {
        let bestLeg = 0;
        games.forEach(game => {
            if (game.win) {
                if (bestLeg === 0) {
                    bestLeg = game.throws;
                } else if (game.throws < bestLeg) {
                    bestLeg = game.throws;
                }
            }
        })

        this.setState({ x01: { bestLeg } });
    }
    setHighestCheckout(games) {
        let highestCheckout = 0;
        games.forEach(game => {
            const roundScores = game.roundScores;
            if (game.win) {
                if (highestCheckout === 0) {
                    highestCheckout = roundScores[roundScores.length - 1];
                } else if (roundScores[roundScores.length - 1] > highestCheckout) {
                    highestCheckout = roundScores[roundScores.length - 1];
                }
            }
        })

        this.setState({ x01: { highestCheckout } });
    }

    setX01Ppd(roundScores, throws) {
        let total = 0, ppd = 0;
        for (const i in roundScores) {
            total += roundScores[i];
        }
        ppd = throws === 0 ? 0 : total / throws;
        this.setState({ x01: { ppd } });
    }

    statsRender() {
        if (this.state.game === 'cricket') {
            return (
                <div className='row rules'>
                    <div className='col rules-borders'>
                        <p className='text-center rules-header'>Cricket:</p>
                        {/* {this.renderCricketTable()} */}
                    </div>
                </div>
            )
        } else if (this.state.game === 'x01') {
            return (
                <div className='row rules' >
                    <div className='col rules-borders'>
                        <p className='text-center rules-header'>x01:</p>
                        {/* {this.renderX01Table()} */}
                    </div>
                </div>
            )
        }
    }

    setGame(game) {
        this.setState({ game });
    }

    render() {
        return (
            <div>
                <div className="row top-row">
                    <div className="col rules-menu-title text-center">
                        Stats
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4'>
                        <div className='row'>
                            <div className="col-12 text-center rules-menu">
                                <button className='rules-menu' onClick={() => { this.setGame('cricket') }}>Cricket</button>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-12 text-center rules-menu">
                                <button className='rules-menu' onClick={() => { this.setGame('x01') }}>X01</button>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-12 text-center rules-menu">
                                <Link to={{
                                    pathname: '/',
                                }}>
                                    <button className='rules-menu'>Back</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-8' id='rules'>
                        {this.statsRender()}
                    </div>
                </div >
            </div >
        )
    }
}
