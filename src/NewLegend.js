import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import './NewLegend.css';
import Axios from "axios";

class NewLegend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            team: null
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTeam = this.onChangeTeam.bind(this);
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    onChangeTeam = (e) => {
        this.setState({
            team: e.target.value
        })
    }

    onSubmit = (e) => {
        if (this.state.name === null || this.state.team === null) {
            return
        } else {
            e.preventDefault()
            console.log("Submitted")

            const newLegend = {
                name: this.state.name,
                team: this.state.team
            };

            Axios.post("https://nba-pi.herokuapp.com/legends", newLegend)
                .then(res => console.log(res))
            this.setState({
                name: null,
                team: null
            })
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <div className="newLegendContainer">
                <form className="submitForm" onSubmit={this.onSubmit}>
                    <h1>Add Legend</h1>
                    <br />
                    <div className="formInput">
                        <label className="inputLabel">Legend Name: </label>
                        <input className="inputBox" type="text" onChange={this.onChangeName} />
                    </div>

                    <div className="formInput">
                        <label className="inputLabel">Legend Team: </label>
                        <input className="inputBox" type="text" onChange={this.onChangeTeam} />
                    </div>
                    <br />
                    <input className="submitLegend" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default NewLegend