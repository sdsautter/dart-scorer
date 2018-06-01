import React, { Component } from "react";

export default class BotDifficulty extends Component {
    constructor() {
        super();
    }

    render() {
        if (this.props.game === 'cricket') {
            return (
                <div className="container-fluid">
                    <div className="row top-row">
                        <div className="col title text-center">
                            Bot Difficulty
                    </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-3 col-sm-12 x01-option number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.setBotDifficulty("easy") }}>Easy</button>
                        </div>
                        <div className="col-md-3 col-sm-12 x01-option number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.setBotDifficulty("medium") }}>Medium</button>
                        </div>
                        <div className="col-md-3 col-sm-12 x01-option number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.setBotDifficulty("hard") }}>Hard</button>
                        </div>
                        <div className="col-md-3 col-sm-12 x01-option number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.setBotDifficulty("pro") }}>Pro</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container-fluid">
                    <div className="row top-row">
                        <div className="col title text-center">
                            Bot Difficulty
                    </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-4 col-sm-12 x01-option number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.setBotDifficulty("easy") }}>Easy</button>
                        </div>
                        <div className="col-md-4 col-sm-12 x01-option number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.setBotDifficulty("medium") }}>Medium</button>
                        </div>
                        <div className="col-md-4 col-sm-12 x01-option number text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.setBotDifficulty("hard") }}>Hard</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
