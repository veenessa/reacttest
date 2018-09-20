import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from '../models/Todo'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.instanceOf(Todo).isRequired
  }

  render() {
    return (
      <li>{this.props.todo.text}</li>
    )
  }
}

const styles = {
  
}

