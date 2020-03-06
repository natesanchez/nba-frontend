import React, { Component } from "react";
import { Link } from 'react-router-dom'
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        if (!this.state.data) {
            fetch("http://localhost:4000/teams")
                .then(res => res.json())
                .then(res => {
                    this.setState({ data: res });
                    console.log(res)
                });
        }
    }

    render() {
        if (this.state.data) {
            let list = this.state.data.map(item => {
                return (
                    <div className="eachReturn" key={item.teamId}>
                        <Link className="imageLink" to={"/team/" + item.name}>
                            <div>
                                <img className="teamImages" src={item.logo} alt="team" />
                            </div>
                        </Link>
                    </div>
                );
            });
            return <div className="teamContainer">{list}</div>;
        } else {
            return (
                <div>
                    <h2>Loading...</h2>
                </div>
            )
        }
    }
}

export default Home;