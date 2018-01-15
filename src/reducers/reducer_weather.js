import { FETCH_WEATHER } from "../actions/index";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {

        case FETCH_WEATHER:
            return state.concat([action.payload.data]);
            //using ES6 we can use return [ action.payload.data, ...state];

        default:
            return state
    }
}
