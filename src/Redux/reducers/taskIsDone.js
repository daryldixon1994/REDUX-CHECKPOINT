import { FINISHED_TASK} from "../constants/actions-type";
const initState = {
    done: false,
};
const taskIsDone = (state = initState, action) => {
    let { type } = action;
    switch (type) {
        case FINISHED_TASK:
            return { done: !state.done };
        default:
            return state;
    }
};

export default taskIsDone;
