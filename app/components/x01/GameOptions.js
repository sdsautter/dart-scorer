import React, { Component } from "react";
import { Link } from 'react-router-dom';


export default class GameOptions extends Component {
    constructor(obj) {
        super();

        this.url = window.location.href.includes('cpu') ? '/cpu' : '/pvp';
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col settings-menu-title text-center">
                        Input Options
                    </div>
                </div>
                <div className='row'>
                    <div className="col-12 text-center x01-options-menu">
                        <button className='x01-options-menu' onClick={() => { this.props.setGameOptions("dido") }}>Double In/Double Out</button>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className="col-12 text-center x01-options-menu">
                        <button className='x01-options-menu' onClick={() => { this.props.setGameOptions("sido") }}>Any In/Double Out</button>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className="col-12 text-center x01-options-menu">
                        <button className='x01-options-menu' onClick={() => { this.props.setGameOptions("siso") }}>Any In/Any Out</button>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className="col-12 text-center x01-options-menu">
                        <button className='x01-options-menu' onClick={() => { this.props.setGameOptions("numpad") }}>Manual Numpad</button>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className="col-12 text-center x01-pick-menu">
                    <Link to={{
                        pathname: `${this.url}`,
                    }}>
                        <button type="button" onClick={this.props.setGameStatePick}>Back</button>
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}