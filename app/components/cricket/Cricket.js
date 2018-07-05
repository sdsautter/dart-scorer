import React, { Component } from "react";
import { Howl, Howler } from 'howler';
import Scoreboard from "./Scoreboard.js";
import Results from "./Results.js";
import BotDifficulty from './../common/BotDifficulty';
import SettingsMenu from './../common/SettingsMenu';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import axios from 'axios';
import NavMenu from "../navMenu/NavMenu";


export default class Cricket extends Component {
    constructor({ match }) {
        super();

        this.activeMarks = 0;
        this.activeBulls = 0;
        this.p1Marks = [];
        this.p1Bulls = [];
        this.p2Marks = [];
        this.p2Bulls = [];
        this.p1ThrowsHistory = 0;
        this.p1MarksHistory = [];
        this.p2MarksHistory = [];
        this.p1BullsHistory = [];
        this.p2BullsHistory = [];
        this.p2ThrowsHistory = 0;

        this.state = {
            diddle: false,
            activeThrower: "p1",
            activeThrows: 0,
            gameState: 'playing',
            gameWinner: {},
            throwLog: [],
            gameOverModal: false,
            setHistory: [],
            firstWinner: '',

            botGame: match.path.includes('cpu') ? true : false,
            botDifficulty: match.params.botDifficulty,

            p120: 0,
            p119: 0,
            p118: 0,
            p117: 0,
            p116: 0,
            p115: 0,
            p125: 0,
            p1Score: 0,
            p1Throws: 0,
            p1Legs: 0,
            p1Sets: 0,

            p220: 0,
            p219: 0,
            p218: 0,
            p217: 0,
            p216: 0,
            p215: 0,
            p225: 0,
            p2Score: 0,
            p2Throws: 0,
            p2Legs: 0,
            p2Sets: 0
        }

        //Binding functions to change the states
        this.score = this.score.bind(this);
        this.addLeg = this.addLeg.bind(this);
        this.continueSet = this.continueSet.bind(this);
        this.soundLogic = this.soundLogic.bind(this);
        this.botLogic = this.botLogic.bind(this);
        this.botNumberHit = this.botNumberHit.bind(this);
        this.setBotDifficulty = this.setBotDifficulty.bind(this);
        this.setBotGame = this.setBotGame.bind(this);
        this.undoGameOver = this.undoGameOver.bind(this);
        this.humanFindOpenNumber = this.humanFindOpenNumber.bind(this);
        this.botFindOpenNumber = this.botFindOpenNumber.bind(this);
        this.checkThrower = this.checkThrower.bind(this);
        this.renderP1Score = this.renderP1Score.bind(this);
        this.showGameOverModal = this.showGameOverModal.bind(this);
        this.renderP2Score = this.renderP2Score.bind(this);
        this.setActiveThrower = this.setActiveThrower.bind(this);
        this.setThrowNumber = this.setThrowNumber.bind(this);
        this.setPlayerScore = this.setPlayerScore.bind(this);
        this.addThrow = this.addThrow.bind(this);
        this.fillHistoryData = this.fillHistoryData.bind(this);
        this.markProgress = this.markProgress.bind(this);
        this.gameStateOver = this.gameStateOver.bind(this);
        this.gameOverCheck = this.gameOverCheck.bind(this);
        this.setGameWinner = this.setGameWinner.bind(this);
        this.miss = this.miss.bind(this);
        this.endTurn = this.endTurn.bind(this);
        this.conditionalRender = this.conditionalRender.bind(this);
        this.addMarks = this.addMarks.bind(this);
        this.resetMarks = this.resetMarks.bind(this);
        this.allStarPoints = this.allStarPoints.bind(this);
        this.gameCricketReset = this.gameCricketReset.bind(this);
        this.addToLog = this.addToLog.bind(this);
        this.undo = this.undo.bind(this);
        this.undoSwitch = this.undoSwitch.bind(this);
        this.scoringLogic = this.scoringLogic.bind(this);
        this.popLastMark = this.popLastMark.bind(this);
        this.reconfigureActiveMarks = this.reconfigureActiveMarks.bind(this);
        this.putGameStats = this.putGameStats.bind(this);
        this.setDiddleTrue = this.setDiddleTrue.bind(this);
    }

    componentWillMount() {
        if (this.state.botGame) {
            this.setDiddleTrue();
        }
    }

    setDiddleTrue() {
        this.setState({ diddle: true });
    }

    putGameStats() {
        const win = this.state.gameWinner === 'p1' ? true : false;
        const botDifficulty = typeof this.state.botDifficulty === 'string' ? this.state.botDifficulty : null;

        const game = {
            win,
            throws: this.state.p1Throws,
            marks: this.p1Marks,
            bulls: this.p1Bulls,
            botGame: this.state.botGame,
            botDifficulty,
            date: new Date()
        }

        axios.put(`/user/cricket`, game)
            .catch(err => console.log(err));
    }

