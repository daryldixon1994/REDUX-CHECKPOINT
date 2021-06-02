import {
    TEXT_INPUT,
    ADD_TODO,
    CLEAR,
    REMOVE_TODO,
    DONE,
    ALL_DONE,
    ALL_SELECTED,
    ALL_DESELCTED,
    FINISHED_TASK,
    SHOW_UNFINISHED_TASK,
    EDIT_TASK,
    SET_NEW_TASK,
    SUBMIT_Task,
    MY_TITLE,
    REMOVE_ALL
} from "../constants/actions-type";


export function textInput (e) {
    return {
        type : TEXT_INPUT,
        input : e,
    }
}

export function addToDo (newTask) {
    return {
        type : ADD_TODO,
        newTask,
    }
}

export function clearInput () {
    return {
        type : CLEAR,
    }
}
export function removeTodo (pos) {
    return {
        type : REMOVE_TODO,
        pos,
    }
}

export function DoneOrNot(payload) {
    return {
        type: DONE,
        payload,
      
    };
}
export function SelectAll() {
    return {
        type: ALL_DONE,
        
    };
}
export function testCheck(){
    return {
        type : ALL_SELECTED,
    }
}
export function DeselectALL() {
    return {
        type : ALL_DESELCTED,
    }
}
export function FilterFinishedTask() {
    return {
        type : FINISHED_TASK,
    }
}
export function FilterUnfinishedTask() {
    return {
        type: SHOW_UNFINISHED_TASK,
    };
}
export function EditTask(editStatut) {
    return {
        type: EDIT_TASK,
        editStatut,
    };
}
export function SetNewTask(e, eltPos) {
    return {
        type: SET_NEW_TASK,
        e,
        eltPos,
    };
}
export function SubmitTask(load) {
    return {
        type: SUBMIT_Task,
        load,
       
    };
}
export function editTitle(e) {
    return {
        type : MY_TITLE,
        e,
    }
}
export function removeAll() {
    return {
        type : REMOVE_ALL,
    }
}