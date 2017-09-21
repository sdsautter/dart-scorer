import React, {Component} from "react";

export default class GamePick extends Component {
    constructor() {
        super();
    }
      
    render() {
        return (
            <div className="container-fluid">
                <div className = "row">
                    <div className="col text-center">
                        Which x01 Game To Play?
                    </div>
                </div>
                <div className = "row">
                    <div className = "col-4 text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.setX01Game(101)}}>101</button>
                    </div>
                    <div className = "col-4 text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.setX01Game(201)}}>201</button>
                    </div>                    
                    <div className = "col-4 text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.setX01Game(301)}}>301</button>
                    </div>
                </div>
                <div className = "row">
                    <div className = "col-4 text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.setX01Game(401)}}>401</button>
                    </div>
                    <div className = "col-4 text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.setX01Game(501)}}>501</button>
                    </div>                    
                    <div className = "col-4 text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.setX01Game(601)}}>601</button>
                    </div>
                </div>
                <div className = "row">
                    <div className = "col-4 text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.setX01Game(701)}}>701</button>
                    </div>
                    <div className = "col-4 text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.setX01Game(801)}}>801</button>
                    </div>                    
                    <div className = "col-4 text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.setX01Game(901)}}>901</button>
                    </div>
                </div>
                <div className = "row">
                    <div className = "col text-center">
                        <button type="button" className="btn btn-success" onClick={() => {this.props.setX01Game(1001)}}>1001</button>
                    </div>
                </div>
            </div>
        )
    }
}
