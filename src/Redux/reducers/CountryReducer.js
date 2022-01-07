import { COUNTRY_LIST_FAIL, COUNTRY_LIST_REQUEST, COUNTRY_LIST_SUCCESS } from "../constants/CountryType"


export const countryList = (state = { loading: true }, action) => {
    switch (action.type) {
        case COUNTRY_LIST_REQUEST:
            return { loading: true };
        case COUNTRY_LIST_SUCCESS:
            return { loading: false, country: action.payload };
        case COUNTRY_LIST_FAIL:
            return { loading: false, country: action.payload };
        default:
            return state;
    }
}