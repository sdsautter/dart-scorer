import React, { Component } from "react";

export default class SetTable extends Component {
    constructor() {
        super();
        this.legNumberRender = this.legNumberRender.bind(this);
        this.tableRender = this.tableRender.bind(this);
    }

    legNumberRender(set = 0, player = '') {
        let setHistory = this.props.setHistory ? this.props.setHistory : [];
        const playerLegs = eval(`this.props.${player}Legs`);

        if (player === 'p1' && setHistory.length >= set) {
            return setHistory[set - 1].p1;
        } else if (player === 'p2' && setHistory.length >= set) {
            return setHistory[set - 1].p2;
        } else if (setHistory.length === 0 || setHistory.length === set) {
            return playerLegs;
        } else {
            return '-';
        }

    }

    tableRender(setHistory) {
        const setNumber = parseInt(localStorage.getItem('sets'));
        switch (setNumber) {
            case 3:
                return (
                    <div className='set-table'>
                        <div className='row player1-table'>
                            <div className='col player1-header'>
                                Player 1
                            </div>
                            <div className='col-3 player1-leg'>
                                {this.legNumberRender(1, 'p1')}
                            </div>
                            <div className='col-3 player1-leg'>
                                {this.legNumberRender(2, 'p1')}
                            </div>
                            <div className='col-3 player1-leg'>
                                {this.legNumberRender(3, 'p1')}
                            </div>
                        </div>
                        <div className='row player2-table'>
                            <div className='col player2-header'>
                                Player 2
                            </div>
                            <div className='col-3 player2-leg'>
                                {() => { this.legNumberRender(1, 'p2') }}
                            </div>
                            <div className='col-3 player2-leg'>
                                {() => { this.legNumberRender(2, 'p2') }}
                            </div>
                            <div className='col-3 player2-leg'>
                                {() => { this.legNumberRender(3, 'p2') }}
                            </div>
                        </div>
                    </div>
                )
                break;

            case 5:
                return (
                    <div className='set-table'>
                        <div className='row player1-table'>
                            <div className='col-3 player1-header'>
                                Player 1
                        </div>
                            <div className='col player1-leg'>
                                {() => { this.legNumberRender(1, 'p1') }}
                            </div>
                            <div className='col player1-leg'>
                                {() => { this.legNumberRender(2, 'p1') }}
                            </div>
                            <div className='col player1-leg'>
                                {() => { this.legNumberRender(3, 'p1') }}
                            </div>
                            <div className='col player1-leg'>
                                {() => { this.legNumberRender(4, 'p1') }}
                            </div>
                            <div className='col player1-leg'>
                                {() => { this.legNumberRender(5, 'p1') }}
                            </div>
                        </div>
                        <div className='row player2-table'>
                            <div className='col-3 player2-header'>
                                Player 2
                        </div>
                            <div className='col player2-leg'>
                                {() => { this.legNumberRender(1, 'p2') }}
                            </div>
                            <div className='col player2-leg'>
                                {() => { this.legNumberRender(2, 'p2') }}
                            </div>
                            <div className='col player2-leg'>
                                {() => { this.legNumberRender(3, 'p2') }}
                            </div>
                            <div className='col player2-leg'>
                                {() => { this.legNumberRender(4, 'p2') }}
                            </div>
                            <div className='col player2-leg'>
                                {() => { this.legNumberRender(5, 'p2') }}
                            </div>
                        </div>
                    </div>
                )
                break;
            case 7:
                return (
                    <div className='set-table'>
                        <div className='row player1-table'>
                            <div className='col-3 player1-header'>
                                Player 1
                    </div>
                            <div className='col player1-leg'>
                                {() => { this.legNumberRender(1, 'p1') }}
                            </div>
                            <div className='col player1-leg'>
                                {() => { this.legNumberRender(2, 'p1') }}
                            </div>
                            <div className='col player1-leg'>
                                {() => { this.legNumberRender(3, 'p1') }}
                            </div>
                            <div className='col player1-leg'>
                                {() => { this.legNumberRender(4, 'p1') }}
                            </div>
                            <div className='col player1-leg'>
                                {() => { this.legNumberRender(5, 'p1') }}
                            </div>
                        </div>
                        <div className='row player2-table'>
                            <div className='col-3 player2-header'>
                                Player 2
                    </div>
                            <div className='col player2-leg'>
                                {() => { this.legNumberRender(1, 'p2') }}
                            </div>
                            <div className='col player2-leg'>
                                {() => { this.legNumberRender(2, 'p2') }}
                            </div>
                            <div className='col player2-leg'>
                                {() => { this.legNumberRender(3, 'p2') }}
                            </div>
                            <div className='col player2-leg'>
                                {() => { this.legNumberRender(4, 'p2') }}
                            </div>
                            <div className='col player2-leg'>
                                {() => { this.legNumberRender(5, 'p2') }}
                            </div>
                        </div>
                    </div>
                )
                break;
            case 9:
                return (
                    <div className='set-table'>
                        <div className='row player1-table'>
                            <div className='col-3 player1-header'>
                                Player 1
                    </div>
                            <div className='col player1-leg'>
                                {() => { this.legNumberRender(1, 'p1') }}
                            </div>
                            <div className='col player1-leg'>
                                {() => { this.legNumberRender(2, 'p1') }}
                            </div>
                            <div className='col player1-leg'>
                                {() => { this.legNumberRender(3, 'p1') }}
                            </div>
                            <div className='col player1-leg'>
                                {() => { this.legNumberRender(4, 'p1') }}
                            </div>
                            <div className='col player1-leg'>
                                {() => { this.legNumberRender(5, 'p1') }}
                            </div>
                        </div>
                        <div className='row player2-table'>
                            <div className='col-3 player2-header'>
                                Player 2
                    </div>
                            <div className='col player2-leg'>
                                {() => { this.legNumberRender(1, 'p2') }}
                            </div>
                            <div className='col player2-leg'>
                                {() => { this.legNumberRender(2, 'p2') }}
                            </div>
                            <div className='col player2-leg'>
                                {() => { this.legNumberRender(3, 'p2') }}
                            </div>
                            <div className='col player2-leg'>
                                {() => { this.legNumberRender(4, 'p2') }}
                            </div>
                            <div className='col player2-leg'>
                                {() => { this.legNumberRender(5, 'p2') }}
                            </div>
                        </div>
                    </div>
                )
                break;
            case 11:
                return (
                    <div className='set-table'>
                        <div className='row player1-table'>
                            <div className='col-3 player1-header'>
                                Player 1
                    </div>
                            <div className='col player1-leg'>
                                {() => { this.legNumberRender(1, 'p1') }}
                            </div>
                            <div className='col player1-leg'>
                                {() => { this.legNumberRender(2, 'p1') }}
                            </div>
                            <div className='col player1-leg'>
                                {() => { this.legNumberRender(3, 'p1') }}
                            </div>
                            <div className='col player1-leg'>
                                {() => { this.legNumberRender(4, 'p1') }}
                            </div>
                            <div className='col player1-leg'>
                                {() => { this.legNumberRender(5, 'p1') }}
                            </div>
                        </div>
                        <div className='row player2-table'>
                            <div className='col-3 player2-header'>
                                Player 2
                    </div>
                            <div className='col player2-leg'>
                                {() => { this.legNumberRender(1, 'p2') }}
                            </div>
                            <div className='col player2-leg'>
                                {() => { this.legNumberRender(2, 'p2') }}
                            </div>
                            <div className='col player2-leg'>
                                {() => { this.legNumberRender(3, 'p2') }}
                            </div>
                            <div className='col player2-leg'>
                                {() => { this.legNumberRender(4, 'p2') }}
                            </div>
                            <div className='col player2-leg'>
                                {() => { this.legNumberRender(5, 'p2') }}
                            </div>
                        </div>
                    </div>
                )
                break;
            case 13:
                return (
                    <div className='set-table'>
                        <div className='row player1-table'>
                            <div className='col-3 player1-header'>
                                Player 1
                    </div>
                            <div className='col player1-leg'>
                                {() => { this.legNumberRender(1, 'p1') }}
                            </div>
                            <div className='col player1-leg'>
                                {() => { this.legNumberRender(2, 'p1') }}
                            </div>
                            <div className='col player1-leg'>
                                {() => { this.legNumberRender(3, 'p1') }}
                            </div>
                            <div className='col player1-leg'>
                                {() => { this.legNumberRender(4, 'p1') }}
                            </div>
                            <div className='col player1-leg'>
                                {() => { this.legNumberRender(5, 'p1') }}
                            </div>
                        </div>
                        <div className='row player2-table'>
                            <div className='col-3 player2-header'>
                                Player 2
                    </div>
                            <div className='col player2-leg'>
                                {() => { this.legNumberRender(1, 'p2') }}
                            </div>
                            <div className='col player2-leg'>
                                {() => { this.legNumberRender(2, 'p2') }}
                            </div>
                            <div className='col player2-leg'>
                                {() => { this.legNumberRender(3, 'p2') }}
                            </div>
                            <div className='col player2-leg'>
                                {() => { this.legNumberRender(4, 'p2') }}
                            </div>
                            <div className='col player2-leg'>
                                {() => { this.legNumberRender(5, 'p2') }}
                            </div>
                        </div>
                    </div>
                )
                break;

            default:
                break;
        }

    }

    render() {
        return (
            <div>
                {this.tableRender()}
            </div>
        )
    }
}
