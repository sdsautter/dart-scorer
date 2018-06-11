import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class RulesPage extends Component {
    constructor() {
        super();
        this.state = {
            rules: '',
        }

        this.rulesRender = this.rulesRender.bind(this);
        this.setRules = this.setRules.bind(this);
    }

    rulesRender() {
        if (this.state.rules === 'cricket') {
            return (
                <div className='row rules'>
                    <div className='col rules-borders'>
                        <p className='text-center rules-header'>Cricket:</p>
                        <ul className='rules'>
                            <li>Each turn is comprised of 3 throws</li>
                            <li>The winner of the game is the first person to close out every number while having the same, or more, points as the opponent</li>
                            <li>To close a number a player must get 3 marks on it (single is 1 mark, double is 2, and triple is 3)</li>
                            <li>To score points a player must hit a number they already have closed which the other player still has open</li>
                            <li>If a player closes a number with a multiple mark dart, the extra marks may convert to points</li>
                            <li>The points scored equals the number hit multiplied by each mark (e.g., a triple 20 is worth 60 points, a double 18 is worth 36 points, a single 16 is worth worth 16 points)</li>
                        </ul>
                    </div>
                </div>
            )
        } else if (this.state.rules === 'x01') {
            return (
                <div className='row rules' >
                    <div className='col rules-borders'>
                        <p className='text-center rules-header'>x01:</p>
                        <ul className='rules'>
                            <li>Each turn is comprised of 3 throws</li>
                            <li>Each person starts with the amount of points selected (i.e., 501)</li>
                            <li>The first person to reach 0 points without going over wins</li>
                            <li>If the person goes over 0, then it's a "bust" and the player goes back to their score at the start of the round</li>
                            <li>If the option for double in is selected, then scoring doesn't start until a player first hits a double</li>
                            <li>If the option for double out is selected, then a player must reach 0 by hitting a double, or else it's a bust. Because of this, getting to 1 is also a bust</li>
                        </ul>
                    </div>
                </div>
            )
        }
    }

    setRules(rules) {
        this.setState({ rules });
    }

    render() {
        return (
            <div>
                <div className="row top-row">
                    <div className="col rules-menu-title text-center">
                        Rules
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4'>
                        <div className='row'>
                            <div className="col-12 text-center rules-menu">
                                <button className='rules-menu' onClick={() => { this.setRules('cricket') }}>Cricket</button>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-12 text-center rules-menu">
                                <button className='rules-menu' onClick={() => { this.setRules('x01') }}>X01</button>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-12 text-center rules-menu">
                                <Link to={{
                                    pathname: '/',
                                }}>
                                    <button className='rules-menu'>Back</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-8' id='rules'>
                        {this.rulesRender()}
                    </div>
                </div >
            </div >
        )
    }
}
