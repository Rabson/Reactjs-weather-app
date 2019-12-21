import React from 'react';

interface AppProps {
    //code related to your props goes here
}

interface AppState {
    location: string
}

class NavBar extends React.Component<AppProps, AppState> {

    constructor(props: any) {
        super(props)

        this.state = {
            location: ''
        }
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
                                    {/* <span className="nav-link" >Home
                                      <span className="sr-only">(current)</span>
                                    </span> */}
                                    <form className="nav-link navbar-form navbar-right" role="search">
                                        <div className="form-group">
                                            <input id="city" type="text" value={this.state.location} onChange={(e: any) => { this.setState({ location: e.target.value }) }} className="form-control" placeholder="Enter City" required />
                                        </div>
                                        <button type="submit" className="btn btn-light">Get Forecast</button>
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

export default NavBar;