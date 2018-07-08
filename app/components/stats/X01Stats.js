import React, { Component } from "react";

export default class X01Stats extends Component {
    constructor() {
        super();

        this.state = {
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

        this.setX01Stats = this.setX01Stats.bind(this);
        this.setX01Scores = this.setX01Scores.bind(this);
        this.setX01Ppd = this.setX01Ppd.bind(this);
        this.setX01BestLeg = this.setX01BestLeg.bind(this);
        this.setHighestCheckout = this.setHighestCheckout.bind(this);
        this.setX01Checkout = this.setX01Checkout.bind(this);
        this.setX01CheckIn = this.setX01CheckIn.bind(this);
        this.winsRow = this.winsRow.bind(this);
        this.totalGamesRow = this.totalGamesRow.bind(this);
        this.winPercentRow = this.winPercentRow.bind(this);
        this.twentySixRow = this.twentySixRow.bind(this);
        this.sixtyRow = this.sixtyRow.bind(this);
        this.tonRow = this.tonRow.bind(this);
        this.tonTwentyRow = this.tonTwentyRow.bind(this);
        this.tonFortyRow = this.tonFortyRow.bind(this);
        this.tonSixtyRow = this.tonSixtyRow.bind(this);
        this.tonEightyRow = this.tonEightyRow.bind(this);
        this.throwRow = this.throwRow.bind(this);
        this.ppdRow = this.ppdRow.bind(this);
        this.bestLegRow = this.bestLegRow.bind(this);
        this.checkoutPercentRow = this.checkoutPercentRow.bind(this);
        this.checkInPercentRow = this.checkInPercentRow.bind(this);
        this.highestCheckoutRow = this.highestCheckoutRow.bind(this);
        this.gameStatsRender = this.gameStatsRender.bind(this);
        this.allStarPointsRender = this.allStarPointsRender.bind(this);
    }

    componentDidMount() {
        this.setX01Stats(this.props.x01);
    }

    setX01Stats(games) {
        let roundScores = [];
        let throws = 0;
        let wins = 0;
        let totalGames = 0;
        let checkouts = 0;
        games.forEach(game => {
            if (game.win) wins++;
            if (game.checkouts !== undefined) {
                checkouts += parseInt(game.checkouts);
            }
            throws += game.throws;
            totalGames++;
            game.roundScores.forEach(score => {
                roundScores.push(score);
            })
        });


        this.setState({ wins });
        this.setState({ totalGames });
        this.setState({ throws });

        this.setX01Scores(roundScores);
        this.setX01Ppd(roundScores, throws);
        this.setX01BestLeg(games);
        this.setHighestCheckout(games);
        this.setX01Checkout(checkouts, wins);
        // this.setX01CheckIn(games);

    }

    setX01Checkout(checkouts, wins) {
        let checkoutPercent;
        if (checkouts !== 0) {
            checkoutPercent = (wins / checkouts) * 100;
        } else {
            checkoutPercent = 0;
        }
        this.setState({ checkoutPercent });
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
        if (checkInShots !== 0) {
            checkInPercent = (checkInSuccess / checkInShots) * 100;
        } else {
            checkInPercent = 0;
        }
        this.setState({ checkInPercent });
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

        this.setState({ twentySix });
        this.setState({ sixty });
        this.setState({ ton });
        this.setState({ tonTwenty });
        this.setState({ tonForty });
        this.setState({ tonSixty });
        this.setState({ tonEighty });

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

        this.setState({ bestLeg });
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
        this.setState({ ppd });
    }


    winsRow() {
        return (
            <tr>
                <td>Wins</td>
                <td>{this.state.wins}</td>
            </tr>
        )
    }

    totalGamesRow() {
        return (
            <tr>
                <td>Total Games</td>
                <td>{this.state.totalGames}</td>
            </tr>
        )
    }

    winPercentRow() {
        return (
            <tr>
                <td>Win Percent</td>
                <td>{`${parseInt((this.state.wins / this.state.totalGames) * 100)}%`}</td>
            </tr>
        )
    }

    twentySixRow() {
        if (this.state.twentySix > 0) {
            return (
                <tr>
                    <td>26</td>
                    <td>{this.state.twentySix}</td>
                </tr>
            )
        }
    }

    sixtyRow() {
        if (this.state.sixty > 0) {
            return (
                <tr>
                    <td>60+</td>
                    <td>{this.state.sixty}</td>
                </tr>
            )
        }
    }

    tonRow() {
        if (this.state.ton > 0) {
            return (
                <tr>
                    <td>100+</td>
                    <td>{this.state.ton}</td>
                </tr>
            )
        }

    }

    tonTwentyRow() {
        if (this.state.tonTwenty > 0) {
            return (
                <tr>
                    <td>120+</td>
                    <td>{this.state.tonTwenty}</td>
                </tr>
            )
        }

    }
    tonFortyRow() {
        if (this.state.tonForty > 0) {
            return (
                <tr>
                    <td>140+</td>
                    <td>{this.state.tonForty}</td>
                </tr>
            )
        }

    }
    tonSixtyRow() {
        if (this.state.tonSixty > 0) {
            return (
                <tr>
                    <td>160+</td>
                    <td>{this.state.tonSixty}</td>
                </tr>
            )
        }

    }
    tonEightyRow() {
        if (this.state.tonEighty > 0) {
            return (
                <tr>
                    <td>180</td>
                    <td>{this.state.tonEighty}</td>
                </tr>
            )
        }
    }

    throwRow() {
        return (
            <tr>
                <td>Throws</td>
                <td>{this.state.throws}</td>
            </tr>
        )
    }

    ppdRow() {
        return (
            <tr>
                <td>Points Per Dart</td>
                <td>{parseFloat(this.state.ppd.toFixed(2))}</td>
            </tr>
        )
    }

    bestLegRow() {
        return (
            <tr>
                <td>Best Leg</td>
                <td>{this.state.bestLeg}</td>
            </tr>
        )
    }

    checkoutPercentRow() {
        if (this.checkOutPercent > 0 ) {
        return (
            <tr>
                <td>Checkout Percent</td>
                <td>{`${parseFloat(this.state.checkoutPercent.toFixed(2))}%`}</td>
            </tr>
        )
    }
    }

    checkInPercentRow() {
        if (this.checkInPercent > 0 ) {
        return (
            <tr>
                <td>Check In Percent</td>
                <td>{`${parseFloat(this.state.checkInPercent.toFixed(2))}%`}</td>
            </tr>
        ) }
    }

    highestCheckoutRow() {
        return (
            <tr>
                <td>Highest Checkout</td>
                <td>{this.state.highestCheckout}</td>
            </tr>
        )
    }

    gameStatsRender() {
        return (
            <table className='cricket-table text-center align-self-center'>
                <thead>
                </thead>
                <tbody>
                    {this.bestLegRow()}
                    {this.winsRow()}
                    {this.totalGamesRow()}
                    {this.winPercentRow()}
                    {this.throwRow()}
                    {this.ppdRow()}
                    {this.checkoutPercentRow()}
                    {this.checkInPercentRow()}
                </tbody>
            </table>
        )
    }

    allStarPointsRender() {
        return (
            <table className='cricket-table text-center align-self-center'>
                <thead>
                </thead>
                <tbody>
                    {this.twentySixRow()}
                    {this.sixtyRow()}
                    {this.tonRow()}
                    {this.tonTwentyRow()}
                    {this.tonFortyRow()}
                    {this.tonSixtyRow()}
                    {this.tonEightyRow()}
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
        
            } else if(this.state.totalGames === 0 ) {
                return (
                    <div className='row text-center'>
                        <div className='col-12 guest-stat'>
                        <h3>No X01 games played</h3>
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