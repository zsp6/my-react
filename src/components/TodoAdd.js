import React from 'react';
import store from '../store/index';
class TodoAdd extends React.Component {
  addTodo () {
    // 获取 input 的 value 值
    let value = this.myInput.value;
    // 写入到仓库中.在redux 要操作仓库 state 的改变，必须是派发一个动作。
    let action = {
      type: 'ADD_TODO',
      text: value
    }
    store.dispatch(action);
  }
  render () {
    return (
      <div>
        <input type="text" ref={(el) => this.myInput = el} />
        <button onClick={this.addTodo.bind(this)}>ADD</button>
      </div>
    )
  }
}
export default TodoAdd;
