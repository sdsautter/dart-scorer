import React, {Component} from "react";

export default class Cricket extends Component {
    constructor() {
        super();
        this.state = {
            activeThrower: "p1",
            activeThrows: 0,
            
            p120: 0,
            p119: 0,
            p118: 0,
            p117: 0,
            p116: 0,
            p115: 0,
            p125: 0,
            p1Score: 0,
            p1Throws: 0,
            
            p220: 0,
            p219: 0,
            p218: 0,
            p217: 0,
            p216: 0,
            p215: 0,
            p225: 0,
            p2Score: 0,
            p2Throws: 0
        }

        //Binding functions to change the states
        this.score = this.score.bind(this);
        this.checkThrower = this.checkThrower.bind(this);
        this.renderP1Score = this.renderP1Score.bind(this);
        this.renderP2Score = this.renderP2Score.bind(this);   
        this.setActiveThrower = this.setActiveThrower.bind(this);
        this.setThrowNumber = this.setThrowNumber.bind(this);    
        this.setPlayerScore = this.setPlayerScore.bind(this); 
    }

    setThrowNumber(activeThrows) {
        console.log(activeThrows);
        this.setState({ activeThrows }) 
    }

    setActiveThrower(activeThrower) {
        this.setState({ activeThrower });
    }

    setPlayerScore(thrower, number, multiplier) {
        console.log("setPlayerScore");
        if (thrower === "p1") {
            this.setState ({p1Score: this.state.p1Score + (number * multiplier)});                
        } else {
            this.setState ({p2Score: this.state.p2Score + (number * multiplier)});                            
        }
    }

    setThrowerNumber(thrower, number, multiplier) {
        console.log("throwerNumber");
        let throwerNumber = `${thrower}${number}`;
        let numberState = eval("this.state." + throwerNumber);  
        console.log(numberState);      
        this.setState ({[throwerNumber]: parseInt(numberState + multiplier)});
    }

    //Shuffles whatever array I put into it
    score(thrower, number, multiplier) {
        
        let otherThrower = "";

        if (thrower === "p1") {
            otherThrower = "p2";
        } else {
            otherThrower = "p1";
        }

        let throwerNumber = `${thrower}${number}`;
        let otherThrowerNumber = `${otherThrower}${number}`;
        let playerScore = `${thrower}Score`;
        let playerThrows = `${thrower}Throws`;

        let playerScoreState = eval("this.state." + playerScore);
        let numberState = eval("this.state." + throwerNumber);
        let throwState = eval("this.state." + playerThrows);   
        let otherThrowerState = eval("this.state." + otherThrowerNumber);

        if (numberState === 0) {
            this.setThrowerNumber(thrower, number, multiplier);
        } else if (numberState === 1) {
            if (multiplier === 1 || multiplier === 2) {
            this.setThrowerNumber(thrower, number, multiplier);
            } else if (multiplier === 3) {
                if (otherThrowerState < 3 ) {
                    this.setThrowerNumber(thrower, number, 2);
                    this.setPlayerScore(thrower, number, 1);                
                } else {
                    this.setThrowerNumber(thrower, number, 2);                    
                }
            }
        } else if (numberState === 2 ) {
            if (multiplier === 1) {
                this.setThrowerNumber(thrower, number, multiplier);            
            } else if (multiplier === 2) {
                if (otherThrowerState < 3) {
                    this.setThrowerNumber(thrower, number, 1);
                    this.setPlayerScore(thrower, number, 1);                                                   
                } else {
                    this.setThrowerNumber(thrower, number, 1);                    
                }
            } else if (multiplier === 3 ) {
                if (otherThrowerState < 3) {
                    this.setThrowerNumber(thrower, number, 1);
                    this.setPlayerScore(thrower, number, 2);                                                   
                } else {
                    this.setThrowerNumber(thrower, number, 1);                    
                }
            }
        } else if (numberState === 3) {
            if (multiplier === 1 && otherThrowerState < 3) {
                this.setPlayerScore(thrower, number, multiplier);            
            } else if (multiplier === 2 && otherThrowerState < 3) {
                this.setPlayerScore(thrower, number, multiplier);                                                   
            } else if (multiplier === 3 && otherThrowerState < 3) {
                this.setPlayerScore(thrower, number, multiplier);                                                   
            }
        }

        // this.setState({[playerThrows]: [throwState + 1]});
        this.setThrowNumber(parseInt(this.state.activeThrows + 1));
        this.checkThrower();

    }

