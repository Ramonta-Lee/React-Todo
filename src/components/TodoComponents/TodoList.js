// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  console.log("this props", props);
  return (
    <div className="todo-list">
      {props.todos.map(item => (
        <Todo
          key={item.id}
          item={item}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
      <button className="delete-todo" onClick={props.deleteTodo}>
        Delete Completed Todos
      </button>
    </div>
  );
};

export default TodoList;
