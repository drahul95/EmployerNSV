import { combineReducers } from "redux";
import {
  employeeLogin,
  employeeCapture,
  employeeSignup,
  employeeEmailVerify,
  employeeMobileVerify
} from './EmployeeLoginReducers';
import { common } from "../../store/common";
import { user } from "../../store/user";
import { countryList } from "./CountryReducer";

export default combineReducers({
  employeeLogin,
  employeeCapture,
  employeeSignup,
  employeeEmailVerify,
  employeeMobileVerify,
  common,
  user,
  countryList
});
