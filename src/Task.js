import React from 'react';

class Task extends React.Component {
  render() {
    const { task, onDelete, onComplete } = this.props;
    const { id, content, completed } = task;

    return (
      <div className="row mb-1">
        <p className="col">{content}</p>
        <button onClick={() => onDelete(id)}>Delete</button>
        <input
          className="d-inline-block mt-2"
          type="checkbox"
          onChange={() => onComplete(id, completed)}
          checked={completed}
        />
      </div>
    );
  }
}

export default Task;
