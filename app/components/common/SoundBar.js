import React, { Component } from "react";

export default class PlayerRender extends Component {
    constructor() {
        super();
        this.gameReset = this.gameReset.bind(this);
    }

    gameReset() {
        if (this.props.gameX01Reset) {
            this.props.gameX01Reset();
        } else if (this.props.gameCricketReset) {
            this.props.gameCricketReset();
        }
    }

    render() {
        return (
            <div className='sound-toggle'>
                <label>
                    <span className='one-click-scoring'>Sounds</span>
                    <input className="toggle" type="checkbox" onClick={this.props.soundToggle} />
                </label>
            </div>
        )


    }
}