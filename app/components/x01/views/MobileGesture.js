import React, { Component } from "react";
import Hammer from 'react-hammerjs';

export default class MobileGesture extends Component {
    constructor() {
        super();
        this.state = {
            touchNumber: 0,
        }

        this.nameRender = this.nameRender.bind(this);
        this.playerButtonsRender = this.playerButtonsRender.bind(this);
        this.missUndoRow = this.missUndoRow.bind(this);
        this.touchStartRender = this.touchStartRender.bind(this);
        this.touchEnd = this.touchEnd.bind(this);
        this.setTouchNumber = this.setTouchNumber.bind(this);
        this.conditionalButtonRender = this.conditionalButtonRender.bind(this);
    }

    nameRender() {
        if (this.props.activeThrower === "p1") {
            return "Player 1";
        } else {
            return "Player 2";
        }
    }

    conditionalButtonRender(number) {
        if (number !== 25) {
            return (
                <Hammer onPress={() => {
                    this.touchStartRender(number)
                }}
                    onPressUp={() => {
                        this.touchStartRender(0)
                    }}
                    onTap={() => (this.props.score(number, 1))}
                    direction='DIRECTION_VERTICAL'
                    onSwipeUp={() => (this.props.score(number, 2))}
                    onSwipeDown={() => (this.props.score(number, 3))}>
                    <button type="button" className="btn text-center" >
                        {number}
                    </button>
                </Hammer>
            )
        } else {
            return (
                <Hammer onPress={() => {
                    this.touchStartRender(number)
                }}
                    onPressUp={() => {
                        this.touchStartRender(0)
                    }}
                    onTap={() => (this.props.score(number, 1))}
                    direction='DIRECTION_VERTICAL'
                    onSwipeUp={() => (this.props.score(number, 2))}>
                    <button type="button" className="btn text-center" >
                        Bull
                    </button>
                </Hammer>
            )
        }
    }

    setTouchNumber(touchNumber) {
        this.setState({ touchNumber })
    }

    touchStartRender(touchNumber) {
        this.setTouchNumber(touchNumber);
        this.conditionalButtonRender(touchNumber);

    }

    touchEnd(number) {
        this.setTouchNumber(0).then(() => {
            this.conditionalButtonRender(number)
        });
    }

