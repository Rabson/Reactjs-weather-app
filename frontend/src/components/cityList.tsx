import React, { } from 'react';
// useState
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { ForecastState } from '../store/types'
import { setCitys } from "../store/action";

interface AppProps {
    citysList: any,
    // GetCitys : () => void
}

interface AppState {
    selected :{}
}

class CityList extends React.Component<any, AppState> {

    constructor(props: any) {
        super(props)

        this.state = {
            selected :{}
        }
    }

    selectCity = (ele: any) => {        
        this.props.GetCitys(ele);
        const arr = this.props.citysList.filter((e: any) => e.cityName === ele.cityName);
        const index = this.props.citysList.map((ele: any) => ele.cityName).indexOf(arr[0].cityName);
        this.props.citysList[index].active = this.props.citysList[index].active?false:true;
        this.setState({selected : ele})
    }


    render() {
        const { citysList } = this.props;
        return (

            <ul className="list-group">
                {
                    citysList ? citysList.map((ele: any) => {
                        return (<li key={JSON.stringify(ele)}
                            onClick={() => this.selectCity(ele)}
                            className={"list-group-item" + (ele.active ? " list-group-item-dark" : " ")}>
                            {ele.cityName}
                        </li>)
                    }) : ''
                }
                {/* // <City list={...citysList} /> */}
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
    GetCitys: (city: object) => dispatch(setCitys(city))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityList);





// interface CityProps {
//     list: any
// }
// const City: React.FC = (props: any) => {
//     const [activeCity, setCity] = useState(null);

//     return (
//         <>
//             <ul className="list-group">
//                 {
//                     props ? props.map((ele: any) => {
//                         return (
//                             <li onClick={() => { setCity(ele.cityName) }}
//                                 style={{ color: activeCity === ele.cityName ? "red" : "green" }}
//                                 key={ele.cityName}
//                                 className="list-group-item">{ele.cityName}
//                             </li>)
//                     }) : ''
//                 }
//             </ul>
//             {/* {props.map(city => <p key={city} onClick={() => { setCity(city) }} style={{ color: activeCity === city ? "red" : "green" }}>{city}</p>)} */}
//         </>
//     );
// };
