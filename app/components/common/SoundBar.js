import React, { Component } from "react";

export default class PlayerRender extends Component {
    constructor() {
        super();
        if (localStorage.getItem('sounds') !== 'off') {
            localStorage.setItem('sounds', 'on');
        }
        this.gameReset = this.gameReset.bind(this);
        this.soundToggle = this.soundToggle.bind(this);
        this.soundBarRender = this.soundBarRender.bind(this);
    }

    gameReset() {
        if (this.props.gameX01Reset) {
            this.props.gameX01Reset();
        } else if (this.props.gameCricketReset) {
            this.props.gameCricketReset();
        }
    }

    soundToggle() {

        const storageSound = localStorage.getItem('sounds');
        let soundBool;
        if (storageSound === 'on') {
            soundBool = 'off';
        } else {
            soundBool = 'on';
        }
        localStorage.setItem('sounds', soundBool);
        this.forceUpdate();
    }

    soundBarRender() {
        if (localStorage.getItem('sounds') === 'on') {
            return (
                <div className='sound-toggle'>
                    <img className='sound-icon' src='assets/images/sound_on.png' onClick={this.soundToggle} />
                </div>
            )
        } else {
            return (
                <div className='sound-toggle'>
                    <img className='sound-icon' src='assets/images/sound_off.png' onClick={this.soundToggle} />
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.soundBarRender()}
            </div>
        )


    }
}