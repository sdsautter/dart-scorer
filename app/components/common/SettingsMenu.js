import React, { Component } from "react";
import Hammer from 'hammerjs';

export default class SettingsMenu extends Component {
    constructor() {

        super();

        this.state = {
            legs: 1,
            sets: 3
        }

        if (localStorage.getItem('sounds') !== 'off') {
            localStorage.setItem('sounds', 'on');
        }
        if (localStorage.getItem('multiple') !== 'horizontal') {
            localStorage.setItem('multiple', 'vertical');
        }

        if (localStorage.getItem('legs') == null) {
            localStorage.setItem('legs', 1);
        }

        if (localStorage.getItem('sets') == null) {
            localStorage.setItem('sets', 3);
        }

        this.soundToggle = this.soundToggle.bind(this);
        this.settingsMenuRender = this.settingsMenuRender.bind(this);
        this.multipleToggle = this.multipleToggle.bind(this);
        this.soundToggleRender = this.soundToggleRender.bind(this);
        this.multipleToggleRender = this.multipleToggleRender.bind(this);
        this.legRender = this.legRender.bind(this);
        this.setRender = this.setRender.bind(this);
        this.setSetNumber = this.setSetNumber.bind(this);
        this.setLegNumber = this.setLegNumber.bind(this);
    }

    multipleToggle() {
        const storageMultiple = localStorage.getItem('multiple');
        let multipleTouch;
        if (storageMultiple === 'horizontal') {
            multipleTouch = 'vertical';
        } else {
            multipleTouch = 'horizontal';
        }
        localStorage.setItem('multiple', multipleTouch);
        if (this.props.gestureSwitch) { this.props.gestureSwitch('multiple') }
        this.forceUpdate();
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

    settingsMenuRender() {
        return (
            <div className='sound-toggle'>
                <img className='sound-icon' src='assets/images/dart_settings.png' data-toggle="modal" data-target="#settings" />
            </div>
        )

    }

    soundToggleRender() {
        if (localStorage.getItem('sounds') === 'on') {
            return (
                <div className='row'>
                    <div className='col-4 text-right settings-selected'>On</div>
                    <div className="col-4 text-center">
                        <img className='sound-icon' src='assets/images/dart_left.png' onClick={this.soundToggle} />
                    </div>
                    <div className='col-4 text-left settings-fade'>Off</div>
                </div>
            )
        } else {
            return (
                <div className='row'>
                    <div className='col-4 text-right settings-fade'>On</div>
                    <div className="col-4 text-center">
                        <img className='sound-icon' src='assets/images/dart_right.png' onClick={this.soundToggle} />
                    </div>
                    <div className='col-4 text-left settings-selected'>Off</div>
                </div>
            )
        }

    }

    multipleToggleRender() {
        if (localStorage.getItem('multiple') === 'horizontal') {
            return (
                <div className='row'>
                    <div className='col-4 swipe-option text-center settings-selected'>Horizontal</div>
                    <div className="col-4 text-center">
                        <img className='sound-icon' src='assets/images/dart_left.png' onClick={this.multipleToggle} />
                    </div>
                    <div className='col-4 swipe-option text-center settings-fade'>Vertical</div>
                </div>
            )
        } else {
            return (
                <div className='row'>
                    <div className='col-4 swipe-option text-center settings-fade'>Horizontal</div>
                    <div className="col-4 text-center">
                        <img className='sound-icon' src='assets/images/dart_right.png' onClick={this.multipleToggle} />
                    </div>
                    <div className='col-4 swipe-option text-center settings-selected'>Vertical</div>
                </div>
            )
        }
    }

    legRender(number) {
        if (parseInt(localStorage.getItem('legs')) === number) {
            return 'col-6 col-md-3 leg-options leg-selected';
        } else {
            return 'col-6 col-md-3 leg-options leg-faded';
        }
    }

    setLegNumber(legs) {
        this.setState({ legs })
        localStorage.setItem('legs', legs);
    }

    setRender(number) {
        if (parseInt(localStorage.getItem('sets')) === number) {
            return 'col-4 set-option set-selected';
        } else {
            return 'col-4 set-option set-faded';
        }
    }

    setSetNumber(sets) {
        this.setState({ sets })
        localStorage.setItem('sets', sets);
    }

    render() {
        return (
            <div>
                {this.settingsMenuRender()}
                <div className="modal fade" id="settings" tabIndex="-1" role="dialog" aria-labelledby="settingsLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="settingsLabel">Settings</h5>
                            </div>
                            <div className="modal-body">

                                <div className='row'>
                                    <div className='col text-center'>
                                        <div className='row sound-options'>
                                            <div className='col-12 sound-header'>
                                                Sounds
                                            </div>
                                            {this.soundToggleRender()}
                                        </div>
                                        <div className='row gesture-options'>
                                            <div className='col-12 swipe-header'>
                                                Swipe Direction
                                            </div>
                                            {this.multipleToggleRender()}
                                        </div>
                                        <div className='row set-options'>
                                            <div className='col-5'>
                                                <div className='row'>
                                                    <div className='col-12 set-header'>
                                                        Legs
                                                                </div>
                                                    <div className={this.legRender(1)} onClick={() => { this.setLegNumber(1) }}>
                                                        1
                                                            </div>
                                                    <div className={this.legRender(3)} onClick={() => { this.setLegNumber(3) }}>
                                                        3
                                                            </div>
                                                    <div className={this.legRender(5)} onClick={() => { this.setLegNumber(5) }}>
                                                        5
                                                            </div>
                                                    <div className={this.legRender(7)} onClick={() => { this.setLegNumber(7) }}>
                                                        7
                                                            </div>
                                                </div>
                                            </div>
                                            <div className='col-2 best-of text-center'>
                                                <div className='row'>
                                                    <div className='col-12'>
                                                        Best Of
                                                </div>
                                                </div>
                                            </div>
                                            <div className='col-5'>
                                                <div className='row'>
                                                    <div className='col-12 set-header'>
                                                        Sets
                                                                </div>
                                                    <div
                                                        className={this.setRender(3)}
                                                        onClick={() => { this.setSetNumber(3) }}
                                                    >
                                                        3
                                                            </div>
                                                    <div
                                                        className={this.setRender(5)}
                                                        onClick={() => { this.setSetNumber(5) }}
                                                    >
                                                        5
                                                            </div>
                                                    <div className={this.setRender(7)} onClick={() => { this.setSetNumber(7) }}>
                                                        7
                                                            </div>
                                                    <div className={this.setRender(9)} onClick={() => {
                                                        this.setSetNumber(9)
                                                    }}>
                                                        9
                                                            </div>
                                                    <div className={this.setRender(11)} onClick={() => { this.setSetNumber(11) }}>
                                                        11
                                                            </div>
                                                    <div className={this.setRender(13)} onClick={() => { this.setSetNumber(13) }}>
                                                        13
                                                            </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )


    }
}