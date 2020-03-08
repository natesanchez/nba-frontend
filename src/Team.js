import React, { Component } from 'react';
import './Team.css';


class Team extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        if (!this.state.data) {
            fetch("https://nba-pi.herokuapp.com/teams")
                .then(res => res.json())
                .then(res => {
                    this.setState({ data: res });
                    console.log(res)
                });
        }
    }


    render() {
        if (this.state.data) {
            let display = this.state.data.map(team => {
                if (team.teamId == this.props.match.params.teamId) {
                    return (
                        <div className="returnedContainer">
                            <h1 className="teamName">{team.full_name}</h1>
                            <img className="returnedImage" src={team.logo} alt="logo" />
                            <h2 className="info">Founded: {team.founded}</h2>
                            <h2 className="info">Conference: {team.conference}</h2>
                            <h2 className="info">Division: {team.division}</h2>
                            <br />
                            <a className="site" href={team.website} target="_blank">Visit Team Site</a>
                            <br />
                            <br />
                        </div>
                    );
                } else { }
            })
            return <div>{display}</div>;
        } else {
            return (
                <div>
                    <h2>Loading...</h2>
                </div>
            )
        }
    }
}


export default Team;

