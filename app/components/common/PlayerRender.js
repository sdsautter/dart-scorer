import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class PlayerRender extends Component {
    constructor(obj) {
        super();
        if (obj.botGame) {
            this.chooseGameUrl = '/cpu';
        } else {
            this.chooseGameUrl = '/pvp';
        }
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
        if (!this.props.botGame) {
            if (this.props.activeThrower === "p1") {
                return (
                    <div className="row top-row">
                        <div className="col-md-4 col-lg-5 offset-md-2 offset-lg-1 text-center player border-right active-thrower p1-active">
                            Player 1
                        </div>
                        <div className="col-md-4 col-lg-5 text-center player border-left inactive-thrower">
                            Player 2
                    </div>

                    </div>
                )
            } else {
                return (
                    <div className="row top-row">
                        <div className="col-lg-5 col-md-4 offset-md-2 offset-lg-1 text-center player border-right inactive-thrower">
                            Player 1
                        </div>
                        <div className="col-lg-5 col-md-4 text-center player border-left active-thrower p2-active">
                            Player 2
                        </div>
                    </div>
                )
            }
        } else {
            if (this.props.activeThrower === "p1") {
                return (

                    <div className="row top-row">
                        <div className="col-md-4 col-lg-5 offset-md-2 offset-lg-1 text-center player border-right active-thrower p1-active">
                            Player 1
                        </div>
                        <div className="col-md-4 col-lg-5 text-center player border-left inactive-thrower">
                            Bot
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="row top-row">
                        <div className="col-lg-5 col-md-4 offset-md-2 offset-lg-1 text-center player border-right inactive-thrower">
                            Player 1
                    </div>
                        <div className="col-lg-5 col-md-4 text-center player border-left active-thrower p2-active">
                            Bot
                    </div>

                    </div>

                )
            }
        }
    }
}