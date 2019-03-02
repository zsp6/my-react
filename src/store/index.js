// 生成仓库的主文件
import { createStore } from 'redux';

/**
 * createStore
 * 创建仓库的函数
 *  @param {Function} renducer
 */
// 初始化的状态
let defaultState = {
  inputVal: '', // TodoAdd input 需要绑定的内容
  todos: [{
    text: '吃饭',
    isOk: false
  },
  {
    text: '睡觉',
    isOk: true
  }] // TodoList 需要去遍历出来的内容
}
/**
 * 纯函数 reducer
 * @param {Any} prevState 上一次的状态
 * @param {Object} action 动作
 * @return {Any} newState 返回一个新的仓库状态
 */
let store = createStore((prevState = defaultState, action) => {
  console.log('之前的状态',prevState);
  console.log('执行的动作',action);
  // 深拷贝
  let state = JSON.parse(JSON.stringify(prevState));
  switch (action.type) {
    case 'ADD_TODO':
      // 下面这样，违背了纯函数的概念
      // state.todos.push({
      //   text: action.text
      // })
      state.todos.push({
        text: action.text,
        isOk: false
      })
      break;
    case 'OK_TODO':
      state.todos[action.index].isOK = !state.todos[action.index].isOK;
      break;
    default:
      state = prevState;
      break;
  }
  // 必须要 return
  console.log('操作完成之后',state);
  return prevState;
})

export default store;
