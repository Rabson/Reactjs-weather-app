import React from 'react';
import { connect } from "react-redux";
import { getWeaterDetialsforCity } from "../store/action";
import { ThunkDispatch } from 'redux-thunk';

interface AppProps {
    getWeaterDetials: () => void;
    //code related to your props goes here
}

interface AppState {
    location: string
}

class NavBar extends React.Component<any, AppState> {

    constructor(props: any) {
        super(props)

        this.state = {
            location: ''
        }
    }

    submitHandler = (e: any) => {
        e.preventDefault();
        this.props.getWeaterDetials(this.state.location)
    }

    render() {
        return (
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-secondary static-top">
                    <div className="container">
                        <a href="https://www.yahoo.com/?ilc=401" target="_blank" rel="noopener noreferrer" >
                            <img className="brand" alt="Yahoo" src="https://poweredby.yahoo.com/purple.png"
                                width="134" height="29" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <form className="nav-link navbar-form navbar-right" onSubmit={this.submitHandler} role="search">
                                        <div className="form-group">
                                            <input id="city" type="text" value={this.state.location} onChange={(e: any) => { this.setState({ location: e.target.value }) }} className="form-control" placeholder="Enter City" required />
                                        </div>
                                        <button type="submit" disabled={this.state.location.length < 2} className="btn btn-light">Get Forecast</button>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }

}


const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    getWeaterDetials: (city: object) => dispatch(getWeaterDetialsforCity(city))
});

export default connect(
    null,
    mapDispatchToProps
)(NavBar);


