import { SHOW_UNFINISHED_TASK } from "../constants/actions-type";
const initState = {
    notDone: false,
};
const taskNotDone = (state = initState, action) => {
    let { type } = action;
    switch (type) {
        case SHOW_UNFINISHED_TASK:
            return { notDone: !state.notDone };
        default:
            return state;
    }
};

export default taskNotDone;
