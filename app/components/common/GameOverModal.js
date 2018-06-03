import React, { Component } from "react";

export default class GameOverModal extends Component {
    constructor() {
        super();

        this.undoGameOver = this.undoGameOver.bind(this);
        this.gameOver = this.gameOver.bind(this);
    }

    undoGameOver() {
        console.log(this.props);
        this.props.undo();
        this.props.setGameWinner('');
        this.props.showGameOverModal(false);
    }

    gameOver() {
        this.props.showGameOverModal(false);
        this.props.gameStateOver();
    }

    render() {
        // The gray background

        if (this.props.gameOverModal) {
            return (
                <div className="col-8">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 x01-option number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.undoGameOver() }}>Undo</button>
                        </div>
                        <div className="col-md-3 col-sm-12 x01-option number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.gameOver() }}>Yes</button>
                        </div>
                    </div>
                </div>

            )
        } else { return null }
    }
}
