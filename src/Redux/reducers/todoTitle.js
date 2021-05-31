import {MY_TITLE} from "../constants/actions-type"
const initState = {
    title : ""
}
const todoTitle = (state = initState, action) => {
    let {type, e}=action;
    switch (type) {
        case MY_TITLE : return {title : e.target.value}
        default: return state;
    }
}
export default todoTitle;