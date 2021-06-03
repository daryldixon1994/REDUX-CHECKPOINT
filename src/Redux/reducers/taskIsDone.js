import { FINISHED_TASK, SHOW_UNFINISHED_TASK } from "../constants/actions-type";
const initState = {
    done: false,
};
const taskIsDone = (state = initState, action) => {
    let { type } = action;
    switch (type) {
        case FINISHED_TASK:
            return { done: !state.done };
        case SHOW_UNFINISHED_TASK:
            return { done: false };
        default:
            return state;
    }
};

export default taskIsDone;
