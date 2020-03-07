import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
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
        e.preventDefault()
        console.log("Submitted")

        const newLegend = {
            name: this.state.name,
            team: this.state.team
        };

        Axios.post("http://localhost:4000/legends", newLegend)
            .then(res => console.log(res))
        this.setState({
            name: null,
            team: null
        })
        this.props.history.push("/legends");
    }

    render() {
        return (
            <div>
                <h1>Add Legend</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="formInput">
                        <label>Legend Name: </label>
                        <input type="text" onChange={this.onChangeName} />
                    </div>

                    <div className="formInput">
                        <label>Legend Team: </label>
                        <input type="text" onChange={this.onChangeTeam} />
                    </div>
                    <input type="submit" value="Add Legend" />
                </form>
            </div>
        )
    }
}

export default NewLegend