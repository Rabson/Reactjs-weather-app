import { ForecastActionType, ForecastState } from "./types";
import { Action } from "redux";

const initialState: ForecastState = {
    citysList: [],
    selectedCitys :[]
};

const forecast = (state: ForecastState = initialState, action: Action): ForecastState => {
    switch (action.type) {
        case ForecastActionType.UPDATE_CITYS:
            return { ...state, citysList: [...(action as any).data] };
        case ForecastActionType.SET_CITYS:
            return { ...state, citysList: [...(action as any).data] };
        case ForecastActionType.CLEAR_CITYS:
            return { ...state, citysList: [...(action as any).data] };
        case ForecastActionType.UNSELECT_CITY:
            return { ...state, citysList: [...(action as any).data] };
        default:
            return state;
    }
};

export default forecast;
