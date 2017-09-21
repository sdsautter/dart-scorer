import React, {Component} from "react";

export default class GameOptions extends Component {
    constructor() {
        super();
    }
      
    render() {
        return (
            <div className="container-fluid">
                <div className = "row">
                    <div className="col text-center">
                        Game Options
                    </div>
                </div>
                <div className = "row">
                    <div className = "col-4 text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.setGameOptions("dido")}}>Double In/Double Out</button>
                    </div>
                    <div className = "col-4 text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.setGameOptions("sido")}}>Any In/Double Out</button>
                    </div>                    
                    <div className = "col-4 text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.setGameOptions("siso")}}>Any In/Any Out</button>
                    </div>
                </div>
            </div>
        )
    }
}
