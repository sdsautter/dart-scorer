import React, {Component} from "react";

export default class Cricket extends Component {
    constructor() {
        super();
        this.state = {
            activeThrower: "p1",
            activeThrows: 0,
            gameState: "playing",
            gameWinner: {},
            
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
        this.p120Progress = this.p120Progress.bind(this);
        this.p119Progress = this.p119Progress.bind(this);
        this.p118Progress = this.p118Progress.bind(this);
        this.p117Progress = this.p117Progress.bind(this);
        this.p116Progress = this.p116Progress.bind(this);
        this.p115Progress = this.p115Progress.bind(this);
        this.p125Progress = this.p125Progress.bind(this);
        this.p220Progress = this.p220Progress.bind(this);
        this.p219Progress = this.p219Progress.bind(this);
        this.p218Progress = this.p218Progress.bind(this);
        this.p217Progress = this.p217Progress.bind(this);
        this.p216Progress = this.p216Progress.bind(this);
        this.p215Progress = this.p215Progress.bind(this);
        this.p225Progress = this.p225Progress.bind(this);  
        this.gameStateChange = this.gameStateChange.bind(this);
        this.gameOverCheck = this.gameOverCheck.bind(this);
    }

    ComponentDidMount() {
    var gameOverInterval = setInterval(this.gameOverCheck(), 500);
    }

    setThrowNumber(activeThrows) {
        this.setState({ activeThrows }) 
    }

    setActiveThrower(activeThrower) {
        this.setState({ activeThrower });
    }

    setPlayerScore(thrower, number, multiplier) {
        if (thrower === "p1") {
            this.setState ({p1Score: this.state.p1Score + (number * multiplier)});                
        } else {
            this.setState ({p2Score: this.state.p2Score + (number * multiplier)});                            
        }
    }

    setThrowerNumber(thrower, number, multiplier) {
        let throwerNumber = `${thrower}${number}`;
        let numberState = eval("this.state." + throwerNumber);  
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
        this.gameOverCheck();        
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

    gameStateChange(gameWinner) {
        this.setState({gameState: "over"});
        this.setState({ gameWinner })
    }

    gameOverCheck() {
        setTimeout(() => {
        if (this.state.p120 === 3 && this.state.p119 === 3 && this.state.p118 === 3 && this.state.p117 === 3 && this.state.p116 === 3 && this.state.p115 === 3 && this.state.p125 === 3 && this.state.p1Score >= this.state.p2Score ) {
            this.gameStateChange("p1"); 
        } else if (this.state.p220 === 3 && this.state.p219 === 3 && this.state.p218 === 3 && this.state.p217 === 3 && this.state.p216 === 3 && this.state.p215 === 3 && this.state.p225 === 3 && this.state.p2Score >= this.state.p1Score ) {
            this.gameStateChange("p2");
        }
        }, 500);
    }

    p120Progress() {
        if (this.state.p120 === 1) {
            return (<img src="../public/assets/images/1-mark.png" />)
        } else if (this.state.p120 === 2) {
            return (<img src="../public/assets/images/2-mark.png" />)        
        } else if (this.state.p120 === 3) {
            return (<img src="../public/assets/images/3-mark.png" />)    
        }
    }    
    
    p119Progress() {
        if (this.state.p119 === 1) {
            return (<img src="../public/assets/images/1-mark.png" />)
        } else if (this.state.p119 === 2) {
            return (<img src="../public/assets/images/2-mark.png" />)        
        } else if (this.state.p119 === 3) {
            return (<img src="../public/assets/images/3-mark.png" />)    
        }
    }

    p118Progress() {
        if (this.state.p118 === 1) {
            return (<img src="../public/assets/images/1-mark.png" />)
        } else if (this.state.p118 === 2) {
            return (<img src="../public/assets/images/2-mark.png" />)        
        } else if (this.state.p118 === 3) {
            return (<img src="../public/assets/images/3-mark.png" />)    
        }
    }
     
    p117Progress() {
        if (this.state.p117 === 1) {
            return (<img src="../public/assets/images/1-mark.png" />)
        } else if (this.state.p117 === 2) {
            return (<img src="../public/assets/images/2-mark.png" />)        
        } else if (this.state.p117 === 3) {
            return (<img src="../public/assets/images/3-mark.png" />)    
        }        
    }

    p116Progress() {
        if (this.state.p116 === 1) {
            return (<img src="../public/assets/images/1-mark.png" />)
        } else if (this.state.p116 === 2) {
            return (<img src="../public/assets/images/2-mark.png" />)        
        } else if (this.state.p116 === 3) {
            return (<img src="../public/assets/images/3-mark.png" />)    
        }        
    }

    p115Progress() {
        if (this.state.p115 === 1) {
            return (<img src="../public/assets/images/1-mark.png" />)
        } else if (this.state.p115 === 2) {
            return (<img src="../public/assets/images/2-mark.png" />)        
        } else if (this.state.p115 === 3) {
            return (<img src="../public/assets/images/3-mark.png" />)    
        }        
    }

    p125Progress() {
        if (this.state.p125 === 1) {
            return (<img src="../public/assets/images/1-mark.png" />)
        } else if (this.state.p125 === 2) {
            return (<img src="../public/assets/images/2-mark.png" />)        
        } else if (this.state.p125 === 3) {
            return (<img src="../public/assets/images/3-mark.png" />)    
        }        
    }

    p220Progress() {
        if (this.state.p220 === 1) {
            return (<img src="../public/assets/images/1-mark.png" />)
        } else if (this.state.p220 === 2) {
            return (<img src="../public/assets/images/2-mark.png" />)        
        } else if (this.state.p220 === 3) {
            return (<img src="../public/assets/images/3-mark.png" />)    
        }
    }    
    
    p219Progress() {
        if (this.state.p219 === 1) {
            return (<img src="../public/assets/images/1-mark.png" />)
        } else if (this.state.p219 === 2) {
            return (<img src="../public/assets/images/2-mark.png" />)        
        } else if (this.state.p219 === 3) {
            return (<img src="../public/assets/images/3-mark.png" />)    
        }
    }

    p218Progress() {
        if (this.state.p218 === 1) {
            return (<img src="../public/assets/images/1-mark.png" />)
        } else if (this.state.p218 === 2) {
            return (<img src="../public/assets/images/2-mark.png" />)        
        } else if (this.state.p218 === 3) {
            return (<img src="../public/assets/images/3-mark.png" />)    
        }
    }
     
    p217Progress() {
        if (this.state.p217 === 1) {
            return (<img src="../public/assets/images/1-mark.png" />)
        } else if (this.state.p217 === 2) {
            return (<img src="../public/assets/images/2-mark.png" />)        
        } else if (this.state.p217 === 3) {
            return (<img src="../public/assets/images/3-mark.png" />)    
        }        
    }

    p216Progress() {
        if (this.state.p216 === 1) {
            return (<img src="../public/assets/images/1-mark.png" />)
        } else if (this.state.p216 === 2) {
            return (<img src="../public/assets/images/2-mark.png" />)        
        } else if (this.state.p216 === 3) {
            return (<img src="../public/assets/images/3-mark.png" />)    
        }        
    }

    p215Progress() {
        if (this.state.p215 === 1) {
            return (<img src="../public/assets/images/1-mark.png" />)
        } else if (this.state.p215 === 2) {
            return (<img src="../public/assets/images/2-mark.png" />)        
        } else if (this.state.p215 === 3) {
            return (<img src="../public/assets/images/3-mark.png" />)    
        }        
    }

    p225Progress() {
        if (this.state.p225 === 1) {
            return (<img src="../public/assets/images/1-mark.png" />)
        } else if (this.state.p225 === 2) {
            return (<img src="../public/assets/images/2-mark.png" />)        
        } else if (this.state.p225 === 3) {
            return (<img src="../public/assets/images/3-mark.png" />)    
        }        
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-5 text-right">
                        Player 1
                    </div>
                    <div className="col-2 text-center">
                        Cricket
                    </div>
                    <div className="col-5 text-left">
                        Player 2
                    </div>
                </div>
                <div className = "row">
                    <div className="col-3 text-center">
                        {this.renderP1Score()}
                    </div>
                    <div className="col-2 text-right">
                        {this.p120Progress()}
                    </div>
                    <div className="col-2 text-center">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#twentyModal">
                            20
                        </button>
                    </div>
                    <div className="col-2 text-left">
                        {this.p220Progress()}
                    </div>
                    <div className="col-3 text-center">
                        {this.renderP2Score()}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-5 text-right">
                        {this.p119Progress()}
                    </div>
                    <div className="col-2 text-center">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#nineteenModal">
                            19
                        </button>
                    </div>
                    <div className="col-5 text-left">
                        {this.p219Progress()}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-5 text-right">
                        {this.p118Progress()}
                    </div>
                    <div className="col-2 text-center">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#eightteenModal">
                            18
                        </button>
                    </div>
                    <div className="col-5 text-left">
                        {this.p218Progress()}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-5 text-right">
                        {this.p117Progress()}
                    </div>
                    <div className="col-2 text-center">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#seventeenModal">
                            17
                        </button>
                    </div>
                    <div className="col-5 text-left">
                        {this.p217Progress()}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-5 text-right">
                        {this.p116Progress()}
                    </div>
                    <div className="col-2 text-center">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#sixteenModal">
                            16
                        </button>
                    </div>
                    <div className="col-5 text-left">
                        {this.p216Progress()}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-5 text-right">
                        {this.p115Progress()}
                    </div>
                    <div className="col-2 text-center">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#fifteenModal">
                            15
                        </button>
                    </div>
                    <div className="col-5 text-left">
                        {this.p215Progress()}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-5 text-right">
                        {this.p125Progress()}
                    </div>
                    <div className="col-2 text-center">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#bullModal">
                            Bull
                        </button>
                    </div>
                    <div className="col-5 text-left">
                        {this.p225Progress()}
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
