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

export const getCityDetails = (): GetCityDetails => ({
    type: ForecastActionType.GET_CITY_DETAILS
});

export const updateCitys = (list :[]): UpdateCitys => ({
    type: ForecastActionType.UPDATE_CITYS,
    data : list
});

export const setCitys = (city :object): SetCitys => ({
    type: ForecastActionType.SET_CITYS,
    data : city
});
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
