import React from "react";

const TodoForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="todo"
        placeholder="Add Todo"
        value={props.todoText}
        onChange={props.handleChanges}
      />
      <button>Add Todo</button>
      <button onClick={props.saveList}>Save List</button>
    </form>
  );
};

export default TodoForm;
