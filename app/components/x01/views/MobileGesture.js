import React, { Component } from "react";
import Hammer from 'react-hammerjs';

export default class MobileGesture extends Component {
    constructor() {
        super();
        this.state = {
            touchNumber: 0,
            showHelp: true,
        }

        this.nameRender = this.nameRender.bind(this);
        this.playerButtonsRender = this.playerButtonsRender.bind(this);
        this.missUndoRow = this.missUndoRow.bind(this);
        this.touchStartRender = this.touchStartRender.bind(this);
        this.touchEnd = this.touchEnd.bind(this);
        this.setTouchNumber = this.setTouchNumber.bind(this);
        this.conditionalButtonRender = this.conditionalButtonRender.bind(this);
        this.neverShowAgain = this.neverShowAgain.bind(this);
        this.hideHelp = this.hideHelp.bind(this);
        this.gestureOptions = this.gestureOptions.bind(this);
    }

    nameRender() {
        if (this.props.activeThrower === "p1") {
            return "Player 1";
        } else {
            return "Player 2";
        }
    }

    neverShowAgain() {
        localStorage.setItem('gesture-help', 'off');
        this.setState({ showHelp: false });
    }

    hideHelp() {
        this.setState({ showHelp: false });
    }

    componentWillMount() {
        const gestureHelp = localStorage.getItem('gesture-help');

        if (gestureHelp !== 'off') {
            localStorage.setItem('gesture-help', 'on');
            this.setState({ showHelp: true });
        } else {
            this.setState({ showHelp: false })
        }
    }

    gestureOptions(number) {
        const singleOption = localStorage.getItem('single');
        const multipleOption = localStorage.getItem('multiple');
        console.log(singleOption);
        console.log(multipleOption);
        if (singleOption === 'press' && multipleOption === 'horizontal') {
            return (
                <Hammer onPress={() => {
                    console.log('press');
                    this.props.score(number, 1)
                }}
                    direction='DIRECTION_HORIZONTAL'
                    onSwipeLeft={() => (this.props.score(number, 2))}
                    onSwipeRight={() => (this.props.score(number, 3))}>
                    <button type="button" className="btn text-center" >
                        {number}
                    </button>
                </Hammer>
            )
        } else if (singleOption === 'press' && multipleOption === 'vertical') {
            return (
                <Hammer onPress={() => {
                    (this.props.score(number, 1))
                }}
                    direction='DIRECTION_VERTICAL'
                    onSwipeUp={() => (this.props.score(number, 2))}
                    onSwipeDown={() => (this.props.score(number, 3))}>
                    <button type="button" className="btn text-center" >
                        {number}
                    </button>
                </Hammer>

            )
        } else if (singleOption === 'tap' && multipleOption === 'horizontal') {
            return (
                <Hammer onTap={() => {
                    (this.props.score(number, 1))
                }}
                    direction='DIRECTION_HORIZONTAL'
                    onSwipeLeft={() => (this.props.score(number, 2))}
                    onSwipeRight={() => (this.props.score(number, 3))}>
                    <button type="button" className="btn text-center" >
                        {number}
                    </button>
                </Hammer>
            )
        } else if (singleOption === 'tap' && multipleOption === 'vertical') {
            return (
                <Hammer onTap={() => {
                    (this.props.score(number, 1))
                }}
                    direction='DIRECTION_VERTICAL'
                    onSwipeUp={() => (this.props.score(number, 2))}
                    onSwipeDown={() => (this.props.score(number, 3))}>
                    <button type="button" className="btn text-center" >
                        {number}
                    </button>
                </Hammer>
            )
        }
    }

    conditionalButtonRender(number) {
        if (!this.props.botGame || this.props.activeThrower === 'p1') {
            if (number !== 25) {
                { return this.gestureOptions(number) }
            } else {
                return (
                    <Hammer onPress={() => (this.props.score(number, 1))}
                        direction='DIRECTION_HORIZONTAL'
                        onSwipeLeft={() => (this.props.score(number, 2))}>
                        <button type="button" className="btn text-center" >
                            Bull
                        </button>
                    </Hammer>
                )
            }
        } else {
            if (number !== 25) {
                return (
                    <button type="button" className="btn text-center" disabled >
                        {number}
                    </button>
                )
            } else {
                return (
                    <button type="button" className="btn text-center" disabled>
                        Bull
                    </button>
                )
            }
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
        const singleGesture = localStorage.getItem('single') === 'tap' ? 'Tap' : 'Press';
        const doubleGesture = localStorage.getItem('multiple') === 'horizontal' ? 'left' : 'up';
        const tripleGesture = localStorage.getItem('multiple') === 'horizontal' ? 'right' : 'down';

        if (!this.props.gameOverModal) {
            if (this.state.showHelp) {
                return (
                    <div className="row">
                        <div className='col-12'>
                            <div className='row'>

                                <div className='col-12 text-center'>
                                    <h2 className='text-center' id='gestureHeader'>Touch Gestures</h2>
                                </div>
                                <div className='col-12'>
                                    <ul className='gestures'>
                                        <li className='gesture-item'>
                                            {singleGesture} for x1</li>
                                        <li className='gesture-item'>Swipe {doubleGesture} for x2</li>
                                        <li className='gesture-item'>Swipe {tripleGesture} for x3</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6 end-turn text-center'>
                                    <button type="button" className="btn text-center" id="neverShowAgain" onClick={this.neverShowAgain}>
                                        Never Show Again
                                </button>
                                </div>
                                <div className='col-6 undo'>
                                    <button type="button" className="btn" onClick={this.hideHelp}>
                                        Ok
                                </button>
                                </div>
                            </div>
                        </div>
                    </div >
                )
            } else {
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
        if (!this.props.gameOverModal && !this.state.showHelp) {
            if (!this.props.botGame || this.props.activeThrower === 'p1') {
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
                return (
                    <div className="row miss-undo-row" id='x01MobileUndoRow'>
                        <div className="col-3 text-center end-turn">
                            <button type="button" className="btn" onClick={() => { this.props.endTurn() }} disabled>
                                End Turn
                        </button>
                        </div>
                        <div className="col-6 text-center miss">
                            <button type="button" className="btn" onClick={() => { this.props.miss() }} disabled>
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
            }
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
                <div className="modal fade" id="reloadModal" tabIndex="-1" role="dialog" aria-labelledby="reloadModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="reloadModalLabel">Start Game Over</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal">No</button>
                                    </div>
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { this.gameReset() }}>Yes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exitModal" tabIndex="-1" role="dialog" aria-labelledby="exitModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exitModalLabel">Exit Game</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal">No</button>
                                    </div>
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { location.assign('/') }}>Yes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )

    }
}
