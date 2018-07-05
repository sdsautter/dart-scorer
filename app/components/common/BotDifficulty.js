import React, { Component } from "react";
import { Link } from 'react-router-dom'
import NavMenu from '../navMenu/NavMenu';

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

                    <div className="row">
                        <div className="col-12 text-center main-menu-button">
                            <Link to={{
                                pathname: `${this.url}/pro`,
                            }}><button className='bttn-float bttn-lg'>Pro</button></Link>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <NavMenu setUsername={this.props.setUsername}
                    username={this.props.username}
                    setUsername={this.props.setUsername}
                />
                <div className="row top-row">
                    <div className="col main-menu-title text-center">
                        Difficulty
                    </div>
                </div>
                <div className='row'>
                    <div className="col-12 text-center main-menu-button">
                        <Link to={{
                            pathname: `${this.url}/easy`,
                        }}><button className='bttn-float bttn-lg'>Easy</button></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center main-menu-button">
                        <Link to={{
                            pathname: `${this.url}/medium`,
                        }}><button className='bttn-float bttn-lg'>Medium</button></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center main-menu-button">
                        <Link to={{
                            pathname: `${this.url}/hard`,
                        }}><button className='bttn-float bttn-lg'>Hard</button></Link>
                    </div>
                </div>
                {this.difficultyRender()}
                <div className="row">
                    <div className="col-12 text-center main-menu-button">
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
