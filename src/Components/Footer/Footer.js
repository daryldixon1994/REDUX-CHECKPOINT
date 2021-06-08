import React, { useState } from "react";
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

    let count = 0;
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].isDone === true) {
            count = count + 1;
        }
    }

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
                        <label
                            style={{ marginLeft: "20px" }}
                            title="Deselect all"
                        >
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
                <label
                    style={{ marginLeft: "20px" }}
                    title="Show finished tasks"
                >
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
                <label
                    style={{ marginLeft: "20px" }}
                    title="Show unfinished tasks"
                >
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
            <h4>Completed Tasks: {count}</h4>
            <h4>Uncompleted Tasks: {todoList.length - count}</h4>
        </div>
    );
}

export default Footer;
