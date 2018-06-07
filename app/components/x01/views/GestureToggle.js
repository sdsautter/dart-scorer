import React, { Component } from "react";

export default class GestureToggle extends Component {
    constructor() {
        super();


    }

    render() {
        const singleGesture = localStorage.getItem('single') === 'tap' ? 'Tap' : 'Press';
        const doubleGesture = localStorage.getItem('multiple') === 'horizontal' ? 'left' : 'up';
        const tripleGesture = localStorage.getItem('multiple') === 'horizontal' ? 'right' : 'down';

        return (
            <div>
                <div className='row align-items-center modal-toggle'>
                    <div className='col text-center align-self-center'>
                        <span className='help-img'>
                            <img className='help-img' src="assets/images/help2.jpg" alt='help' data-toggle="modal" data-target="#gestureHelp">

                            </img>
                        </span>
                        <span className='one-click-scoring'>Gesture Scoring</span>
                        <label className='align-self-center'>
                            <input className="gesture-toggle" type="checkbox" onClick={this.props.changeMobileGesture} />
                        </label>
                    </div>
                </div>
                <div className="modal fade" id="gestureHelp" tabIndex="-1" role="dialog" aria-labelledby="gestureHelpLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="gestureHelpLabel">Gesture Help</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">

                                    <div className='col-12'>
                                        <ul className='gestures'>
                                            <li className='gesture-item'>{singleGesture} for x1</li>
                                            <li className='gesture-item'>Swipe {doubleGesture} for x2</li>
                                            <li className='gesture-item'>Swipe {tripleGesture} for x3</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}
