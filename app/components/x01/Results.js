import React, {Component} from "react";

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

      
    render() {
        return (
            <div className="container-fluid">
                <div className = "row">
                    <div className="col text-center">
                        Game Over
                    </div>
                </div>
                <div className = "row">
                    <div className = "col text-center">
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
                <br />
                <div className="row">
                    <div className="col-6 offset-3 text-center miss">
                        <button type="button" className="btn" onClick={() => {this.props.gameReset()}}>
                            Play Again
                        </button>
                    </div>
                </div>
                 <div className="row">
                    <br />
                    <div className="col-6 offset-3 text-center undo">
                        <button type="button" className="btn" onClick={() => {this.props.setGame("")}}>
                            Pick New Game
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
