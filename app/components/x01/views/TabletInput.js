import React, { Component } from "react";

export default class ScoreInput extends Component {
    constructor() {
        super();

        this.playerButtonsRender = this.playerButtonsRender.bind(this);
    }

    playerButtonsRender() {
        if (this.props.activeThrower === 'p1') {
            return (
                <div>
                    <div className="row">
                        <div className="col-6 offset-3 text-center throw-borders">
                            Throw: <span>{this.props.activeThrows + 1} </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 text-center number border-bottom p1-single border-left border-top">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 1) }}>20x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple border-top">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 2) }}>20x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple border-top">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 3) }}>20x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-single border-left border-top">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 1) }}>19x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple border-top">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 2) }}>19x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple border-top border-right">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 3) }}>19x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 1) }}>18x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 2) }}>18x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 3) }}>18x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 1) }}>17x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 2) }}>17x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple border-right">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 3) }}>17x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 1) }}>16x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 2) }}>16x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 3) }}>16x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 1) }}>15x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 2) }}>15x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple border-right">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 3) }}>15x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(14, 1) }}>14x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(14, 2) }}>14x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(14, 3) }}>14x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(13, 1) }}>13x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(13, 2) }}>13x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple border-right">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(13, 3) }}>13x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(12, 1) }}>12x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(12, 2) }}>12x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(12, 3) }}>12x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(11, 1) }}>11x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(11, 2) }}>11x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple border-right">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(11, 3) }}>11x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(10, 1) }}>10x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(10, 2) }}>10x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(10, 3) }}>10x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(9, 1) }}>9x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(9, 2) }}>9x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple border-right">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(9, 3) }}>9x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(8, 1) }}>8x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(8, 2) }}>8x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(8, 3) }}>8x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(7, 1) }}>7x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(7, 2) }}>7x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple border-right">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(7, 3) }}>7x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(6, 1) }}>6x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(6, 2) }}>6x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(6, 3) }}>6x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(5, 1) }}>5x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(5, 2) }}>5x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple border-right">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(5, 3) }}>5x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(4, 1) }}>4x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(4, 2) }}>4x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(4, 3) }}>4x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(3, 1) }}>3x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(3, 2) }}>3x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple border-right">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(3, 3) }}>3x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(2, 1) }}>2x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(2, 2) }}>2x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(2, 3) }}>2x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(1, 1) }}>1x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(1, 2) }}>1x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p1-multiple border-right">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(1, 3) }}>1x3</button>
                        </div>
                        <div className="col text-center number p1-multiple border-left border-bottom">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 1) }}>Bull</button>
                        </div>
                        <div className="col text-center number p2-multiple border-bottom border-right">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 2) }}>Bullx2</button>
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.activeThrower === 'p2') {
            return (
                <div>
                    <div className="row">
                        <div className="col-6 offset-3 text-center throw-borders">
                            Throw: <span>{this.props.activeThrows + 1} </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 text-center number border-bottom p2-single border-left border-top">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 1) }}>20x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple border-top">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 2) }}>20x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple border-top">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 3) }}>20x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-single border-left border-top">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 1) }}>19x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple border-top">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 2) }}>19x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple border-top border-right">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 3) }}>19x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 1) }}>18x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 2) }}>18x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 3) }}>18x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 1) }}>17x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 2) }}>17x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple border-right border-right">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 3) }}>17x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 1) }}>16x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 2) }}>16x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 3) }}>16x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 1) }}>15x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 2) }}>15x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple border-right">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 3) }}>15x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(14, 1) }}>14x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(14, 2) }}>14x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(14, 3) }}>14x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(13, 1) }}>13x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(13, 2) }}>13x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple border-right">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(13, 3) }}>13x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(12, 1) }}>12x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(12, 2) }}>12x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(12, 3) }}>12x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(11, 1) }}>11x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(11, 2) }}>11x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple border-right">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(11, 3) }}>11x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(10, 1) }}>10x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(10, 2) }}>10x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(10, 3) }}>10x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(9, 1) }}>9x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(9, 2) }}>9x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple border-right">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(9, 3) }}>9x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(8, 1) }}>8x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(8, 2) }}>8x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(8, 3) }}>8x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(7, 1) }}>7x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(7, 2) }}>7x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple border-right">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(7, 3) }}>7x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(6, 1) }}>6x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(6, 2) }}>6x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(6, 3) }}>6x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(5, 1) }}>5x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(5, 2) }}>5x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple border-right">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(5, 3) }}>5x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(4, 1) }}>4x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(4, 2) }}>4x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(4, 3) }}>4x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(3, 1) }}>3x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(3, 2) }}>3x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple border-right">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(3, 3) }}>3x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(2, 1) }}>2x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(2, 2) }}>2x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(2, 3) }}>2x3</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-single border-left">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(1, 1) }}>1x1</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(1, 2) }}>1x2</button>
                        </div>
                        <div className="col-2 text-center number border-bottom p2-multiple border-right">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(1, 3) }}>1x3</button>
                        </div>
                        <div className="col text-center number p1-multiple border-left border-bottom">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 1) }}>Bull</button>
                        </div>
                        <div className="col text-center number p2-multiple border-bottom border-right">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 2) }}>Bullx2</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.playerButtonsRender()}
                <br />
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
            </div>
        )
    }

}
