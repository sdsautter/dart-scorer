import React, { Component } from "react";
import Hammer from 'hammerjs';

export default class SettingsMenu extends Component {
    constructor() {

        super();
        if (localStorage.getItem('sounds') !== 'off') {
            localStorage.setItem('sounds', 'on');
        }
        if (localStorage.getItem('single') !== 'press') {
            localStorage.setItem('single', 'tap');
        }
        if (localStorage.getItem('multiple') !== 'horizontal') {
            localStorage.setItem('multiple', 'vertical');
        }
        this.soundToggle = this.soundToggle.bind(this);
        this.settingsMenuRender = this.settingsMenuRender.bind(this);
        this.singleToggle = this.singleToggle.bind(this);
        this.multipleToggle = this.multipleToggle.bind(this);
        this.soundToggleRender = this.soundToggleRender.bind(this);
        this.singleToggleRender = this.singleToggleRender.bind(this);
        this.multipleToggleRender = this.multipleToggleRender.bind(this);

    }

    singleToggle() {
        const storageSingle = localStorage.getItem('single');
        let singleTouch;
        if (storageSingle === 'press') {
            singleTouch = 'tap';
        } else {
            singleTouch = 'press';
        }
        localStorage.setItem('single', singleTouch);
        if (this.props.gestureSwitch) { this.props.gestureSwitch('single') }
        this.forceUpdate();
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
                <div className="col-4 text-center">
                    <img className='sound-icon' src='assets/images/dart_left.png' onClick={this.soundToggle} />
                </div>
            )
        } else {
            return (
                <div className="col-4 text-center">
                    <img className='sound-icon' src='assets/images/dart_right.png' onClick={this.soundToggle} />
                </div>
            )
        }

    }

    singleToggleRender() {
        if (localStorage.getItem('single') === 'press') {
            return (
                <div className="col-4 text-center">
                    <img className='sound-icon' src='assets/images/dart_left.png' onClick={this.singleToggle} />
                </div>
            )
        } else {
            return (
                <div className="col-4 text-center">
                    <img className='sound-icon' src='assets/images/dart_right.png' onClick={this.singleToggle} />
                </div>
            )
        }
    }

    multipleToggleRender() {
        if (localStorage.getItem('multiple') === 'horizontal') {
            return (
                <div className="col-4 text-center">
                    <img className='sound-icon' src='assets/images/dart_left.png' onClick={this.multipleToggle} />
                </div>
            )
        } else {
            return (
                <div className="col-4 text-center">
                    <img className='sound-icon' src='assets/images/dart_right.png' onClick={this.multipleToggle} />
                </div>
            )
        }
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
                                <div className="row">

                                    <div className='col-12'>
                                        <div className='row'>
                                            <div className='col text-center'>
                                                <div className='row sound-options'>
                                                    <div className='col-12'>
                                                        <h5>Sounds</h5>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-4 text-right'>On</div>
                                                        {this.soundToggleRender()}
                                                        <div className='col-4 text-left'>Off
                                                        </div>
                                                    </div>
                                                </div>
                                                <br />
                                                <br />
                                                <div className='row gesture-options'>
                                                    <div className='col-12'>
                                                        <h5>Gestures</h5>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-12 option'>
                                                            <h6>Single</h6>
                                                        </div>
                                                        <div className='col-4 text-right'>Press</div>
                                                        {this.singleToggleRender()}
                                                        <div className='col-4 text-left'>Tap
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-12 option'>
                                                            <h6>Multiple Swipe</h6>
                                                        </div>
                                                        <div className='col-4 text-right'>Horizontal</div>
                                                        {this.multipleToggleRender()}
                                                        <div className='col-4 text-left'>Vertical
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
            </div>
        )


    }
}