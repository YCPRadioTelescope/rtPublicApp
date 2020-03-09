import { combineReducers } from "redux";
import AuthReducer from "./src/screens/LoginScreen/AuthReducer";
import FeedbackReducer from "./src/screens/FeedbackScreen/FeedbackReducer";
import PublicReducer from "./src/screens/PublicApptsScreen/PublicReducer";

const reducer = combineReducers({
  user: AuthReducer,
  feedback: FeedbackReducer,
  publicApps: PublicReducer
});

export default reducer;
