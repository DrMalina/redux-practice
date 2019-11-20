import React from 'react';

import { Provider } from 'react-redux';
import { store } from '../redux';

import TodoInput from './TodoInput.js';
import ToDoList from './TodoList.js';

const App = () => {
  return (
    <Provider store={store}>
      <div className='main'>
        <TodoInput />
        <ToDoList />
      </div>
    </Provider>
  );
};

export default App;
