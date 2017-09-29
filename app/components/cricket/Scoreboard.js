import React, {Component} from "react";

export default class Scoreboard extends Component {
    constructor() {
        super();

        this.playersRender = this.playersRender.bind(this);
        this.viewportRender = this.viewportRender.bind(this);
        this.nameRender = this.nameRender.bind(this);
    }

    nameRender() {
        if (this.props.activeThrower === "p1") {
            return "Player 1";
        } else {
            return "Player 2";
        }
    }
      
    playersRender() {
        if (this.props.activeThrower === "p1") {
            return (
                <div className="row top-row">
                    <div className="col-3 text-center throw-number">
                        Throw: {this.props.activeThrows + 1}
                    </div>
                    <div className="col-3 text-center player border-right active-thrower">
                        Player 1
                    </div>
                    <div className="col-3 text-center player border-left inactive-thrower">
                        Player 2
                    </div>
                    <div className="col-3 border-bottom">
                    </div>
                </div>
            )
        } else {
            return (
                <div className="row top-row">
                    <div className="col-3 border-bottom">
                    </div>
                    <div className="col-3 text-center player border-right inactive-thrower">
                        Player 1
                    </div>
                    <div className="col-3 text-center player border-left active-thrower">
                        Player 2
                    </div>
                    <div className="col-3 text-center throw-number">
                        Throw: {this.props.activeThrows + 1}
                    </div>
                </div>
            )
        }
    }

