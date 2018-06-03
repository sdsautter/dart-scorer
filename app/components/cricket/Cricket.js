import React, { Component } from "react";
import Scoreboard from "./Scoreboard.js";
import Results from "./Results.js";
import BotDifficulty from './../common/BotDifficulty';
import VsOptions from './../common/VsOptions';
import GameOverModal from './../common/GameOverModal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Cricket extends Component {
    constructor() {
        super();
        this.state = {
            activeThrower: "p1",
            activeThrows: 0,
            activeMarks: 0,
            gameState: "opponent",
            gameWinner: {},
            throwLog: [],
            gameOverModal: false,

            botGame: false,
            botDifficulty: "",

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
    }

    gameCricketReset() {
        this.setState({ activeThrower: "p1" });
        this.setState({ activeThrows: 0 });
        this.setState({ activeMarks: 0 });
        this.setState({ gameState: "playing" });
        this.setState({ gameWinner: {} });
        this.setState({ gameOverModal: false });        

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
        this.setState({ activeThrows })
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
        loggedArray.push(loggedThrow);
        this.setState({ throwLog: loggedArray });
    }

    undo() {
        if (this.state.p1Throws > 0) {
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

        let player20 = `${player}20`;
        let player19 = `${player}19`;
        let player18 = `${player}18`;
        let player17 = `${player}17`;
        let player16 = `${player}16`;
        let player15 = `${player}15`;
        let player25 = `${player}25`;

        let player20State = eval(`this.state.${player20}`);
        let player19State = eval(`this.state.${player19}`);
        let player18State = eval(`this.state.${player18}`);
        let player17State = eval(`this.state.${player17}`);
        let player16State = eval(`this.state.${player16}`);
        let player15State = eval(`this.state.${player15}`);
        let player25State = eval(`this.state.${player25}`);

        let other20State = eval(`this.state.${otherThrower}20`);
        let other19State = eval(`this.state.${otherThrower}19`);
        let other18State = eval(`this.state.${otherThrower}18`);
        let other17State = eval(`this.state.${otherThrower}17`);
        let other16State = eval(`this.state.${otherThrower}16`);
        let other15State = eval(`this.state.${otherThrower}15`);
        let other25State = eval(`this.state.${otherThrower}25`);

        if (throwsState > 0) {
            switch (lastThrow) {
                case "203":
                    if (player20State >= 6) {
                        if (other20State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 60 })
                        }
                        this.setState({ [player20]: parseInt(player20State) - 3 })
                    } else if (player20State === 5) {
                        if (other20State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 40 })
                        }
                        this.setState({ [player20]: 2 })
                    } else if (player20State === 4) {
                        if (other20State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 20 })
                        }
                        this.setState({ [player20]: 1 })
                    } else if (player20State < 4) {
                        this.setState({ [player20]: parseInt(player20State) - 3 })
                    }
                    break;
                case "202":
                    if (player20State >= 5) {
                        if (other20State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 40 })
                        }
                        this.setState({ [player20]: parseInt(player20State) - 2 })
                    } else if (player20State === 4) {
                        if (other20State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 20 })
                        }
                        this.setState({ [player20]: 2 })
                    } else if (player20State < 4) {
                        this.setState({ [player20]: parseInt(player20State) - 2 })
                    }
                    break;
                case "201":
                    if (player20State === 4) {
                        if (other20State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 20 })
                        }
                        this.setState({ [player20]: 3 })
                    } else if (player20State < 4) {
                        this.setState({ [player20]: parseInt(player20State) - 1 })
                    }
                    break;
                case "193":
                    if (player19State >= 6) {
                        if (other19State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 57 })
                        }
                        this.setState({ [player19]: parseInt(player19State) - 3 })
                    } else if (player19State === 5) {
                        if (other19State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 38 })
                        }
                        this.setState({ [player19]: 2 })
                    } else if (player19State === 4) {
                        if (other19State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 19 })
                        }
                        this.setState({ [player19]: 1 })
                    } else if (player19State < 4) {
                        this.setState({ [player19]: parseInt(player19State) - 3 })
                    }
                    break;
                case "192":
                    if (player19State >= 5) {
                        if (other19State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 38 })
                        }
                        this.setState({ [player19]: parseInt(player19State) - 2 })
                    } else if (player19State === 4) {
                        if (other19State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 19 })
                        }
                        this.setState({ [player19]: 2 })
                    } else if (player19State < 4) {
                        this.setState({ [player19]: parseInt(player19State) - 2 })
                    }
                    break;
                case "191":
                    if (player19State === 4) {
                        if (other19State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 19 })
                        }
                        this.setState({ [player19]: 3 })
                    } else if (player19State < 4) {
                        this.setState({ [player19]: parseInt(player19State) - 1 })
                    }
                    break;
                case "183":
                    if (player18State >= 6) {
                        if (other18State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 54 })
                        }
                        this.setState({ [player18]: parseInt(player18State) - 3 })
                    } else if (player18State === 5) {
                        if (other18State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 36 })
                        }
                        this.setState({ [player18]: 2 })
                    } else if (player18State === 4) {
                        if (other18State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 18 })
                        }
                        this.setState({ [player18]: 1 })
                    } else if (player18State < 4) {
                        this.setState({ [player18]: parseInt(player18State) - 3 })
                    }
                    break;
                case "182":
                    if (player18State >= 5) {
                        if (other18State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 36 })
                        }
                        this.setState({ [player18]: parseInt(player18State) - 2 })
                    } else if (player18State === 4) {
                        if (other18State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 18 })
                        }
                        this.setState({ [player18]: 2 })
                    } else if (player18State < 4) {
                        this.setState({ [player18]: parseInt(player18State) - 2 })
                    }
                    break;
                case "181":
                    if (player18State === 4) {
                        if (other18State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 18 })
                        }
                        this.setState({ [player18]: 3 })
                    } else if (player18State < 4) {
                        this.setState({ [player18]: parseInt(player18State) - 1 })
                    }
                    break;
                case "173":
                    if (player17State >= 6) {
                        if (other17State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 51 })
                        }
                        this.setState({ [player17]: parseInt(player17State) - 3 })
                    } else if (player17State === 5) {
                        if (other17State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 34 })
                        }
                        this.setState({ [player17]: 2 })
                    } else if (player17State === 4) {
                        if (other17State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 17 })
                        }
                        this.setState({ [player17]: 1 })
                    } else if (player17State < 4) {
                        this.setState({ [player17]: parseInt(player17State) - 3 })
                    }
                    break;
                case "172":
                    if (player17State >= 5) {
                        if (other17State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 34 })
                        }
                        this.setState({ [player17]: parseInt(player17State) - 2 })
                    } else if (player17State === 4) {
                        if (other17State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 17 })
                        }
                        this.setState({ [player17]: 2 })
                    } else if (player17State < 4) {
                        this.setState({ [player17]: parseInt(player17State) - 2 })
                    }
                    break;
                case "171":
                    if (player17State === 4) {
                        if (other17State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 17 })
                        }
                        this.setState({ [player17]: 3 })
                    } else if (player17State < 4) {
                        this.setState({ [player17]: parseInt(player17State) - 1 })
                    }
                    break;
                case "163":
                    if (player16State >= 6) {
                        if (other16State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 48 })
                        }
                        this.setState({ [player16]: parseInt(player16State) - 3 })
                    } else if (player16State === 5) {
                        if (other16State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 32 })
                        }
                        this.setState({ [player16]: 2 })
                    } else if (player16State === 4) {
                        if (other16State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 16 })
                        }
                        this.setState({ [player16]: 1 })
                    } else if (player16State < 4) {
                        this.setState({ [player16]: parseInt(player16State) - 3 })
                    }
                    break;
                case "162":
                    if (player16State >= 5) {
                        if (other16State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 32 })
                        }
                        this.setState({ [player16]: parseInt(player16State) - 2 })
                    } else if (player16State === 4) {
                        if (other16State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 16 })
                        }
                        this.setState({ [player16]: 2 })
                    } else if (player16State < 4) {
                        this.setState({ [player16]: parseInt(player16State) - 2 })
                    }
                    break;
                case "161":
                    if (player16State === 4) {
                        if (other16State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 16 })
                        }
                        this.setState({ [player16]: 3 })
                    } else if (player16State < 4) {
                        this.setState({ [player16]: parseInt(player16State) - 1 })
                    }
                    break;
                case "153":
                    if (player15State >= 6) {
                        if (other15State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 45 })
                        }
                        this.setState({ [player15]: parseInt(player15State) - 3 })
                    } else if (player15State === 5) {
                        if (other15State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 30 })
                        }
                        this.setState({ [player15]: 2 })
                    } else if (player15State === 4) {
                        if (other15State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 15 })
                        }
                        this.setState({ [player15]: 1 })
                    } else if (player15State < 4) {
                        this.setState({ [player15]: parseInt(player15State) - 3 })
                    }
                    break;
                case "152":
                    if (player15State >= 5) {
                        if (other15State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 30 })
                        }
                        this.setState({ [player15]: parseInt(player15State) - 2 })
                    } else if (player15State === 4) {
                        if (other15State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 15 })
                        }
                        this.setState({ [player15]: 2 })
                    } else if (player15State < 4) {
                        this.setState({ [player15]: parseInt(player15State) - 2 })
                    }
                    break;
                case "151":
                    if (player15State === 4) {
                        if (other15State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 15 })
                        }
                        this.setState({ [player15]: 3 })
                    } else if (player15State < 4) {
                        this.setState({ [player15]: parseInt(player15State) - 1 })
                    }
                    break;
                case "252":
                    if (player25State >= 5) {
                        if (other25State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 50 })
                        }
                        this.setState({ [player25]: parseInt(player25State) - 2 })
                    } else if (player25State === 4) {
                        if (other25State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 25 })
                        }
                        this.setState({ [player25]: 2 })
                    } else if (player25State < 4) {
                        this.setState({ [player25]: parseInt(player25State) - 2 })
                    }
                    break;
                case "251":
                    if (player25State === 4) {
                        if (other25State < 3) {
                            this.setState({ [playerScore]: parseInt(playerScoreState) - 25 })
                        }
                        this.setState({ [player25]: 3 })
                    } else if (player25State < 4) {
                        this.setState({ [player25]: parseInt(player25State) - 1 })
                    }
                    break;
            }
            this.setState({ [playerThrows]: parseInt(throwsState) - 1 })
        }
    }

    score(number, multiplier) {
        this.scoringLogic(number, multiplier);
        this.addThrow();
        this.addMarks(multiplier);
        this.addToLog(number, multiplier);
        this.gameOverCheck();
        this.setThrowNumber(parseInt(this.state.activeThrows + 1));
        this.checkThrower();
    }

    botLogic() {
        const difficulty = this.state.botDifficulty;
        const botScore = parseInt(this.state.p2Score);
        const humanScore = parseInt(this.state.p1Score);
        const scoreDiff = botScore - humanScore;
        let randomMarks, number;

        switch (this.state.botDifficulty) {
            case 'easy':
                randomMarks = Math.random() > .75 ? 2 : 1;

                switch (randomMarks) {
                    case 1:
                        setTimeout(() => {
                            this.miss();
                        }, 500);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 1);
                        }, 1000);
                        setTimeout(() => {
                            this.miss();
                        }, 1500);
                        break;
                    case 2:
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 1);
                        }, 500);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 1);
                        }, 1000);
                        setTimeout(() => {
                            this.miss();
                        }, 1500);
                        break;
                    default:
                        setTimeout(() => {
                            this.miss();
                        }, 500);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 1);
                        }, 1000);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.miss();
                        }, 1500);
                        break;
                }
                break;
            case 'medium':
                randomMarks = Math.random() > .75 ? 3 : 2;

                switch (randomMarks) {
                    case 2:
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 1);
                        }, 500);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 1);
                        }, 1000);
                        setTimeout(() => {
                            this.miss();
                        }, 1500);
                        break;
                    case 3:
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 1);
                        }, 500);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 1);
                        }, 1000);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 1);
                        }, 1500);
                        break;

                    default:
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 1);
                        }, 500);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 1);
                        }, 1000);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.miss();
                        }, 1500);
                        break;
                }
                break;
            case 'hard':
                randomMarks = Math.floor(Math.random() * Math.floor(6 - 3)) + 3;

                switch (randomMarks) {
                    case 3:
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 1);
                        }, 500);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 1);
                        }, 1000);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 1);
                        }, 1500);
                        break;
                    case 4:
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 2);
                        }, 500);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 1);
                        }, 1000);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 1);
                        }, 1500);
                        break;
                    case 5:
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 1);
                        }, 500);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 1);
                        }, 1000);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 3);
                        }, 1500);
                        break;
                    default:
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 1);
                        }, 500);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 1);
                        }, 1000);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 1);
                        }, 1500);
                        break;
                }

                break;
            case 'pro':
                randomMarks = Math.floor(Math.random() * Math.floor(10 - 5)) + 5;
                switch (randomMarks) {
                    case 5:
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 2);
                        }, 500);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 2);
                        }, 1000);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 1);
                        }, 1500);
                        break;
                    case 6:
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 2);
                        }, 500);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 2);
                        }, 1000);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 2);
                        }, 1500);
                        break;
                    case 7:
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 3);
                        }, 500);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 2);
                        }, 1000);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 2);
                        }, 1500);
                        break;
                    case 8:
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 3);
                        }, 500);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 3);
                        }, 1000);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 2);
                        }, 1500);
                        break;

                    case 9:
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 3);
                        }, 500);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 3);
                        }, 1000);
                        setTimeout(() => {
                            number = this.botNumberHit();
                            this.score(number, 3);
                        }, 1500);
                        break;
                    default:
                        break;
                }

                break;

            default:
                setTimeout(() => {
                    number = this.botNumberHit();
                    this.score(number, 1);
                }, 300);
                setTimeout(() => {
                    number = this.botNumberHit();
                    this.score(number, 1);
                }, 600);
                setTimeout(() => {
                    this.miss();
                }, 1000);
                break;

        }
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

        if (numberState === 0) {
            this.setThrowerNumber(thrower, number, multiplier);
        }
        else if (numberState === 1) {
            if (multiplier === 1 || multiplier === 2) {
                this.setThrowerNumber(thrower, number, multiplier);
            }
            else if (multiplier === 3) {
                if (otherThrowerState < 3) {
                    this.setThrowerNumber(thrower, number, multiplier);
                    this.setPlayerScore(thrower, number, 1);
                }
                else {
                    this.setThrowerNumber(thrower, number, multiplier);
                }
            }
        }
        else if (numberState === 2) {
            if (multiplier === 1) {
                this.setThrowerNumber(thrower, number, multiplier);
            }
            else if (multiplier === 2) {
                if (otherThrowerState < 3) {
                    this.setThrowerNumber(thrower, number, multiplier);
                    this.setPlayerScore(thrower, number, 1);
                }
                else {
                    this.setThrowerNumber(thrower, number, multiplier);
                }
            }
            else if (multiplier === 3) {
                if (otherThrowerState < 3) {
                    this.setThrowerNumber(thrower, number, multiplier);
                    this.setPlayerScore(thrower, number, 2);
                }
                else {
                    this.setThrowerNumber(thrower, number, multiplier);
                }
            }
        }
        else if (numberState >= 3) {
            if (otherThrowerState < 3) {
                this.setThrowerNumber(thrower, number, multiplier);
                this.setPlayerScore(thrower, number, multiplier);
            }
            else {
                this.setThrowerNumber(thrower, number, multiplier);
            }
        }
    }

    miss() {
        this.addThrow();
        this.setThrowNumber(parseInt(this.state.activeThrows + 1));
        this.addToLog("mi", "ss");
        this.checkThrower();
    }

    endTurn() {
        let thrower = this.state.activeThrower;
        let playerThrows = `${thrower}Throws`;
        let playerThrowsState = eval("this.state." + playerThrows);
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
                this.setThrowNumber(0);
                break;
        }
    }

    checkThrower() {
        let activeThrows;
        if (this.state.botGame) {
            activeThrows = this.state.activeThrower === 'p1' ? this.state.activeThrows : this.state.activeThrows - 1;
        } else {
            activeThrows = this.state.activeThrows;
        }
        if (activeThrows >= 2) {
            this.allStarPoints();
            if (this.state.activeThrower === "p1") {

                this.setActiveThrower('p2');
                if (this.state.botGame) {
                    this.botLogic();
                }
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

    gameStateOver() {
        this.showGameOverModal(false);
        this.setState({ gameState: "over" });
    }

    setGameWinner(gameWinner) {
        this.setState({ gameWinner })
        this.showGameOverModal(true);
    }

    showGameOverModal(gameOverModal) {
        this.setState({ gameOverModal });
    }

    gameOverCheck() {
        setTimeout(() => {
            if (this.state.p120 >= 3 && this.state.p119 >= 3 && this.state.p118 >= 3 && this.state.p117 >= 3 && this.state.p116 >= 3 && this.state.p115 >= 3 && this.state.p125 >= 3 && this.state.p1Score >= this.state.p2Score) {
                if (this.state.gameWinner !== 'p1') {
                    this.setGameWinner("p1");
                }
            } else if (this.state.p220 >= 3 && this.state.p219 >= 3 && this.state.p218 >= 3 && this.state.p217 >= 3 && this.state.p216 >= 3 && this.state.p215 >= 3 && this.state.p225 >= 3 && this.state.p2Score >= this.state.p1Score) {
                this.setGameWinner("p2");
            }
        }, 500);
    }

    addThrow() {
        let thrower = this.state.activeThrower;
        let playerThrows = `${thrower}Throws`;
        let playerThrowsState = eval("this.state." + playerThrows);
        this.setState({ [playerThrows]: parseInt([playerThrowsState]) + 1 });
    }

    addMarks(number) {
        let marks = parseInt(this.state.activeMarks);
        let newMark = parseInt(number)
        this.setState({ activeMarks: marks + newMark })
    }

    resetMarks() {
        setTimeout(() => {
            this.setState({ activeMarks: 0 })
        }, 1000);
    }

    allStarPoints() {
        let marks = parseInt(this.state.activeMarks);
        if (this.state.activeThrower === "p1") {
            if (marks === 5) {
                this.setState({ p15m: parseInt(this.state.p15m) + 1 });
            } else if (marks === 6) {
                this.setState({ p16m: parseInt(this.state.p16m) + 1 });
            } else if (marks === 7) {
                this.setState({ p17m: parseInt(this.state.p17m) + 1 });
            } else if (marks === 8) {
                this.setState({ p18m: parseInt(this.state.p18m) + 1 });
            } else if (marks === 9) {
                this.setState({ p19m: parseInt(this.state.p19m) + 1 });
            }
        } else {
            if (marks === 5) {
                this.setState({ p25m: parseInt(this.state.p25m) + 1 });
            } else if (marks === 6) {
                this.setState({ p26m: parseInt(this.state.p26m) + 1 });
            } else if (marks === 7) {
                this.setState({ p27m: parseInt(this.state.p27m) + 1 });
            } else if (marks === 8) {
                this.setState({ p28m: parseInt(this.state.p28m) + 1 });
            } else if (marks === 9) {
                this.setState({ p29m: parseInt(this.state.p29m) + 1 });
            }
        }
    }

    markProgress(playerNumber, cricketNumber) {
        const playerNumberState = eval(`this.state.p${playerNumber}${cricketNumber}`);
        if (playerNumberState === 1) {
            return (<img className="mark" src="assets/images/1-mark.png" />)
        } else if (playerNumberState === 2) {
            return (<img className="mark" src="assets/images/2-mark.png" />)
        } else if (playerNumberState >= 3) {
            return (<img className="mark" src="assets/images/3-mark.png" />)
        }
    }

    undoGameOver() {
        this.undo();
        this.setGameWinner('');
        this.showGameOverModal(false);
    }

    conditionalRender() {
        console.log(this.state.gameOverModal);
        if (this.state.gameState === "playing") {
            return (
                <Scoreboard
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
            )

        } else if (this.state.gameState === "over") {
            if (this.state.gameWinner === "p1" || this.state.gameWinner === "p2") {
                return (
                    <Results
                        gameWinner={this.state.gameWinner}
                        gameCricketReset={this.gameCricketReset}
                        p1Throws={this.state.p1Throws}
                        p2Throws={this.state.p2Throws}
                    />
                )
            }
        } else if (this.state.gameState === "opponent") {
            return (
                <VsOptions
                    setBotGame={this.setBotGame}
                />
            )
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
                    {this.conditionalRender()}
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}
