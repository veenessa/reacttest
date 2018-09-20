export const SET_NEW_TEXT_FIELD_VALUE = 'SET_NEW_TEXT_FIELD_VALUE'
export const SUBMIT_TODO = 'SUBMIT_TODO'

export const setNewTextFieldValue = value => {
  return { 
    type: SET_NEW_TEXT_FIELD_VALUE, 
    value: value 
  }
}

export const submitTodo = todo => {
  return {
    type: SUBMIT_TODO,
    todo
  }
}
