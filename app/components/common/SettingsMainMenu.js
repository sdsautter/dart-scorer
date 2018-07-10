import React, { Component } from "react";
import { Link } from 'react-router-dom'
import NavMenu from '../navMenu/NavMenu';

export default class SettingsMainMenu extends Component {
    constructor() {

        super();

        this.state = {
            legs: 1,
            sets: 3
        }

        if (localStorage.getItem('sounds') !== 'off') {
            localStorage.setItem('sounds', 'on');
        }
        if (localStorage.getItem('multiple') !== 'vertical') {
            localStorage.setItem('multiple', 'horizontal');
        }

        if (localStorage.getItem('legs') == null) {
            localStorage.setItem('legs', 1);
        }

        if (localStorage.getItem('sets') == null) {
            localStorage.setItem('sets', 3);
        }

        this.soundToggle = this.soundToggle.bind(this);
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

    soundToggleRender() {
        if (localStorage.getItem('sounds') === 'on') {
            return (
                <div className='row'>
                    <div className='col-4 text-center settings-selected' onClick={this.soundToggle}>On</div>
                    <div className="col-4 text-center sound-main-toggle">
                        <img className='sound-icon' src='assets/images/dart_left.png' onClick={this.soundToggle} />
                    </div>
                    <div className='col-4 text-center settings-fade' onClick={this.soundToggle}>Off</div>
                </div>
            )
        } else {
            return (
                <div className='row'>
                    <div className='col-4 text-center settings-fade' onClick={this.soundToggle}>On</div>
                    <div className="col-4 text-center sound-main-toggle">
                        <img className='sound-icon' src='assets/images/dart_right.png' onClick={this.soundToggle} />
                    </div>
                    <div className='col-4 text-center settings-selected' onClick={this.soundToggle}>Off</div>
                </div>
            )
        }

    }

    multipleToggleRender() {
        if (localStorage.getItem('multiple') === 'horizontal') {
            return (
                <div className='row'>
                    <div className='col-4 swipe-option text-center settings-selected' onClick={this.multipleToggle}>Horizontal</div>
                    <div className="col-4 text-center swipe-main-toggle">
                        <img className='sound-icon' src='assets/images/dart_left.png' onClick={this.multipleToggle} />
                    </div>
                    <div className='col-4 swipe-option text-center settings-fade' onClick={this.multipleToggle}>Vertical</div>
                </div>
            )
        } else {
            return (
                <div className='row'>
                    <div className='col-4 swipe-option text-center settings-fade' onClick={this.multipleToggle}>Horizontal</div>
                    <div className="col-4 text-center swipe-main-toggle">
                        <img className='sound-icon' src='assets/images/dart_right.png' onClick={this.multipleToggle} />
                    </div>
                    <div className='col-4 swipe-option text-center settings-selected' onClick={this.multipleToggle}>Vertical</div>
                </div>
            )
        }
    }

    legRender(number) {
        if (parseInt(localStorage.getItem('legs')) === number) {
            return 'col-6 col-md-3 text-center leg-options leg-selected';
        } else {
            return 'col-6 col-md-3 text-center leg-options leg-faded';
        }
    }

    setLegNumber(legs) {
        this.setState({ legs })
        localStorage.setItem('legs', legs);
    }

    setRender(number) {
        if (parseInt(localStorage.getItem('sets')) === number) {
            return 'col-4 set-option text-center set-selected';
        } else {
            return 'col-4 set-option text-center set-faded';
        }
    }

    setSetNumber(sets) {
        this.setState({ sets })
        localStorage.setItem('sets', sets);
    }

    render() {
        return (
            <div>
                 <NavMenu setUsername={this.props.setUsername}
                        username={this.props.username}
                        setUsername={this.props.setUsername}
                    />
                <div className="row">
                    <div className="col settings-menu-title text-center">
                        Settings
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='col-12 text-center sound-main-header'>
                                Sound
            </div>
                            <div className='col-12 sound-main text-center'>
                                {this.soundToggleRender()}
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='col-12 swipe-main-header text-center'>
                                Swipe Direction
            </div>
                            <div className='col-12 swipe-main text-center'>
                                {this.multipleToggleRender()}
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className='row main-set-options'>
                    <div className='col-5'>
                        <div className='row'>
                            <div className='col-12 text-center set-header'>
                                Legs (Best of)
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
                    <div className='col-5 offset-2'>
                        <div className='row'>
                            <div className='col-12 text-center set-header'>
                                Sets (Best of)
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
                <div className="row">
                    <div className="col-12 text-center main-menu-button">
                        <Link to={{
                            pathname: '/home',
                        }}>
                            <button className='bttn-jelly bttn-lg'>Back</button>
                        </Link>
                    </div>
                </div >
            </div>
        )
    }
}
