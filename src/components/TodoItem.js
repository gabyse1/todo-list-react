import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const TodoItem = ({
  todo, handleChange, deleteTask, updateTask,
}) => {
  const [editing, setEditing] = useState({ editing: false });

  const viewMode = {};
  const editMode = {};

  if (editing.editing) viewMode.display = 'none';
  else editMode.display = 'none';

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setEditing({ editing: true });
  };

  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') setEditing({ editing: false });
  };

  return (
    <li className="todo__list-item">
      <div onDoubleClick={handleEditing} style={viewMode} className="list-item-view">
        <input type="checkbox" className="btn__task-checklist" onChange={() => handleChange(todo.id)} checked={todo.done} />
        <span style={todo.done ? completedStyle : null}>{todo.task}</span>
        <button type="button" aria-label="Delete-task" className="btn__task-remove" onClick={() => deleteTask(todo.id)}><FaTrashAlt /></button>
      </div>
      <input
        type="text"
        style={editMode}
        onChange={(e) => updateTask(todo.id, e.target.value)}
        onKeyDown={handleUpdatedDone}
        value={todo.task}
      />
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default TodoItem;
