import { combineReducers } from "redux";
import TodoTextInput from "./TodoTextInput";
import ToDoElement from "./ToDoElement";
import testAllSelect from "./testAllSelect";
import taskIsDone from "./taskIsDone";
import taskNotDone from "./taskNotDone";
import todoTitle from "./todoTitle";


const allReducers = combineReducers({
    TodoTextInput,
    ToDoElement,
    testAllSelect,
    taskIsDone,
    taskNotDone,
    todoTitle,
});

export default allReducers;