    playerButtonsRender() {
        if (!this.props.gameOverModal) {
            return (
                <div className="row">
                    <br />
                    <div className={`col-4 text-right number ${this.props.activeThrower}-single border-bottom`}>
                        {this.conditionalButtonRender(20)}
                    </div>
                    <div className={`col-4 text-right number ${this.props.activeThrower}-single border-bottom`}>
                        {this.conditionalButtonRender(19)}

                    </div>

                    <div className={`col-4 text-right number ${this.props.activeThrower}-single border-bottom`}>
                        {this.conditionalButtonRender(18)}
                    </div>

                    <div className={`col-4 text-right number ${this.props.activeThrower}-single border-bottom`}>
                        {this.conditionalButtonRender(17)}

                    </div>

                    <div className={`col-4 text-right number ${this.props.activeThrower}-single border-bottom`}>
                        {this.conditionalButtonRender(16)}
                    </div>

                    <div className={`col-4 text-right number ${this.props.activeThrower}-single border-bottom`}>
                        {this.conditionalButtonRender(15)}
                    </div>
                    <div className={`col-4 text-right number ${this.props.activeThrower}-single border-bottom`}>
                        {this.conditionalButtonRender(14)}

                    </div>

                    <div className={`col-4 text-right number ${this.props.activeThrower}-single border-bottom`}>
                        {this.conditionalButtonRender(13)}

                    </div>

                    <div className={`col-4 text-right number ${this.props.activeThrower}-single border-bottom`}>
                        {this.conditionalButtonRender(12)}

                    </div>

                    <div className={`col-4 text-right number ${this.props.activeThrower}-single border-bottom`}>
                        {this.conditionalButtonRender(11)}

                    </div>

                    <div className={`col-4 text-right number ${this.props.activeThrower}-single border-bottom`}>
                        {this.conditionalButtonRender(10)}

                    </div>

                    <div className={`col-4 text-right number ${this.props.activeThrower}-single border-bottom`}>
                        {this.conditionalButtonRender(9)}

                    </div>

                    <div className={`col-4 text-right number ${this.props.activeThrower}-single border-bottom`}>
                        {this.conditionalButtonRender(8)}

                    </div>

                    <div className={`col-4 text-right number ${this.props.activeThrower}-single border-bottom`}>
                        {this.conditionalButtonRender(7)}

                    </div>

                    <div className={`col-4 text-right number ${this.props.activeThrower}-single border-bottom`}>
                        {this.conditionalButtonRender(6)}
                    </div>

                    <div className={`col-4 text-right number ${this.props.activeThrower}-single border-bottom`}>
                        {this.conditionalButtonRender(5)}
                    </div>

                    <div className={`col-4 text-right number ${this.props.activeThrower}-single border-bottom`}>
                        {this.conditionalButtonRender(4)}
                    </div>

                    <div className={`col-4 text-right number ${this.props.activeThrower}-single border-bottom`}>
                        {this.conditionalButtonRender(3)}
                    </div>

                    <div className={`col-4 text-right number ${this.props.activeThrower}-single`}>
                        {this.conditionalButtonRender(2)}
                    </div>
                    <div className={`col-4 text-right number ${this.props.activeThrower}-single`}>
                        {this.conditionalButtonRender(1)}
                    </div>

                    <div className={`col-4 text-right number ${this.props.activeThrower}-multiple`}>
                        {this.conditionalButtonRender(25)}
                    </div>
                </div >
            )
        } else {
            return (
                <div>
                    <div className='row'>
                        <div className='col-12 text-center' id='x01GameOver'>
                            <h3>Game Over?</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-12 text-center p2-multiple game-over">
                            <br />
                            <br />
                            <br />
                            <button type="button" className="btn" onClick={() => { this.props.undoGameOver() }}>
                                Undo
                        </button>
                            <br />
                            <br />
                            <br />

                        </div>

                        <div className="col-12 text-center p1-multiple game-over">
                            <button type="button" className="btn" onClick={() => { this.props.gameStateOver() }}>
                                Confirm
                        </button>
                        </div>
                    </div>

                </div>
            )
        }
    }

    missUndoRow() {
        if (!this.props.gameOverModal) {
            return (
                <div className="row miss-undo-row" id='x01MobileUndoRow'>
                    <div className="col-3 text-center end-turn">
                        <button type="button" className="btn" onClick={() => { this.props.endTurn() }}>
                            End Turn
                        </button>
                    </div>
                    <div className="col-6 text-center miss">
                        <button type="button" className="btn" onClick={() => { this.props.miss() }}>
                            Miss
                        </button>
                    </div>
                    <div className="col-3 text-center undo">
                        <button type="button" className="btn" onClick={() => { this.props.undo() }}>
                            Undo
                        </button>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            <div>
                <div className='row' id='x01MobileThrow'>
                    <div className="col-3 text-center start-over mobile-start-over">
                        <button type="button" className="btn" data-toggle="modal" data-target="#reloadModal">
                            <img className="icon" src="/assets/images/svg/reload.svg" alt="restart game"></img>
                        </button>
                    </div>
                    <div className='col-6 throw-borders text-center align-self-center' id='mobileThrow'>
                        Throw: <span>{this.props.activeThrows + 1}</span>
                    </div>
                    <div className="col-3 text-center start-over mobile-start-over">
                        <button type="button" className="btn" data-toggle="modal" data-target="#exitModal">
                            <img className="icon" src="/assets/images/svg/home.svg" alt="home screen"></img>
                        </button>
                    </div>
                </div>
                {this.playerButtonsRender()}
                {this.missUndoRow()}
            </div >
        )

    }
}
