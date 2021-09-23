/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskCreator from '../components/TaskCreator';
import TaskDisplay from '../components/TaskDisplay';
import * as actions from '../actions/actions';
import '../stylesheets/styles.scss';

const mapStateToProps = state => {
  
  // console.log(state.tasks.taskList._id);

  return {
    taskList: state.tasks.taskList,
    username: state.tasks.username
  }
};

const mapDispatchToProps = dispatch => ({
  addTask: (username, newTask, completeBy) => {
    return dispatch(actions.addTask(username, newTask, completeBy));
  },
  toggleComplete: (taskID) => {
    return dispatch(actions.toggleComplete(taskID));
  },
  deleteTask: (username, taskID) => {
    return dispatch(actions.deleteTask(username, taskID));
  }
});

class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <TaskCreator username={this.props.username} addTask={this.props.addTask}/>
        <TaskDisplay taskList={this.props.taskList} username={this.props.username} deleteTask={this.props.deleteTask} toggleComplete = {this.props.toggleComplete}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);
