import React from "react";

const Todo = props => {
  console.log("props", props);
  return (
    <div>
      <p
        onClick={() => props.toggleCompleted(props.item.id)}
        className={`todo${props.item.completed ? "-completed" : ""}`}
      >
        {props.item.task}
      </p>
    </div>
  );
};

export default Todo;
