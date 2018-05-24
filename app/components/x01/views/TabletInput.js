import React, { Component } from "react";

export default class ScoreInput extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-1 text-right number border-bottom">
                        20
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 1) }}>S</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 2) }}>D</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(20, 3) }}>T</button>
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        19
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 1) }}>S</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 2) }}>D</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(19, 3) }}>T</button>
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        18
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 1) }}>S</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 2) }}>D</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(18, 3) }}>T</button>
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        17
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 1) }}>S</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 2) }}>D</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(17, 3) }}>T</button>
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        16
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 1) }}>S</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 2) }}>D</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(16, 3) }}>T</button>
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        15
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 1) }}>S</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 2) }}>D</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(15, 3) }}>T</button>
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        14
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(14, 1) }}>S</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(14, 2) }}>D</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(14, 3) }}>T</button>
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        13
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(13, 1) }}>S</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(13, 2) }}>D</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(13, 3) }}>T</button>
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        12
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(12, 1) }}>S</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(12, 2) }}>D</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(12, 3) }}>T</button>
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        11
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(11, 1) }}>S</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(11, 2) }}>D</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(11, 3) }}>T</button>
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        10
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(10, 1) }}>S</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(10, 2) }}>D</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(10, 3) }}>T</button>
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        9
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(9, 1) }}>S</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(9, 2) }}>D</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(9, 3) }}>T</button>
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        8
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(8, 1) }}>S</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(8, 2) }}>D</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(8, 3) }}>T</button>
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        7
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(7, 1) }}>S</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(7, 2) }}>D</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(7, 3) }}>T</button>
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        6
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(6, 1) }}>S</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(6, 2) }}>D</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(6, 3) }}>T</button>
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        5
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(5, 1) }}>S</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(5, 2) }}>D</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(5, 3) }}>T</button>
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        4
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(4, 1) }}>S</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(4, 2) }}>D</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(4, 3) }}>T</button>
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        3
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(3, 1) }}>S</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(3, 2) }}>D</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(3, 3) }}>T</button>
                    </div>
                    <div className="col-1 text-right number">
                        2
                    </div>
                    <div className="col-1 text-center number">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(2, 1) }}>S</button>
                    </div>
                    <div className="col-1 text-center number">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(2, 2) }}>D</button>
                    </div>
                    <div className="col-1 text-center number">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(2, 3) }}>T</button>
                    </div>
                    <div className="col-1 text-right number">
                        1
                    </div>
                    <div className="col-1 text-center number">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(1, 1) }}>S</button>
                    </div>
                    <div className="col-1 text-center number">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(1, 2) }}>D</button>
                    </div>
                    <div className="col-1 text-center number">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(1, 3) }}>T</button>
                    </div>
                    <div className="col-1 text-right number">
                        Bull
                    </div>
                    <div className="col text-center number">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 1) }}>S</button>
                    </div>
                    <div className="col text-center number">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.score(25, 2) }}>D</button>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col miss text-center'>
                        <button type="button" className="btn" onClick={() => { this.props.miss() }}>
                            Miss
                                </button>
                    </div>
                    <div className='col text-center'>
                        <div className="row">
                            <div className="col-10 offset-1 throw-borders">
                                <div className="col-12 text-center">
                                    Throw:
                            </div>
                                <div className="col-12 text-center">
                                    {this.props.activeThrows + 1}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col undo text-center'>
                        <button type="button" className="btn" onClick={() => { this.props.undo() }}>
                            Undo
                                </button>
                    </div>
                </div>
            </div>
        )
    }

}