    continueSet() {
        let activeThrower;
        const firstWinner = this.state.firstWinner;
        const evenLeg = (this.state.p1Legs + this.state.p2Legs) % 2 === 0;
        const evenSet = (this.state.p1Sets + this.state.p2Sets) % 2 === 0;

        switch (evenSet) {
            case true:
                if (evenLeg) {
                    activeThrower = firstWinner === 'p1' ? 'p1' : 'p2';
                } else {
                    activeThrower = firstWinner === 'p1' ? 'p2' : 'p1';

                }
                break;
            case false:
                if (evenLeg) {
                    activeThrower = firstWinner === 'p1' ? 'p2' : 'p1';
                } else {
                    activeThrower = firstWinner === 'p1' ? 'p1' : 'p2';
                }
                break;

            default:
                break;
        }

        this.setState({ activeThrower });
        this.setState({ activeThrows: 0 });
        this.activeMarks = 0;
        this.activeBulls = 0;
        this.setState({ gameWinner: {} });
        this.setState({ gameOverModal: false });
        this.setState({ gameState: 'playing' })

        this.setState({ p120: 0 });
        this.setState({ p119: 0 });
        this.setState({ p118: 0 });
        this.setState({ p117: 0 });
        this.setState({ p116: 0 });
        this.setState({ p115: 0 });
        this.setState({ p125: 0 });
        this.setState({ p1Score: 0 });
        this.setState({ p1Throws: 0 });
        this.p1Marks = [];
        this.p1Bulls = [];

        this.setState({ p220: 0 });
        this.setState({ p219: 0 });
        this.setState({ p218: 0 });
        this.setState({ p217: 0 });
        this.setState({ p216: 0 });
        this.setState({ p215: 0 });
        this.setState({ p225: 0 });
        this.setState({ p2Score: 0 });
        this.setState({ p2Throws: 0 });
        this.p2Marks = [];
        this.p2Bulls = [];

        if (this.state.botGame && activeThrower === 'p2') {
            this.botLogic();
        }
    }

    gameCricketReset() {
        this.setState({ diddle: false });
        this.p1ThrowsHistory = 0;
        this.p1MarksHistory = [];
        this.p2MarksHistory = [];
        this.p1BullsHistory = [];
        this.p2BullsHistory = [];
        this.p2ThrowsHistory = 0;
        this.setState({ activeThrower: "p1" });
        this.setState({ activeThrows: 0 });
        this.activeMarks = 0;
        this.setState({ gameOverModal: false });
        this.setState({ firstWinner: '' });
        this.setState({ throwLog: [] });
        this.setState({ setHistory: [] });
        this.setState({ gameState: 'playing' });
        this.setState({ gameWinner: '' });

        this.setState({ p120: 0 });
        this.setState({ p119: 0 });
        this.setState({ p118: 0 });
        this.setState({ p117: 0 });
        this.setState({ p116: 0 });
        this.setState({ p115: 0 });
        this.setState({ p125: 0 });
        this.setState({ p1Score: 0 });
        this.setState({ p1Throws: 0 });
        this.setState({ p15m: 0 });
        this.setState({ p16m: 0 });
        this.setState({ p17m: 0 });
        this.setState({ p18m: 0 });
        this.setState({ p19m: 0 });
        this.setState({ p1Legs: 0 });
        this.setState({ p1Sets: 0 });

        this.setState({ p220: 0 });
        this.setState({ p219: 0 });
        this.setState({ p218: 0 });
        this.setState({ p217: 0 });
        this.setState({ p216: 0 });
        this.setState({ p215: 0 });
        this.setState({ p225: 0 });
        this.setState({ p2Score: 0 });
        this.setState({ p2Throws: 0 });
        this.setState({ p25m: 0 });
        this.setState({ p26m: 0 });
        this.setState({ p27m: 0 });
        this.setState({ p28m: 0 });
        this.setState({ p29m: 0 });
        this.setState({ p2Legs: 0 });
        this.setState({ p2Sets: 0 });
    }

    popLastMark(player) {
        const playerMarks = eval(`this.${player}Marks`);
        const playerBulls = eval(`this.${player}Bulls`);
        if (typeof playerMarks[playerMarks.length - 1] === "string") {
            playerBulls.pop();
        }
        playerMarks.pop();
    }

    setBotGame(botGame) {
        this.setState({ botGame });

        if (botGame) {
            this.setState({ gameState: 'difficulty' });
        } else {
            this.setState({ gameState: 'playing' });
        }
    }

    setBotDifficulty(botDifficulty) {
        this.setState({ botDifficulty });
        this.setState({ gameState: 'playing' });
    }

    setThrowNumber(activeThrows) {
        new Promise(() => {
            return this.setState({ activeThrows })
        })
    }

    setActiveThrower(activeThrower) {
        this.setState({ activeThrower });
    }

    setPlayerScore(thrower, number, multiplier) {
        if (thrower === "p1") {
            this.setState({ p1Score: this.state.p1Score + (number * multiplier) });
        } else {
            this.setState({ p2Score: this.state.p2Score + (number * multiplier) });
        }
    }

    setThrowerNumber(thrower, number, multiplier) {
        let throwerNumber = `${thrower}${number}`;
        let numberState = eval("this.state." + throwerNumber);
        this.setState({ [throwerNumber]: parseInt(numberState + multiplier) });
    }

    addToLog(number, multiplier) {
        let loggedThrow = `${number}${multiplier}`;
        let loggedArray = this.state.throwLog;
        new Promise(() => {
            loggedArray.push(loggedThrow);
            return this.setState({ throwLog: loggedArray });
        });
    }

    reconfigureActiveMarks() {
        let throwLog = this.state.throwLog;
        let logLength = throwLog.length;
        let number = 0, multiplier = 0, activeMarks = 0, activeBulls = 0;
        for (var i = 3; i > 0; i--) {
            let lastThrow = throwLog[logLength - i];
            if (lastThrow !== 'miss') {
                lastThrow = lastThrow.slice('');
                number = parseInt(`${lastThrow[0]}${lastThrow[1]}`);
                multiplier = parseInt(`${lastThrow[2]}`);

                if (number === 25) {
                    activeBulls += multiplier;
                } else {
                    activeMarks += multiplier;
                }
            }
        }

        this.activeMarks = activeMarks;
        this.activeBulls = activeBulls;
    }

