import { SHOW_UNFINISHED_TASK, FINISHED_TASK } from "../constants/actions-type";
const initState = {
    notDone: false,
};
const taskNotDone = (state = initState, action) => {
    let { type } = action;
    switch (type) {
        case SHOW_UNFINISHED_TASK:
            return { notDone: !state.notDone };
        case FINISHED_TASK:
            return { notDone: false };
        default:
            return state;
    }
};

export default taskNotDone;
