import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodoAction, deleteTodoAction } from '../redux';

export default () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const toggleTodo = todoID => dispatch(toggleTodoAction(todoID));
  const deleteTodo = todoID => dispatch(deleteTodoAction(todoID));

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input
            type='checkbox'
            checked={todo.complete}
            onChange={() => toggleTodo(todo.id)}
          />
          <span>{todo.name}</span>
          <span onClick={() => deleteTodo(todo.id)}> X</span>
        </li>
      ))}
    </ul>
  );
};
