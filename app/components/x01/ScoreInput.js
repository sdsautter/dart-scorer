import React, {Component} from "react";

export default class ScoreInput extends Component {
    constructor() {
        super();

        this.viewportRender = this.viewportRender.bind(this);
    }

    viewportRender() {
        var intViewportWidth = window.innerWidth;
        //Renders either an input or a text area depending on the screen width
        if (intViewportWidth < 720) {
            return (
                <div>
                <div className="row">
                <br />                
                    <div className="col-4 text-right number border-bottom">
                        <button type="button" className="btn text-center" data-toggle="modal" data-target="#twentyModal">
                                20
                        </button>
                    </div>
                    <div className="col-4 text-right number border-bottom">
                        <button type="button" className="btn text-center" data-toggle="modal" data-target="#nineteenModal">                    
                            19
                        </button>
                    </div>

                    <div className="col-4 text-right number border-bottom">
                        <button type="button" className="btn text-center" data-toggle="modal" data-target="#eightteenModal">                    
                            18
                        </button>
                    </div>

                    <div className="col-4 text-right number border-bottom">
                        <button type="button" className="btn text-center" data-toggle="modal" data-target="#seventeenModal">                    
                            17
                        </button>
                    </div>

                    <div className="col-4 text-right number border-bottom">
                        <button type="button" className="btn text-center" data-toggle="modal" data-target="#sixteenModal">                        
                            16
                        </button>
                    </div>

                    <div className="col-4 text-right number border-bottom">
                        <button type="button" className="btn text-center" data-toggle="modal" data-target="#fifteenModal">                    
                            15
                        </button>
                    </div>
                    <div className="col-4 text-right number border-bottom">
                        <button type="button" className="btn text-center" data-toggle="modal" data-target="#fourteenModal">                    
                        14
                        </button>
                    </div>

                    <div className="col-4 text-right number border-bottom">
                        <button type="button" className="btn text-center" data-toggle="modal" data-target="#thirteenModal">                    
                        13
                        </button>
                    </div>

                    <div className="col-4 text-right number border-bottom">
                        <button type="button" className="btn text-center" data-toggle="modal" data-target="#twelveModal">                    
                            12
                        </button>
                    </div>

                    <div className="col-4 text-right number border-bottom">
                        <button type="button" className="btn text-center" data-toggle="modal" data-target="#elevenModal">                    
                            11
                        </button>
                    </div>

                    <div className="col-4 text-right number border-bottom">
                        <button type="button" className="btn text-center" data-toggle="modal" data-target="#tenModal">                    
                            10
                        </button>
                    </div>

                    <div className="col-4 text-right number border-bottom">
                        <button type="button" className="btn text-center" data-toggle="modal" data-target="#nineModal">                    
                            9
                        </button>
                    </div>

                    <div className="col-4 text-right number border-bottom">
                        <button type="button" className="btn text-center" data-toggle="modal" data-target="#eightModal">                    
                        8
                        </button>
                    </div>

                    <div className="col-4 text-right number border-bottom">
                        <button type="button" className="btn text-center" data-toggle="modal" data-target="#sevenModal">                    
                        7
                        </button>
                    </div>

                    <div className="col-4 text-right number border-bottom">
                        <button type="button" className="btn text-center" data-toggle="modal" data-target="#sixModal">                    
                        6
                        </button>
                    </div>

                    <div className="col-4 text-right number border-bottom">
                        <button type="button" className="btn text-center" data-toggle="modal" data-target="#fiveModal">                    
                        5
                        </button>
                    </div>

                    <div className="col-4 text-right number border-bottom">
                        <button type="button" className="btn text-center" data-toggle="modal" data-target="#fourModal">                    
                        4
                        </button>
                    </div>

                    <div className="col-4 text-right number border-bottom">
                        <button type="button" className="btn text-center" data-toggle="modal" data-target="#threeModal">                    
                        3
                        </button>
                    </div>

                    <div className="col-4 text-right number">
                        <button type="button" className="btn text-center" data-toggle="modal" data-target="#twoModal">                    
                        2
                        </button>
                    </div>
                    <div className="col-4 text-right number">
                        <button type="button" className="btn text-center" data-toggle="modal" data-target="#oneModal">                    
                        1
                        </button>
                    </div>

                    <div className="col-4 text-right number">
                        <button type="button" className="btn text-center" data-toggle="modal" data-target="#bullModal">                    
                        Bull
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center miss">
                        <button type="button" className="btn" onClick={() => {this.props.miss()}}>
                            Miss
                        </button>
                    </div>
                    <div className="col text-center undo">
                        <button type="button" className="btn" onClick={() => {this.props.undo()}}>
                            Undo
                        </button>
                    </div>
                </div>
                <div className="modal fade" id="twentyModal" tabIndex="-1" role="dialog" aria-labelledby="twentyModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="twentyModalLabel">20</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 20, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 20, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 20, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="nineteenModal" tabIndex="-1" role="dialog" aria-labelledby="nineteenModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="nineteenModalLabel">19</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 19, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 19, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 19, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="eightteenModal" tabIndex="-1" role="dialog" aria-labelledby="eightteenModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="eightteenModalLabel">18</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 18, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 18, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 18, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="seventeenModal" tabIndex="-1" role="dialog" aria-labelledby="seventeenModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="seventeenModalLabel">17</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 17, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 17, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 17, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="sixteenModal" tabIndex="-1" role="dialog" aria-labelledby="sixteenModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="sixteenModalLabel">16</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 16, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 16, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 16, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="fifteenModal" tabIndex="-1" role="dialog" aria-labelledby="fifteenModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="fifteenModalLabel">15</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 15, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 15, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 15, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="fourteenModal" tabIndex="-1" role="dialog" aria-labelledby="fourteenModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="fourteenModalLabel">14</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 14, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 14, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 14, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="thirteenModal" tabIndex="-1" role="dialog" aria-labelledby="thirteenModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="thirteenModalLabel">13</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 13, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 13, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 13, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="twelveModal" tabIndex="-1" role="dialog" aria-labelledby="twelveModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="twelveModalLabel">12</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 12, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 12, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 12, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="elevenModal" tabIndex="-1" role="dialog" aria-labelledby="elevenModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="elevenModalLabel">11</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 11, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 11, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 11, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="tenModal" tabIndex="-1" role="dialog" aria-labelledby="tenModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="tenModalLabel">10</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 10, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 10, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 10, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="nineModal" tabIndex="-1" role="dialog" aria-labelledby="nineModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="nineModalLabel">9</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 9, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 9, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 9, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="eightModal" tabIndex="-1" role="dialog" aria-labelledby="eightModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="eightModalLabel">8</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 8, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 8, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 8, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="sevenModal" tabIndex="-1" role="dialog" aria-labelledby="sevenModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="sevenModalLabel">7</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 7, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 7, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 7, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="sixModal" tabIndex="-1" role="dialog" aria-labelledby="sixModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="sixModalLabel">6</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 6, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 6, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 6, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="fiveModal" tabIndex="-1" role="dialog" aria-labelledby="fiveModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="fiveModalLabel">5</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 5, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 5, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 5, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="fourModal" tabIndex="-1" role="dialog" aria-labelledby="fourModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="fourModalLabel">4</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 4, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 4, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 4, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="threeModal" tabIndex="-1" role="dialog" aria-labelledby="threeModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="threeModalLabel">3</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 3, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 3, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 3, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="twoModal" tabIndex="-1" role="dialog" aria-labelledby="twoModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="twoModalLabel">2</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 2, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 2, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 2, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="oneModal" tabIndex="-1" role="dialog" aria-labelledby="oneModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="oneModalLabel">1</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 1, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 1, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 1, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="bullModal" tabIndex="-1" role="dialog" aria-labelledby="bullModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="bullModalLabel">Bull</h5>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 25, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center number">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 25, 2)}}>Double</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        } else {
            return(
            <div>
                <div className="row">
                    <div className="col-1 text-right number border-bottom">
                        20
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 20, 1)}}>Single</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 20, 2)}}>Double</button>                    
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 20, 3)}}>Triple</button>                            
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        19
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 19, 1)}}>Single</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 19, 2)}}>Double</button>                    
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 19, 3)}}>Triple</button>                            
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        18
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 18, 1)}}>Single</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 18, 2)}}>Double</button>                    
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 18, 3)}}>Triple</button>                            
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        17
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 17, 1)}}>Single</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 17, 2)}}>Double</button>                    
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 17, 3)}}>Triple</button>                            
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        16
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 16, 1)}}>Single</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 16, 2)}}>Double</button>                    
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 16, 3)}}>Triple</button>                            
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        15
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 15, 1)}}>Single</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 15, 2)}}>Double</button>                    
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 15, 3)}}>Triple</button>                            
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        14
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 14, 1)}}>Single</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 14, 2)}}>Double</button>                    
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 14, 3)}}>Triple</button>                            
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        13
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 13, 1)}}>Single</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 13, 2)}}>Double</button>                    
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 13, 3)}}>Triple</button>                            
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        12
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 12, 1)}}>Single</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 12, 2)}}>Double</button>                    
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 12, 3)}}>Triple</button>                            
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        11
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 11, 1)}}>Single</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 11, 2)}}>Double</button>                    
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 11, 3)}}>Triple</button>                            
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        10
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 10, 1)}}>Single</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 10, 2)}}>Double</button>                    
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 10, 3)}}>Triple</button>                            
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        9
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 9, 1)}}>Single</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 9, 2)}}>Double</button>                    
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 9, 3)}}>Triple</button>                            
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        8
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 8, 1)}}>Single</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 8, 2)}}>Double</button>                    
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 8, 3)}}>Triple</button>                            
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        7
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 7, 1)}}>Single</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 7, 2)}}>Double</button>                    
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 7, 3)}}>Triple</button>                            
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        6
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 6, 1)}}>Single</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 6, 2)}}>Double</button>                    
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 6, 3)}}>Triple</button>                            
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        5
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 5, 1)}}>Single</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 5, 2)}}>Double</button>                    
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 5, 3)}}>Triple</button>                            
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        4
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 4, 1)}}>Single</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 4, 2)}}>Double</button>                    
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 4, 3)}}>Triple</button>                            
                    </div>
                    <div className="col-1 text-right number border-bottom">
                        3
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 3, 1)}}>Single</button>
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 3, 2)}}>Double</button>                    
                    </div>
                    <div className="col-1 text-center number border-bottom">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 3, 3)}}>Triple</button>                            
                    </div>
                    <div className="col-1 text-right number">
                        2
                    </div>
                    <div className="col-1 text-center number">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 2, 1)}}>Single</button>
                    </div>
                    <div className="col-1 text-center number">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 2, 2)}}>Double</button>                    
                    </div>
                    <div className="col-1 text-center number">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 2, 3)}}>Triple</button>                            
                    </div>
                    <div className="col-1 text-right number">
                        1
                    </div>
                    <div className="col-1 text-center number">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 1, 1)}}>Single</button>
                    </div>
                    <div className="col-1 text-center number">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 1, 2)}}>Double</button>                    
                    </div>
                    <div className="col-1 text-center number">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 1, 3)}}>Triple</button>                            
                    </div>
                    <div className="col-1 text-right number">
                        Bull
                    </div>
                    <div className="col text-center number">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 25, 1)}}>Single</button>
                    </div>
                    <div className="col text-center number">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 25, 2)}}>Double</button>                    
                    </div>
                </div>
            </div>
        )
        }
    }

    render() {
        return (
            <div>
                {this.viewportRender()}
            </div>
        
        )
    }
}