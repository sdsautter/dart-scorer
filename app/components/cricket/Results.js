import React, {Component} from "react";

export default class Results extends Component {
    constructor() {
        super();

        this.renderWinner = this.renderWinner.bind(this);
    }

    renderWinner() {
        if (this.props.gameWinner === "p1") {
            return "Player 1"
        } else {
            return "Player 2"
        }
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
            </div>
        )
    }
}
