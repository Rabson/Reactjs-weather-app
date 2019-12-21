import { Action } from "redux";

export interface ForecastState {
    citysList : any;
    selectedCitys : any;
}

export enum ForecastActionType {
    UPDATE_CITYS = "UPDATE_CITYS",
    GET_CITY_DETAILS = "GET_CITY_DETAILS",
    GET_CITYS = "GET_CITYS",
    SET_CITYS = "SET_CITYS",
    CLEAR_CITYS = "CLEAR_CITYS",
    UNSELECT_CITY ="UNSELECT_CITY",
}

// weather
export interface UpdateCitys extends Action {
    type: ForecastActionType.UPDATE_CITYS;
    data:[]
}

export interface GetCityDetails extends Action {
    type: ForecastActionType.GET_CITY_DETAILS;
}

export interface GetCitys extends Action {
    type: ForecastActionType.GET_CITYS;
}

export interface SetCitys extends Action {
    type: ForecastActionType.SET_CITYS;
    data: {}
}
export interface ClearCitys extends Action {
    type: ForecastActionType.CLEAR_CITYS;
}
export interface UnselectCitys extends Action {
    type: ForecastActionType.UNSELECT_CITY;
}

