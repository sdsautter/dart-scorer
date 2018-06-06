import React, { Component } from "react";

export default class Results extends Component {
    constructor() {
        super();

        this.renderWinner = this.renderWinner.bind(this);
        this.player1ThrowRender = this.player1ThrowRender.bind(this);
        this.player2ThrowRender = this.player2ThrowRender.bind(this);
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

    render() {
        return (
            <div className="container-fluid results-screen">
                <div className="row">
                    <div className="col text-center">
                        Game Over
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        {this.renderWinner()} Wins!
                    </div>
                </div>
                <br />
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
                <div className='row'>
                    <div className='col-12'>
                        <br />
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

                <div className="row">
                    <div className="col-md-6 offset-md-3 col-sm-12 text-center miss">
                        <button type="button" className="btn" onClick={() => { this.props.gameCricketReset() }}>
                            Play Again
                        </button>
                    </div>
                </div>
                <div className="row">
                    <br />
                    <div className="col-md-6 offset-md-3 col-sm-12 text-center undo">
                        <button type="button" className="btn" onClick={() => { location.assign('/x01'); }}>
                            Play x01
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
