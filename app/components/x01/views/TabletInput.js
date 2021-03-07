import React, { Component } from "react";
import ShotHistory from './ShotHistory';

export default class TabletInput extends Component {
    constructor() {
        super();

        this.playerButtonsRender = this.playerButtonsRender.bind(this);
        this.bottomButtonRow = this.bottomButtonRow.bind(this);
    }

    playerButtonsRender() {
        if (!this.props.gameOverModal && this.props.diddle) {
            if (this.props.activeThrower === 'p1') {
                return (
                    <div>
                        <div className="row">
                            <div className="col-6 offset-3 text-center throw-borders">
                                Throw: <span>{this.props.activeThrows + 1} </span>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-2'>
                                <ShotHistory
                                    p1RoundStartScore={this.props.p1RoundStartScore}
                                    p1RoundScores={this.props.p1RoundScores}
                                    p2RoundStartScore={this.props.p2RoundStartScore}
                                    p2RoundScores={this.props.p2RoundScores}
                                    p1='p1'
                                />
                            </div>
                            <div className='col-8'>
                                <div className="row">
                                    <div className="col-2 text-center number border-bottom p1-single border-left border-top">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 1) }}>20</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple border-top">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple border-top">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-single border-left border-top">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 1) }}>19</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple border-top">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple border-top border-right">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 1) }}>18</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 1) }}>17</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple border-right">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 1) }}>16</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 1) }}>15</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple border-right">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(14, 1) }}>14</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(14, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(14, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(13, 1) }}>13</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(13, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple border-right">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(13, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(12, 1) }}>12</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(12, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(12, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(11, 1) }}>11</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(11, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple border-right">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(11, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(10, 1) }}>10</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(10, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(10, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(9, 1) }}>9</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(9, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple border-right">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(9, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(8, 1) }}>8</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(8, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(8, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(7, 1) }}>7</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(7, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple border-right">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(7, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(6, 1) }}>6</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(6, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(6, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(5, 1) }}>5</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(5, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple border-right">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(5, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(4, 1) }}>4</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(4, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(4, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(3, 1) }}>3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(3, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple border-right">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(3, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(2, 1) }}>2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(2, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(2, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(1, 1) }}>1</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(1, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p1-multiple border-right">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(1, 3) }}>x3</button>
                                    </div>
                                    <div className="col text-center number p1-multiple border-left border-bottom">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 1) }}>Bull</button>
                                    </div>
                                    <div className="col text-center number p1-single border-bottom border-right">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 2) }}>Double-Bull</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-2'>
                                <ShotHistory
                                    p1RoundStartScore={this.props.p1RoundStartScore}
                                    p1RoundScores={this.props.p1RoundScores}
                                    p2RoundStartScore={this.props.p2RoundStartScore}
                                    p2RoundScores={this.props.p2RoundScores}
                                />
                            </div>
                        </div>
                    </div >
                )
            } else if (this.props.activeThrower === 'p2') {
                return (
                    <div>
                        <div className="row">
                            <div className="col-6 offset-3 text-center throw-borders">
                                Throw: <span>{this.props.activeThrows + 1} </span>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-2'>
                                <ShotHistory
                                    p1RoundStartScore={this.props.p1RoundStartScore}
                                    p1RoundScores={this.props.p1RoundScores}
                                    p2RoundStartScore={this.props.p2RoundStartScore}
                                    p2RoundScores={this.props.p2RoundScores}
                                    p1='p1'
                                />
                            </div>
                            <div className='col-8'>
                                <div className="row">
                                    <div className="col-2 text-center number border-bottom p2-single border-left border-top">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 1) }}>20</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple border-top">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple border-top">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-single border-left border-top">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 1) }}>19</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple border-top">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple border-top border-right">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 1) }}>18</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 1) }}>17</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple border-right border-right">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 1) }}>16</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 1) }}>15</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple border-right">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(14, 1) }}>14</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(14, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(14, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(13, 1) }}>13</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(13, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple border-right">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(13, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(12, 1) }}>12</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(12, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(12, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(11, 1) }}>11</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(11, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple border-right">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(11, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(10, 1) }}>10</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(10, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(10, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(9, 1) }}>9</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(9, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple border-right">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(9, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(8, 1) }}>8</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(8, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(8, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(7, 1) }}>7</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(7, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple border-right">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(7, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(6, 1) }}>6</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(6, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(6, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(5, 1) }}>5</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(5, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple border-right">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(5, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(4, 1) }}>4</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(4, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(4, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(3, 1) }}>3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(3, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple border-right">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(3, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(2, 1) }}>2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(2, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(2, 3) }}>x3</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-single border-left">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(1, 1) }}>1</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(1, 2) }}>x2</button>
                                    </div>
                                    <div className="col-2 text-center number border-bottom p2-multiple border-right">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(1, 3) }}>x3</button>
                                    </div>
                                    <div className="col text-center number p2-multiple border-left border-bottom">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 1) }}>Bull</button>
                                    </div>
                                    <div className="col text-center number p2-single border-bottom border-right">
                                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 2) }}>Double-Bull</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-2'>
                                <ShotHistory
                                    p1RoundStartScore={this.props.p1RoundStartScore}
                                    p1RoundScores={this.props.p1RoundScores}
                                    p2RoundStartScore={this.props.p2RoundStartScore}
                                    p2RoundScores={this.props.p2RoundScores}
                                />
                            </div>
                        </div>
                    </div>
                )
            }
        }
        else if (!this.props.gameOverModal && !this.props.diddle) {
            return (
                <div className='col text-center'>
                    <div className='row text-center'>
                        <div className="col text-center p1-single">
                            <h1>Diddle Winner?</h1>
                        </div>
                    </div>
                    <br />
                    <div className='row text-center'>
                        <div className="col-6 offset-3 text-center p2-multiple">
                            <button type="button" className="bttn-jelly bttn-lg" onClick={() => {
                                this.props.setActiveThrower('p1')
                                this.props.setDiddleTrue();
                            }}>
                                Player 1
                            </button>
                        </div>
                    </div>
                    <br />
                    <div className='row text-center'>
                        <div className="col-6 offset-3 text-center p1-multiple">
                            <button type="button" className="bttn-jelly bttn-lg" onClick={() => {
                                this.props.setActiveThrower('p2')
                                this.props.setDiddleTrue();
                            }}>
                                Player 2
                        </button>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className='row'>
                        <div className='col-12 text-center' id='x01GameOver'>
                            <h1>Game Over?</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-4 offset-1 text-center p2-multiple">
                            <button type="button" className="btn" onClick={() => { this.props.undoGameOver() }}>
                                Undo
                            </button>
                        </div>
                        <div className="col-4 offset-2 text-center p1-multiple">
                            <button type="button" className="btn" onClick={() => { this.props.gameStateOver() }}>
                                Confirm
                            </button>
                        </div>
                    </div>

                </div>
            )
        }
    }

    bottomButtonRow() {
        if (!this.props.gameOverModal && this.props.diddle) {
            if (!this.props.botGame || this.props.activeThrower === 'p1') {
                return (
                    <div className='row'>
                        <div className='col-3 end-turn text-center'>
                            <button type="button" className="btn" onClick={() => { this.props.endTurn() }}>
                                End Turn
                                </button>
                        </div>
                        <div className='col-6 miss text-center'>
                            <button type="button" className="btn" onClick={() => { this.props.miss() }}>
                                Miss
                                </button>
                        </div>
                        <div className='col-3 undo text-center'>
                            <button type="button" className="btn" onClick={() => { this.props.undo() }}>
                                Undo
                                </button>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className='row'>
                        <div className='col-3 end-turn text-center'>
                            <button type="button" className="btn" onClick={() => { this.props.endTurn() }} disabled>
                                End Turn
                                </button>
                        </div>
                        <div className='col-6 miss text-center'>
                            <button type="button" className="btn" onClick={() => { this.props.miss() }} disabled>
                                Miss
                                </button>
                        </div>
                        <div className='col-3 undo text-center'>
                            <button type="button" className="btn" onClick={() => { this.props.undo() }}>
                                Undo
                                </button>
                        </div>
                    </div>
                )
            }
        } else {
            return (
                null
            )
        }
    }

    render() {
        return (
            <div>
                {this.playerButtonsRender()}
                <br />
                {this.bottomButtonRow()}
            </div>
        )
    }

}
