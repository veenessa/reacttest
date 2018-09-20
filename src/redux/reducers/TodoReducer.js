import { SET_NEW_TEXT_FIELD_VALUE, SUBMIT_TODO } from '../actions/TodoActions'


const DEFAULT_STATE = {
  todos: [],
  value: '',
}

const TodoReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_NEW_TEXT_FIELD_VALUE:
      return {
        ...state,
        value: action.value
      }
    case SUBMIT_TODO:
      return {
        ...state,
        todos: state.todos.concat([action.todo])
      }
    default: return state
  }
}

export default TodoReducer