import axios from "../../config/axios";
import {
  COUNTRY_LIST_FAIL,
  COUNTRY_LIST_SUCCESS
} from '../constants/CountryType';


export const CounrtyList = () =>
  async (dispatch) => {
    const url = "/employer/common/countries";
    try {
      let { data } = await axios.get(url);
      dispatch({
        type: COUNTRY_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: COUNTRY_LIST_FAIL,
        payload: error
      });
    }
  };
