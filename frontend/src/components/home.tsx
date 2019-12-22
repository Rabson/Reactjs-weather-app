import { ThunkDispatch } from 'redux-thunk';
import React, { Fragment } from 'react';
import { connect } from "react-redux";
// import { Dispatch } from "redux";

import CityList from './cityList';
import WeatherDetails from './weatherDetails'
import NavBar from './navbar';

import { ForecastState } from '../store/types'
import { getCitys, getWeaterDetials } from "../store/action";

interface AppProps {
    GetCitys: () => void;
    GetWeaterDetials: () => void;
    selectedCitys: any[]
}

interface AppState {
    location: any,
    data: any,
    cityList: any[]
}

class Home extends React.Component<any, AppState> {

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

    getDetails = () => {
        if (!this.props.selectedCitys.length) {
            return alert("Please select city");
        }

        this.props.GetWeaterDetials(this.props.selectedCitys)
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
                                    <CityList /><br />
                                    <button onClick={this.getDetails}
                                        className="btn btn-secondary secondary text-right">
                                        Get Forecast </button>
                                </div>
                                <div className="col-sm-8">
                                    <div className="container">
                                        <h3>Weather Details :</h3>
                                        {   
                                            this.props.weatherDetails.map((ele: any) => {
                                                return (
                                                    <Fragment key={ele.location.city}>
                                                            <WeatherDetails {...ele} />
                                                        <br />
                                                    </Fragment>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

}



const mapStateToProps = (state: ForecastState) => {

    const { citysList, selectedCitys, weatherDetails } = (state as any).forecast;
    return {
        cityList: citysList,
        selectedCitys: selectedCitys,
        weatherDetails: weatherDetails
    }

};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    GetCitys: () => dispatch(getCitys()),
    GetWeaterDetials: (selectedCitys: any[]) => dispatch(getWeaterDetials(selectedCitys))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);