    async undo() {
        let playerThrows = `${this.state.activeThrower}Throws`;
        let throwsState = eval(`this.state.${playerThrows}`);
        if (this.state.throwLog.length > 0) {
            if (this.state.activeThrows === 0) {
                this.setThrowNumber(2);
                if (this.state.activeThrower === "p1") {
                    await this.setState({ p2Throws: this.state.p2Throws - 1 })
                    this.setActiveThrower("p2");
                    this.popLastMark('p2');
                    this.reconfigureActiveMarks();
                    await this.undoSwitch("p2");
                } else {
                    await this.setState({ p1Throws: this.state.p1Throws - 1 })
                    this.setActiveThrower("p1");
                    this.popLastMark('p1');
                    this.reconfigureActiveMarks();
                    await this.undoSwitch("p1");
                }
            } else {
                this.setThrowNumber(parseInt(this.state.activeThrows) - 1);
                if (this.state.activeThrower === "p1") {
                    await this.undoSwitch("p1");
                } else {
                    await this.undoSwitch("p2");
                }
                await this.setState({ [playerThrows]: parseInt(throwsState) - 1 })
            }

            let loggedArray = this.state.throwLog;
            await loggedArray.pop();
            return this.setState({ throwLog: loggedArray });
        }
    }

    undoSwitch(player) {
        let logLength = this.state.throwLog.length;
        let lastThrowNumber = logLength - 1;
        let lastThrow = this.state.throwLog[lastThrowNumber];
        let number = 0, multiplier = 0;
        if (lastThrow !== 'miss') {
            lastThrow = lastThrow.slice('');
            number = parseInt(`${lastThrow[0]}${lastThrow[1]}`);
            multiplier = parseInt(`${lastThrow[2]}`);
        } else {
            return;
        }

        let otherThrower = "";

        if (player === "p1") {
            otherThrower = "p2";
        } else {
            otherThrower = "p1";
        }

        const playerNumberState = eval(`this.state.${player}${number}`);
        const otherNumberState = eval(`this.state.${otherThrower}${number}`);
        const playerNumber = `${player}${number}`;
        let playerScore = `${player}Score`
        let playerScoreState = eval(`this.state.${playerScore}`);

        if (number === 25) {
            this.activeBulls -= multiplier;
        } else {
            this.activeMarks -= multiplier;
        }

        switch (multiplier) {
            case 1:
                if (playerNumberState >= 4) {
                    if (otherNumberState < 3) {
                        this.setState({ [playerScore]: parseInt(playerScoreState) - number });
                    }
                }
                return this.setState({ [playerNumber]: parseInt(playerNumberState) - 1 });
            case 2:
                if (playerNumberState >= 5) {
                    if (otherNumberState < 3) {
                        this.setState({ [playerScore]: parseInt(playerScoreState) - (number * 2) });
                    }
                } else if (playerNumberState === 4) {
                    if (otherNumberState < 3) {
                        this.setState({ [playerScore]: parseInt(playerScoreState) - number });
                    }
                }
                return this.setState({ [playerNumber]: parseInt(playerNumberState) - 2 });
            case 3:
                if (playerNumberState >= 6) {
                    if (otherNumberState < 3) {
                        this.setState({ [playerScore]: parseInt(playerScoreState) - (number * 3) });
                    }
                } else if (playerNumberState === 5) {
                    if (otherNumberState < 3) {
                        this.setState({ [playerScore]: parseInt(playerScoreState) - (number * 2) });
                    }
                } else if (playerNumberState === 4) {
                    if (otherNumberState < 3) {
                        this.setState({ [playerScore]: parseInt(playerScoreState) - number });
                    }
                }
                return this.setState({ [playerNumber]: parseInt(playerNumberState) - 3 });
        }
    }

    async score(number, multiplier) {
        if (localStorage.getItem('sounds') === 'on') {
            this.soundLogic(multiplier)
        }

        await this.addMarks(number, multiplier);
        await this.scoringLogic(number, multiplier);
        await this.addThrow();
        await this.addToLog(number, multiplier);
        await this.gameOverCheck();
        await this.setThrowNumber(parseInt(this.state.activeThrows + 1));
        await this.checkThrower();
    }

    soundLogic(multiplier) {
        const singleHitSound = new Howl({
            src: [`../../../assets/sounds/single_hit.mp3`]
        });
        const doubleHitSound = new Howl({
            src: [`../../../assets/sounds/double_hit.mp3`]
        });
        const tripleHitSound = new Howl({
            src: [`../../../assets/sounds/triple_hit.mp3`]
        });
        Howler.volume(.4);

        switch (multiplier) {
            case 1:
                singleHitSound.play();
                break;
            case 2:
                doubleHitSound.play();
                break;
            case 3:
                tripleHitSound.play();
                break;
            default:
                break;
        }
    }

