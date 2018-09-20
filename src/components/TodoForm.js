import React, { Component } from 'react'
import Todo from '../models/Todo'
import { connect } from 'react-redux'
import { setNewTextFieldValue, submitTodo } from '../redux/actions/TodoActions'

class TodoForm extends Component {
  render() {
    return (
      <div>
        <p> insert note: <input type="text" value={this.props.value} onChange={(event) => this.props.setNewTextFieldValue(event.target.value)} /> </p>
        <button onClick={() => {
          const value = this.props.value.trim()
          if (value === "") {
            return;
          }
          const newTodo = new Todo(value)
          this.props.submitTodo(newTodo)
        }
        }>submit</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    value: state.TodoReducer.value
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setNewTextFieldValue: (value) => {
      dispatch(setNewTextFieldValue(value))
    },
    submitTodo: (newTodo)=> {
      dispatch(submitTodo(newTodo))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)