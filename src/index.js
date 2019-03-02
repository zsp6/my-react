import React from 'react';
import ReactDOM from 'react-dom';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
// 引入仓库的实例
// import store from './store/index';

ReactDOM.render(
  <div>
    <TodoAdd></TodoAdd>
    <TodoList></TodoList>
  </div>
  ,document.getElementById('root')
);
