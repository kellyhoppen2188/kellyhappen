import { combineReducers } from "redux";
import authReducer from "./authSlice";
import adminAuthReducer from "./adminAuthSlice";
import userReducer from "./userSlice";
import adminProductReducer from "./adminProductSlice";
import adminReducer from "./adminSlice";
import taskReducer from "./taskSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  adminAuth: adminAuthReducer,
  adminProduct: adminProductReducer,
  admin: adminReducer,
  task: taskReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
