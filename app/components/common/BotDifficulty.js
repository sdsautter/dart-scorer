import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class BotDifficulty extends Component {
    constructor({ match }) {
        super();
        this.gameType = match.params.gameType;
        this.url = match.url;
        this.difficultyRender = this.difficultyRender.bind(this);
    }

    difficultyRender() {
        if (this.gameType === 'cricket') {
            return (
                <div>
                    <br />
                    <div className="row">
                        <div className="col-12 text-center main-menu">
                            <Link to={{
                                pathname: `${this.url}/pro`,
                            }}><button className='main-menu'>Pro</button></Link>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="row top-row">
                    <div className="col main-menu-title text-center">
                        Difficulty
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className="col-12 text-center main-menu">
                        <Link to={{
                            pathname: `${this.url}/easy`,
                        }}><button className='main-menu'>Easy</button></Link>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-12 text-center main-menu">
                        <Link to={{
                            pathname: `${this.url}/medium`,
                        }}><button className='main-menu'>Medium</button></Link>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-12 text-center main-menu">
                        <Link to={{
                            pathname: `${this.url}/hard`,
                        }}><button className='main-menu'>Hard</button></Link>
                    </div>
                </div>
                {this.difficultyRender()}
                <br />
                <div className="row">
                    <div className="col-12 text-center main-menu">
                        <Link to={{
                            pathname: '/cpu',
                        }}>
                            <button className='rules-menu'>Back</button>
                        </Link>
                    </div>
                </div >
            </div>
        )
    }
}
