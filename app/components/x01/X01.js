import React, {Component} from "react";
import GamePick from "./GamePick.js";
import GameOptions from "./GameOptions.js";
import Scoreboard from "./Scoreboard.js";
import Results from "./Results.js";

export default class X01 extends Component {
    constructor() {
        super();
        this.state = {
            activeThrower: "p1",
            activeThrows: 0,
            x01Game: {},
            gameOptions: {},
            gameState: "pick",
            gameWinner: {},
            throwLog: [],
            
            p1DoubleIn: false,
            p1Score: 0,
            p1Throws: 0,
            p1RoundStartScore: [],
            
            p2DoubleIn: false,
            p2Score: 0,
            p2Throws: 0,
            p2RoundStartScore: [],                        
        }

        //Binding functions to change the states       
        this.doubleInOptionsCheck = this.doubleInOptionsCheck.bind(this);
        this.doubleInTrue = this.doubleInTrue.bind(this);
        this.gameReset = this.gameReset.bind(this);
        this.conditionalRender = this.conditionalRender.bind(this);
        this.setThrowNumber = this.setThrowNumber.bind(this);    
        this.setActiveThrower = this.setActiveThrower.bind(this);
        this.addToRoundStartScore = this.addToRoundStartScore.bind(this);
        this.addToLog = this.addToLog.bind(this);
        this.score = this.score.bind(this);
        this.miss = this.miss.bind(this);
        this.checkThrower = this.checkThrower.bind(this);
        this.renderP1Score = this.renderP1Score.bind(this);
        this.renderP2Score = this.renderP2Score.bind(this);   
        this.gameStateChange = this.gameStateChange.bind(this);
        this.addThrow = this.addThrow.bind(this);
        this.undo = this.undo.bind(this);
        this.undoSwitch = this.undoSwitch.bind(this);
        this.setX01Game = this.setX01Game.bind(this);
        this.setGameOptions = this.setGameOptions.bind(this);
        this.setOriginalScore = this.setOriginalScore.bind(this);
        this.resetThrowLog = this.resetThrowLog.bind(this);
   
    }

    setX01Game(x01Game) {
        this.setState({x01Game});
        this.setState({gameState: "options"});
    }

    setGameOptions(gameOptions) {
        this.setState({gameOptions});
        this.setState({gameState: "playing"});
    }

    setOriginalScore(score) {
        this.setState({p1Score: score});
        this.setState({p2Score: score});
    }

    resetThrowLog() {
        this.setState({throwLog: []});
    }

    doubleInOptionsCheck() {
        if (this.state.gameOptions === "siso" || this.state.gameOptions === "sido") {
            this.setState({p1DoubleIn: true});
            this.setState({p2DoubleIn: true});
        }
    }

    doubleInTrue(player) {
        if (player === "p1") {
            this.setState({p1DoubleIn: true});
        } else {
            this.setState({p2DoubleIn: true});
        }
    }

    gameReset() {
        this.setState({activeThrower: "p1"});
        this.setState({activeThrows: 0});
        this.setState({activeMarks: 0});
        this.setState({gameState: "playing"});
        this.setState({gameWinner: {}}); 
        
        this.setState({p1Score: 0});
        this.setState({p1Throws: 0});
        this.setState({p1RoundStartScore: []});

        this.setState({p2Score: 0});
        this.setState({p2Throws: 0});
        this.setState({p2RoundStartScore: []})
        
    }

