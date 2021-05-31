import { ALL_SELECTED, ALL_DESELCTED } from "../constants/actions-type";
const initState = {
    test: false,
};

const testAllSelect = (state = initState, action) => {
    let { type } = action;
    switch (type) {
        case ALL_SELECTED:
            return { test: !state.test };
        case ALL_DESELCTED:
            return { test: !state.test };
        default:
            return state;
    }
};
export default testAllSelect;
