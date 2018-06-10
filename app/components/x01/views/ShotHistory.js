import React, { Component } from "react";

export default class ShotHistory extends Component {
    constructor() {
        super();

        this.renderShotHistory = this.renderShotHistory.bind(this);
        this.shotRowLoop = this.shotRowLoop.bind(this);
        this.shotRowClassName = this.shotRowClassName.bind(this);
    }

    shotRowLoop(player) {
        const startScoreArray = eval(`this.props.${player}RoundStartScore`);
        const scoreArray = eval(`this.props.${player}RoundScores`);
        return startScoreArray.map((item, index) => (
            <tr key={index}>
                <td key={index + 1} className={this.shotRowClassName(index, scoreArray)}>{startScoreArray[index]}</td>
                <td key={index + 2} className='shot-history strike-out'>{scoreArray[index]}</td>
            </tr>

        ))
    }

    shotRowClassName(index, scoreArray) {
        if (index < scoreArray.length) {
            return 'shot-history strike-out'
        } else {
            return 'shot-history'
        }
    }

    renderShotHistory() {
        const p1 = this.props.p1 ? true : false;

        if (p1) {
            return (
                <div className='col-12 shot-history text-center'>
                    <table className="table set-table text-center">
                        <tbody className='text-center'>
                            {this.shotRowLoop('p1')}
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return (
                <div className='col-12 shot-history text-center'>
                    <table className="table set-table text-center">
                        <tbody className='text-center'>
                            {this.shotRowLoop('p2')}
                        </tbody>
                    </table>
                </div>
            )
        }
    }

    render() {
        return (
            <div className='row shot-history'>
                {this.renderShotHistory()}
            </div>
        )
    }

}
