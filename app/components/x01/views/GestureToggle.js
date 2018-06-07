import React, { Component } from "react";

export default class GestureToggle extends Component {
    constructor() {
        super();

     
       }

    render() {

        return (
            <div>
                <div className='row align-items-center modal-toggle'>
                    <div className='col text-center align-self-center'>
                    <span className='help-img'>
                            <img className='help-img' src="assets/images/help2.jpg" alt='help' data-toggle="modal" data-target="#gestureHelp">
                                
                        </img>
                                </span>
                        <label className='align-self-center'>
                            <span className='one-click-scoring'>Gesture Scoring</span>
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
                                    <li className='gesture-item'>Press for x1</li>
                                    <li className='gesture-item'>Swipe left for x2</li>
                                    <li className='gesture-item'>Swipe right for x3</li>
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
