import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class GamePicky extends Component {
    constructor(obj) {
        super();
        this.url = window.location.href.includes('cpu') ? '/cpu' : '/pvp';

        this.state = {
            customShow: false,
            x01Game: 1,
        }

        this.customSwitch = this.customSwitch.bind(this);
        this.renderCustom = this.renderCustom.bind(this);
        this.customInput = this.customInput.bind(this);
        this.customGo = this.customGo.bind(this);
    }

    customSwitch() {
        this.setState({ customShow: this.state.customShow ? false : true });
    }

    customInput(event) {

        this.setState({ x01Game: parseInt(`${event.target.value}`) })
    }

    customGo() {
        if (parseInt(this.state.x01Game) > 0) {
            const game = parseInt(`${this.state.x01Game}01`);
            this.props.setX01Game(game);
        }
    }

    renderCustom() {
        if (this.state.customShow) {
            return (
                <div>
                    <div className='row custom-x01'>
                        <div className='col-3 offset-3'>
                            <input type='number' value={this.state.x01Game} name='x01Game' className='text-right custom-x01' min='1' onChange={this.customInput} /><span>01</span>
                        </div>
                        <div className='col-3 text-left main-menu-button'>
                            <button type='button' className='bttn-jelly bttn-lg' onClick={this.customGo}>Go</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
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
                    <div className="col-12 text-center main-menu-button">
                        <button type='button' className='bttn-jelly bttn-lg' onClick={() => { this.props.setX01Game(301) }}>301</button>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-12 text-center main-menu-button">
                        <button type='button' className='bttn-jelly bttn-lg' onClick={() => { this.props.setX01Game(501) }}>501</button>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-12 text-center main-menu-button">
                        <button type='button' className='bttn-jelly bttn-lg' onClick={() => { this.customSwitch() }}>Custom</button>
                    </div>
                </div>
                {this.renderCustom()}
                <div className='row'>
                    <div className="col-12 text-center main-menu-button" id='backButton'>
                        <Link to={{
                            pathname: `${this.url}`,
                        }}>
                            <button type='button' className='bttn-jelly bttn-lg'>Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
