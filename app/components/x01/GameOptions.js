import React, {Component} from "react";

export default class GameOptions extends Component {
    constructor() {
        super();
    }
      
    render() {
        return (
            <div className="container-fluid">
                <div className = "row top-row">
                    <div className="col title text-center">
                        Game Options
                    </div>
                </div>
                <br />
                <div className = "row">
                    <div className = "col-md-4 col-sm-12 x01-option number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.setGameOptions("dido")}}>Double In/Double Out</button>
                    </div>
                    <div className = "col-md-4 col-sm-12 x01-option number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.setGameOptions("sido")}}>Any In/Double Out</button>
                    </div>                    
                    <div className = "col-md-4 col-sm-12 x01-option number text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.setGameOptions("siso")}}>Any In/Any Out</button>
                    </div>
                </div>
            </div>
        )
    }
}
