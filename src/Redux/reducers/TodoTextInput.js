import { TEXT_INPUT, CLEAR } from "../constants/actions-type";

const initState = {
    task: "",
    id: 0,
    isDone : false,
    edit: false
};

const TodoTextInput = (state = initState, action) => {
    let { type, input } = action;
    switch (type) {
        case TEXT_INPUT:
            return {
                ...state,
                task: input.target.value,
                id: Math.floor(Math.random() * 1000),
            };
        case CLEAR:
            return { ...state, task: "", id :0 };
        default:
            return state;
    }
};

export default TodoTextInput;
