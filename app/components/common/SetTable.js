import React, { Component } from "react";

export default class SetTable extends Component {
    constructor() {
        super();
        this.legNumberRender = this.legNumberRender.bind(this);
        this.tableRender = this.tableRender.bind(this);
    }

    legNumberRender(set = 0, player = '') {
        let setHistory = this.props.setHistory;
        const playerLegs = eval(`this.props.${player}Legs`);
        console.log(setHistory);
        console.log(set);
        if (player === 'p1' && setHistory.length >= set) {
            return setHistory[set - 1].p1;
        } else if (player === 'p2' && setHistory.length >= set) {
            return setHistory[set - 1].p2;
        } else if (setHistory.length === set - 1) {
            return playerLegs;
        } else {
            return '-';
        }

    }

    tableRender() {
        const setNumber = parseInt(localStorage.getItem('sets'));
        switch (setNumber) {
            case 3:
                return (
                    <div className='col-6 offset-3 text-center'>
                        <table className="table set-table text-center">
                            <tbody className='text-center'>
                                <tr>
                                    <td className='set-box p1-set'>{this.legNumberRender(1, 'p1', 'p2')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(2, 'p1', 'p2')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(3, 'p1', 'p2')}</td>
                                </tr>
                                <tr>
                                    <td className='set-box p2-set'>{this.legNumberRender(1, 'p2', 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(2, 'p2', 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(3, 'p2', 'p2')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
                break;

            case 5:
                return (
                    <div className='col-6 offset-3 text-center'>
                        <table className="table set-table text-center">
                            <tbody className='text-center'>
                                <tr>
                                    <td className='set-box p1-set'>{this.legNumberRender(1, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(2, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(3, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(4, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(5, 'p1')}</td>
                                </tr>
                                <tr>
                                    <td className='set-box p2-set'>{this.legNumberRender(1, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(2, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(3, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(4, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(5, 'p2')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
                break;
            case 7:
                return (
                    <div className='col-6 offset-3 text-center'>
                        <table className="table set-table text-center">
                            <tbody className='text-center'>
                                <tr>
                                    <td className='set-box p1-set'>{this.legNumberRender(1, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(2, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(3, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(4, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(5, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(6, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(7, 'p1')}</td>
                                </tr>
                                <tr>
                                    <td className='set-box p2-set'>{this.legNumberRender(1, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(2, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(3, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(4, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(5, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(6, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(7, 'p2')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
                break;
            case 9:
                return (
                    <div className='col-6 offset-3 text-center'>
                        <table className="table set-table text-center">
                            <tbody className='text-center'>
                                <tr>
                                    <td className='set-box p1-set'>{this.legNumberRender(1, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(2, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(3, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(4, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(5, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(6, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(7, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(8, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(9, 'p1')}</td>
                                </tr>
                                <tr>
                                    <td className='set-box p2-set'>{this.legNumberRender(1, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(2, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(3, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(4, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(5, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(6, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(7, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(8, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(9, 'p2')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
                break;
            case 11:
                return (
                    <div className='col col-md-10 offset-md-1 text-center'>
                        <table className="table set-table text-center">
                            <tbody className='text-center'>
                                <tr>
                                    <td className='set-box p1-set'>{this.legNumberRender(1, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(2, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(3, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(4, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(5, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(6, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(7, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(8, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(9, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(10, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(11, 'p1')}</td>
                                </tr>
                                <tr>
                                    <td className='set-box p2-set'>{this.legNumberRender(1, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(2, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(3, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(4, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(5, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(6, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(7, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(8, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(9, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(10, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(11, 'p2')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
                break;
            case 13:
                return (
                    <div className='col col-md-6 offset-md-3 text-center'>
                        <table className="table set-table text-center">
                            <tbody className='text-center'>
                                <tr>
                                    <td className='set-box p1-set'>{this.legNumberRender(1, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(2, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(3, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(4, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(5, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(6, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(7, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(8, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(9, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(10, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(11, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(12, 'p1')}</td>
                                    <td className='set-box p1-set'>{this.legNumberRender(13, 'p1')}</td>
                                </tr>
                                <tr>
                                    <td className='set-box p2-set'>{this.legNumberRender(1, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(2, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(3, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(4, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(5, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(6, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(7, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(8, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(9, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(10, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(11, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(12, 'p2')}</td>
                                    <td className='set-box p2-set'>{this.legNumberRender(13, 'p2')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
                break;

            default:
                break;
        }

    }

    render() {
        return (
            <div className='row text-center'>
                {this.tableRender()}
            </div>
        )
    }
}
