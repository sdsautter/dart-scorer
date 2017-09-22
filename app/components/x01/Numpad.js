import React, {Component} from "react";

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
            let originalNumber = this.state.numberEntry;
            let addOnNumber = number;
            let newNumber = `${originalNumber}${addOnNumber}`;
            this.setState({numberEntry: newNumber});
    }

    numberRemove() {
        let originalNumber = this.state.numberEntry;
        let newNumber = originalNumber.slice(0, originalNumber.length-1);
        this.setState({numberEntry: newNumber});
    }

    renderNumberEntry() {
        if (this.state.numberEntry === "") {
            return "0";
        } else {
        return this.state.numberEntry;
        }
    }

    scoreEntry() {
        if (parseInt(this.state.numberEntry) <= 180) {
        this.props.numpadScore(this.props.activeThrower, parseInt(this.state.numberEntry));
        this.setState({numberEntry: ""});
        } else if (this.state.numberEntry === "") {
            this.props.numpadScore(this.props.activeThrower, 0);    
        } else {
            this.setState({numberEntry: "Too High. Try Again."});
            setTimeout(() => {
                this.setState({numberEntry: ""});
            }, 1500);
        }
    }

    numpadRender() {
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
                        <div className="col-4 number">
                            <button type="button" className="btn btn-success" onClick={() => {this.numberInput(9)}}>9</button>
                        </div>
                        <div className="col-4 number">
                            <button type="button" className="btn btn-success" onClick={() => {this.numberInput(8)}}>8</button>
                        </div>
                        <div className="col-4 number">
                            <button type="button" className="btn btn-success" onClick={() => {this.numberInput(7)}}>7</button>
                        </div>
                        <div className="col-4 number">
                            <button type="button" className="btn btn-success" onClick={() => {this.numberInput(6)}}>6</button>
                        </div>
                        <div className="col-4 number">
                            <button type="button" className="btn btn-success" onClick={() => {this.numberInput(5)}}>5</button>
                        </div>
                        <div className="col-4 number">
                            <button type="button" className="btn btn-success" onClick={() => {this.numberInput(4)}}>4</button>
                        </div>
                        <div className="col-4 number">
                            <button type="button" className="btn btn-success" onClick={() => {this.numberInput(3)}}>3</button>
                        </div>
                        <div className="col-4 number">
                            <button type="button" className="btn btn-success" onClick={() => {this.numberInput(2)}}>2</button>
                        </div>
                        <div className="col-4 number">
                            <button type="button" className="btn btn-success" onClick={() => {this.numberInput(1)}}>1</button>
                        </div>
                        <div className="col-4 number">
                            <button type="button" className="btn btn-success" onClick={() => {this.numberRemove()}}><img src="./assets/images/left-arrow.png" /></button>
                        </div>
                        <div className="col-4 number">
                            <button type="button" className="btn btn-success" onClick={() => {this.numberInput(0)}}>0</button>
                        </div>
                        <div className="col-4 number">
                            <button type="button" className="btn btn-success" onClick={() => {this.scoreEntry()}}>Enter</button>
                        </div>
                        <div className="col undo">
                            <button type="button" className="btn btn-success" onClick={() => {this.props.numpadUndo()}}>Undo</button>                        
                        </div>
                    </div>
                </div>
            </div>
        )

    }

    render() {
        {
            document.onkeyup = (event) => {
                var UserInput = event.key;
                switch(UserInput) {
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
