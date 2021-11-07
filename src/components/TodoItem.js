import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    /* Pulling out the props from todo,
    so we can use just id or title insted of this.props.todo.id etc.*/
    const { id, title} = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox"
          onChange={this.props.toggleComplete.bind(this, id)} />
          {' '}
          { title }
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
        </p>
      </div>
    );
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

const btnStyle = {
    background: '#f00',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
