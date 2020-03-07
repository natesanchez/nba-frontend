import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Legends.css';


class Legends extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            team: null,
            data: null
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        if (!this.state.data) {
            fetch("http://localhost:4000/legends")
                .then(res => res.json())
                .then(res => {
                    this.setState({ data: res });
                });
        }
    }


    render() {
        if (this.state.data) {
            let legends = this.state.data.map(legend => {
                return (
                    <div className="returnedContainerLegends" key={legend._id}>
                        <h1 className="legendName">{legend.name}</h1>
                        <h2 className="legendTeam">Team: {legend.team}</h2>
                    </div>
                );
            })
            return (
                <div className="legendsMain">
                    <div className="legendsLegends">
                        <Link className="addLegend" to={"/create-legend"}>Add Legend</Link>
                        {legends}
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>Loading...</h2>
                </div>
            )
        }
    }
}


export default Legends;