import { createStore } from 'redux';
import uuid from 'uuid/v4';

const initState = {
  todos: [
    { id: uuid(), name: 'Go to the gym', complete: true },
    { id: uuid(), name: 'Learn Redux', complete: false }
  ]
};

export const store = createStore(
  reducer,
  initState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function reducer(state, { type, payload }) {
  switch (type) {
    case 'ADD_TODO': {
      return {
        ...state,
        todos: [...state.todos, payload]
      };
    }
    case 'TOGGLE_TODO': {
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload ? { ...todo, complete: !todo.complete } : todo
        )
      };
    }
    case 'DELETE_TODO': {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload)
      };
    }

    default: {
      return state;
    }
  }
}

export const addTodoAction = todo => ({
  type: 'ADD_TODO',
  payload: todo
});

export const toggleTodoAction = todoID => ({
  type: 'TOGGLE_TODO',
  payload: todoID
});

export const deleteTodoAction = todoID => ({
  type: 'DELETE_TODO',
  payload: todoID
});
