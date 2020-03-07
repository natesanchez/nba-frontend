import React, { Component } from 'react';
import './Champs.css';


class Champs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        if (!this.state.data) {
            fetch("http://localhost:4000/championships")
                .then(res => res.json())
                .then(res => {
                    this.setState({ data: res });
                    console.log(res)
                });
        }
    }


    render() {
        if (this.state.data) {
            let champs = this.state.data.map(year => {
                return (
                    <div className="returnedContainerChamps" key={year.year}>
                        <h1 className="champYear">{year.year}</h1>
                        <h2 className="champChamp">🏆 Champions: {year.champion}</h2>
                        <h2 className="champChoke">😓 Runner Up: {year.runnerUp}</h2>
                    </div>
                );
            })
            return <div className="champsMain">{champs}</div>;
        } else {
            return (
                <div>
                    <h2>Loading...</h2>
                </div>
            )
        }
    }
}


export default Champs;