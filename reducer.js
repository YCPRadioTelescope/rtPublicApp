import { combineReducers } from "redux";
import AuthReducer from "./src/screens/LoginScreen/AuthReducer";
import FeedbackReducer from "./src/screens/FeedbackScreen/FeedbackReducer";

const reducer = combineReducers({
  user: AuthReducer,
  feedback: FeedbackReducer,
});

export default reducer;
