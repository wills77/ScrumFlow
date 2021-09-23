/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskCreator from '../components/TaskCreator';
import TaskDisplay from '../components/TaskDisplay';
import * as actions from '../actions/actions';
import '../stylesheets/styles.css';

const mapStateToProps = state => {
  
  console.log(state.tasks.taskList._id);

  return {
    taskList: state.tasks.taskList,
    username: state.tasks.username
  }
};

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  addTask: (username, newTask, completeBy) => {
    // console.log(`props`,this.propzs)
    // console.log(username) 
    // this.onSave(task)
    // return dispatch(actions.addTaskActionCreator(task))
    return dispatch(actions.addTask(username, newTask, completeBy));
  },
  // onSave: () => {console.log('onSave works on button click')}
  deleteTask: (username, taskID) => {
    return dispatch(actions.deleteTask(username, taskID));
  }

});


class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
      
    // };
  }
  
  render() {
    return (
      <div>
        <TaskCreator username={this.props.username} addTask={this.props.addTask}/>
        <TaskDisplay taskList={this.props.taskList} username={this.props.username} deleteTask={this.props.deleteTask} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);
