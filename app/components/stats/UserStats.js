import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import CricketStats from './CricketStats';
import X01Stats from './X01Stats';
import NavMenu from '../navMenu/NavMenu';

export default class UserStats extends Component {
    constructor({ match }) {
        super();
        this.username = match.params.username;
        this.cricket = [];
        this.x01 = [];
        this.state = {
            game: 'Stats',
        }

        this.setGame = this.setGame.bind(this);
        this.getCricketStats = this.getCricketStats.bind(this);
        this.getX01Stats = this.getX01Stats.bind(this);
        this.statsRender = this.statsRender.bind(this);
    }

    componentWillMount() {
        this.getCricketStats();
        this.getX01Stats();
    }

    getCricketStats() {
        axios.get(`/user/${this.username}/cricket`)
            .then(games => {
                return this.cricket = games.data
            })
    }

    getX01Stats() {
        axios.get(`/user/${this.username}/x01`)
            .then(games => this.x01 = games.data);
    }




    statsRender() {
        if (this.state.game === 'cricket') {
            return (
                <div className='row rules'>
                    <div className='col rules-borders stats'>
                        <CricketStats
                            username={this.username}
                            cricket={this.cricket}
                        />
                    </div>
                </div>
            )
        } else if (this.state.game === 'x01') {
            return (
                <div className='row rules' >
                    <div className='col rules-borders stats'>
                        <X01Stats
                            username={this.username}
                            x01={this.x01}
                        />
                    </div>
                </div>
            )
        }
    }

    setGame(game) {
        this.setState({ game });
    }

    render() {
        return (
            <div>
                <NavMenu
                    username={this.props.username}
                    setUsername={this.props.setUsername}
                />
                <div className="row top-row">
                    <div className="col rules-menu-title text-center">
                        {this.state.game}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-3'>
                        <div className='row'>
                            <div className="col-4 col-md-8 offset-md-2 text-center p1-single">
                                <button className='bttn-jelly bttn-lg' onClick={() => { this.setGame('cricket') }}>Cricket</button>
                            </div>
                            <div className="col-4 col-md-8 offset-md-2 text-center p1-single">
                                <button className='bttn-jelly bttn-lg' onClick={() => { this.setGame('x01') }}>X01</button>
                            </div>
                            <div className="col-4 col-md-8 offset-md-2 text-center p2-multiple">
                                <Link to={{
                                    pathname: '/home',
                                }}>
                                    <button className='bttn-jelly bttn-lg'>Back</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-9' id='rules'>
                        {this.statsRender()}
                    </div>
                </div>
            </div>
        )
    }
}
