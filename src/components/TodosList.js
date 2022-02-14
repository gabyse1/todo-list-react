import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({
  todos, handleChange, deleteTask, updateTask,
}) => (
  <ul className="todo__list">
    {todos.map((item) => (
      <TodoItem
        key={item.id}
        todo={item}
        handleChange={handleChange}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    ))}
  </ul>
);

TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      task: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default TodosList;
