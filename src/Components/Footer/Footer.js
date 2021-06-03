import React from "react";
import "./Footer.css";
import { useSelector, useDispatch } from "react-redux";
import { BiTask, BiTaskX, BiUndo } from "react-icons/bi";
import { CgPlayListRemove } from "react-icons/cg";
import {
    DeselectALL,
    FilterFinishedTask,
    FilterUnfinishedTask,
} from "../../Redux/actions";

function Footer() {
    const dispatch = useDispatch();
    const test = useSelector((state) => state.testAllSelect.test);
    const doneTasks = useSelector((state) => state.taskIsDone.done);
    const notDoneTasks = useSelector((state) => state.taskNotDone.notDone);
    const todoList = useSelector((state) => state.ToDoElement);
  
    const handelClick = () => {
        dispatch(DeselectALL());
    };

    const showDoneTask = () => {
        dispatch(FilterFinishedTask());
    };

    const showUndoneTask = () => {
        dispatch(FilterUnfinishedTask());
    };
    return (
        <div className="td-footer">
            <div>
                {test ? (
                    <div>
                        <label style={{ marginLeft: "20px" }}>
                            <CgPlayListRemove size={60} color={"#7798ea"} />
                            <input
                                type="checkbox"
                                name="removeall"
                                onClick={handelClick}
                            />
                        </label>
                    </div>
                ) : null}
            </div>

            <div>
                <label style={{ marginLeft: "20px" }}>
                    {doneTasks ? (
                        <BiUndo size={60} color={"#7798ea"} />
                    ) : (
                        <BiTask size={60} color={"#7798ea"} />
                    )}

                    <input
                        type="checkbox"
                        name="doneTask"
                        onClick={showDoneTask}
                    />
                </label>
            </div>
            <div>
                <label style={{ marginLeft: "20px" }}>
                    {notDoneTasks ? (
                        <BiUndo size={60} color={"#7798ea"} />
                    ) : (
                        <BiTaskX size={60} color={"#7798ea"} />
                    )}

                    <input
                        type="checkbox"
                        name="waitingtasks"
                        onClick={showUndoneTask}
                    />
                </label>
            </div>

            <h4>{todoList.length} Task(s) to do</h4>
        </div>
    );
}

export default Footer;
