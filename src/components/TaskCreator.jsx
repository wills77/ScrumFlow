/* eslint-disable */
import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
// import '../stylesheets/styles.scss';
import { saveTasks } from '../reducers/taskReducers.js';
import '../stylesheets/TaskCreator.scss'

class TaskCreator extends Component {
  render() {
    return(
      <div 
      className="task-creator-container">
        <h3>Create New Tasks</h3>

        <div className="task-creator">
          <input id="task" type='text' className='taskInputFields' id='newTask' placeholder='Write Task Here'></input>
          <input id="date" type='date' className='taskInputFields date' id='completeBy' placeholder = 'Complete By Date'></input>
          <input id="time" type='time' className='taskInputFields time' id='completeBy' placeholder = 'Complete By Date'></input>
          <button id = 'addTaskButton' onClick={() => {
          return this.props.addTask(this.props.username, document.getElementById('newTask').value, document.getElementById('completeBy').value )}
        }>＋</button>
        </div>
      </div>
    )
  }
}

export default TaskCreator;
