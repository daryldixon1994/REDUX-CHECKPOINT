import React from "react";
import { AiOutlineCloseCircle, AiFillEdit } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
    removeTodo,
    DoneOrNot,
    EditTask,
    SetNewTask,
    SubmitTask,
} from "../../../Redux/actions";
import "./TodoItem.css";

function TodoItem({ elt, index }) {
    let dispatch = useDispatch();
    
    const handelClick = () => {
        dispatch(removeTodo(index));
    };

    const handelcheckclick = () => {
        dispatch(DoneOrNot(elt.id));
    };
    const test = useSelector((state) => state.testAllSelect.test);

    const handelEditTask = () => {
        dispatch(EditTask(elt.id));
    };
    const handelChange =(e)=> {
        dispatch(SetNewTask(e, elt.id))
    }
    const submitNewTask = ()=> {
        dispatch(SubmitTask(elt.id))
    }
    return (
        <div
            className="td-item"
            style={elt.isDone ? { backgroundColor: "#aef2dc" } : null}
        >
            <div>
                <form>
                    <label>
                        <AiOutlineCloseCircle size={30} />
                        <input
                            type="radio"
                            name="remove_task"
                            onClick={handelClick}
                        />
                    </label>
                </form>
            </div>

            <div className="box">
                <h2
                    style={{
                        textDecoration: elt.isDone ? "line-through" : null,
                    }}
                >
                    {elt.task}
                </h2>
                <div className="editTaskNameBox">
                    {elt.edit ? (
                        <div className="button">
                            <input
                                type="text"
                                name="edit_text"
                                onChange={handelChange}
                            />
                            <button onClick={submitNewTask}>Edit</button>
                        </div>
                    ) : null}
                </div>
            </div>

            <form>
                <label className="check-done">
                    <AiFillEdit
                        color={elt.edit ? "#2222cc" : "grey"}
                        size={30}
                    />
                    <input
                        type="checkbox"
                        name="edit"
                        onClick={handelEditTask}
                    />
                </label>
            </form>
            <form>
                <label className="check-done">
                    <IoMdCheckmarkCircleOutline
                        color={elt.isDone || test ? "green" : "grey"}
                        size={30}
                    />
                    <input
                        type="checkbox"
                        name="done"
                        onClick={handelcheckclick}
                    />
                </label>
            </form>
        </div>
    );
}

export default TodoItem;
