const Todo = ({ todo, toggleTodo }) => {
  const handleToggleTodo = () => {
    toggleTodo(todo.id);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleTodo}
        />
      </label>
      {todo.name}
    </div>
  );
};

export default Todo;