    viewportRender() {
        var intViewportWidth = window.innerWidth;
        //Renders either an input or a text area depending on the screen width
        if (intViewportWidth < 720) {
            return (
                <div className="container-fluid">
                {this.playersRender()}
                <div className = "row">
                    <div className="col-2 text-center align-self-center points-label">
                        Points:
                    </div>
                    <div className="col-2 text-center align-self-center">
                        {this.props.p120Progress()}
                    </div>
                    <div className="col-4 text-center border-left border-right number">
                        <button type="button" className="btn text-center" data-toggle="modal" data-target="#twentyModal">
                            20
                        </button>
                    </div>
                    <div className="col-2 text-center align-self-center">
                        {this.props.p220Progress()}
                    </div>
                    <div className="col-2 text-center align-self-center points-label">
                        Points:
                    </div>
                </div>
                <div className = "row">
                    <div className="col-2 text-center align-self-start points-score">
                        {this.props.renderP1Score()}
                    </div>
                    <div className="col-2 text-center align-self-center">
                        {this.props.p119Progress()}
                    </div>
                    <div className="col-4 text-center border-left border-right number">
                        <button type="button" className="btn" data-toggle="modal" data-target="#nineteenModal">
                            19
                        </button>
                    </div>
                    <div className="col-2 text-center align-self-center">
                        {this.props.p219Progress()}
                    </div>
                    <div className="col-2 text-center align-self-start points-score">
                        {this.props.renderP2Score()}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-2 offset-2 text-center align-self-center">
                        {this.props.p118Progress()}
                    </div>
                    <div className="col-4 text-center border-left border-right number">
                        <button type="button" className="btn" data-toggle="modal" data-target="#eightteenModal">
                            18
                        </button>
                    </div>
                    <div className="col-2 text-center align-self-center">
                        {this.props.p218Progress()}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-2 offset-2 text-center align-self-center">
                        {this.props.p117Progress()}
                    </div>
                    <div className="col-4 text-center border-left border-right number">
                        <button type="button" className="btn" data-toggle="modal" data-target="#seventeenModal">
                            17
                        </button>
                    </div>
                    <div className="col-2 text-center align-self-center">
                        {this.props.p217Progress()}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-2 offset-2 text-center align-self-center">
                        {this.props.p116Progress()}
                    </div>
                    <div className="col-4 text-center border-left border-right number">
                        <button type="button" className="btn" data-toggle="modal" data-target="#sixteenModal">
                            16
                        </button>
                    </div>
                    <div className="col-2 text-center align-self-center">
                        {this.props.p216Progress()}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-2 offset-2 text-center align-self-center">
                        {this.props.p115Progress()}
                    </div>
                    <div className="col-4 text-center border-left border-right number">
                        <button type="button" className="btn" data-toggle="modal" data-target="#fifteenModal">
                            15
                        </button>
                    </div>
                    <div className="col-2 text-center align-self-center">
                        {this.props.p215Progress()}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-2 offset-2 text-center align-self-center">
                        {this.props.p125Progress()}
                    </div>
                    <div className="col-4 text-center border-left border-right number">
                        <button type="button" className="btn" data-toggle="modal" data-target="#bullModal">
                            Bull
                        </button>
                    </div>
                    <div className="col-2 text-center align-self-center">
                        {this.props.p225Progress()}
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 text-center miss">
                        <button type="button" className="btn" onClick={() => {this.props.miss()}}>
                            Miss
                        </button>
                    </div>
                    <div className="col-6 text-center undo">
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
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 20, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 20, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 20, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
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
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 19, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 19, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 19, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>                            
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
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
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 18, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 18, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 18, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
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
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 17, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 17, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 17, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
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
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 16, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 16, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 16, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
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
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 15, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 15, 2)}}>Double</button>
                                    </div>
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 15, 3)}}>Triple</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
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
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 25, 1)}}>Single</button>
                                    </div>    
                                    <div className="col text-center">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 25, 2)}}>Double</button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <span className="modal-name">{this.nameRender()}</span>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        } else if (intViewportWidth < 900) {
            return(
            <div className="container-fluid">
                {this.playersRender()}
                <div className = "row">
                    <div className="col-3 text-center align-self-center points-label">
                        Points:
                    </div>
                    <div className="col-1 text-center align-self-center">
                        {this.props.p120Progress()}
                    </div>
                    <div className="col-1 border-left text-center number">
                        20
                    </div>
                    <div className="col-1 text-center number">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 20, 1)}}>S</button>
                    </div>    
                    <div className="col-1 number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 20, 2)}}>D</button>
                    </div>
                    <div className="col-1 border-right number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 20, 3)}}>T</button>
                    </div>
                    <div className="col-1 text-center align-self-center">
                        {this.props.p220Progress()}
                    </div>
                    <div className="col-3 text-center align-self-center points-label">
                        Points:
                    </div>
                </div>
                <div className = "row">
                    <div className="col-3 text-center align-self-center points-score">
                        {this.props.renderP1Score()}
                    </div>
                    <div className="col-1 text-center align-self-center">
                        {this.props.p119Progress()}
                    </div>
                    <div className="col-1 border-left text-center number">
                        19
                    </div>
                    <div className="col-1 text-center number">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 19, 1)}}>S</button>
                    </div>    
                    <div className="col-1 number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 19, 2)}}>D</button>
                    </div>
                    <div className="col-1 border-right number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 19, 3)}}>T</button>
                    </div>
                    <div className="col-1 text-center align-self-center">
                        {this.props.p219Progress()}
                    </div>
                    <div className="col-3 text-center align-self-center points-score">
                        {this.props.renderP2Score()}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-1 offset-3 text-center align-self-center">
                        {this.props.p118Progress()}
                    </div>
                    <div className="col-1 border-left text-center number">
                        18
                    </div>
                    <div className="col-1 text-center number">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 18, 1)}}>S</button>
                    </div>    
                    <div className="col-1 number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 18, 2)}}>D</button>
                    </div>
                    <div className="col-1 border-right number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 18, 3)}}>T</button>
                    </div>
                    <div className="col-1 text-center align-self-center">
                        {this.props.p218Progress()}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-1 offset-3 text-center align-self-center">
                        {this.props.p117Progress()}
                    </div>
                    <div className="col-1 border-left text-center number">
                        17
                    </div>
                    <div className="col-1 text-center number">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 17, 1)}}>S</button>
                    </div>    
                    <div className="col-1 number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 17, 2)}}>D</button>
                    </div>
                    <div className="col-1 border-right number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 17, 3)}}>T</button>
                    </div>
                    <div className="col-1 text-center align-self-center">
                        {this.props.p217Progress()}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-1 offset-3 text-center align-self-center">
                        {this.props.p116Progress()}
                    </div>
                    <div className="col-1 border-left border-left text-center number">
                        16
                    </div>
                    <div className="col-1 text-center number">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 16, 1)}}>S</button>
                    </div>    
                    <div className="col-1 number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 16, 2)}}>D</button>
                    </div>
                    <div className="col-1 border-right number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 16, 3)}}>T</button>
                    </div>
                    <div className="col-1 text-center align-self-center">
                        {this.props.p216Progress()}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-1 offset-3 text-center align-self-center">
                        {this.props.p115Progress()}
                    </div>
                    <div className="col-1 border-left text-center number">
                        15
                    </div>
                    <div className="col-1 text-center number">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 15, 1)}}>S</button>
                    </div>    
                    <div className="col-1 number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 15, 2)}}>D</button>
                    </div>
                    <div className="col-1 border-right number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 15, 3)}}>T</button>
                    </div>
                    <div className="col-1 text-center align-self-center">
                        {this.props.p215Progress()}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-1 offset-3 text-center align-self-center">
                        {this.props.p125Progress()}
                    </div>
                    <div className="col-1 border-left text-center number">
                        Bull
                    </div>
                    <div className="col text-center number">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 25, 1)}}>S</button>
                    </div>    
                    <div className="col border-right number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 25, 2)}}>D</button>
                    </div>
                    <div className="col-1 text-center align-self-center">
                        {this.props.p225Progress()}
                    </div>
                    <div className="col-3">
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 text-center miss">
                        <button type="button" className="btn" onClick={() => {this.props.miss()}}>
                            Miss
                        </button>
                    </div>
                    <div className="col-6 text-center undo">
                        <button type="button" className="btn" onClick={() => {this.props.undo()}}>
                            Undo
                        </button>
                    </div>
                </div>
            
            </div>
        )
        } else {
            return(
            <div className="container-fluid">
                {this.playersRender()}
                <div className = "row">
                    <div className="col-3 text-center align-self-center points-label">
                        Points:
                    </div>
                    <div className="col-1 text-center align-self-center">
                        {this.props.p120Progress()}
                    </div>
                    <div className="col-1 border-left text-center number">
                        20
                    </div>
                    <div className="col-1 text-center number">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 20, 1)}}>Single</button>
                    </div>    
                    <div className="col-1 number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 20, 2)}}>Double</button>
                    </div>
                    <div className="col-1 border-right number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 20, 3)}}>Triple</button>
                    </div>
                    <div className="col-1 text-center align-self-center">
                        {this.props.p220Progress()}
                    </div>
                    <div className="col-3 text-center align-self-center points-label">
                        Points:
                    </div>
                </div>
                <div className = "row">
                    <div className="col-3 text-center align-self-center points-score">
                        {this.props.renderP1Score()}
                    </div>
                    <div className="col-1 text-center align-self-center">
                        {this.props.p119Progress()}
                    </div>
                    <div className="col-1 border-left text-center number">
                        19
                    </div>
                    <div className="col-1 text-center number">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 19, 1)}}>Single</button>
                    </div>    
                    <div className="col-1 number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 19, 2)}}>Double</button>
                    </div>
                    <div className="col-1 border-right number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 19, 3)}}>Triple</button>
                    </div>
                    <div className="col-1 text-center align-self-center">
                        {this.props.p219Progress()}
                    </div>
                    <div className="col-3 text-center align-self-center points-score">
                        {this.props.renderP2Score()}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-1 offset-3 text-center align-self-center">
                        {this.props.p118Progress()}
                    </div>
                    <div className="col-1 border-left text-center number">
                        18
                    </div>
                    <div className="col-1 text-center number">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 18, 1)}}>Single</button>
                    </div>    
                    <div className="col-1 number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 18, 2)}}>Double</button>
                    </div>
                    <div className="col-1 border-right number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 18, 3)}}>Triple</button>
                    </div>
                    <div className="col-1 text-center align-self-center">
                        {this.props.p218Progress()}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-1 offset-3 text-center align-self-center">
                        {this.props.p117Progress()}
                    </div>
                    <div className="col-1 border-left text-center number">
                        17
                    </div>
                    <div className="col-1 text-center number">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 17, 1)}}>Single</button>
                    </div>    
                    <div className="col-1 number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 17, 2)}}>Double</button>
                    </div>
                    <div className="col-1 border-right number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 17, 3)}}>Triple</button>
                    </div>
                    <div className="col-1 text-center align-self-center">
                        {this.props.p217Progress()}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-1 offset-3 text-center align-self-center">
                        {this.props.p116Progress()}
                    </div>
                    <div className="col-1 border-left border-left text-center number">
                        16
                    </div>
                    <div className="col-1 text-center number">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 16, 1)}}>Single</button>
                    </div>    
                    <div className="col-1 number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 16, 2)}}>Double</button>
                    </div>
                    <div className="col-1 border-right number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 16, 3)}}>Triple</button>
                    </div>
                    <div className="col-1 text-center align-self-center">
                        {this.props.p216Progress()}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-1 offset-3 text-center align-self-center">
                        {this.props.p115Progress()}
                    </div>
                    <div className="col-1 border-left text-center number">
                        15
                    </div>
                    <div className="col-1 text-center number">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 15, 1)}}>Single</button>
                    </div>    
                    <div className="col-1 number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 15, 2)}}>Double</button>
                    </div>
                    <div className="col-1 border-right number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 15, 3)}}>Triple</button>
                    </div>
                    <div className="col-1 text-center align-self-center">
                        {this.props.p215Progress()}
                    </div>
                </div>
                <div className = "row">
                    <div className="col-1 offset-3 text-center align-self-center">
                        {this.props.p125Progress()}
                    </div>
                    <div className="col-1 border-left text-center number">
                        Bull
                    </div>
                    <div className="col text-center number">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 25, 1)}}>Single</button>
                    </div>    
                    <div className="col border-right number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.score(this.props.activeThrower, 25, 2)}}>Double</button>
                    </div>
                    <div className="col-1 text-center align-self-center">
                        {this.props.p225Progress()}
                    </div>
                    <div className="col-3">
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 text-center miss">
                        <button type="button" className="btn" onClick={() => {this.props.miss()}}>
                            Miss
                        </button>
                    </div>
                    <div className="col-6 text-center undo">
                        <button type="button" className="btn" onClick={() => {this.props.undo()}}>
                            Undo
                        </button>
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
