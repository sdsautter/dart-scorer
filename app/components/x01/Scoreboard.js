import React, {Component} from "react";

export default class Scoreboard extends Component {
    constructor() {
        super();

        this.playersRender = this.playersRender.bind(this);
        // this.viewportRender = this.viewportRender.bind(this);
    }

    componentDidMount() {
        this.props.setOriginalScore(parseInt(this.props.x01Game));
        this.props.doubleInOptionsCheck();
        this.props.resetThrowLog();
    }
      
    playersRender() {
        if (this.props.activeThrower === "p1") {
            return (
                <div className="row">
                    <div className="col-3 text-center padding-top throw-number">
                        Throw: {this.props.activeThrows + 1}
                    </div>
                    <div className="col-3 text-center padding-top player border-right active-thrower">
                        Player 1
                    </div>
                    <div className="col-3 text-center padding-top player border-left inactive-thrower">
                        Player 2
                    </div>
                    <div className="col border-bottom miss text-center">
                        <button type="button" className="btn" onClick={() => {this.props.miss()}}>
                            Miss
                        </button>
                    </div>
                    <div className="col border-bottom text-center undo">
                        <button type="button" className="btn" onClick={() => {this.props.Undo()}}>
                            Undo
                        </button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="row">
                    <div className="col border-bottom miss text-center" id="miss-x01">
                        <button type="button" className="btn" onClick={() => {this.props.miss()}}>
                            Miss
                        </button>
                    </div>
                    <div className="col border-bottom text-center undo" id="undo-x01">
                        <button type="button" className="btn" onClick={() => {this.props.Undo()}}>
                            Undo
                        </button>
                    </div>
                    <div className="col-3 text-center padding-top player border-right inactive-thrower">
                        Player 1
                    </div>
                    <div className="col-3 text-center padding-top player border-left active-thrower">
                        Player 2
                    </div>
                    <div className="col-3 text-center padding-top throw-number">
                        Throw: {this.props.activeThrows + 1}
                    </div>
                </div>
            )
        }
    }

