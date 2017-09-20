import React, {Component} from "react";
import Scoreboard from "./Scoreboard.js";
import Results from "./Results.js";

export default class Cricket extends Component {
    constructor() {
        super();
        this.state = {
            activeThrower: "p1",
            activeThrows: 0,
            activeMarks:0,
            gameState: "playing",
            gameWinner: {},
            throwLog: [],
            
            p120: 0,
            p119: 0,
            p118: 0,
            p117: 0,
            p116: 0,
            p115: 0,
            p125: 0,
            p1Score: 0,
            p1Throws: 0,
            p15m: 0,
            p16m: 0,
            p17m: 0,
            p18m: 0,
            p19m: 0,
            
            p220: 0,
            p219: 0,
            p218: 0,
            p217: 0,
            p216: 0,
            p215: 0,
            p225: 0,
            p2Score: 0,
            p2Throws: 0,
            p25m: 0,
            p26m: 0,
            p27m: 0,
            p28m: 0,
            p29m: 0
        }

        //Binding functions to change the states
        this.score = this.score.bind(this);
        this.checkThrower = this.checkThrower.bind(this);
        this.renderP1Score = this.renderP1Score.bind(this);
        this.renderP2Score = this.renderP2Score.bind(this);   
        this.setActiveThrower = this.setActiveThrower.bind(this);
        this.setThrowNumber = this.setThrowNumber.bind(this);    
        this.setPlayerScore = this.setPlayerScore.bind(this); 
        this.addThrow = this.addThrow.bind(this);
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
        this.miss = this.miss.bind(this);
        this.conditionalRender = this.conditionalRender.bind(this);
        this.addMarks = this.addMarks.bind(this);
        this.resetMarks = this.resetMarks.bind(this);
        this.allStarPoints = this.allStarPoints.bind(this);
        this.gameReset = this.gameReset.bind(this);
        this.addToLog = this.addToLog.bind(this);
        this.undo = this.undo.bind(this);
        this.p1UndoSwitch = this.p1UndoSwitch.bind(this);
        this.p2UndoSwitch = this.p2UndoSwitch.bind(this);
    }

    gameReset() {
        this.setState({activeThrower: "p1"});
        this.setState({activeThrows: 0});
        this.setState({activeMarks: 0});
        this.setState({gameState: "playing"});
        this.setState({gameWinner: {}}); 
        
        this.setState({p120: 0});
        this.setState({p119: 0});
        this.setState({p118: 0});
        this.setState({p117: 0});
        this.setState({p116: 0});
        this.setState({p115: 0});
        this.setState({p125: 0});
        this.setState({p1Score: 0});
        this.setState({p1Throws: 0});
        this.setState({p15m: 0});
        this.setState({p16m: 0});
        this.setState({p17m: 0});
        this.setState({p18m: 0});
        this.setState({p19m: 0});
        
        this.setState({p220: 0});
        this.setState({p219: 0});
        this.setState({p218: 0});
        this.setState({p217: 0});
        this.setState({p216: 0});
        this.setState({p215: 0});
        this.setState({p225: 0});
        this.setState({p2Score: 0});
        this.setState({p2Throws: 0});
        this.setState({p25m: 0});
        this.setState({p26m: 0});
        this.setState({p27m: 0});
        this.setState({p28m: 0});
        this.setState({p29m: 0}); 
    }