    conditionalRender() {
        if (this.state.gameState === "pick") {
            return (
                <GamePick
                    setX01Game={this.setX01Game}
                />
            )    
        } else if (this.state.gameState === "playing") {
            return (
                <Scoreboard 
                    score={this.score}
                    miss={this.miss}
                    activeThrower={this.state.activeThrower}
                    activeThrows={this.state.activeThrows}
                    x01Game={this.state.x01Game}
                    playersRender={this.playersRender}
                    renderP1Score={this.renderP1Score}
                    renderP2Score={this.renderP2Score}
                    undo={this.undo}  
                    doubleInOptionsCheck={this.doubleInOptionsCheck}  
                    setOriginalScore={this.setOriginalScore}   
                    resetThrowLog={this.resetThrowLog}     
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
        } else if (this.state.gameState === "options") {
            return(
                <GameOptions
                    setGameOptions={this.setGameOptions}
                />
            )
        }
    }

    setThrowNumber(activeThrows) {
        this.setState({ activeThrows }) 
    }

    setActiveThrower(activeThrower) {
        this.setState({ activeThrower });
    }

    addToRoundStartScore(player, score) {
        let roundScoresArray;

        if (player === "p1") {
            roundScoresArray = this.state.p1RoundStartScore;
            roundScoresArray.push(score);
            this.setState({p1RoundStartScore: roundScoresArray});
        } else {
            roundScoresArray = this.state.p2RoundStartScore;
            roundScoresArray.push(score);
            this.setState({p2RoundStartScore: roundScoresArray});
        }
    }


    addToLog(number, multiplier) {
        let loggedThrow = `d${number}${multiplier}`;
        let loggedArray = this.state.throwLog;
        loggedArray.push(loggedThrow);
        this.setState ({throwLog: loggedArray});
    }

    
    score(thrower, number, multiplier) {
        if (multiplier === 2) {
            this.doubleInTrue(thrower);
        }

        let playerScore = `${thrower}Score`;
        let playerThrows = `${thrower}Throws`;
        let playerStartScore = `${thrower}RoundStartScore`; 

        let playerScoreState = eval(`this.state.${playerScore}`);
        let playerScoreNumber = playerScoreState;
        let throwState = eval(`this.state.${playerThrows}`);   
        let doubleInBoolean = eval(`this.state.${thrower}DoubleIn`);
        let roundStartScoreState = eval(`this.state.${playerStartScore}`);
        let scoresArray = roundStartScoreState;
        let startScore = scoresArray[scoresArray.length - 1];
          
        if (doubleInBoolean || multiplier === 2) {
            let newScore = playerScoreNumber - (parseInt(number) * parseInt(multiplier));
            if (newScore > 1 ) {
                this.setState({[playerScore]: newScore});
            } else if (newScore === 0 && multiplier === 2 ) {
                this.setState({[playerScore]: newScore});
                this.gameStateChange(thrower);
            } else if (newScore === 0 && this.state.gameOptions === "siso") {
                this.setState({[playerScore]: newScore});
                this.gameStateChange(thrower);
            } else if (newScore === 1 && this.state.gameOptions === "siso") {
                this.setState({[playerScore]: newScore});
            } else {
                if (thrower === "p1") {
                    this.setState({activeThrower: "p2"});
                    this.setThrowNumber(0);
                } else {
                    this.setState({activeThrower: "p2"});
                    this.setThrowNumber(0);
                }
                this.setState({[playerScore]: startScore});
                scoresArray.push(startScore);
                this.setState({[playerStartScore]: scoresArray});
            }   
        }

        this.addThrow(this.state.activeThrower);
        this.addToLog(number, multiplier);
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
            if (this.state.activeThrower === "p1") {
                this.addToRoundStartScore("p1", this.state.p1Score);            
                this.setActiveThrower("p2");
                this.setThrowNumber(0);
            } else {        
                this.addToRoundStartScore("p2", this.state.p2Score);                            
                this.setActiveThrower("p1");
                this.setThrowNumber(0);
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

    addThrow(thrower) {
        let playerThrows = `${thrower}Throws`;
        let playerThrowsState = eval("this.state." + playerThrows);  
        this.setState ({[playerThrows]: parseInt([playerThrowsState]) + 1});
    }

    undo() {
        if (this.state.activeThrows === 0 ) {
            this.setThrowNumber(2);
            if (this.state.activeThrower === "p1") {
                this.setActiveThrower("p2");
                this.undoSwitch("p2");
            } else {
                this.setActiveThrower("p1");
                this.undoSwitch("p1");
            }
        } else {
            this.setThrowNumber(parseInt(this.state.activeThrows) - 1 );
            if (this.state.activeThrower === "p1") {
            this.undoSwitch("p1");            
            } else {
                this.undoSwitch("p2");
            }
        } 

        let loggedArray = this.state.throwLog;
        loggedArray.pop();
        this.setState ({throwLog: loggedArray});        
    }

    undoSwitch(player) {
        let logLength = this.state.throwLog.length;
        let lastThrowNumber = logLength - 1;
        let lastThrow = this.state.throwLog[lastThrowNumber];
        let otherThrower = "";
        
        if (player === "p1") {
            otherThrower = "p2";
        } else {
            otherThrower = "p1";
        }

        let playerScore = `${player}Score`
        let playerScoreState = eval(`this.state.${playerScore}`);
        let playerThrows = `${player}Throws`;
        let throwsState = eval(`this.state.${player}Throws`);
        
        if (throwsState > 0) {        
        switch(lastThrow) {
            case "d203":
                
                break;
            case "d202":
               
                break;
            case "d201":
                
                break;
            case "d193":
                
                break;
            case "d192":
                
                break;
            case "d191":
                
                break;
            case "d183":
               
                break;
            case "d182":
                
                break;
            case "d181":
               
                break;
            case "d173":
               
                break;
            case "d172":
                
                break;
            case "d171":
               
                break;
            case "d163":
                
                break;
            case "d162":
               
                break;
            case "d161":
               
                break;
            case "d153":
               
                break;
            case "d152":
               
                break;
            case "d151":
               
                break;
            case "d252":
                
                break;
            case "d251":
               
                break;
        }
            this.setState({[playerThrows]: parseInt(throwsState) - 1})
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
