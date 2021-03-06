import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    textInput,
    addToDo,
    clearInput,
    SelectAll,
    testCheck,
    editTitle,
} from "../../Redux/actions";
import { FaArrowRight, FaPencilAlt } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { FcTodoList } from "react-icons/fc";
import "./Header.css";

function Header() {
    const dispatch = useDispatch();
    const handelChange = (e) => {
        dispatch(textInput(e));
    };
    const newTask = useSelector((state) => state.TodoTextInput);
    const newTaskElt = useSelector((state) => state.TodoTextInput.task);
    const test = useSelector((state) => state.testAllSelect.test);

    const handelClick = () => {
        dispatch(addToDo(newTask));
        dispatch(clearInput());
    };
    const handelSelectAll = () => {
        dispatch(SelectAll());
        dispatch(testCheck());
    };
    const handelTitle = (e) => {
        e.preventDefault();
        dispatch(editTitle(e));
    };
    const [ok, setOk] = useState(false);

    const handelOk = (e) => {
        e.preventDefault();
        setOk(!ok);
    };

    const myTitle = useSelector((state) => state.todoTitle.title);
    /* const todoInput = useSelector(state => state.TodoTextInput.task) */
    return (
        <div className="header-container">
            <div className="add-title-box">
                {ok ? null : (
                    <div className="td-titel-edit">
                        <form>
                            <label>
                                <input
                                    type="text"
                                    name="todo_list"
                                    placeholder="TODO LIST NAME"
                                    onChange={handelTitle}
                                    required
                                />
                            </label>
                        </form>

                        <form>
                            <label style={{ marginLeft: "18px" }}>
                                <FaArrowRight size={25} color={"#7798ea"} />
                                <input
                                    type="checkbox"
                                    name="ok"
                                    onClick={handelOk}
                                />
                            </label>
                        </form>
                    </div>
                )}
            </div>

            {ok ? (
                <div className="myTitle">
                    <h1> {myTitle}</h1>
                    <button onClick={handelOk}>
                        <FaPencilAlt />
                    </button>
                </div>
            ) : null}

            <div className="td-main-header">
                {test ? null : (
                    <div>
                        <label
                            style={{ marginRight: "20px" }}
                            title="Select all tasks as Done!"
                        >
                            <FcTodoList size={30} color={"#7798ea"} />
                            <input
                                type="checkbox"
                                name="addTask"
                                onClick={handelSelectAll}
                            />
                        </label>
                    </div>
                )}
                <form>
                    <input
                        type="text"
                        placeholder="Need to do something?"
                        value={newTaskElt}
                        onChange={handelChange}
                        required
                    />
                </form>

                <div>
                    <label style={{ marginLeft: "20px" }} title="Add a task">
                        <AiOutlinePlus size={40} color={"#7798ea"} />
                        <input
                            type="checkbox"
                            name="addTask"
                            onClick={handelClick}
                        />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Header;
