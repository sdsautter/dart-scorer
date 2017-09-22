import React, {Component} from "react";
import ScoreInput from "./ScoreInput.js";
import Numpad from "./Numpad.js";

export default class Scoreboard extends Component {
    constructor() {
        super();

        this.playersRender = this.playersRender.bind(this);
        this.inputRender = this.inputRender.bind(this);
    }

    componentDidMount() {
        this.props.setOriginalScore(parseInt(this.props.x01Game));
        this.props.doubleInOptionsCheck();
        this.props.resetThrowLog();
        this.props.addToRoundStartScore("p1", parseInt(this.props.x01Game));
        this.props.addToRoundStartScore("p2", parseInt(this.props.x01Game));        
    }
      
    playersRender() {
        var intViewportWidth = window.innerWidth;
        //Renders either an input or a text area depending on the screen width
        if (this.props.gameOptions !== "numpad") {
            if (intViewportWidth < 720) { 
                if (this.props.activeThrower === "p1") {
                    return (
                        <div className="row">
                            <div className="col-3 text-center padding-top throw-number">
                                Throw: {this.props.activeThrows + 1}
                            </div>
                            <div className="col-3 text-center padding-top player border-right active-thrower">
                                Player 1
                            </div>
                            <div className="col-3 text-center padding-top player border-left inactive-thrower">
                                Player 2
                            </div>
                            <div className="col-3 border-bottom">
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div className="row">
                            <div className="col-3 border-bottom">
                            </div>
                            <div className="col-3 text-center padding-top player border-right inactive-thrower">
                                Player 1
                            </div>
                            <div className="col-3 text-center padding-top player border-left active-thrower">
                                Player 2
                            </div>
                            <div className="col-3 text-center padding-top throw-number">
                                Throw: {this.props.activeThrows + 1}
                            </div>
                        </div>
                    )
                }
            } else {
                if (this.props.activeThrower === "p1") {
                    return (
                        <div className="row">
                            <div className="col-3 text-center padding-top throw-number">
                                Throw: {this.props.activeThrows + 1}
                            </div>
                            <div className="col-3 text-center padding-top player border-right active-thrower">
                                Player 1
                            </div>
                            <div className="col-3 text-center padding-top player border-left inactive-thrower">
                                Player 2
                            </div>
                            <div className="col border-bottom miss text-center">
                                <button type="button" className="btn" onClick={() => {this.props.miss()}}>
                                    Miss
                                </button>
                            </div>
                            <div className="col border-bottom text-center undo">
                                <button type="button" className="btn" onClick={() => {this.props.undo()}}>
                                    Undo
                                </button>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div className="row">
                            <div className="col border-bottom miss text-center" id="miss-x01">
                                <button type="button" className="btn" onClick={() => {this.props.miss()}}>
                                    Miss
                                </button>
                            </div>
                            <div className="col border-bottom text-center undo" id="undo-x01">
                                <button type="button" className="btn" onClick={() => {this.props.undo()}}>
                                    Undo
                                </button>
                            </div>
                            <div className="col-3 text-center padding-top player border-right inactive-thrower">
                                Player 1
                            </div>
                            <div className="col-3 text-center padding-top player border-left active-thrower">
                                Player 2
                            </div>
                            <div className="col-3 text-center padding-top throw-number">
                                Throw: {this.props.activeThrows + 1}
                            </div>
                        </div>    
                    )
                }
            }
        } else {
            if (this.props.activeThrower === "p1") {
                    return (
                        <div className="row">
                            <div className="col-6 text-center padding-top player border-right active-thrower">
                                Player 1
                            </div>
                            <div className="col-6 text-center padding-top player border-left inactive-thrower">
                                Player 2
                            </div>
                        </div>
                    )
            } else {
                return (
                    <div className="row">
                        <div className="col-6 text-center padding-top player border-right inactive-thrower">
                            Player 1
                        </div>
                        <div className="col-6 text-center padding-top player border-left active-thrower">
                            Player 2
                        </div>
                    </div>
                )
            }
        }
    }

    inputRender() {
        if (this.props.gameOptions === "numpad") {
            return (
                <Numpad
                    activeThrower={this.props.activeThrower}
                    numpadScore={this.props.numpadScore} 
                    numpadMiss={this.props.numpadMiss}
                    numpadUndo={this.props.numpadUndo}
                />
            )
        } else {
            return (
                <ScoreInput 
                    activeThrower={this.props.activeThrower}
                    score={this.props.score}
                    miss={this.props.miss}
                    undo={this.props.undo}
                />
            )
        }
    }

    render() {
        return (
            <div className="container-fluid">
                {this.playersRender()}
                <div className="row">
                    <div className="col-6 points-score text-center border-right">
                        {this.props.renderP1Score()}
                    </div>
                    <div className="col-6 points-score text-center border-left">
                        {this.props.renderP2Score()}
                    </div>
                </div>
                {this.inputRender()}
            </div>
        )
    }
}
