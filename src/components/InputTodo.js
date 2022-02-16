import { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineEnter } from 'react-icons/ai';

const InputTodo = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const changeField = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      addTask(title.trim());
      setTitle('');
    }
  };
  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Add todo..." onChange={changeField} value={title} />
      <button type="submit" aria-label="Add task"><AiOutlineEnter /></button>
    </form>
  );
};

InputTodo.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default InputTodo;