    checkThrower() {
        if (this.state.activeThrows === 2 ) {
            if (this.state.activeThrower === "p1") {
                this.setActiveThrower("p2");
            } else {
                this.setActiveThrower("p1");
            }
            this.setThrowNumber(0);
        }
    }

    renderP1Score() {
        return this.state.p1Score;
    }

    renderP2Score() {
        return this.state.p2Score;
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-5">
                        Player 1
                    </div>
                    <div className="col-2">
                        Cricket
                    </div>
                    <div className="col-5">
                        Player 2
                    </div>
                </div>
                <div className = "row">
                    <div className="col-3">
                        {this.renderP1Score()}
                    </div>
                    <div className="col-2">
                        {/*this.p120progress()*/}
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#twentyModal">
                            20
                        </button>
                    </div>
                    <div className="col-2">
                        {/*this.p220progress*/}
                    </div>
                    <div className="col-3">
                        {this.renderP2Score()}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-5">
                        {/*this.p119Progress()*/}
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#nineteenModal">
                            19
                        </button>
                    </div>
                    <div className="col-5">
                        {/*this.p219Progress()*/}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-5">
                        {/*this.p118Progress()*/}
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#eightteenModal">
                            18
                        </button>
                    </div>
                    <div className="col-5">
                        {/*this.p218Progress()*/}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-5">
                        {/*this.p117Progress()*/}
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#seventeenModal">
                            17
                        </button>
                    </div>
                    <div className="col-5">
                        {/*this.p217Progress()*/}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-5">
                        {/*this.p116Progress()*/}
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#sixteenModal">
                            16
                        </button>
                    </div>
                    <div className="col-5">
                        {/*this.p216Progress()*/}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-5">
                        {/*this.p115Progress()*/}
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#fifteenModal">
                            15
                        </button>
                    </div>
                    <div className="col-5">
                        {/*this.p215Progress()*/}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-5">
                        {/*this.p125Progress()*/}
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#bullModal">
                            Bull
                        </button>
                    </div>
                    <div className="col-5">
                        {/*this.p225Progress()*/}
                    </div>
                </div>
                <div className="modal fade" id="twentyModal" tabIndex="-1" role="dialog" aria-labelledby="twentyModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="twentyModalLabel">20</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.score(this.state.activeThrower, 20, 1)}}>Single</button>
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.score(this.state.activeThrower, 20, 2)}}>Double</button>
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.score(this.state.activeThrower, 20, 3)}}>Triple</button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="nineteenModal" tabIndex="-1" role="dialog" aria-labelledby="nineteenModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="nineteenModalLabel">19</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.score(this.state.activeThrower, 19, 1)}}>Single</button>
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.score(this.state.activeThrower, 19, 2)}}>Double</button>
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.score(this.state.activeThrower, 19, 3)}}>Triple</button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="eightteenModal" tabIndex="-1" role="dialog" aria-labelledby="eightteenModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="eightteenModalLabel">18</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.score(this.state.activeThrower, 18, 1)}}>Single</button>
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.score(this.state.activeThrower, 18, 2)}}>Double</button>
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.score(this.state.activeThrower, 18, 3)}}>Triple</button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="seventeenModal" tabIndex="-1" role="dialog" aria-labelledby="seventeenModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="seventeenModalLabel">17</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.score(this.state.activeThrower, 17, 1)}}>Single</button>
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.score(this.state.activeThrower, 17, 2)}}>Double</button>
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.score(this.state.activeThrower, 17, 3)}}>Triple</button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="sixteenModal" tabIndex="-1" role="dialog" aria-labelledby="sixteenModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="sixteenModalLabel">16</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.score(this.state.activeThrower, 16, 1)}}>Single</button>
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.score(this.state.activeThrower, 16, 2)}}>Double</button>
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.score(this.state.activeThrower, 16, 3)}}>Triple</button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="fifteenModal" tabIndex="-1" role="dialog" aria-labelledby="fifteenModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="fifteenModalLabel">15</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.score(this.state.activeThrower, 15, 1)}}>Single</button>
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.score(this.state.activeThrower, 15, 2)}}>Double</button>
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.score(this.state.activeThrower, 15, 3)}}>Triple</button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="bullModal" tabIndex="-1" role="dialog" aria-labelledby="bullModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="bullModalLabel">Bull</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.score(this.state.activeThrower, 25, 1)}}>Single</button>
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.score(this.state.activeThrower, 25, 2)}}>Double</button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
