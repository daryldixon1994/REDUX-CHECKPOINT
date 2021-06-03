import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeAll } from "../../../Redux/actions";
import "./TodoList.css";

const TodoList = () => {
    const todoList = useSelector((state) => state.ToDoElement);
    const doneTasks = useSelector((state) => state.taskIsDone.done);
    const notDoneTasks = useSelector((state) => state.taskNotDone.notDone);

    console.log("doneTasks", doneTasks);
    console.log("notDoneTasks", notDoneTasks);

    const dispatch = useDispatch();
    const handelClick = () => {
        dispatch(removeAll());
    };
    return (
        <div className="td-list-container">
            <div>
                {doneTasks
                    ? todoList
                          .filter((elt) => elt.isDone === true)
                          .map((elt, index) => (
                              <div key={index}>
                                  <TodoItem
                                      elt={elt}
                                      index={index}
                                      todoList={todoList}
                                  />
                              </div>
                          ))
                    : notDoneTasks
                    ? todoList
                          .filter((elt) => elt.isDone === false)
                          .map((elt, index) => (
                              <div key={index}>
                                  <TodoItem
                                      elt={elt}
                                      index={index}
                                      todoList={todoList}
                                  />
                              </div>
                          ))
                    : todoList.map((elt, index) => (
                          <div key={index}>
                              <TodoItem
                                  elt={elt}
                                  index={index}
                                  todoList={todoList}
                              />
                          </div>
                      ))}
            </div>
            <div>
                <button
                    type="button"
                    className="btn-grad"
                    onClick={handelClick}
                >
                    <AiFillDelete size={40} />
                </button>
            </div>
        </div>
    );
};

export default TodoList;
