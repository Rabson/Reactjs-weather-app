import { ThunkDispatch } from 'redux-thunk';
import React from 'react';
import { connect } from "react-redux";
// import { Dispatch } from "redux";

import CityList from './cityList';
import WeatherDetails from './weatherDetails'
import NavBar from './navbar';

import { ForecastState } from '../store/types'
import { getCitys } from "../store/action";

interface AppProps { 
    GetCitys : () => void
}

interface AppState {
    location: any,
    data: any,
    cityList: []
}

class Home extends React.Component<AppProps, AppState> {

    constructor(props: any) {
        super(props)

        this.state = {
            location: '',
            data: '',
            cityList: []
        }
    }

    componentDidMount() { 
        this.props.GetCitys();
    }

    render() {
        return (
            <div className="App">
                <NavBar />
                <main>
                    <div className="App">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4">
                                    <h4>City list :</h4>
                                    <CityList />
                                </div>
                                <div className="col-sm-8">
                                    <h3>Weather Details :</h3>
                                    <WeatherDetails />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

}



const mapStateToProps = (state: ForecastState) => ({
  cityList :state.citysList
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>)  => ({
  GetCitys: () => dispatch(getCitys())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);