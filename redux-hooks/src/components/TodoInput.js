import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../redux';
import uuid from 'uuid/v4';

export default () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const addTodo = todo => dispatch(addTodoAction(todo));

  const onChange = e => {
    setTodo(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (todo.trim() === '') return;

    addTodo({
      id: uuid,
      name: todo,
      complete: false
    });

    setTodo('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='form-wrapper'>
        <input
          type='text'
          name='todo'
          placeholder='Add a Todo'
          value={todo}
          onChange={onChange}
        />
        <button type='submit'>Add Todo</button>
      </div>
    </form>
  );
};