    botLogic() {
        const difficulty = this.state.botDifficulty;
        const botScore = parseInt(this.state.p2Score);
        const humanScore = parseInt(this.state.p1Score);
        const scoreDiff = botScore - humanScore;
        let randomMarks, number, multiple;

        switch (this.state.botDifficulty) {
            case 'easy':
                randomMarks = Math.random() > .75 ? 2 : 1;


                switch (randomMarks) {
                    case 1:
                        setTimeout(() => {
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    multiple = Math.random() >= .75 ? 1 : 0;
                                    if (multiple === 0) {
                                        this.miss();
                                    } else {
                                        this.score(number, multiple);
                                    }
                                } else {
                                    this.miss();
                                }
                            }
                        }, 1500);
                        setTimeout(() => {
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    multiple = Math.random() >= .75 ? 1 : 0;
                                } else {
                                    multiple = 1;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 3000);
                        setTimeout(() => {
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    multiple = Math.random() >= .75 ? 1 : 0;
                                    if (multiple === 0) {
                                        this.miss();
                                    } else {
                                        this.score(number, multiple);
                                    }
                                } else {
                                    this.miss();
                                }
                            }
                        }, 4000);
                        break;
                    case 2:
                        setTimeout(() => {
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    multiple = Math.random() >= .75 ? 1 : 0;
                                } else {
                                    multiple = 1;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 1500);
                        setTimeout(() => {
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    multiple = Math.random() >= .75 ? 1 : 0;
                                } else {
                                    multiple = 1;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 2500);
                        setTimeout(() => {
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    multiple = Math.random() >= .75 ? 1 : 0;
                                    if (multiple === 0) {
                                        this.miss();
                                    } else {
                                        this.score(number, multiple);
                                    }
                                } else {
                                    this.miss();
                                }
                            }
                        }, 3500);
                        break;
                    default:
                        setTimeout(() => {
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    multiple = Math.random() >= .63 ? 1 : 0;
                                    if (multiple === 0) {
                                        this.miss();
                                    } else {
                                        this.score(number, multiple);
                                    }
                                } else {
                                    this.miss();
                                }
                            }
                        }, 1500);
                        setTimeout(() => {
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    multiple = Math.random() >= .63 ? 1 : 0;
                                } else {
                                    multiple = 1;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 3000);
                        setTimeout(() => {
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    multiple = Math.random() >= .63 ? 1 : 0;
                                    if (multiple === 0) {
                                        this.miss();
                                    } else {
                                        this.score(number, multiple);
                                    }
                                } else {
                                    this.miss();
                                }
                            }
                        }, 4000);
                        break;
                }
                break;
            case 'medium':
                randomMarks = Math.random() >= .75 ? 3 : 2;

                switch (randomMarks) {
                    case 2:
                        setTimeout(() => {
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    multiple = Math.random() >= .63 ? 1 : 0;
                                } else {
                                    multiple = 1;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 1500);
                        setTimeout(() => {
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    multiple = Math.random() >= .63 ? 1 : 0;
                                } else {
                                    multiple = 1;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 2500);
                        setTimeout(() => {
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    multiple = Math.random() >= .63 ? 1 : 0;
                                    if (multiple === 0) {
                                        this.miss();
                                    } else {
                                        number = this.botFindOpenNumber()
                                        this.score(number, multiple);
                                    }
                                } else {
                                    this.miss();
                                }
                            }
                        }, 3500);
                        break;
                    case 3:
                        setTimeout(() => {
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    multiple = Math.random() >= .63 ? 1 : 0;
                                } else {
                                    multiple = 1;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 1500);
                        setTimeout(() => {
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    multiple = Math.random() >= .63 ? 1 : 0;
                                } else {
                                    multiple = 1;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 2500);
                        setTimeout(() => {
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    multiple = Math.random() >= .63 ? 1 : 0;
                                    if (multiple === 0) {
                                        this.miss();
                                    } else {
                                        number = this.botFindOpenNumber();
                                        this.score(number, multiple);
                                    }
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 3500);
                        break;
                }
                break;
            case 'hard':
                randomMarks = Math.floor(Math.random() * Math.floor(6 - 3)) + 3;
                let randomNumber = 0;

                switch (randomMarks) {
                    case 3:
                        setTimeout(() => {
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    multiple = Math.random() >= .45 ? 0 : 1;
                                } else {
                                    multiple = 1;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 1500);
                        setTimeout(() => {
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    multiple = Math.random() >= .45 ? 0 : 1;
                                } else {
                                    multiple = 1;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 2500);
                        setTimeout(() => {
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    multiple = Math.random() >= .45 ? 0 : 1;
                                    number = this.botFindOpenNumber();
                                } else {
                                    multiple = 1;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 3500);
                        break;
                    case 4:
                        setTimeout(() => {
                            randomNumber = Math.random();
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    if (randomNumber <= .10) {
                                        multiple = 2;
                                    } else if (randomNumber <= .45) {
                                        multiple = 1;
                                    } else {
                                        multiple = 0;
                                    }
                                } else {
                                    multiple = 2;
                                }

                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 1500);
                        setTimeout(() => {
                            randomNumber = Math.random();
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    if (randomNumber <= .45) {
                                        multiple = 1;
                                    } else {
                                        multiple = 0;
                                    }
                                } else {
                                    multiple = 1;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 2750);
                        setTimeout(() => {
                            randomNumber = Math.random();
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    number = this.botFindOpenNumber();
                                    if (randomNumber <= .45) {
                                        multiple = 1;
                                    } else {
                                        multiple = 0;
                                    }
                                } else {
                                    multiple = 1;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 3750);
                        break;
                    case 5:
                        setTimeout(() => {
                            randomNumber = Math.random();
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    if (randomNumber <= .15) {
                                        multiple = 2;
                                    } else if (randomNumber <= .45) {
                                        multiple = 1;
                                    } else {
                                        multiple = 0;
                                    }
                                } else {
                                    multiple = 3;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 1500);
                        setTimeout(() => {
                            randomNumber = Math.random();
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    if (randomNumber <= .15) {
                                        multiple = 2;
                                    } else if (randomNumber <= .45) {
                                        multiple = 1;
                                    } else {
                                        multiple = 0;
                                    }
                                } else {
                                    multiple = 1;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 2500);
                        setTimeout(() => {
                            randomNumber = Math.random();
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    number = this.botFindOpenNumber();
                                    if (randomNumber <= .45) {
                                        multiple = 1;
                                    } else {
                                        multiple = 0;
                                    }
                                } else {
                                    multiple = 1;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 3500);
                        break;
                }
                break;
            case 'pro':
                randomMarks = Math.floor(Math.random() * Math.floor(10 - 5)) + 5;
                switch (randomMarks) {
                    case 5:
                        setTimeout(() => {
                            randomNumber = Math.random();
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    if (randomNumber <= .25) {
                                        multiple = 2;
                                    } else if (randomNumber <= .75) {
                                        multiple = 1;
                                    } else {
                                        multiple = 0;
                                    }
                                } else {
                                    multiple = 2;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 1500);
                        setTimeout(() => {
                            randomNumber = Math.random();
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    if (randomNumber <= .25) {
                                        multiple = 2;
                                    } else if (randomNumber <= .75) {
                                        multiple = 1;
                                    } else {
                                        multiple = 0;
                                    }
                                } else {
                                    multiple = 2;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 2500);
                        setTimeout(() => {
                            randomNumber = Math.random();
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    number = this.botFindOpenNumber();
                                    if (randomNumber <= .75) {
                                        multiple = 1;
                                    } else {
                                        multiple = 0;
                                    }
                                } else {
                                    multiple = 1;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 4500);
                        break;
                    case 6:
                        setTimeout(() => {
                            randomNumber = Math.random();
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    if (randomNumber <= .25) {
                                        multiple = 2;
                                    } else if (randomNumber <= .75) {
                                        multiple = 1;
                                    } else {
                                        multiple = 0;
                                    }
                                } else {
                                    multiple = 2;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 1500);
                        setTimeout(() => {
                            randomNumber = Math.random();
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    if (randomNumber <= .25) {
                                        multiple = 2;
                                    } else if (randomNumber <= .75) {
                                        multiple = 1;
                                    } else {
                                        multiple = 0;
                                    }
                                } else {
                                    multiple = 2;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 3000);
                        setTimeout(() => {
                            randomNumber = Math.random();
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    number = this.botFindOpenNumber();
                                    if (randomNumber <= .25) {
                                        multiple = 2;
                                    } else if (randomNumber <= .75) {
                                        multiple = 1;
                                    } else {
                                        multiple = 0;
                                    }
                                } else {
                                    multiple = 2;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 4500);
                        break;
                    case 7:
                        setTimeout(() => {
                            randomNumber = Math.random();
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    if (randomNumber <= .25) {
                                        multiple = 2;
                                    } else if (randomNumber <= .75) {
                                        multiple = 1;
                                    } else {
                                        multiple = 0;
                                    }
                                } else {
                                    multiple = 3;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 1500);
                        setTimeout(() => {
                            randomNumber = Math.random();
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    if (randomNumber <= .25) {
                                        multiple = 2;
                                    } else if (randomNumber <= .75) {
                                        multiple = 1;
                                    } else {
                                        multiple = 0;
                                    }
                                } else {
                                    multiple = 2;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 3000);
                        setTimeout(() => {
                            randomNumber = Math.random();
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    number = this.botFindOpenNumber();
                                    if (randomNumber <= .25) {
                                        multiple = 2;
                                    } else if (randomNumber <= .75) {
                                        multiple = 1;
                                    } else {
                                        multiple = 0;
                                    }
                                } else {
                                    multiple = 2;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 4500);
                        break;
                    case 8:
                        setTimeout(() => {
                            randomNumber = Math.random();
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    if (randomNumber <= .25) {
                                        multiple = 2;
                                    } else if (randomNumber <= .75) {
                                        multiple = 1;
                                    } else {
                                        multiple = 0;
                                    }
                                } else {
                                    multiple = 3;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 1500);
                        setTimeout(() => {
                            randomNumber = Math.random();
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    if (randomNumber <= .25) {
                                        multiple = 2;
                                    } else if (randomNumber <= .75) {
                                        multiple = 1;
                                    } else {
                                        multiple = 0;
                                    }
                                } else {
                                    multiple = 3;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 3000);
                        setTimeout(() => {
                            randomNumber = Math.random();
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    number = this.botFindOpenNumber();
                                    if (randomNumber <= .25) {
                                        multiple = 2;
                                    } else if (randomNumber <= .75) {
                                        multiple = 1;
                                    } else {
                                        multiple = 0;
                                    }
                                } else {
                                    multiple = 2;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 4500);
                        break;

                    case 9:
                        setTimeout(() => {
                            randomNumber = Math.random();
                            if (this.state.gameWinner !== 'p1' && this.state.gameWinner !== 'p2') {
                                number = this.botNumberHit();
                                if (number === 25) {
                                    number = this.botFindOpenNumber();
                                    if (randomNumber <= .25) {
                                        multiple = 2;
                                    } else if (randomNumber <= .75) {
                                        multiple = 1;
                                    } else {
                                        multiple = 0;
                                    }
                                } else {
                                    multiple = 3;
                                }
                                if (multiple === 0) {
                                    this.miss();
                                } else {
                                    this.score(number, multiple);
                                }
                            }
                        }, 1500);
                        setTimeout(() => {
                            randomNumber = Math.random();
                            number = this.botNumberHit();
                            if (number === 25) {
                                if (randomNumber <= .25) {
                                    multiple = 2;
                                } else if (randomNumber <= .75) {
                                    multiple = 1;
                                } else {
                                    multiple = 0;
                                }
                            } else {
                                multiple = 3;
                            }
                            if (multiple === 0) {
                                this.miss();
                            } else {
                                this.score(number, multiple);
                            }
                        }, 3000);
                        setTimeout(() => {
                            randomNumber = Math.random();
                            number = this.botNumberHit();
                            if (number === 25) {
                                if (randomNumber <= .25) {
                                    multiple = 2;
                                } else if (randomNumber <= .75) {
                                    multiple = 1;
                                } else {
                                    multiple = 0;
                                }
                            } else {
                                multiple = 3;
                            }
                            if (multiple === 0) {
                                this.miss();
                            } else {
                                this.score(number, multiple);
                            }

                        }, 4500);
                        break;
                    default:
                        break;
                }

                break;

            default:
                setTimeout(() => {
                    number = this.botNumberHit();
                    this.score(number, 1);
                }, 1500);
                setTimeout(() => {
                    number = this.botNumberHit();
                    this.score(number, 1);
                }, 3000);
                setTimeout(() => {
                    this.miss();
                }, 4500);
                break;

        }
    }


    newMethod(number, randomMarks, randomNumber, multiple) {
        if (number === 25) {
            if (randomMarks === 4) {
                if (randomNumber <= .10) {
                    multiple = 2;
                }
                else if (randomNumber <= .75) {
                    multiple = 1;
                }
                else {
                    multiple = 0;
                }
            }
            else if (randomMarks === 5) {
                if (randomNumber <= .20) {
                    multiple = 2;
                }
                else if (randomNumber <= .75) {
                    multiple = 1;
                }
                else {
                    multiple = 0;
                }
            }
            else {
                multiple = Math.random() >= .75 ? 0 : 1;
            }
        }
        else {
            multiple = 1;
        }
        return multiple;
    }

    botNumberHit() {
        const botScore = parseInt(this.state.p2Score);
        const humanScore = parseInt(this.state.p1Score);
        const scoreDiff = botScore - humanScore;

        if (scoreDiff > 0) {
            return this.botFindOpenNumber();
        } else {
            return this.humanFindOpenNumber();
        }
    }



    botFindOpenNumber() {
        for (var i = 20; i > 0; i--) {
            if (i === 14) {
                i = 25;
            }
            if (eval(`this.state.p2${i}`) < 3) {
                return i;
            }
            if (i === 24) return;
        }
    }

    humanFindOpenNumber() {
        for (var i = 20; i > 0; i--) {
            if (i === 14) {
                i = 25;
            }
            if (eval(`this.state.p1${i}`) < 3) {
                return i;
            }
            if (i === 24) return;
        }
    }

    scoringLogic(number, multiplier) {
        const thrower = this.state.activeThrower;
        let otherThrower;

        if (thrower === "p1") {
            otherThrower = "p2";
        } else {
            otherThrower = "p1";
        }

        const otherThrowerNumber = `${otherThrower}${number}`;
        const playerScore = `${thrower}Score`;
        const playerThrows = `${thrower}Throws`;
        const playerScoreState = eval("this.state." + playerScore);
        const throwState = eval("this.state." + playerThrows);
        const otherThrowerState = eval("this.state." + otherThrowerNumber);
        const throwerNumber = `${thrower}${number}`;
        const numberState = eval("this.state." + throwerNumber);
        new Promise(() => {

            switch (numberState) {
                case 0:
                    return this.setThrowerNumber(thrower, number, multiplier);
                    break;
                case 1:
                    if (multiplier === 1 || multiplier === 2) {
                        return this.setThrowerNumber(thrower, number, multiplier);

                    }
                    else if (multiplier === 3) {
                        if (otherThrowerState < 3) {
                            this.setPlayerScore(thrower, number, 1);
                            return this.setThrowerNumber(thrower, number, multiplier);
                        }
                        else {
                            return this.setThrowerNumber(thrower, number, multiplier);
                        }
                    }

                    break;
                case 2:
                    if (multiplier === 1) {
                        return this.setThrowerNumber(thrower, number, multiplier);
                    }
                    else if (multiplier === 2) {
                        if (otherThrowerState < 3) {
                            this.setPlayerScore(thrower, number, 1);
                            return this.setThrowerNumber(thrower, number, multiplier);
                        }
                        else {
                            return this.setThrowerNumber(thrower, number, multiplier);
                        }
                    }
                    else if (multiplier === 3) {
                        if (otherThrowerState < 3) {
                            this.setPlayerScore(thrower, number, 2);
                            return this.setThrowerNumber(thrower, number, multiplier);
                        }
                        else {
                            return this.setThrowerNumber(thrower, number, multiplier);
                        }
                    }

                    break;
                default:
                    if (otherThrowerState < 3) {
                        this.setPlayerScore(thrower, number, multiplier);
                        return this.setThrowerNumber(thrower, number, multiplier);
                    }
                    else {
                        return this.setThrowerNumber(thrower, number, multiplier);
                    }

                    break;
            }
        })
    }

    async miss() {
        const missSound = new Howl({
            src: [`../../../assets/sounds/miss_hit.mp3`]
        });
        Howler.volume(.4);
        await this.addThrow();
        await this.setThrowNumber(parseInt(this.state.activeThrows + 1));
        await this.addToLog("mi", "ss");
        await this.checkThrower();
        if (localStorage.getItem('sounds') === 'on') {
            missSound.play();
        }
    }

    endTurn() {
        let thrower = this.state.activeThrower;
        let playerThrows = `${thrower}Throws`;
        let playerThrowsState = eval("this.state." + playerThrows);
        const missSound = new Howl({
            src: [`../../../assets/sounds/miss_hit.mp3`]
        });

        if (localStorage.getItem('sounds') === 'on') {
            missSound.play();
        }
        this.allStarPoints(thrower);
        switch (this.state.activeThrows) {
            case 0:
                this.setState({ [playerThrows]: parseInt([playerThrowsState]) + 3 });
                for (var i = 0; i < 3; i++) {
                    this.addToLog("mi", "ss");
                }
                if (thrower === "p1") {
                    this.setActiveThrower('p2');
                    if (this.state.botGame) {
                        this.botLogic();
                    }
                } else {
                    this.setActiveThrower("p1");
                }
                this.resetMarks();
                this.setThrowNumber(0);
                break;
            case 1:
                this.setState({ [playerThrows]: parseInt([playerThrowsState]) + 2 });
                this.addToLog("mi", "ss");
                this.addToLog("mi", "ss");
                if (this.state.activeThrower === "p1") {
                    this.setActiveThrower('p2');
                    if (this.state.botGame) {
                        this.botLogic();
                    }
                } else {
                    this.setActiveThrower("p1");
                }
                this.resetMarks();
                this.setThrowNumber(0);
                break;
            case 2:
                this.setState({ [playerThrows]: parseInt([playerThrowsState]) + 1 });
                this.addToLog("mi", "ss");
                if (this.state.activeThrower === "p1") {
                    this.setActiveThrower('p2');
                    if (this.state.botGame) {
                        this.botLogic();
                    }
                } else {
                    this.setActiveThrower("p1");
                }
                this.resetMarks();
                this.setThrowNumber(0);
                break;
        }
    }

    checkThrower() {
        let activeThrows = this.state.activeThrows;
        new Promise(() => {
            if (activeThrows > 2) {
                this.allStarPoints(this.state.activeThrower);
                if (this.state.activeThrower === "p1") {

                    this.setActiveThrower('p2');
                    if (this.state.botGame) {
                        this.botLogic();
                    }
                } else {
                    this.setActiveThrower("p1");
                }
                this.resetMarks();

                return this.setThrowNumber(0);
            }
        });
    }

    renderP1Score() {
        return this.state.p1Score;
    }

    renderP2Score() {
        return this.state.p2Score;
    }

    addLeg() {
        const winner = this.state.gameWinner;
        const loser = winner === 'p1' ? 'p2' : 'p1';
        const setHistory = this.state.setHistory;
        let winnerLegs = parseInt(eval(`this.state.${winner}Legs`));
        const loserLegs = parseInt(eval(`this.state.${loser}Legs`));
        let winnerSets = parseInt(eval(`this.state.${winner}Sets`));
        let legSettings = parseInt(localStorage.getItem('legs'));
        legSettings = Math.ceil(legSettings / 2);

        winnerLegs = winnerLegs + 1;
        winnerSets = winnerSets + 1;

        if (winnerLegs < legSettings) {
            this.setState({ [`${winner}Legs`]: winnerLegs });
        } else if (winnerLegs >= legSettings) {
            setHistory.push({
                p1: winner === 'p1' ? winnerLegs : loserLegs,
                p2: loser === 'p2' ? loserLegs : winnerLegs
            });
            this.setState({ setHistory });
            this.setState({ [`${winner}Legs`]: 0 });
            this.setState({ [`${loser}Legs`]: 0 });
            this.setState({ [`${winner}Sets`]: winnerSets })

        }
    }

    fillHistoryData() {
        const p1Marks = this.p1Marks;
        const p1Bulls = this.p1Bulls;
        const p2Marks = this.p2Marks;
        const p2Bulls = this.p2Bulls;

        let p1MarksHistory = this.p1MarksHistory;
        let p1BullsHistory = this.p1BullsHistory
        let p2MarksHistory = this.p2MarksHistory;
        let p2BullsHistory = this.p2BullsHistory

        this.p1ThrowsHistory += this.state.p1Throws;
        this.p2ThrowsHistory += this.state.p2Throws;

        for (var i in p1Marks) {
            p1MarksHistory.push(p1Marks[i]);
            this.p1MarksHistory = p1MarksHistory;
        }
        for (var i in p1Bulls) {
            p1BullsHistory.push(p1Bulls[i]);
            this.p1BullsHistory = p1BullsHistory;
        }
        for (var i in p2Marks) {
            p2MarksHistory.push(p2Marks[i]);
            this.p2MarksHistory = p2MarksHistory;
        }
        for (var i in p2Bulls) {
            p2BullsHistory.push(p2Bulls[i]);
            this.p2BullsHistory = p2BullsHistory;
        }
    }

    gameStateOver() {
        if (this.activeBulls !== 0 && this.activeMarks !== 0) {
            this.allStarPoints(this.state.gameWinner);
        }
        const gameOverSound = new Howl({
            src: [`../../../assets/sounds/game_over.mp3`]
        });
        Howler.volume(.4);
        this.fillHistoryData();
        this.putGameStats();
        if (this.state.firstWinner === '') {
            this.setState({ firstWinner: this.state.gameWinner }, () => {
                this.addLeg();
            });
        } else {
            this.addLeg();
        }
        this.showGameOverModal(false);
        this.setState({ gameState: "over" });
        if (localStorage.getItem('sounds') === 'on') {
            gameOverSound.play();
        }
    }

    setGameWinner(gameWinner) {
        this.setState({ gameWinner })
        this.showGameOverModal(true);
    }

    showGameOverModal(gameOverModal) {
        this.setState({ gameOverModal });
    }

    gameOverCheck() {
        if (this.state.p120 >= 3 && this.state.p119 >= 3 && this.state.p118 >= 3 && this.state.p117 >= 3 && this.state.p116 >= 3 && this.state.p115 >= 3 && this.state.p125 >= 3 && this.state.p1Score >= this.state.p2Score) {
            if (this.state.gameWinner !== 'p1') {
                this.setGameWinner("p1");
            }
        } else if (this.state.p220 >= 3 && this.state.p219 >= 3 && this.state.p218 >= 3 && this.state.p217 >= 3 && this.state.p216 >= 3 && this.state.p215 >= 3 && this.state.p225 >= 3 && this.state.p2Score >= this.state.p1Score) {
            this.setGameWinner("p2");
        }
    }

    addThrow() {
        let thrower = this.state.activeThrower;
        let playerThrows = `${thrower}Throws`;
        let playerThrowsState = eval("this.state." + playerThrows);
        new Promise(() => {
            this.setState({ [playerThrows]: parseInt([playerThrowsState]) + 1 });
        });
    }

    addMarks(number, multiplier) {
        const otherThrower = this.state.activeThrower === 'p1' ? 'p2' : 'p1';
        const playerMarks = eval(`this.state.${this.state.activeThrower}${number}`);
        const otherMarks = eval(`this.state.${otherThrower}${number}`);
        let newMark, marks;
        if (number === 25) {
            marks = parseInt(this.activeBulls);
        } else {
            marks = parseInt(this.activeMarks);
        }

        switch (multiplier) {
            case 1:
                if (otherMarks < 3) {
                    newMark = 1;
                } else {
                    if (playerMarks < 3) {
                        newMark = 1;
                    } else {
                        newMark = 0;
                    }
                }
                break;
            case 2:
                if (otherMarks < 3) {
                    newMark = 2;
                } else {
                    if (playerMarks < 2) {
                        newMark = 2;
                    } else if (playerMarks < 3) {
                        newMark = 1;
                    } else {
                        newMark = 0;
                    }
                }
                break;
            case 3:
                if (otherMarks < 3) {
                    newMark = 3;
                } else {
                    if (playerMarks < 1) {
                        newMark = 3;
                    } else if (playerMarks < 2) {
                        newMark = 2;
                    } else if (playerMarks < 3) {
                        newMark = 1;
                    } else {
                        newMark = 0;
                    }
                }
                break;
        }
        newMark = marks + newMark;
        if (number === 25) {
            this.activeBulls = newMark;
        } else {
            this.activeMarks = newMark;
        }
    }

    resetMarks() {
        this.activeMarks = 0;
        this.activeBulls = 0;
    }

    allStarPoints(thrower) {
        const bulls = parseInt(this.activeBulls);
        let marks = parseInt(this.activeMarks);
        const marksArray = eval(`this.${thrower}Marks`);
        const bullsArray = eval(`this.${thrower}Bulls`);
        if (bulls < 3) {
            marks = bulls + marks;
        } else {
            marks = `${marks}b`
            bullsArray.push(bulls);
        }
        marksArray.push(marks);
    }

    markProgress(playerNumber, cricketNumber) {
        const playerNumberState = eval(`this.state.p${playerNumber}${cricketNumber}`);
        if (playerNumberState === 1) {
            return (
                <div className='mark-container'>
                    <span className="mark" id='oneMark'> &#47; </span>
                </div>)
        } else if (playerNumberState === 2) {
            return (
                <div className='mark-container'>
                    <span className="mark" id='oneMark'> &#47; </span>
                    <span className="mark" id='twoMark'> &#47; </span>
                </div>
            )
        } else if (playerNumberState >= 3) {
            return (
                <div className='mark-container'>
                    <span className="mark" id='oneMark'> &#47; </span>
                    <span className="mark" id='twoMark'> &#47; </span>
                    <span className="mark" id='threeMark'></span>
                </div>
            )
        }
    }

    undoGameOver() {
        this.undo();
        this.setGameWinner('');
        this.showGameOverModal(false);
    }

    conditionalRender() {
        if (this.state.gameState === "playing") {
            return (
                <div>
                    <Scoreboard
                        diddle={this.state.diddle}
                        username={this.props.username}
                        setDiddleTrue={this.setDiddleTrue}
                        setActiveThrower={this.setActiveThrower}
                        score={this.score}
                        miss={this.miss}
                        endTurn={this.endTurn}
                        botGame={this.state.botGame}
                        activeThrower={this.state.activeThrower}
                        activeThrows={this.state.activeThrows}
                        renderP1Score={this.renderP1Score}
                        renderP2Score={this.renderP2Score}
                        markProgress={this.markProgress}
                        undo={this.undo}
                        gameCricketReset={this.gameCricketReset}
                        modalSwitch={this.modalSwitch}
                        setGameWinner={this.setGameWinner}
                        gameStateOver={this.gameStateOver}
                        gameOverModal={this.state.gameOverModal}
                        undoGameOver={this.undoGameOver}
                    />
                </div>
            )

        } else if (this.state.gameState === "over") {
            if (this.state.gameWinner === "p1" || this.state.gameWinner === "p2") {
                return (
                    <Results
                        gameWinner={this.state.gameWinner}
                        gameCricketReset={this.gameCricketReset}
                        p1Throws={this.state.p1Throws}
                        p2Throws={this.state.p2Throws}
                        p1Marks={this.p1Marks}
                        p1Bulls={this.p1Bulls}
                        p2Marks={this.p2Marks}
                        p2Bulls={this.p2Bulls}
                        p1Legs={this.state.p1Legs}
                        p1Sets={this.state.p1Sets}
                        p2Legs={this.state.p2Legs}
                        p2Sets={this.state.p2Sets}
                        continueSet={this.continueSet}
                        setHistory={this.state.setHistory}
                        p1ThrowsHistory={this.p1ThrowsHistory}
                        p1MarksHistory={this.p1MarksHistory}
                        p2MarksHistory={this.p2MarksHistory}
                        p1BullsHistory={this.p1BullsHistory}
                        p2BullsHistory={this.p2BullsHistory}
                        p2ThrowsHistory={this.p2ThrowsHistory}
                        username={this.props.username}
                    />
                )
            }
        } else if (this.state.gameState === "difficulty") {
            return (
                <BotDifficulty
                    game={'cricket'}
                    setBotDifficulty={this.setBotDifficulty}
                />
            )
        }
    }

    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="game"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
                <div>
                    <NavMenu setUsername={this.props.setUsername}
                        username={this.props.username}
                        setUsername={this.props.setUsername}
                        gameState={this.state.gameState}
                        gameCricketReset={this.gameCricketReset}
                    />
                    {this.conditionalRender()}
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}