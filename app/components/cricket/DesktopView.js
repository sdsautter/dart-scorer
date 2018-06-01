import React, { Component } from "react";
import PlayerRender from "../common/PlayerRender";

export default class DesktopView extends Component {
    constructor() {
        super();

        this.playersRender = this.playersRender.bind(this);
        this.bottomButtonsRow = this.bottomButtonsRow.bind(this);
        this.p1PointThrowRender = this.p1PointThrowRender.bind(this);
        this.p2PointThrowRender = this.p2PointThrowRender.bind(this);
        this.scoreButtonsRender = this.scoreButtonsRender.bind(this);
    }

    playersRender() {
        return (
            <PlayerRender
                botGame={this.props.botGame}
                activeThrower={this.props.activeThrower}
                gameCricketReset={this.props.gameCricketReset}
            />
        )
    }

    p1PointThrowRender() {
        //Renders either an input or a text area depending on the screen width
        if (this.props.activeThrower === 'p1') {
            return (
                <div className='row'>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-12 text-center align-self-center points-label'>
                                Points:
                                </div>
                            <div className="col-12 text-center align-self-center points-score">
                                {this.props.renderP1Score()}
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className='col-12'>
                        <div className="row">
                            <div className="col-10 offset-1">
                                <div className="col-12 text-center">
                                    Throw:
                            </div>
                                <div className="col-12 text-center">
                                    {this.props.activeThrows + 1}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (<div className='row'>
                <div className='col-12'>
                    <div className='row'>
                        <div className='col-12 text-center align-self-center points-label'>
                            Points:
                </div>
                        <div className="col-12 text-center align-self-center points-score">
                            {this.props.renderP1Score()}
                        </div>
                    </div>
                </div>
            </div>)
        }
    }

    p2PointThrowRender() {
        //Renders either an input or a text area depending on the screen width
        if (this.props.activeThrower === 'p2') {
            return (
                <div className='row'>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-12 text-center align-self-center points-label'>
                                Points:
                                </div>
                            <div className="col-12 text-center align-self-center points-score">
                                {this.props.renderP2Score()}
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className='col-12'>
                        <div className="row">
                            <div className="col-10 offset-1">
                                <div className="col-12 text-center">
                                    Throw:
                            </div>
                                <div className="col-12 text-center">
                                    {this.props.activeThrows + 1}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (<div className='row'>
                <div className='col-12'>
                    <div className='row'>
                        <div className='col-12 text-center align-self-center points-label'>
                            Points:
                </div>
                        <div className="col-12 text-center align-self-center points-score">
                            {this.props.renderP2Score()}
                        </div>
                    </div>
                </div>
            </div>)
        }
    }

    scoreButtonsRender() {
        //Renders either an input or a text area depending on the screen width
        if (this.props.activeThrower === 'p1') {
            return (
                <div className='col-8'>
                    <div className='row'>
                        <div className="col-3 text-center align-self-center">
                            {this.props.markProgress(1, 20)}
                        </div>

                        <div className="col-2 text-center p1-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 1) }}>20</button>
                        </div>
                        <div className="col-2 p1-multiple text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 2) }}>x2</button>
                        </div>
                        <div className="col-2 border-right p1-multiple text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 3) }}>x3</button>
                        </div>
                        <div className="col-3 text-center align-self-center">
                            {this.props.markProgress(2, 20)}
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-3 text-center align-self-center">
                            {this.props.markProgress(1, 19)}
                        </div>
                        <div className="col-2 text-center p1-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 1) }}>19</button>
                        </div>
                        <div className="col-2 p1-multiple text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 2) }}>x2</button>
                        </div>
                        <div className="col-2 border-right p1-multiple text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 3) }}>x3</button>
                        </div>
                        <div className="col-3 text-center align-self-center">
                            {this.props.markProgress(2, 19)}
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-3 text-center align-self-center">
                            {this.props.markProgress(1, 18)}
                        </div>
                        <div className="col-2 text-center p1-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 1) }}>18</button>
                        </div>
                        <div className="col-2 p1-multiple text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 2) }}>x2</button>
                        </div>
                        <div className="col-2 border-right p1-multiple text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 3) }}>x3</button>
                        </div>
                        <div className="col-3 text-center align-self-center">
                            {this.props.markProgress(2, 18)}
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-3 text-center align-self-center">
                            {this.props.markProgress(1, 17)}
                        </div>
                        <div className="col-2 text-center p1-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 1) }}>17</button>
                        </div>
                        <div className="col-2 p1-multiple text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 2) }}>x2</button>
                        </div>
                        <div className="col-2 border-right p1-multiple text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 3) }}>x3</button>
                        </div>
                        <div className="col-3 text-center align-self-center">
                            {this.props.markProgress(2, 17)}
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-3 text-center align-self-center">
                            {this.props.markProgress(1, 16)}
                        </div>
                        <div className="col-2 text-center p1-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 1) }}>16</button>
                        </div>
                        <div className="col-2 p1-multiple text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 2) }}>x2</button>
                        </div>
                        <div className="col-2 border-right p1-multiple text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 3) }}>x3</button>
                        </div>
                        <div className="col-3 text-center align-self-center">
                            {this.props.markProgress(2, 16)}
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-3 text-center align-self-center">
                            {this.props.markProgress(1, 15)}
                        </div>
                        <div className="col-2 text-center p1-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 1) }}>15</button>
                        </div>
                        <div className="col-2 p1-multiple text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 2) }}>x2</button>
                        </div>
                        <div className="col-2 border-right p1-multiple text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 3) }}>x3</button>
                        </div>
                        <div className="col-3 text-center align-self-center">
                            {this.props.markProgress(2, 15)}
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-3 text-center align-self-center">
                            {this.props.markProgress(1, 25)}
                        </div>
                        <div className="col-3 text-center p1-multiple border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 1) }}>Bull</button>
                        </div>
                        <div className="col-3 border-right p2-multiple text-center">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 2) }}>x2</button>
                        </div>
                        <div className="col-3 text-center align-self-center">
                            {this.props.markProgress(2, 25)}
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.activeThrower === 'p2') {
            if (!this.props.botGame) {
                return (
                    <div className='col-8'>
                        <div className='row'>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(1, 20)}
                            </div>
                            <div className="col-2 text-center border-left border-left p2-single">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 1) }}>20</button>
                            </div>
                            <div className="col-2 p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 2) }}>x2</button>
                            </div>
                            <div className="col-2 border-right p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 3) }}>x3</button>
                            </div>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(2, 20)}
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(1, 19)}
                            </div>
                            <div className="col-2 text-center border-left p2-single">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 1) }}>19</button>
                            </div>
                            <div className="col-2 p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 2) }}>x2</button>
                            </div>
                            <div className="col-2 border-right p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 3) }}>x3</button>
                            </div>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(2, 19)}
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(1, 18)}
                            </div>
                            <div className="col-2 text-center border-left p2-single">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 1) }}>18</button>
                            </div>
                            <div className="col-2 p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 2) }}>x2</button>
                            </div>
                            <div className="col-2 border-right p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 3) }}>x3</button>
                            </div>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(2, 18)}
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(1, 17)}
                            </div>
                            <div className="col-2 text-center border-left p2-single">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 1) }}>17</button>
                            </div>
                            <div className="col-2 p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 2) }}>x2</button>
                            </div>
                            <div className="col-2 border-right p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 3) }}>x3</button>
                            </div>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(2, 17)}
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(1, 16)}
                            </div>
                            <div className="col-2 text-center border-left p2-single">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 1) }}>16</button>
                            </div>
                            <div className="col-2 p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 2) }}>x2</button>
                            </div>
                            <div className="col-2 border-right p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 3) }}>x3</button>
                            </div>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(2, 16)}
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(1, 15)}
                            </div>
                            <div className="col-2 text-center border-left p2-single">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 1) }}>15</button>
                            </div>
                            <div className="col-2 p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 2) }}>x2</button>
                            </div>
                            <div className="col-2 border-right p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 3) }}>x3</button>
                            </div>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(2, 15)}
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(1, 25)}
                            </div>
                            <div className="col-3 text-center border-left p1-multiple">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 1) }}>Bull</button>
                            </div>
                            <div className="col-3 border-right p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 2) }}>x2</button>
                            </div>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(2, 25)}
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className='col-8'>
                        <div className='row'>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(1, 20)}
                            </div>
                            <div className="col-2 text-center border-left border-left p2-single">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 1) }} disabled>20</button>
                            </div>
                            <div className="col-2 p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 2) }} disabled>x2</button>
                            </div>
                            <div className="col-2 border-right p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 3) }} disabled>x3</button>
                            </div>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(2, 20)}
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(1, 19)}
                            </div>
                            <div className="col-2 text-center border-left p2-single">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 1) }} disabled>19</button>
                            </div>
                            <div className="col-2 p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 2) }} disabled>x2</button>
                            </div>
                            <div className="col-2 border-right p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 3) }} disabled>x3</button>
                            </div>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(2, 19)}
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(1, 18)}
                            </div>
                            <div className="col-2 text-center border-left p2-single">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 1) }} disabled>18</button>
                            </div>
                            <div className="col-2 p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 2) }} disabled>x2</button>
                            </div>
                            <div className="col-2 border-right p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 3) }} disabled>x3</button>
                            </div>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(2, 18)}
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(1, 17)}
                            </div>
                            <div className="col-2 text-center border-left p2-single">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 1) }} disabled>17</button>
                            </div>
                            <div className="col-2 p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 2) }} disabled>x2</button>
                            </div>
                            <div className="col-2 border-right p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 3) }} disabled>x3</button>
                            </div>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(2, 17)}
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(1, 16)}
                            </div>
                            <div className="col-2 text-center border-left p2-single">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 1) }} disabled>16</button>
                            </div>
                            <div className="col-2 p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 2) }} disabled>x2</button>
                            </div>
                            <div className="col-2 border-right p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 3) }} disabled>x3</button>
                            </div>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(2, 16)}
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(1, 15)}
                            </div>
                            <div className="col-2 text-center border-left p2-single">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 1) }} disabled>15</button>
                            </div>
                            <div className="col-2 p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 2) }} disabled>x2</button>
                            </div>
                            <div className="col-2 border-right p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 3) }} disabled>x3</button>
                            </div>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(2, 15)}
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(1, 25)}
                            </div>
                            <div className="col-3 text-center border-left p1-multiple">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 1) }} disabled>Bull</button>
                            </div>
                            <div className="col-3 border-right p2-multiple text-center">
                                <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 2) }} disabled>x2</button>
                            </div>
                            <div className="col-3 text-center align-self-center">
                                {this.props.markProgress(2, 25)}
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }

    bottomButtonsRow() {
        if (!this.props.botGame) {
            return (
                <div className="row">
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
            if (this.props.activeThrower === 'p2') {
                return (
                    <div className="row">
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
                            <button type="button" className="btn" onClick={() => { this.props.undo() }} >
                                Undo
                        </button>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="row">
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
            }
        }
    }

    render() {
        //Renders either an input or a text area depending on the screen width
        return (
            <div className="container-fluid">
                {this.playersRender()}
                <div className="row">
                    <div className='col-2'>
                        {this.p1PointThrowRender()}
                    </div>
                    {this.scoreButtonsRender()}
                    <div className='col-2'>
                        {this.p2PointThrowRender()}
                    </div>
                </div>
                {this.bottomButtonsRow()}
            </div >
        )
    }
}
