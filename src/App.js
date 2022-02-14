import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import InputTodo from './components/InputTodo';
import TodosList from './components/TodosList';

const App = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const existData = JSON.parse(localStorage.getItem('todos'));
    if (existData) setTodos(existData);
  }, []);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  });

  const addTask = (value) => {
    const newId = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;
    setTodos([...todos, { id: newId, task: value, done: false }]);
  };

  const handleChange = (idItem) => {
    setTodos(todos.map((item) => {
      const ele = item;
      if (ele.id === idItem) {
        ele.done = !ele.done;
      }
      return ele;
    }));
  };

  const deleteTask = (idItem) => {
    setTodos(todos.filter((item) => item.id !== idItem));
  };

  const updateTask = (idItem, newTask) => {
    setTodos(todos.map((item) => {
      const ele = item;
      if (ele.id === idItem) {
        ele.task = newTask;
      }
      return ele;
    }));
  };

  return (
    <div className="todo__container">
      <Header />
      <InputTodo addTask={addTask} />
      <TodosList
        todos={todos}
        handleChange={handleChange}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </div>
  );
};

export default App;
