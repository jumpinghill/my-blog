import { combineReducers } from "redux";
// default가 없으니 당연히 중괄호로 가져왔겠지.
import user from "./user";
import post from "./post";

const rootReducer = combineReducers({
  user,
  post,
});

export default rootReducer;