    conditionalRender() {
        if (this.state.gameState === "playing") {
            return (
            <Scoreboard 
                score={this.score}
                miss={this.miss}
                activeThrower={this.state.activeThrower}
                activeThrows={this.state.activeThrows}
                playersRender={this.playersRender}
                renderP1Score={this.renderP1Score}
                renderP2Score={this.renderP2Score}
                p120Progress={this.p120Progress}
                p119Progress={this.p119Progress}                
                p118Progress={this.p118Progress}
                p117Progress={this.p117Progress}
                p116Progress={this.p116Progress}
                p115Progress={this.p115Progress}
                p125Progress={this.p125Progress}
                p220Progress={this.p220Progress}
                p219Progress={this.p219Progress}                
                p218Progress={this.p218Progress}
                p217Progress={this.p217Progress}
                p216Progress={this.p216Progress}
                p215Progress={this.p215Progress}
                p225Progress={this.p225Progress}
                undo={this.undo}            
            />
            )
        } else if (this.state.gameState === "over") {
            if (this.state.gameWinner==="p1" || this.state.gameWinner==="p2") {            
                return (
                    <Results
                        gameWinner={this.state.gameWinner}
                        gameReset={this.gameReset}
                        p1Throws={this.state.p1Throws}
                        p2Throws={this.state.p2Throws}
                    />
                )
            }
        }
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

    addToLog(number, multiplier) {
        let loggedThrow = `${number}${multiplier}`;
        let loggedArray = this.state.throwLog;
        loggedArray.push(loggedThrow);
        this.setState ({throwLog: loggedArray});
    }

    undo() {
        if (this.state.activeThrows === 0 ) {
            this.setThrowNumber(2);
            if (this.state.activeThrower === "p1") {
                this.setActiveThrower("p2");
                this.p2UndoSwitch();
            } else {
                this.setActiveThrower("p1");
                this.p1UndoSwitch();
            }
        } else {
            this.setThrowNumber(parseInt(this.state.activeThrows) - 1 );
            if (this.state.activeThrower === "p1") {
            this.p1UndoSwitch();            
            } else {
                this.p2UndoSwitch();
            }
        } 

        let loggedArray = this.state.throwLog;
        loggedArray.pop();
        this.setState ({throwLog: loggedArray});        
    }

    p1UndoSwitch(player) {
        let logLength = this.state.throwLog.length;
        let lastThrowNumber = logLength - 1;
        let lastThrow = this.state.throwLog[lastThrowNumber];
        let otherThrower = "p2";

        switch(lastThrow) {
            case "203":
                if (this.state.p120 >= 6) {
                    if (this.state.p220 < 3) {
                        this.setState({p1Score: parseInt(this.state.p1Score) - 60})
                    }
                    this.setState({p120: parseInt(this.state.p120) - 3})
                } else if (this.state.p120 === 5) {
                    if (this.state.p220 < 3) {                        
                        this.setState({p1Score: parseInt(this.state.p1Score) - 40})
                    }
                    this.setState({p120: 2})
                } else if (this.state.p120 === 4) {
                    if (this.state.p220 < 3) {                        
                        this.setState({p1Score: parseInt(this.state.p1Score) - 20})
                    }
                    this.setState({p120: 1})
                } else if (this.state.p120 < 4) {
                    this.setState({p120: parseInt(this.state.p120) - 3 })
                }
                break;
            case "202":
                if (this.state.p120 >= 5) {
                    if (this.state.p220 < 3) {
                        this.setState({p1Score: parseInt(this.state.p1Score) - 40})
                    }
                    this.setState({p120: parseInt(this.state.p120) - 2})
                } else if (this.state.p120 === 4) {
                    if (this.state.p220 < 3) {                        
                        this.setState({p1Score: parseInt(this.state.p1Score) - 20})
                    }
                    this.setState({p120: 2})
                } else if (this.state.p120 < 4) {
                    this.setState({p120: parseInt(this.state.p120) - 2 })
                }
                break;
            case "201":
                if (this.state.p120 === 4) {
                        if (this.state.p220 < 3) {                        
                            this.setState({p1Score: parseInt(this.state.p1Score) - 20})
                        }
                        this.setState({p120: 3})
                    } else if (this.state.p120 < 4) {
                        this.setState({p120: parseInt(this.state.p120) - 1 })
                    }
                break;
            case "193":
                if (this.state.p119 >= 6) {
                    if (this.state.p219 < 3) {
                        this.setState({p1Score: parseInt(this.state.p1Score) - 57})
                    }
                    this.setState({p119: parseInt(this.state.p119) - 3})
                } else if (this.state.p119 === 5) {
                    if (this.state.p219 < 3) {                        
                        this.setState({p1Score: parseInt(this.state.p1Score) - 38})
                    }
                    this.setState({p119: 2})
                } else if (this.state.p119 === 4) {
                    if (this.state.p219 < 3) {                        
                        this.setState({p1Score: parseInt(this.state.p1Score) - 19})
                    }
                    this.setState({p119: 1})
                } else if (this.state.p119 < 4) {
                    this.setState({p119: parseInt(this.state.p119) - 3 })
                }
                break;
            case "192":
                if (this.state.p119 >= 5) {
                    if (this.state.p219 < 3) {
                        this.setState({p1Score: parseInt(this.state.p1Score) - 38})
                    }
                    this.setState({p119: parseInt(this.state.p119) - 2})
                } else if (this.state.p119 === 4) {
                    if (this.state.p219 < 3) {                        
                        this.setState({p1Score: parseInt(this.state.p1Score) - 19})
                    }
                    this.setState({p119: 2})
                } else if (this.state.p119 < 4) {
                    this.setState({p119: parseInt(this.state.p119) - 2 })
                }
                break;
            case "191":
                if (this.state.p119 === 4) {
                        if (this.state.p219 < 3) {                        
                            this.setState({p1Score: parseInt(this.state.p1Score) - 19})
                        }
                        this.setState({p119: 3})
                    } else if (this.state.p119 < 4) {
                        this.setState({p119: parseInt(this.state.p119) - 1 })
                    }
                break;
            case "183":
                if (this.state.p118 >= 6) {
                    if (this.state.p218 < 3) {
                        this.setState({p1Score: parseInt(this.state.p1Score) - 54})
                    }
                    this.setState({p118: parseInt(this.state.p118) - 3})
                } else if (this.state.p118 === 5) {
                    if (this.state.p218 < 3) {                        
                        this.setState({p1Score: parseInt(this.state.p1Score) - 36})
                    }
                    this.setState({p118: 2})
                } else if (this.state.p118 === 4) {
                    if (this.state.p218 < 3) {                        
                        this.setState({p1Score: parseInt(this.state.p1Score) - 18})
                    }
                    this.setState({p118: 1})
                } else if (this.state.p118 < 4) {
                    this.setState({p118: parseInt(this.state.p118) - 3 })
                }
                break;
            case "182":
                if (this.state.p118 >= 5) {
                    if (this.state.p218 < 3) {
                        this.setState({p1Score: parseInt(this.state.p1Score) - 36})
                    }
                    this.setState({p118: parseInt(this.state.p118) - 2})
                } else if (this.state.p118 === 4) {
                    if (this.state.p218 < 3) {                        
                        this.setState({p1Score: parseInt(this.state.p1Score) - 18})
                    }
                    this.setState({p118: 2})
                } else if (this.state.p118 < 4) {
                    this.setState({p118: parseInt(this.state.p118) - 2 })
                }
                break;
            case "181":
                if (this.state.p118 === 4) {
                        if (this.state.p218 < 3) {                        
                            this.setState({p1Score: parseInt(this.state.p1Score) - 18})
                        }
                        this.setState({p118: 3})
                    } else if (this.state.p118 < 4) {
                        this.setState({p118: parseInt(this.state.p118) - 1 })
                    }
                break;
            case "173":
                if (this.state.p117 >= 6) {
                    if (this.state.p217 < 3) {
                        this.setState({p1Score: parseInt(this.state.p1Score) - 51})
                    }
                    this.setState({p117: parseInt(this.state.p117) - 3})
                } else if (this.state.p117 === 5) {
                    if (this.state.p217 < 3) {                        
                        this.setState({p1Score: parseInt(this.state.p1Score) - 34})
                    }
                    this.setState({p117: 2})
                } else if (this.state.p117 === 4) {
                    if (this.state.p217 < 3) {                        
                        this.setState({p1Score: parseInt(this.state.p1Score) - 17})
                    }
                    this.setState({p117: 1})
                } else if (this.state.p117 < 4) {
                    this.setState({p117: parseInt(this.state.p117) - 3 })
                }
                break;
            case "172":
                if (this.state.p117 >= 5) {
                    if (this.state.p217 < 3) {
                        this.setState({p1Score: parseInt(this.state.p1Score) - 34})
                    }
                    this.setState({p117: parseInt(this.state.p117) - 2})
                } else if (this.state.p117 === 4) {
                    if (this.state.p217 < 3) {                        
                        this.setState({p1Score: parseInt(this.state.p1Score) - 17})
                    }
                    this.setState({p117: 2})
                } else if (this.state.p117 < 4) {
                    this.setState({p117: parseInt(this.state.p117) - 2 })
                }
                break;
            case "171":
                if (this.state.p117 === 4) {
                        if (this.state.p217 < 3) {                        
                            this.setState({p1Score: parseInt(this.state.p1Score) - 17})
                        }
                        this.setState({p117: 3})
                    } else if (this.state.p117 < 4) {
                        this.setState({p117: parseInt(this.state.p117) - 1 })
                    }
                break;
            case "163":
                if (this.state.p116 >= 6) {
                    if (this.state.p216 < 3) {
                        this.setState({p1Score: parseInt(this.state.p1Score) - 48})
                    }
                    this.setState({p116: parseInt(this.state.p116) - 3})
                } else if (this.state.p116 === 5) {
                    if (this.state.p216 < 3) {                        
                        this.setState({p1Score: parseInt(this.state.p1Score) - 32})
                    }
                    this.setState({p116: 2})
                } else if (this.state.p116 === 4) {
                    if (this.state.p216 < 3) {                        
                        this.setState({p1Score: parseInt(this.state.p1Score) - 16})
                    }
                    this.setState({p116: 1})
                } else if (this.state.p116 < 4) {
                    this.setState({p116: parseInt(this.state.p116) - 3 })
                }
                break;
            case "162":
                if (this.state.p116 >= 5) {
                    if (this.state.p216 < 3) {
                        this.setState({p1Score: parseInt(this.state.p1Score) - 32})
                    }
                    this.setState({p116: parseInt(this.state.p116) - 2})
                } else if (this.state.p116 === 4) {
                    if (this.state.p216 < 3) {                        
                        this.setState({p1Score: parseInt(this.state.p1Score) - 16})
                    }
                    this.setState({p116: 2})
                } else if (this.state.p116 < 4) {
                    this.setState({p116: parseInt(this.state.p116) - 2 })
                }
                break;
            case "161":
                if (this.state.p116 === 4) {
                        if (this.state.p216 < 3) {                        
                            this.setState({p1Score: parseInt(this.state.p1Score) - 16})
                        }
                        this.setState({p116: 3})
                    } else if (this.state.p116 < 4) {
                        this.setState({p116: parseInt(this.state.p116) - 1 })
                    }
                break;
            case "153":
                if (this.state.p115 >= 6) {
                    if (this.state.p215 < 3) {
                        this.setState({p1Score: parseInt(this.state.p1Score) - 45})
                    }
                    this.setState({p115: parseInt(this.state.p115) - 3})
                } else if (this.state.p115 === 5) {
                    if (this.state.p215 < 3) {                        
                        this.setState({p1Score: parseInt(this.state.p1Score) - 30})
                    }
                    this.setState({p115: 2})
                } else if (this.state.p115 === 4) {
                    if (this.state.p215 < 3) {                        
                        this.setState({p1Score: parseInt(this.state.p1Score) - 15})
                    }
                    this.setState({p115: 1})
                } else if (this.state.p115 < 4) {
                    this.setState({p115: parseInt(this.state.p115) - 3 })
                }
                break;
            case "152":
                if (this.state.p115 >= 5) {
                    if (this.state.p215 < 3) {
                        this.setState({p1Score: parseInt(this.state.p1Score) - 30})
                    }
                    this.setState({p115: parseInt(this.state.p115) - 2})
                } else if (this.state.p115 === 4) {
                    if (this.state.p215 < 3) {                        
                        this.setState({p1Score: parseInt(this.state.p1Score) - 15})
                    }
                    this.setState({p115: 2})
                } else if (this.state.p115 < 4) {
                    this.setState({p115: parseInt(this.state.p115) - 2 })
                }
                break;
            case "151":
                if (this.state.p115 === 4) {
                        if (this.state.p215 < 3) {                        
                            this.setState({p1Score: parseInt(this.state.p1Score) - 15})
                        }
                        this.setState({p115: 3})
                    } else if (this.state.p115 < 4) {
                        this.setState({p115: parseInt(this.state.p115) - 1 })
                    }
                break;
            case "252":
                if (this.state.p125 >= 5) {
                    if (this.state.p225 < 3) {
                        this.setState({p1Score: parseInt(this.state.p1Score) - 50})
                    }
                    this.setState({p125: parseInt(this.state.p125) - 2})
                } else if (this.state.p125 === 4) {
                    if (this.state.p225 < 3) {                        
                        this.setState({p1Score: parseInt(this.state.p1Score) - 25})
                    }
                    this.setState({p125: 2})
                } else if (this.state.p125 < 4) {
                    this.setState({p125: parseInt(this.state.p125) - 2 })
                }
                break;
            case "251":
                if (this.state.p125 === 4) {
                        if (this.state.p225 < 3) {                        
                            this.setState({p1Score: parseInt(this.state.p1Score) - 25})
                        }
                        this.setState({p125: 3})
                    } else if (this.state.p125 < 4) {
                        this.setState({p125: parseInt(this.state.p125) - 1 })
                    }
                break;
        }
        if (this.state.p1Throws >= 0) {
            this.setState({p1Throws: parseInt(this.state.p1Throws) - 1})
        }
    }

    p2UndoSwitch() {
        let logLength = this.state.throwLog.length;
        let lastThrowNumber = logLength - 1;
        let lastThrow = this.state.throwLog[lastThrowNumber];
        let otherThrower = "p1";
        switch(lastThrow) {
            case "203":
                if (this.state.p220 >= 6) {
                    if (this.state.p120 < 3) {
                        this.setState({p2Score: parseInt(this.state.p2Score) - 60})
                    }
                    this.setState({p220: parseInt(this.state.p220) - 3})
                } else if (this.state.p220 === 5) {
                    if (this.state.p120 < 3) {                        
                        this.setState({p2Score: parseInt(this.state.p2Score) - 40})
                    }
                    this.setState({p220: 2})
                } else if (this.state.p220 === 4) {
                    if (this.state.p120 < 3) {                        
                        this.setState({p2Score: parseInt(this.state.p2Score) - 20})
                    }
                    this.setState({p220: 1})
                } else if (this.state.p220 < 4) {
                    this.setState({p220: parseInt(this.state.p220) - 3 })
                }
                break;
            case "202":
                if (this.state.p220 >= 5) {
                    if (this.state.p120 < 3) {
                        this.setState({p2Score: parseInt(this.state.p2Score) - 40})
                    }
                    this.setState({p220: parseInt(this.state.p220) - 2})
                } else if (this.state.p220 === 4) {
                    if (this.state.p120 < 3) {                        
                        this.setState({p2Score: parseInt(this.state.p2Score) - 20})
                    }
                    this.setState({p220: 2})
                } else if (this.state.p220 < 4) {
                    this.setState({p220: parseInt(this.state.p220) - 2 })
                }
                break;
            case "201":
                if (this.state.p220 === 4) {
                        if (this.state.p120 < 3) {                        
                            this.setState({p2Score: parseInt(this.state.p2Score) - 20})
                        }
                        this.setState({p220: 3})
                    } else if (this.state.p220 < 4) {
                        this.setState({p220: parseInt(this.state.p220) - 1 })
                    }
                break;
            case "193":
                if (this.state.p219 >= 6) {
                    if (this.state.p119 < 3) {
                        this.setState({p2Score: parseInt(this.state.p2Score) - 57})
                    }
                    this.setState({p219: parseInt(this.state.p219) - 3})
                } else if (this.state.p219 === 5) {
                    if (this.state.p119 < 3) {                        
                        this.setState({p2Score: parseInt(this.state.p2Score) - 38})
                    }
                    this.setState({p219: 2})
                } else if (this.state.p219 === 4) {
                    if (this.state.p119 < 3) {                        
                        this.setState({p2Score: parseInt(this.state.p2Score) - 19})
                    }
                    this.setState({p219: 1})
                } else if (this.state.p219 < 4) {
                    this.setState({p219: parseInt(this.state.p219) - 3 })
                }
                break;
            case "192":
                if (this.state.p219 >= 5) {
                    if (this.state.p119 < 3) {
                        this.setState({p2Score: parseInt(this.state.p2Score) - 38})
                    }
                    this.setState({p219: parseInt(this.state.p219) - 2})
                } else if (this.state.p219 === 4) {
                    if (this.state.p119 < 3) {                        
                        this.setState({p2Score: parseInt(this.state.p2Score) - 19})
                    }
                    this.setState({p219: 2})
                } else if (this.state.p219 < 4) {
                    this.setState({p219: parseInt(this.state.p219) - 2 })
                }
                break;
            case "191":
                if (this.state.p219 === 4) {
                        if (this.state.p119 < 3) {                        
                            this.setState({p2Score: parseInt(this.state.p2Score) - 19})
                        }
                        this.setState({p219: 3})
                    } else if (this.state.p219 < 4) {
                        this.setState({p219: parseInt(this.state.p219) - 1 })
                    }
                break;
            case "183":
                if (this.state.p218 >= 6) {
                    if (this.state.p118 < 3) {
                        this.setState({p2Score: parseInt(this.state.p2Score) - 54})
                    }
                    this.setState({p218: parseInt(this.state.p218) - 3})
                } else if (this.state.p218 === 5) {
                    if (this.state.p118 < 3) {                        
                        this.setState({p2Score: parseInt(this.state.p2Score) - 36})
                    }
                    this.setState({p218: 2})
                } else if (this.state.p218 === 4) {
                    if (this.state.p118 < 3) {                        
                        this.setState({p2Score: parseInt(this.state.p2Score) - 18})
                    }
                    this.setState({p218: 1})
                } else if (this.state.p218 < 4) {
                    this.setState({p218: parseInt(this.state.p218) - 3 })
                }
                break;
            case "182":
                if (this.state.p218 >= 5) {
                    if (this.state.p118 < 3) {
                        this.setState({p2Score: parseInt(this.state.p2Score) - 36})
                    }
                    this.setState({p218: parseInt(this.state.p218) - 2})
                } else if (this.state.p218 === 4) {
                    if (this.state.p118 < 3) {                        
                        this.setState({p2Score: parseInt(this.state.p2Score) - 18})
                    }
                    this.setState({p218: 2})
                } else if (this.state.p218 < 4) {
                    this.setState({p218: parseInt(this.state.p218) - 2 })
                }
                break;
            case "181":
                if (this.state.p218 === 4) {
                        if (this.state.p118 < 3) {                        
                            this.setState({p2Score: parseInt(this.state.p2Score) - 18})
                        }
                        this.setState({p218: 3})
                    } else if (this.state.p218 < 4) {
                        this.setState({p218: parseInt(this.state.p218) - 1 })
                    }
                break;
            case "173":
                if (this.state.p217 >= 6) {
                    if (this.state.p117 < 3) {
                        this.setState({p2Score: parseInt(this.state.p2Score) - 51})
                    }
                    this.setState({p217: parseInt(this.state.p217) - 3})
                } else if (this.state.p217 === 5) {
                    if (this.state.p117 < 3) {                        
                        this.setState({p2Score: parseInt(this.state.p2Score) - 34})
                    }
                    this.setState({p217: 2})
                } else if (this.state.p217 === 4) {
                    if (this.state.p117 < 3) {                        
                        this.setState({p2Score: parseInt(this.state.p2Score) - 17})
                    }
                    this.setState({p217: 1})
                } else if (this.state.p217 < 4) {
                    this.setState({p217: parseInt(this.state.p217) - 3 })
                }
                break;
            case "172":
                if (this.state.p217 >= 5) {
                    if (this.state.p117 < 3) {
                        this.setState({p2Score: parseInt(this.state.p2Score) - 34})
                    }
                    this.setState({p217: parseInt(this.state.p217) - 2})
                } else if (this.state.p217 === 4) {
                    if (this.state.p117 < 3) {                        
                        this.setState({p2Score: parseInt(this.state.p2Score) - 17})
                    }
                    this.setState({p217: 2})
                } else if (this.state.p217 < 4) {
                    this.setState({p217: parseInt(this.state.p217) - 2 })
                }
                break;
            case "171":
                if (this.state.p217 === 4) {
                        if (this.state.p117 < 3) {                        
                            this.setState({p2Score: parseInt(this.state.p2Score) - 17})
                        }
                        this.setState({p217: 3})
                    } else if (this.state.p217 < 4) {
                        this.setState({p217: parseInt(this.state.p217) - 1 })
                    }
                break;
            case "163":
                if (this.state.p216 >= 6) {
                    if (this.state.p116 < 3) {
                        this.setState({p2Score: parseInt(this.state.p2Score) - 48})
                    }
                    this.setState({p216: parseInt(this.state.p216) - 3})
                } else if (this.state.p216 === 5) {
                    if (this.state.p116 < 3) {                        
                        this.setState({p2Score: parseInt(this.state.p2Score) - 32})
                    }
                    this.setState({p216: 2})
                } else if (this.state.p216 === 4) {
                    if (this.state.p116 < 3) {                        
                        this.setState({p2Score: parseInt(this.state.p2Score) - 16})
                    }
                    this.setState({p216: 1})
                } else if (this.state.p216 < 4) {
                    this.setState({p216: parseInt(this.state.p216) - 3 })
                }
                break;
            case "162":
                if (this.state.p216 >= 5) {
                    if (this.state.p116 < 3) {
                        this.setState({p2Score: parseInt(this.state.p2Score) - 32})
                    }
                    this.setState({p216: parseInt(this.state.p216) - 2})
                } else if (this.state.p216 === 4) {
                    if (this.state.p116 < 3) {                        
                        this.setState({p2Score: parseInt(this.state.p2Score) - 16})
                    }
                    this.setState({p216: 2})
                } else if (this.state.p216 < 4) {
                    this.setState({p216: parseInt(this.state.p216) - 2 })
                }
                break;
            case "161":
                if (this.state.p216 === 4) {
                        if (this.state.p116 < 3) {                        
                            this.setState({p2Score: parseInt(this.state.p2Score) - 16})
                        }
                        this.setState({p216: 3})
                    } else if (this.state.p216 < 4) {
                        this.setState({p216: parseInt(this.state.p216) - 1 })
                    }
                break;
            case "153":
                if (this.state.p215 >= 6) {
                    if (this.state.p115 < 3) {
                        this.setState({p2Score: parseInt(this.state.p2Score) - 45})
                    }
                    this.setState({p215: parseInt(this.state.p215) - 3})
                } else if (this.state.p215 === 5) {
                    if (this.state.p115 < 3) {                        
                        this.setState({p2Score: parseInt(this.state.p2Score) - 30})
                    }
                    this.setState({p215: 2})
                } else if (this.state.p215 === 4) {
                    if (this.state.p115 < 3) {                        
                        this.setState({p2Score: parseInt(this.state.p2Score) - 15})
                    }
                    this.setState({p215: 1})
                } else if (this.state.p215 < 4) {
                    this.setState({p215: parseInt(this.state.p215) - 3 })
                }
                break;
            case "152":
                if (this.state.p215 >= 5) {
                    if (this.state.p115 < 3) {
                        this.setState({p2Score: parseInt(this.state.p2Score) - 30})
                    }
                    this.setState({p215: parseInt(this.state.p215) - 2})
                } else if (this.state.p215 === 4) {
                    if (this.state.p115 < 3) {                        
                        this.setState({p2Score: parseInt(this.state.p2Score) - 15})
                    }
                    this.setState({p215: 2})
                } else if (this.state.p215 < 4) {
                    this.setState({p215: parseInt(this.state.p215) - 2 })
                }
                break;
            case "151":
                if (this.state.p215 === 4) {
                        if (this.state.p115 < 3) {                        
                            this.setState({p2Score: parseInt(this.state.p2Score) - 15})
                        }
                        this.setState({p215: 3})
                    } else if (this.state.p215 < 4) {
                        this.setState({p215: parseInt(this.state.p215) - 1 })
                    }
                break;
            case "252":
                if (this.state.p225 >= 5) {
                    if (this.state.p125 < 3) {
                        this.setState({p2Score: parseInt(this.state.p2Score) - 50})
                    }
                    this.setState({p225: parseInt(this.state.p225) - 2})
                } else if (this.state.p225 === 4) {
                    if (this.state.p125 < 3) {                        
                        this.setState({p2Score: parseInt(this.state.p2Score) - 25})
                    }
                    this.setState({p225: 2})
                } else if (this.state.p225 < 4) {
                    this.setState({p225: parseInt(this.state.p225) - 2 })
                }
                break;
            case "251":
                if (this.state.p225 === 4) {
                        if (this.state.p125 < 3) {                        
                            this.setState({p2Score: parseInt(this.state.p2Score) - 25})
                        }
                        this.setState({p225: 3})
                    } else if (this.state.p225 < 4) {
                        this.setState({p225: parseInt(this.state.p225) - 1 })
                    }
                break;
        }
        if (this.state.p2Throws >= 0) {
            this.setState({p2Throws: parseInt(this.state.p2Throws) - 1})    
        }    
    }

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
                    this.setThrowerNumber(thrower, number, multiplier);
                    this.setPlayerScore(thrower, number, 1);                
                } else {
                    this.setThrowerNumber(thrower, number, multiplier);                    
                }
            }
        } else if (numberState === 2 ) {
            if (multiplier === 1) {
                this.setThrowerNumber(thrower, number, multiplier);            
            } else if (multiplier === 2) {
                if (otherThrowerState < 3) {
                    this.setThrowerNumber(thrower, number, multiplier);
                    this.setPlayerScore(thrower, number, 1);                                                   
                } else {
                    this.setThrowerNumber(thrower, number, multiplier);                    
                }
            } else if (multiplier === 3 ) {
                if (otherThrowerState < 3) {
                    this.setThrowerNumber(thrower, number, multiplier);
                    this.setPlayerScore(thrower, number, 2);                                                   
                } else {
                    this.setThrowerNumber(thrower, number, multiplier);                    
                }
            }
        } else if (numberState >= 3) {
            if (multiplier === 1 && otherThrowerState < 3) {
                this.setThrowerNumber(thrower, number, multiplier);                                    
                this.setPlayerScore(thrower, number, multiplier);            
            } else if (multiplier === 2 && otherThrowerState < 3) {
                this.setThrowerNumber(thrower, number, multiplier);                    
                this.setPlayerScore(thrower, number, multiplier);                                                   
            } else if (multiplier === 3 && otherThrowerState < 3) {
                this.setThrowerNumber(thrower, number, multiplier);                    
                this.setPlayerScore(thrower, number, multiplier);                                                   
            }
        }
        
        this.addThrow(this.state.activeThrower);
        this.addMarks(multiplier);
        this.addToLog(number, multiplier);
        this.gameOverCheck();        
        this.setThrowNumber(parseInt(this.state.activeThrows + 1));
        this.checkThrower();
    }

    miss() {
        this.addThrow(this.state.activeThrower);
        this.setThrowNumber(parseInt(this.state.activeThrows + 1));
        this.addToLog("mi", "ss");        
        this.checkThrower();
    }

    checkThrower() {
        if (this.state.activeThrows === 2 ) {
            this.allStarPoints();
            if (this.state.activeThrower === "p1") {                
                this.setActiveThrower("p2");
            } else {        
                this.setActiveThrower("p1");
            }
            this.setThrowNumber(0);
            this.resetMarks();
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
        if (this.state.p120 >= 3 && this.state.p119 >= 3 && this.state.p118 >= 3 && this.state.p117 >= 3 && this.state.p116 >= 3 && this.state.p115 >= 3 && this.state.p125 >= 3 && this.state.p1Score >= this.state.p2Score ) {
            this.gameStateChange("p1"); 
        } else if (this.state.p220 >= 3 && this.state.p219 >= 3 && this.state.p218 >= 3 && this.state.p217 >= 3 && this.state.p216 >= 3 && this.state.p215 >= 3 && this.state.p225 >= 3 && this.state.p2Score >= this.state.p1Score ) {
            this.gameStateChange("p2");
        }
        }, 500);
    }

    addThrow(thrower) {
        let playerThrows = `${thrower}Throws`;
        let playerThrowsState = eval("this.state." + playerThrows);  
        this.setState ({[playerThrows]: parseInt([playerThrowsState]) + 1});
    }

    addMarks(number) {
        let marks = parseInt(this.state.activeMarks);
        let newMark = parseInt(number)
        this.setState({activeMarks: marks + newMark})
    }

    resetMarks() {
        setTimeout(() => {
        this.setState({activeMarks: 0})}, 1000);
    }

    allStarPoints() {
        let marks = parseInt(this.state.activeMarks);
        if (this.state.activeThrower === "p1") {
            if (marks === 5) {
                this.setState({p15m: parseInt(this.state.p15m) + 1});
            } else if (marks === 6) {
                this.setState({p16m: parseInt(this.state.p16m) + 1});
            } else if (marks === 7) {
                this.setState({p17m: parseInt(this.state.p17m) + 1});
            } else if (marks === 8) {
                this.setState({p18m: parseInt(this.state.p18m) + 1});
            } else if (marks === 9) {
                this.setState({p19m: parseInt(this.state.p19m) + 1});
            }
        } else {
            if (marks === 5) {
                this.setState({p25m: parseInt(this.state.p25m) + 1});
            } else if (marks === 6) {
                this.setState({p26m: parseInt(this.state.p26m) + 1});
            } else if (marks === 7) {
                this.setState({p27m: parseInt(this.state.p27m) + 1});
            } else if (marks === 8) {
                this.setState({p28m: parseInt(this.state.p28m) + 1});
            } else if (marks === 9) {
                this.setState({p29m: parseInt(this.state.p29m) + 1});
            }
        }
    }

    p120Progress() {
        if (this.state.p120 === 1) {
            return (<img className="mark" src="assets/images/1-mark.png" />)
        } else if (this.state.p120 === 2) {
            return (<img className="mark" src="assets/images/2-mark.png" />)        
        } else if (this.state.p120 >= 3) {
            return (<img className="mark" src="assets/images/3-mark.png" />)    
        }
    }    
    
    p119Progress() {
        if (this.state.p119 === 1) {
            return (<img className="mark" src="assets/images/1-mark.png" />)
        } else if (this.state.p119 === 2) {
            return (<img className="mark" src="assets/images/2-mark.png" />)        
        } else if (this.state.p119 >= 3) {
            return (<img className="mark" src="assets/images/3-mark.png" />)    
        }
    }

    p118Progress() {
        if (this.state.p118 === 1) {
            return (<img className="mark" src="assets/images/1-mark.png" />)
        } else if (this.state.p118 === 2) {
            return (<img className="mark" src="assets/images/2-mark.png" />)        
        } else if (this.state.p118 >= 3) {
            return (<img className="mark" src="assets/images/3-mark.png" />)    
        }
    }
     
    p117Progress() {
        if (this.state.p117 === 1) {
            return (<img className="mark" src="assets/images/1-mark.png" />)
        } else if (this.state.p117 === 2) {
            return (<img className="mark" src="assets/images/2-mark.png" />)        
        } else if (this.state.p117 >= 3) {
            return (<img className="mark" src="assets/images/3-mark.png" />)    
        }        
    }

    p116Progress() {
        if (this.state.p116 === 1) {
            return (<img className="mark" src="assets/images/1-mark.png" />)
        } else if (this.state.p116 === 2) {
            return (<img className="mark" src="assets/images/2-mark.png" />)        
        } else if (this.state.p116 >= 3) {
            return (<img className="mark" src="assets/images/3-mark.png" />)    
        }        
    }

    p115Progress() {
        if (this.state.p115 === 1) {
            return (<img className="mark" src="assets/images/1-mark.png" />)
        } else if (this.state.p115 === 2) {
            return (<img className="mark" src="assets/images/2-mark.png" />)        
        } else if (this.state.p115 >= 3) {
            return (<img className="mark" src="assets/images/3-mark.png" />)    
        }        
    }

    p125Progress() {
        if (this.state.p125 === 1) {
            return (<img className="mark" src="assets/images/1-mark.png" />)
        } else if (this.state.p125 === 2) {
            return (<img className="mark" src="assets/images/2-mark.png" />)        
        } else if (this.state.p125 >= 3) {
            return (<img className="mark" src="assets/images/3-mark.png" />)    
        }        
    }

    p220Progress() {
        if (this.state.p220 === 1) {
            return (<img className="mark" src="assets/images/1-mark.png" />)
        } else if (this.state.p220 === 2) {
            return (<img className="mark" src="assets/images/2-mark.png" />)        
        } else if (this.state.p220 >= 3) {
            return (<img className="mark" src="assets/images/3-mark.png" />)    
        }
    }    
    
    p219Progress() {
        if (this.state.p219 === 1) {
            return (<img className="mark" src="assets/images/1-mark.png" />)
        } else if (this.state.p219 === 2) {
            return (<img className="mark" src="assets/images/2-mark.png" />)        
        } else if (this.state.p219 >= 3) {
            return (<img className="mark" src="assets/images/3-mark.png" />)    
        }
    }

    p218Progress() {
        if (this.state.p218 === 1) {
            return (<img className="mark" src="assets/images/1-mark.png" />)
        } else if (this.state.p218 === 2) {
            return (<img className="mark" src="assets/images/2-mark.png" />)        
        } else if (this.state.p218 >= 3) {
            return (<img className="mark" src="assets/images/3-mark.png" />)    
        }
    }
     
    p217Progress() {
        if (this.state.p217 === 1) {
            return (<img className="mark" src="assets/images/1-mark.png" />)
        } else if (this.state.p217 === 2) {
            return (<img className="mark" src="assets/images/2-mark.png" />)        
        } else if (this.state.p217 >= 3) {
            return (<img className="mark" src="assets/images/3-mark.png" />)    
        }        
    }

    p216Progress() {
        if (this.state.p216 === 1) {
            return (<img className="mark" src="assets/images/1-mark.png" />)
        } else if (this.state.p216 === 2) {
            return (<img className="mark" src="assets/images/2-mark.png" />)        
        } else if (this.state.p216 >= 3) {
            return (<img className="mark" src="assets/images/3-mark.png" />)    
        }        
    }

    p215Progress() {
        if (this.state.p215 === 1) {
            return (<img className="mark" src="assets/images/1-mark.png" />)
        } else if (this.state.p215 === 2) {
            return (<img className="mark" src="assets/images/2-mark.png" />)        
        } else if (this.state.p215 >= 3) {
            return (<img className="mark" src="assets/images/3-mark.png" />)    
        }        
    }

    p225Progress() {
        if (this.state.p225 === 1) {
            return (<img className="mark" src="assets/images/1-mark.png" />)
        } else if (this.state.p225 === 2) {
            return (<img className="mark" src="assets/images/2-mark.png" />)        
        } else if (this.state.p225 >= 3) {
            return (<img className="mark" src="assets/images/3-mark.png" />)    
        }        
    }

    render() {
        return (
            <div>
                {this.conditionalRender()}
            </div>
        )
    }
}
