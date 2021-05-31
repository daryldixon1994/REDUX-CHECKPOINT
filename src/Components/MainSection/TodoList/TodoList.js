import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = () => {
    const todoList = useSelector((state) => state.ToDoElement);
    const doneTasks = useSelector((state) => state.taskIsDone.done);
    const notDoneTasks = useSelector((state) => state.taskNotDone.notDone);

    return (
        <div className="td-list-container">
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
    );
};

export default TodoList;
