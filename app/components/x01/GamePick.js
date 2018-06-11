import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class GamePicky extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col settings-menu-title text-center">
                        Pick X01 Game
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <div className='row'>
                            <div className="col-12 text-center x01-pick-menu">
                                <button className='x01-pick-menu' onClick={() => { this.props.setX01Game(101) }}>101</button>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className="col-12 text-center x01-pick-menu">
                                <button className='x01-pick-menu' onClick={() => { this.props.setX01Game(301) }}>301</button>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className="col-12 text-center x01-pick-menu">
                                <button className='x01-pick-menu' onClick={() => { this.props.setX01Game(501) }}>501</button>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className="col-12 text-center x01-pick-menu">
                                <button className='x01-pick-menu' onClick={() => { this.props.setX01Game(701) }}>701</button>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className="col-12 text-center x01-pick-menu">
                                <button className='x01-pick-menu' onClick={() => { this.props.setX01Game(901) }}>901</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='row'>
                            <div className="col-12 text-center x01-pick-menu">
                                <button className='x01-pick-menu' onClick={() => { this.props.setX01Game(201) }}>201</button>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className="col-12 text-center x01-pick-menu">
                                <button className='x01-pick-menu' onClick={() => { this.props.setX01Game(401) }}>401</button>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className="col-12 text-center x01-pick-menu">
                                <button className='x01-pick-menu' onClick={() => { this.props.setX01Game(601) }}>601</button>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className="col-12 text-center x01-pick-menu">
                                <button className='x01-pick-menu' onClick={() => { this.props.setX01Game(801) }}>801</button>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className="col-12 text-center x01-pick-menu">
                                <button className='x01-pick-menu' onClick={() => { this.props.setX01Game(1001) }}>1001</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