    // viewportRender() {
    //     var intViewportWidth = window.innerWidth;
    //     //Renders either an input or a text area depending on the screen width
    //     if (intViewportWidth < 720) {
    //         return (
    //             <div className="container-fluid">
    //             {this.playersRender()}
    //             <div className = "row">
    //                 <div className="col-2 text-center number align-self-center points-label">
    //                     Points:
    //                 </div>
    //                 <div className="col-2 text-center number align-self-center">
    //                     {this.props.p120Progress()}
    //                 </div>
    //                 <div className="col-4 text-center number text-center number number">
    //                     <button type="button" className="btn text-center number" data-toggle="modal" data-target="#twentyModal">
    //                         20
    //                     </button>
    //                 </div>
    //                 <div className="col-2 text-center number align-self-center">
    //                     {this.props.p220Progress()}
    //                 </div>
    //                 <div className="col-2 text-center number align-self-center points-label">
    //                     Points:
    //                 </div>
    //             </div>
    //             <div className = "row">
    //                 <div className="col-2 text-center number align-self-start points-score">
    //                     {this.props.renderP1Score()}
    //                 </div>
    //                 <div className="col-2 text-center number align-self-center">
    //                     {this.props.p119Progress()}
    //                 </div>
    //                 <div className="col-4 text-center number text-center number number">
    //                     <button type="button" className="btn" data-toggle="modal" data-target="#nineteenModal">
    //                         19
    //                     </button>
    //                 </div>
    //                 <div className="col-2 text-center number align-self-center">
    //                     {this.props.p219Progress()}
    //                 </div>
    //                 <div className="col-2 text-center number align-self-start points-score">
    //                     {this.props.renderP2Score()}
    //                 </div>
    //             </div>
    //             <div className = "row">
    //                 <div className="col-2 offset-2 text-center number align-self-center">
    //                     {this.props.p118Progress()}
    //                 </div>
    //                 <div className="col-4 text-center number text-center number number">
    //                     <button type="button" className="btn" data-toggle="modal" data-target="#eightteenModal">
    //                         18
    //                     </button>
    //                 </div>
    //                 <div className="col-2 text-center number align-self-center">
    //                     {this.props.p218Progress()}
    //                 </div>
    //             </div>
    //             <div className = "row">
    //                 <div className="col-2 offset-2 text-center number align-self-center">
    //                     {this.props.p117Progress()}
    //                 </div>
    //                 <div className="col-4 text-center number text-center number number">
    //                     <button type="button" className="btn" data-toggle="modal" data-target="#seventeenModal">
    //                         17
    //                     </button>
    //                 </div>
    //                 <div className="col-2 text-center number align-self-center">
    //                     {this.props.p217Progress()}
    //                 </div>
    //             </div>
    //             <div className = "row">
    //                 <div className="col-2 offset-2 text-center number align-self-center">
    //                     {this.props.p116Progress()}
    //                 </div>
    //                 <div className="col-4 text-center number text-center number number">
    //                     <button type="button" className="btn" data-toggle="modal" data-target="#sixteenModal">
    //                         16
    //                     </button>
    //                 </div>
    //                 <div className="col-2 text-center number align-self-center">
    //                     {this.props.p216Progress()}
    //                 </div>
    //             </div>
    //             <div className = "row">
    //                 <div className="col-2 offset-2 text-center number align-self-center">
    //                     {this.props.p115Progress()}
    //                 </div>
    //                 <div className="col-4 text-center number text-center number number">
    //                     <button type="button" className="btn" data-toggle="modal" data-target="#fifteenModal">
    //                         15
    //                     </button>
    //                 </div>
    //                 <div className="col-2 text-center number align-self-center">
    //                     {this.props.p215Progress()}
    //                 </div>
    //             </div>
    //             <div className = "row">
    //                 <div className="col-2 offset-2 text-center number align-self-center">
    //                     {this.props.p125Progress()}
    //                 </div>
    //                 <div className="col-4 text-center number text-center number number">
    //                     <button type="button" className="btn" data-toggle="modal" data-target="#bullModal">
    //                         Bull
    //                     </button>
    //                 </div>
    //                 <div className="col-2 text-center number align-self-center">
    //                     {this.props.p225Progress()}
    //                 </div>
    //             </div>
    //             <div className="row">
    //                 <div className="col-6 text-center number miss">
    //                     <button type="button" className="btn" onClick={() => {this.props.miss()}}>
    //                         Miss
    //                     </button>
    //                 </div>
    //                 <div className="col-6 text-center number undo">
    //                     <button type="button" className="btn" onClick={() => {this.props.undo()}}>
    //                         Undo
    //                     </button>
    //                 </div>
    //             </div>
    //             <div className="modal fade" id="twentyModal" tabIndex="-1" role="dialog" aria-labelledby="twentyModalLabel" aria-hidden="true">
    //                 <div className="modal-dialog" role="document">
    //                     <div className="modal-content">
    //                         <div className="modal-header">
    //                             <h5 className="modal-title" id="twentyModalLabel">20</h5>
    //                         </div>
    //                         <div className="modal-body">
    //                             <div className="row">
    //                                 <div className="col text-center number">
    //                                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 20, 1)}}>Single</button>
    //                                 </div>    
    //                                 <div className="col text-center number">
    //                                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 20, 2)}}>Double</button>
    //                                 </div>
    //                                 <div className="col text-center number">
    //                                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 20, 3)}}>Triple</button>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="modal-footer">
    //                             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="modal fade" id="nineteenModal" tabIndex="-1" role="dialog" aria-labelledby="nineteenModalLabel" aria-hidden="true">
    //                 <div className="modal-dialog" role="document">
    //                     <div className="modal-content">
    //                         <div className="modal-header">
    //                             <h5 className="modal-title" id="nineteenModalLabel">19</h5>
    //                         </div>
    //                         <div className="modal-body">
    //                             <div className="row">
    //                                 <div className="col text-center number">
    //                                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 19, 1)}}>Single</button>
    //                                 </div>    
    //                                 <div className="col text-center number">
    //                                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 19, 2)}}>Double</button>
    //                                 </div>
    //                                 <div className="col text-center number">
    //                                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 19, 3)}}>Triple</button>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="modal-footer">
    //                             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="modal fade" id="eightteenModal" tabIndex="-1" role="dialog" aria-labelledby="eightteenModalLabel" aria-hidden="true">
    //                 <div className="modal-dialog" role="document">
    //                     <div className="modal-content">
    //                         <div className="modal-header">
    //                             <h5 className="modal-title" id="eightteenModalLabel">18</h5>
    //                         </div>
    //                         <div className="modal-body">
    //                             <div className="row">
    //                                 <div className="col text-center number">
    //                                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 18, 1)}}>Single</button>
    //                                 </div>    
    //                                 <div className="col text-center number">
    //                                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 18, 2)}}>Double</button>
    //                                 </div>
    //                                 <div className="col text-center number">
    //                                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 18, 3)}}>Triple</button>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="modal-footer">
    //                             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="modal fade" id="seventeenModal" tabIndex="-1" role="dialog" aria-labelledby="seventeenModalLabel" aria-hidden="true">
    //                 <div className="modal-dialog" role="document">
    //                     <div className="modal-content">
    //                         <div className="modal-header">
    //                             <h5 className="modal-title" id="seventeenModalLabel">17</h5>
    //                         </div>
    //                         <div className="modal-body">
    //                             <div className="row">
    //                                 <div className="col text-center number">
    //                                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 17, 1)}}>Single</button>
    //                                 </div>    
    //                                 <div className="col text-center number">
    //                                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 17, 2)}}>Double</button>
    //                                 </div>
    //                                 <div className="col text-center number">
    //                                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 17, 3)}}>Triple</button>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="modal-footer">
    //                             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="modal fade" id="sixteenModal" tabIndex="-1" role="dialog" aria-labelledby="sixteenModalLabel" aria-hidden="true">
    //                 <div className="modal-dialog" role="document">
    //                     <div className="modal-content">
    //                         <div className="modal-header">
    //                             <h5 className="modal-title" id="sixteenModalLabel">16</h5>
    //                         </div>
    //                         <div className="modal-body">
    //                             <div className="row">
    //                                 <div className="col text-center number">
    //                                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 16, 1)}}>Single</button>
    //                                 </div>    
    //                                 <div className="col text-center number">
    //                                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 16, 2)}}>Double</button>
    //                                 </div>
    //                                 <div className="col text-center number">
    //                                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 16, 3)}}>Triple</button>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="modal-footer">
    //                             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="modal fade" id="fifteenModal" tabIndex="-1" role="dialog" aria-labelledby="fifteenModalLabel" aria-hidden="true">
    //                 <div className="modal-dialog" role="document">
    //                     <div className="modal-content">
    //                         <div className="modal-header">
    //                             <h5 className="modal-title" id="fifteenModalLabel">15</h5>
    //                         </div>
    //                         <div className="modal-body">
    //                             <div className="row">
    //                                 <div className="col text-center number">
    //                                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 15, 1)}}>Single</button>
    //                                 </div>    
    //                                 <div className="col text-center number">
    //                                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 15, 2)}}>Double</button>
    //                                 </div>
    //                                 <div className="col text-center number">
    //                                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 15, 3)}}>Triple</button>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="modal-footer">
    //                             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="modal fade" id="bullModal" tabIndex="-1" role="dialog" aria-labelledby="bullModalLabel" aria-hidden="true">
    //                 <div className="modal-dialog" role="document">
    //                     <div className="modal-content">
    //                         <div className="modal-header">
    //                             <h5 className="modal-title" id="bullModalLabel">Bull</h5>
    //                         </div>
    //                         <div className="modal-body">
    //                             <div className="row">
    //                                 <div className="col text-center number">
    //                                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 25, 1)}}>Single</button>
    //                                 </div>    
    //                                 <div className="col text-center number">
    //                                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 25, 2)}}>Double</button>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="modal-footer">
    //                             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         )
    //     } else {
    //         return(
    //         <div className="container-fluid">
    //             {this.playersRender()}
    //             <div className = "row">
    //                 <div className="col-3 text-center number align-self-center points-label">
    //                     Points:
    //                 </div>
    //                 <div className="col-1 text-center number align-self-center">
    //                     {this.props.p120Progress()}
    //                 </div>
    //                 <div className="col-1 border-left text-center number number">
    //                     20
    //                 </div>
    //                 <div className="col-1 text-center number number">
    //                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 20, 1)}}>Single</button>
    //                 </div>    
    //                 <div className="col-1 number text-center number">
    //                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 20, 2)}}>Double</button>
    //                 </div>
    //                 <div className="col-1 border-right number text-center number">
    //                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 20, 3)}}>Triple</button>
    //                 </div>
    //                 <div className="col-1 text-center number align-self-center">
    //                     {this.props.p220Progress()}
    //                 </div>
    //                 <div className="col-3 text-center number align-self-center points-label">
    //                     Points:
    //                 </div>
    //             </div>
    //             <div className = "row">
    //                 <div className="col-3 text-center number align-self-center points-score">
    //                     {this.props.renderP1Score()}
    //                 </div>
    //                 <div className="col-1 text-center number align-self-center">
    //                     {this.props.p119Progress()}
    //                 </div>
    //                 <div className="col-1 border-left text-center number number">
    //                     19
    //                 </div>
    //                 <div className="col-1 text-center number number">
    //                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 19, 1)}}>Single</button>
    //                 </div>    
    //                 <div className="col-1 number text-center number">
    //                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 19, 2)}}>Double</button>
    //                 </div>
    //                 <div className="col-1 border-right number text-center number">
    //                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 19, 3)}}>Triple</button>
    //                 </div>
    //                 <div className="col-1 text-center number align-self-center">
    //                     {this.props.p219Progress()}
    //                 </div>
    //                 <div className="col-3 text-center number align-self-center points-score">
    //                     {this.props.renderP2Score()}
    //                 </div>
    //             </div>
    //             <div className = "row">
    //                 <div className="col-1 offset-3 text-center number align-self-center">
    //                     {this.props.p118Progress()}
    //                 </div>
    //                 <div className="col-1 border-left text-center number number">
    //                     18
    //                 </div>
    //                 <div className="col-1 text-center number number">
    //                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 18, 1)}}>Single</button>
    //                 </div>    
    //                 <div className="col-1 number text-center number">
    //                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 18, 2)}}>Double</button>
    //                 </div>
    //                 <div className="col-1 border-right number text-center number">
    //                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 18, 3)}}>Triple</button>
    //                 </div>
    //                 <div className="col-1 text-center number align-self-center">
    //                     {this.props.p218Progress()}
    //                 </div>
    //             </div>
    //             <div className = "row">
    //                 <div className="col-1 offset-3 text-center number align-self-center">
    //                     {this.props.p117Progress()}
    //                 </div>
    //                 <div className="col-1 border-left text-center number number">
    //                     17
    //                 </div>
    //                 <div className="col-1 text-center number number">
    //                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 17, 1)}}>Single</button>
    //                 </div>    
    //                 <div className="col-1 number text-center number">
    //                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 17, 2)}}>Double</button>
    //                 </div>
    //                 <div className="col-1 border-right number text-center number">
    //                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 17, 3)}}>Triple</button>
    //                 </div>
    //                 <div className="col-1 text-center number align-self-center">
    //                     {this.props.p217Progress()}
    //                 </div>
    //             </div>
    //             <div className = "row">
    //                 <div className="col-1 offset-3 text-center number align-self-center">
    //                     {this.props.p116Progress()}
    //                 </div>
    //                 <div className="col-1 border-left border-left text-center number number">
    //                     16
    //                 </div>
    //                 <div className="col-1 text-center number number">
    //                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 16, 1)}}>Single</button>
    //                 </div>    
    //                 <div className="col-1 number text-center number">
    //                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 16, 2)}}>Double</button>
    //                 </div>
    //                 <div className="col-1 border-right number text-center number">
    //                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 16, 3)}}>Triple</button>
    //                 </div>
    //                 <div className="col-1 text-center number align-self-center">
    //                     {this.props.p216Progress()}
    //                 </div>
    //             </div>
    //             <div className = "row">
    //                 <div className="col-1 offset-3 text-center number align-self-center">
    //                     {this.props.p115Progress()}
    //                 </div>
    //                 <div className="col-1 border-left text-center number number">
    //                     15
    //                 </div>
    //                 <div className="col-1 text-center number number">
    //                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 15, 1)}}>Single</button>
    //                 </div>    
    //                 <div className="col-1 number text-center number">
    //                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 15, 2)}}>Double</button>
    //                 </div>
    //                 <div className="col-1 border-right number text-center number">
    //                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 15, 3)}}>Triple</button>
    //                 </div>
    //                 <div className="col-1 text-center number align-self-center">
    //                     {this.props.p215Progress()}
    //                 </div>
    //             </div>
    //             <div className = "row">
    //                 <div className="col-1 offset-3 text-center number align-self-center">
    //                     {this.props.p125Progress()}
    //                 </div>
    //                 <div className="col-1 border-left text-center number number">
    //                     Bull
    //                 </div>
    //                 <div className="col text-center number number">
    //                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 25, 1)}}>Single</button>
    //                 </div>    
    //                 <div className="col border-right number text-center number">
    //                     <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => {this.props.score(this.props.activeThrower, 25, 2)}}>Double</button>
    //                 </div>
    //                 <div className="col-1 text-center number align-self-center">
    //                     {this.props.p225Progress()}
    //                 </div>
    //                 <div className="col-3">
    //                 </div>
    //             </div>
    //             <div className="row">
    //                 <div className="col-6 text-center number miss">
    //                     <button type="button" className="btn" onClick={() => {this.props.miss()}}>
    //                         Miss
    //                     </button>
    //                 </div>
    //                 <div className="col-6 text-center number undo">
    //                     <button type="button" className="btn" onClick={() => {this.props.undo()}}>
    //                         Undo
    //                     </button>
    //                 </div>
    //             </div>
            
    //         </div>
    //     )
    //     }
    // }

    render() {
        return (
            <div className="container-fluid">
                {this.playersRender()}
                <div className="row">
                    <div className="col-6 text-center border-right">
                        {this.props.renderP1Score()}
                    </div>
                    <div className="col-6 text-center border-left">
                        {this.props.renderP2Score()}
                    </div>
                </div>
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
