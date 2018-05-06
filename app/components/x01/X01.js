import React, { Component } from "react";
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
        this.numpadScore = this.numpadScore.bind(this);
        this.numpadUndo = this.numpadUndo.bind(this);
    }

    setX01Game(x01Game) {
        this.setState({ x01Game });
        this.setState({ gameState: "options" });
    }

    setGameOptions(gameOptions) {
        this.setState({ gameOptions });
        this.setState({ gameState: "playing" });
    }

    setOriginalScore(score) {
        this.setState({ p1Score: score });
        this.setState({ p2Score: score });
    }

    resetThrowLog() {
        this.setState({ throwLog: [] });
    }

    doubleInOptionsCheck() {
        if (this.state.gameOptions === "siso" || this.state.gameOptions === "sido") {
            this.setState({ p1DoubleIn: true });
            this.setState({ p2DoubleIn: true });
        }
    }

    doubleInTrue(player) {
        if (player === "p1") {
            this.setState({ p1DoubleIn: true });
        } else {
            this.setState({ p2DoubleIn: true });
        }
    }

    gameReset() {
        this.setState({ activeThrower: "p1" });
        this.setState({ activeThrows: 0 });
        this.setState({ gameState: "playing" });
        this.setState({ gameWinner: {} });

        this.setState({ p1Score: 0 });
        this.setState({ p1Throws: 0 });
        this.setState({ p1RoundStartScore: [] });

        this.setState({ p2Score: 0 });
        this.setState({ p2Throws: 0 });
        this.setState({ p2RoundStartScore: [] })

        if (this.state.gameOptions === "dido") {
            this.setState({ p1DoubleIn: false });
            this.setState({ p2DoubleIn: false });
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
            this.setState({ p1RoundStartScore: roundScoresArray });
        } else {
            roundScoresArray = this.state.p2RoundStartScore;
            roundScoresArray.push(score);
            this.setState({ p2RoundStartScore: roundScoresArray });
        }
    }


    addToLog(number, multiplier) {
        let loggedThrow = `${number}${multiplier}`;
        let loggedArray = this.state.throwLog;
        loggedArray.push(loggedThrow);
        this.setState({ throwLog: loggedArray });
    }

    numpadScore(score) {
        const thrower = this.state.activeThrower;

        if (this.state.gameState === "playing") {
            let otherThrower = "";
            if (thrower === "p1") {
                otherThrower = "p2";
            } else {
                otherThrower = "p1";
            }

            let playerScore = `${thrower}Score`;
            let playerStartScore = `${thrower}RoundStartScore`;
            let playerThrows = `${thrower}Throws`;
            let playerThrowsState = eval(`this.state.${playerThrows}`);
            let playerScoreState = eval(`this.state.${playerScore}`);
            let roundStartScoreState = eval(`this.state.${playerStartScore}`);
            let scoresArray = roundStartScoreState;
            let newScore = parseInt(playerScoreState) - parseInt(score);
            scoresArray.push(newScore);
            if (newScore === 0) {
                this.setState({ [playerThrows]: parseInt(playerThrowsState) + 3 });
                this.gameStateChange(thrower);
            } else if (newScore === 1) {
                this.setState({ [playerThrows]: parseInt(playerThrowsState) + 3 });
                this.setState({ activeThrower: otherThrower });
            } else if (newScore < 0) {
                this.setState({ [playerThrows]: parseInt(playerThrowsState) + 3 });
                this.setState({ [playerScore]: parseInt(roundStartScoreState) });
                this.setState({ activeThrower: otherThrower });
            } else {
                this.setState({ [playerScore]: newScore });
                this.setState({ [playerStartScore]: scoresArray });
                this.setState({ [playerThrows]: parseInt(playerThrowsState) + 3 });
                this.setState({ activeThrower: otherThrower });
            }
        }
    }

    numpadUndo() {
        let otherThrower = "";
        let thrower = this.state.activeThrower;
        if (thrower === "p1") {
            otherThrower = "p2";
        } else {
            otherThrower = "p1";
        }
        let playerScore = `${otherThrower}Score`;
        let playerStartScore = `${otherThrower}RoundStartScore`;
        let playerThrows = `${otherThrower}Throws`;
        let playerThrowsState = eval(`this.state.${playerThrows}`);
        let playerScoreState = eval(`this.state.${playerScore}`);
        let roundStartScoreState = eval(`this.state.${playerStartScore}`);
        let scoresArray = roundStartScoreState;
        if (scoresArray.length > 1) {
            scoresArray.pop();
        }
        let startScore = scoresArray[scoresArray.length - 1];
        if (parseInt(playerScoreState > 0)) {
            this.setState({ [playerThrows]: parseInt(playerThrowsState) - 3 });
        }
        this.setState({ [playerScore]: startScore });
        this.setState({ activeThrower: otherThrower });
    }

    score(number, multiplier) {
        let thrower = this.state.activeThrower;
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
            if (newScore > 1) {
                this.setState({ [playerScore]: newScore });
            } else if (newScore === 0 && multiplier === 2) {
                this.setState({ [playerScore]: newScore });
                this.gameStateChange(thrower);
            } else if (newScore === 0 && this.state.gameOptions === "siso") {
                this.setState({ [playerScore]: newScore });
                this.gameStateChange(thrower);
            } else if (newScore === 1 && this.state.gameOptions === "siso") {
                this.setState({ [playerScore]: newScore });
            } else if ((newScore === 1 && this.state.gameOptions !== "siso") || (newScore < 0)) {
                if (thrower === "p1") {

                    this.setState({ activeThrower: "p2" });
                } else {
                    this.setState({ activeThrower: "p1" });
                }
                this.addThrow();
                this.addToLog(number, multiplier);
                if (this.state.activeThrows === 0) {
                    this.addToLog("mi", "ss");
                    this.addToLog("mi", "ss");
                } else if (this.state.activeThrows === 1) {
                    this.addToLog("mi", "ss");
                }
                this.setThrowNumber(0);
                this.setState({ [playerScore]: startScore });
                scoresArray.push(startScore);
                this.setState({ [playerStartScore]: scoresArray });
                return;
            }
        }

        this.addThrow();
        this.addToLog(number, multiplier);
        this.setThrowNumber(parseInt(this.state.activeThrows + 1));
        this.checkThrower();
    }

    miss() {
        this.addThrow();
        this.setThrowNumber(parseInt(this.state.activeThrows + 1));
        this.addToLog("mi", "ss");
        this.checkThrower();
    }

    checkThrower() {
        setTimeout(() => {
            if (this.state.activeThrows > 2) {
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
        }, 5);
    }

    renderP1Score() {
        return this.state.p1Score;
    }

    renderP2Score() {
        return this.state.p2Score;
    }

    gameStateChange(gameWinner) {
        this.setState({ gameState: "over" });
        this.setState({ gameWinner })
    }

    addThrow() {
        const thrower = this.state.activeThrower;
        let playerThrows = `${thrower}Throws`;
        let playerThrowsState = eval("this.state." + playerThrows);
        this.setState({ [playerThrows]: parseInt([playerThrowsState]) + 1 });
    }

    undo() {

        if (this.state.activeThrows === 0) {
            this.setThrowNumber(2);
            if (this.state.activeThrower === "p1") {
                this.setActiveThrower("p2");
                this.undoSwitch("p2");
            } else {
                this.setActiveThrower("p1");
                this.undoSwitch("p1");
            }
        } else {
            this.setThrowNumber(parseInt(this.state.activeThrows) - 1);
            if (this.state.activeThrower === "p1") {
                this.undoSwitch("p1");
            } else {
                this.undoSwitch("p2");
            }
        }

        let loggedArray = this.state.throwLog;
        loggedArray.pop();
        this.setState({ throwLog: loggedArray });
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

        if (throwsState > 0 && parseInt(this.state.x01Game) != parseInt(playerScoreState)) {
            switch (lastThrow) {
                case "203":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 60 })
                    break;
                case "202":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 40 });
                    break;
                case "201":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 20 });
                    break;
                case "193":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 57 });
                    break;
                case "192":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 38 });
                    break;
                case "191":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 19 });
                    break;
                case "183":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 54 });
                    break;
                case "182":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 36 });
                    break;
                case "181":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 18 });
                    break;
                case "173":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 51 });
                    break;
                case "172":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 34 });
                    break;
                case "171":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 17 });
                    break;
                case "163":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 48 });
                    break;
                case "162":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 32 });
                    break;
                case "161":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 16 });
                    break;
                case "153":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 45 });
                    break;
                case "152":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 30 });
                    break;
                case "151":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 15 });
                    break;
                case "143":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 42 });
                    break;
                case "142":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 28 });
                    break;
                case "141":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 14 });
                    break;
                case "133":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 39 });
                    break;
                case "132":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 26 });
                    break;
                case "131":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 13 });
                    break;
                case "123":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 36 });
                    break;
                case "122":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 24 });
                    break;
                case "121":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 12 });
                    break;
                case "113":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 33 });
                    break;
                case "112":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 22 });
                    break;
                case "111":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 11 });
                    break;
                case "103":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 30 });
                    break;
                case "102":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 20 });
                    break;
                case "101":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 10 });
                    break;
                case "93":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 27 });
                    break;
                case "92":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 18 });
                    break;
                case "91":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 9 });
                    break;
                case "83":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 24 });
                    break;
                case "82":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 16 });
                    break;
                case "81":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 8 });
                    break;
                case "73":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 21 });
                    break;
                case "72":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 14 });
                    break;
                case "71":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 7 });
                    break;
                case "63":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 18 });
                    break;
                case "62":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 12 });
                    break;
                case "61":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 6 });
                    break;
                case "53":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 15 });
                    break;
                case "52":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 10 });
                    break;
                case "51":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 5 });
                    break;
                case "43":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 12 });
                    break;
                case "42":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 8 });
                    break;
                case "41":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 4 });
                    break;
                case "33":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 9 });
                    break;
                case "32":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 6 });
                    break;
                case "31":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 3 });
                    break;
                case "23":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 6 });
                    break;
                case "22":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 4 });
                    break;
                case "21":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 2 });
                    break;
                case "13":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 3 });
                    break;
                case "12":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 2 });
                    break;
                case "11":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 1 });
                    break;
                case "252":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 50 });
                    break;
                case "251":
                    this.setState({ [playerScore]: parseInt(playerScoreState) + 25 });
                    break;
            }
            this.setState({ [playerThrows]: parseInt(throwsState) - 1 })
        }
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
                    addToRoundStartScore={this.addToRoundStartScore}
                    numpadScore={this.numpadScore}
                    gameOptions={this.state.gameOptions}
                    numpadUndo={this.numpadUndo}
                    gameState={this.state.gameState}
                />

            )
        } else if (this.state.gameState === "over") {
            if (this.state.gameWinner === "p1" || this.state.gameWinner === "p2") {
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
            return (
                <GameOptions
                    setGameOptions={this.setGameOptions}
                />
            )
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
