import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class MainMenu extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <div>
                <div className="row top-row">
                    <div className="col main-menu-title text-center">
                        Dart Score Fun!
                    </div>
                </div>
                <br />

                <div className='row'>
                    <div className="col-12 text-center main-menu">
                        <Link to={{
                            pathname: '/cpu',
                        }}><button className='main-menu'>Single Player</button></Link>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-12 text-center main-menu">
                        <Link to={{
                            pathname: '/pvp',
                        }}><button className='main-menu'>Multiplayer</button></Link>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-12 text-center main-menu">
                        <Link to={{
                            pathname: '/rules',
                        }}><button className='main-menu'>Rules</button></Link>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-12 text-center main-menu">
                        <Link to={{
                            pathname: '/settings',
                        }}><button className='main-menu'>Settings</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
