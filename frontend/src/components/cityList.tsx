import React from 'react';

import { ThunkDispatch } from 'redux-thunk';
import { connect } from "react-redux";
// import { Dispatch } from "redux";

import { ForecastState } from '../store/types'
import { getCitys } from "../store/action";
interface AppProps {
    citysList : any
}

interface AppState {
}

class CityList extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props)

        this.state = {}
    }


    render() {
        const {citysList } =this.props;
        console.log(citysList);
        return (
            <ul className="list-group">
                {
                    citysList ? citysList.map((ele:any)=>{
                        debugger
                        return (<li key={ele.cityName} className="list-group-item">{ele.cityName}</li>)
                    }) :''
                }
            </ul>
        );
    }

}


const mapStateToProps = (state: ForecastState) => {
    const { citysList } = (state as any).forecast;
   return {
       citysList: citysList 
    }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>)  => ({
  GetCitys: () => dispatch(getCitys())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityList);