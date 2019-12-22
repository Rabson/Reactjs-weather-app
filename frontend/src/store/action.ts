import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

import { 
    ForecastActionType, 
    GetCityDetails,
    UpdateCitys,
    SetCitys,
    ClearCitys,
    UnselectCitys,
    // GetCitys,
} from "./types";

import * as services from '../services/index';

export const getCityDetails = (detialsList: []): GetCityDetails => ({
    type: ForecastActionType.GET_CITY_DETAILS,
    data :detialsList
});

export const updateCitys = (list :[]): UpdateCitys => ({
    type: ForecastActionType.UPDATE_CITYS,
    data : list
});

export const setCitys = (city :object): SetCitys => {
    return {
        type: ForecastActionType.SET_CITYS,
            data : city
    }
};
export const clearCitys = (): ClearCitys => ({
    type: ForecastActionType.CLEAR_CITYS
});
export const unselectCitys = (): UnselectCitys => ({
    type: ForecastActionType.UNSELECT_CITY
});

export const getCitys = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        try {
            const list = await services.getCityList();
            dispatch(updateCitys(list))
        } catch (error) {
            console.log(error)
            dispatch(updateCitys([]))
        }
    }
};
export const getWeaterDetials = (selectedCitys:any): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        try {
            const list = await services.getWeatherDetailsForCitys(selectedCitys);
            dispatch(getCityDetails(list))
        } catch (error) {
            console.log(error)
            dispatch(getCityDetails([]))
        }
    }
};
export const getWeaterDetialsforCity = (selectedCitys:any): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        try {
            debugger
            const list = await services.getWeatherDetailsForCity(selectedCitys);
            console.log(list)
            dispatch(getCityDetails(list))
        } catch (error) {
            console.log(error)
            dispatch(getCityDetails([]))
        }
    }
};
