import React, { Component } from "react";

export default class PlayerRender extends Component {
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
        this.soundBarRender = this.soundBarRender.bind(this);
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

    soundBarRender() {
        return (
            <div className='sound-toggle'>
                <img className='sound-icon' src='assets/images/dart-settings.png' data-toggle="modal" data-target="#gestureHelp" />
            </div>
        )

    }

    soundToggleRender() {
        return (
            <input className="toggle" type="checkbox" onClick={this.soundToggle} />
        )

    }

    singleToggleRender() {
        if (localStorage.getItem('single') === 'press') {
            return (
                <input className="toggle" type="checkbox" onClick={this.singleToggle} />

            )
        } else {
            return (
                <input className="toggle" type="checkbox" onClick={this.singleToggle} checked />
            )
        }
    }

    multipleToggleRender() {
        if (localStorage.getItem('multiple') === 'horizontal') {
            return (
                <input className="toggle" type="checkbox" onClick={this.multipleToggle} />
            )
        } else {
            return (
                <input className="toggle" type="checkbox" onClick={this.multipleToggle} checked />
            )
        }
    }

    render() {
        return (
            <div>
                {this.soundBarRender()}
                <div className="modal fade" id="gestureHelp" tabIndex="-1" role="dialog" aria-labelledby="gestureHelpLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="gestureHelpLabel">Settings</h5>
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
                                                    <div className='col-12'>
                                                        <span className='description-left'>On</span>
                                                        {this.soundToggleRender()}
                                                        <span className='description-right'>Off</span>
                                                    </div>
                                                </div>
                                                <div className='row gesture-options'>
                                                    <div className='col-12'>
                                                        <h5>Gestures</h5>
                                                    </div>
                                                    <div className='col-12 option'>
                                                        <h6>Single</h6>
                                                    </div>
                                                    <div className='col-12'>
                                                        <span className='description-left'>Press</span>
                                                        {this.singleToggleRender()}
                                                        <span className='description-right'>Tap</span>
                                                    </div>
                                                    <div className='col-12 option'>
                                                        <h6>Double/Triple Swiple</h6>
                                                    </div>
                                                    <div className='col-12'>
                                                        <span className='description-left'>Horizontal</span>
                                                        {this.multipleToggleRender()}
                                                        <span className='description-right'>Vertical</span>
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