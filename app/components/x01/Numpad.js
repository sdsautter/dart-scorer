import React, { Component } from "react";

export default class Numpad extends Component {
    constructor() {
        super();

        this.state = {
            numberEntry: ""
        }

        this.numpadRender = this.numpadRender.bind(this);
        this.renderNumberEntry = this.renderNumberEntry.bind(this);
        this.numberInput = this.numberInput.bind(this);
        this.numberRemove = this.numberRemove.bind(this);
        this.scoreEntry = this.scoreEntry.bind(this);
    }

    numberInput(number) {
        if (this.state.numberEntry !== "Too High. Try Again." || this.state.numberEntry !== "Impossible Number. Try Again.") {
            let originalNumber = this.state.numberEntry;
            let addOnNumber = number;
            let newNumber = `${originalNumber}${addOnNumber}`;
            this.setState({ numberEntry: newNumber });
        }
    }

    numberRemove() {
        let originalNumber = this.state.numberEntry;
        let newNumber = originalNumber.slice(0, originalNumber.length - 1);
        this.setState({ numberEntry: newNumber });
    }

    renderNumberEntry() {
        if (this.state.numberEntry === "") {
            return "0";
        } else {
            return this.state.numberEntry;
        }
    }

    scoreEntry() {
        const impossibleNumbers = [163, 166, 169, 172, 173, 175, 176, 178, 179];

        if (parseInt(this.state.numberEntry) <= 180) {
            if (impossibleNumbers.includes(parseInt(this.state.numberEntry))) {
                this.setState({ numberEntry: "Impossible Number. Try Again." });
                setTimeout(() => {
                    this.setState({ numberEntry: "" });
                }, 1500);
            } else {
                this.props.numpadScore(parseInt(this.state.numberEntry));
                this.setState({ numberEntry: "" });
            }
        } else if (this.state.numberEntry === "") {
            this.props.numpadScore(0);
        } else {
            this.setState({ numberEntry: "Too High. Try Again." });
            setTimeout(() => {
                this.setState({ numberEntry: "" });
            }, 1500);
        }
    }

