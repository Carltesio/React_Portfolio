import initialState from "../store/initialState";
import * as actionTypes from "../actions/actionTypes";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_WEATHER:
        return {
          ...state,
          city: action.payload.city,
          weather: action.payload.weather,
          temp: action.payload.temp,
          weatherIcon: action.payload.weatherIcon
        };

    default:
      return state;
  }
};

export default rootReducer;