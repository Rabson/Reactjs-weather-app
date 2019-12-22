import { ForecastActionType, ForecastState } from "./types";
import { Action } from "redux";

const initialState: ForecastState = {
    citysList: [],
    selectedCitys :[],
    weatherDetails :[]
};

const forecast = (state: ForecastState = initialState, action: Action): ForecastState => {
    switch (action.type) {

        case ForecastActionType.UPDATE_CITYS:
            return { ...state, citysList: [...(action as any).data] };
     
        case ForecastActionType.SET_CITYS: {
            const data = (action as any).data;
            let newArr:any[] = []
            // const arr: any = new Set([...state.selectedCitys, (action as any).data]);
            const arr = state.selectedCitys.filter((e: any) => e.cityName === data.cityName)
            if (arr.length) { 
                newArr = [...state.selectedCitys.filter((e: any) => e.cityName !== data.cityName)]
            } else {
                newArr = [...state.selectedCitys,data]
            }
            return { ...state, selectedCitys: newArr  };
        }
            
        case ForecastActionType.CLEAR_CITYS:
            return { ...state, citysList: [] };
        
        case ForecastActionType.UNSELECT_CITY:  {
            const data = (action as any).data;
            const arr = state.selectedCitys.filter((e: any) => e.cityName !== data.cityName)
            return { ...state, selectedCitys: [...arr] };
        }

        case ForecastActionType.GET_CITY_DETAILS:
            return { ...state, weatherDetails: [...(action as any).data] };
        default:
            return state;
    }
};

export default forecast;
