import { combineReducers } from "redux";
import { todoListReducer } from "./todoList";

const rootReducer = combineReducers({
   todoList: todoListReducer,
})

export default rootReducer;