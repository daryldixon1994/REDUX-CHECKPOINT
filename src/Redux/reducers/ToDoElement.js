import {
    ADD_TODO,
    DONE,
    REMOVE_TODO,
    ALL_DONE,
    ALL_DESELCTED,
    EDIT_TASK,
    SET_NEW_TASK,
    SUBMIT_Task,
    REMOVE_ALL,
} from "../constants/actions-type";
const initState = [];

const ToDoElement = (state = initState, action) => {
    let { type, newTask, pos, payload, editStatut, e, eltPos, load } = action;
    switch (type) {
        case ADD_TODO:
            return [...state, newTask];
        case REMOVE_TODO:
            return state.filter((elt, index) => index !== pos);
        case DONE:
            return state.map((elt) =>
                elt.id === payload ? { ...elt, isDone: !elt.isDone } : elt
            );
        case ALL_DONE:
            return state.map((elt) =>
                elt.isDone === false ? { ...elt, isDone: true } : elt
            );
        case ALL_DESELCTED:
            return state.map((elt) =>
                elt.isDone === true ? { ...elt, isDone: false } : elt
            );
        case EDIT_TASK:
            return state.map((elt) =>
                elt.id === editStatut ? { ...elt, edit: !elt.edit } : elt
            );
        case SET_NEW_TASK:
            return state.map((elt) =>
                elt.id === eltPos ? { ...elt, task: e.target.value } : elt
            );
        case SUBMIT_Task:
            return state.map((elt) =>
                elt.id === load ? { ...elt, edit: !elt.edit } : elt
            );
        case REMOVE_ALL:
            return (state = []);
        default:
            return state;
    }
};
export default ToDoElement;