    numpadRender() {
        if (!this.props.gameOverModal) {
            if (this.props.activeThrower === 'p1') {
                return (
                    <div className="row">
                        <div className="col-sm-10 offset-sm-1 col-md-6 offset-md-3">
                            <br />
                            <div className="row">
                                <div className="col-12 text-center points-score">
                                    {this.renderNumberEntry()}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 number p1-single">
                                    <button type="button" className="btn btn-success" onClick={() => { this.numberInput(9) }}>9</button>
                                </div>
                                <div className="col-4 number p1-single">
                                    <button type="button" className="btn btn-success" onClick={() => { this.numberInput(8) }}>8</button>
                                </div>
                                <div className="col-4 number p1-single">
                                    <button type="button" className="btn btn-success" onClick={() => { this.numberInput(7) }}>7</button>
                                </div>
                                <div className="col-4 number p1-single">
                                    <button type="button" className="btn btn-success" onClick={() => { this.numberInput(6) }}>6</button>
                                </div>
                                <div className="col-4 number p1-single">
                                    <button type="button" className="btn btn-success" onClick={() => { this.numberInput(5) }}>5</button>
                                </div>
                                <div className="col-4 number p1-single">
                                    <button type="button" className="btn btn-success" onClick={() => { this.numberInput(4) }}>4</button>
                                </div>
                                <div className="col-4 number p1-single">
                                    <button type="button" className="btn btn-success" onClick={() => { this.numberInput(3) }}>3</button>
                                </div>
                                <div className="col-4 number p1-single">
                                    <button type="button" className="btn btn-success" onClick={() => { this.numberInput(2) }}>2</button>
                                </div>
                                <div className="col-4 number p1-single">
                                    <button type="button" className="btn btn-success" onClick={() => { this.numberInput(1) }}>1</button>
                                </div>
                                <div className="col-4 number p1-multiple">
                                    <button type="button" className="btn btn-success" onClick={() => { this.numberRemove() }}><img src="../../assets/images/left-arrow.png" /></button>
                                </div>
                                <div className="col-4 number p1-single">
                                    <button type="button" className="btn btn-success" onClick={() => { this.numberInput(0) }}>0</button>
                                </div>
                                <div className="col-4 number p1-multiple">
                                    <button type="button" className="btn btn-success" onClick={() => { this.scoreEntry() }}>Enter</button>
                                </div>
                                <div className="col undo">
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.numpadUndo() }}>Undo</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (this.props.activeThrower === 'p2')
                if (!this.props.botGame) {
                    return (
                        <div className="row">
                            <div className="col-sm-10 offset-sm-1 col-md-6 offset-md-3">
                                <br />
                                <div className="row">
                                    <div className="col-12 text-center points-score">
                                        {this.renderNumberEntry()}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4 number p2-single">
                                        <button type="button" className="btn btn-success" onClick={() => { this.numberInput(9) }}>9</button>
                                    </div>
                                    <div className="col-4 number p2-single">
                                        <button type="button" className="btn btn-success" onClick={() => { this.numberInput(8) }}>8</button>
                                    </div>
                                    <div className="col-4 number p2-single">
                                        <button type="button" className="btn btn-success" onClick={() => { this.numberInput(7) }}>7</button>
                                    </div>
                                    <div className="col-4 number p2-single">
                                        <button type="button" className="btn btn-success" onClick={() => { this.numberInput(6) }}>6</button>
                                    </div>
                                    <div className="col-4 number p2-single">
                                        <button type="button" className="btn btn-success" onClick={() => { this.numberInput(5) }}>5</button>
                                    </div>
                                    <div className="col-4 number p2-single">
                                        <button type="button" className="btn btn-success" onClick={() => { this.numberInput(4) }}>4</button>
                                    </div>
                                    <div className="col-4 number p2-single">
                                        <button type="button" className="btn btn-success" onClick={() => { this.numberInput(3) }}>3</button>
                                    </div>
                                    <div className="col-4 number p2-single">
                                        <button type="button" className="btn btn-success" onClick={() => { this.numberInput(2) }}>2</button>
                                    </div>
                                    <div className="col-4 number p2-single">
                                        <button type="button" className="btn btn-success" onClick={() => { this.numberInput(1) }}>1</button>
                                    </div>
                                    <div className="col-4 number p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.numberRemove() }}><img src="../../assets/images/left-arrow.png" /></button>
                                    </div>
                                    <div className="col-4 number p2-single">
                                        <button type="button" className="btn btn-success" onClick={() => { this.numberInput(0) }}>0</button>
                                    </div>
                                    <div className="col-4 number p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.scoreEntry() }}>Enter</button>
                                    </div>
                                    <div className="col undo">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.numpadUndo() }}>Undo</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div className="row">
                            <div className="col-sm-10 offset-sm-1 col-md-6 offset-md-3">
                                <br />
                                <div className="row">
                                    <div className="col-12 text-center points-score">
                                        {this.renderNumberEntry()}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4 number p2-single">
                                        <button type="button" className="btn btn-success" onClick={() => { this.numberInput(9) }} disabled>9</button>
                                    </div>
                                    <div className="col-4 number p2-single">
                                        <button type="button" className="btn btn-success" onClick={() => { this.numberInput(8) }} disabled>8</button>
                                    </div>
                                    <div className="col-4 number p2-single">
                                        <button type="button" className="btn btn-success" onClick={() => { this.numberInput(7) }} disabled>7</button>
                                    </div>
                                    <div className="col-4 number p2-single">
                                        <button type="button" className="btn btn-success" onClick={() => { this.numberInput(6) }} disabled>6</button>
                                    </div>
                                    <div className="col-4 number p2-single">
                                        <button type="button" className="btn btn-success" onClick={() => { this.numberInput(5) }} disabled>5</button>
                                    </div>
                                    <div className="col-4 number p2-single">
                                        <button type="button" className="btn btn-success" onClick={() => { this.numberInput(4) }} disabled>4</button>
                                    </div>
                                    <div className="col-4 number p2-single">
                                        <button type="button" className="btn btn-success" onClick={() => { this.numberInput(3) }} disabled>3</button>
                                    </div>
                                    <div className="col-4 number p2-single">
                                        <button type="button" className="btn btn-success" onClick={() => { this.numberInput(2) }} disabled>2</button>
                                    </div>
                                    <div className="col-4 number p2-single">
                                        <button type="button" className="btn btn-success" onClick={() => { this.numberInput(1) }} disabled>1</button>
                                    </div>
                                    <div className="col-4 number p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.numberRemove() }} disabled><img src="../../assets/images/left-arrow.png" /></button>
                                    </div>
                                    <div className="col-4 number p2-single">
                                        <button type="button" className="btn btn-success" onClick={() => { this.numberInput(0) }} disabled>0</button>
                                    </div>
                                    <div className="col-4 number p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.scoreEntry() }} disabled>Enter</button>
                                    </div>
                                    <div className="col undo">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.numpadUndo() }}>Undo</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
        } else {
            return (
                <div>
                    <div className='row'>
                        <div className='col-12 text-center' id='x01GameOver'>
                            <h3>Game Over?</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-12 col-md-4 offset-md-1 text-center p2-multiple game-over">

                            <button type="button" className="btn" onClick={() => { this.props.undoGameOver() }}>
                                Undo
                        </button>

                        </div>

                        <div className="col-12 col-md-4 offset-md-2 text-center p1-multiple game-over">
                            <button type="button" className="btn" onClick={() => { this.props.gameStateOver() }}>
                                Confirm
                        </button>
                        </div>
                    </div>

                </div>
            )
        }
    }

    render() {
        {
            document.onkeyup = (event) => {
                var UserInput = event.key;
                switch (UserInput) {
                    case "9":
                        this.numberInput(9);
                        break;
                    case "8":
                        this.numberInput(8);
                        break;
                    case "7":
                        this.numberInput(7);
                        break;
                    case "6":
                        this.numberInput(6);
                        break;
                    case "5":
                        this.numberInput(5);
                        break;
                    case "4":
                        this.numberInput(4);
                        break;
                    case "3":
                        this.numberInput(3);
                        break;
                    case "2":
                        this.numberInput(2);
                        break;
                    case "1":
                        this.numberInput(1);
                        break;
                    case "0":
                        this.numberInput(0);
                        break;
                    case "Enter":
                        this.scoreEntry();
                        break;
                    case "Backspace":
                        this.numberRemove();
                }
            }
        }
        return (
            <div>
                {this.numpadRender()}
            </div>

        )
    }
}
