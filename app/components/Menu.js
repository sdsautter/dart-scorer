import React, { Component } from "react";
import Cricket from "./cricket/Cricket.js";
import X01 from "./x01/X01.js";
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;

export default class Menu extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row top-row">
                    <div className="col title text-center">
                        Choose Your Game
                        </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-5 col-md-4 offset-md-1">
                        <div className='row'>
                            <div className='col-12 number'>
                                <button type="button" className="btn" onClick={() => { location.assign('/cricket'); }}>
                                    Cricket
                            </button>
                            </div>
                            <div className='col-12 rules-borders'>
                                <p className='text-center rules-header'>Rules:</p>
                                <ul className='rules'>
                                    <li>Each turn is comprised of 3 throws</li>
                                    <li>The winner of the game is the first person to close out every number while having the same or more points as opponent</li>
                                    <li>To close a number a player must get 3 marks on it (single is one mark, double is 2, and triple is 3)</li>
                                    <li>To score points a player must hit a number they have closed which the other player still has open</li>
                                    <li>The points scored equals the number hit multiplied by each mark (a triple 20 is worth 60 points. A single 16 is worth 16 points)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 offset-2 col-md-4 offset-md-2">
                        <div className='row'>
                            <div className='col-12 number'>
                                <button type="button" className="btn" onClick={() => { location.assign('/x01'); }}>
                                    x01
                            </button>
                            </div>
                            <div className='col-12 rules-borders'>
                                <p className='text-center rules-header'>Rules:</p>
                                <ul className='rules'>
                                    <li>Each turn is comprised of 3 throws</li>
                                    <li>Each person starts with the amount of points selected</li>
                                    <li>The first person to reach 0 points without going over win</li>
                                    <li>If the person goes over 0, then it's a "bust" and the player goes back to their score at the start of the round</li>
                                    <li>If the option for double in is selected, then scoring doesn't start until a player first hits a double</li>
                                    <li>If the option for double out is selected, then a player must reach 0 by hitting a double, or else it's a bust</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
