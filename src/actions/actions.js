import axios from 'axios';
import * as types from '../constants/actionTypes';

export const addTaskActionCreator = (newTask, completeBy) => ({
  type: types.ADD_TASK,
  payload: {
    newTask,
    completeBy
  }
});

export const toggleCompleteActionCreator = (taskID) => ({
  type: types.TOGGLE_COMPLETE,
  payload: taskID
})


export const deleteTaskActionCreator = (username, taskID) => ({
  type: types.DELETE_TASK,
  payload: {
    username: username,
    taskID: taskID
  }
})

export const addUserActionCreator = (username) => ({
  type: types.ADD_USER,
  payload: username
});

export const loginActionCreator = (username, taskList) => ({
  type: types.LOGIN,
  payload: {
    username: username,
    taskList: taskList
  },
});

export const updateTaskListActionCreator = (taskList) => ({
  type: types.UPDATE_TASKLIST,
  payload: taskList
})

export const addUser = (username, password) => (dispatch, getState) => {

    fetch('/api/signup', {
      method: 'POST',
      headers: {'Content-Type': 'Application/json'},
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(res => res.json())
    .then(({ username }) => {
      console.log(username)
      dispatch(addUserActionCreator(username))


    })
    .catch(() => {
      alert('oopsy, please try again')
    })
};

export const login = (username, password) => (dispatch, getState) => {
  console.log('hello from login', username, password);
  fetch('/api/login', {
    method: 'POST',
    headers: {'Content-Type': 'Application/json'},
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  .then(res => res.json())
  .then(({ username, taskList }) => {

    if (!username) {
      alert('Sorry, no user with that username or password');
      return;
    }
    dispatch(loginActionCreator(username, taskList))
  })
  .catch(() => alert("uh oh, please try loggin in again"))

};

export const addTask = (username, newTask, completeBy) => (dispatch, getState) => {
  fetch('api/task', {
    method: 'PUT',
    headers: {'Content-Type': 'Application/json'},
    body: JSON.stringify({
      username: username,
      newTask: {
        isComplete: false,
        content: newTask,
        completeBy: completeBy
      }
    })
  })
  .then(res => res.json())
  .then((taskList) => {
    dispatch(updateTaskListActionCreator(taskList))
  })
};

export const deleteTask = (username, taskID) => (dispatch, getState) => {
  fetch('api/task', {
    method: 'DELETE',
    headers: {'Content-Type': 'Application/json'},
    body: JSON.stringify({
      username: username,
      id: taskID
    })
  })
  .then(res => res.json())
  .then((taskList) => {
    console.log(taskList)
    dispatch(updateTaskListActionCreator(taskList))
  })
}

export const toggleComplete = (username, taskID) => (dispatch, getState) => {
  console.log('taskId:', taskID)
  console.log('username', username)
  fetch('api/task', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'Application/json'
    },
    body: JSON.stringify({
      username: username,
      id: taskID,
    })
  })
  .then(res => res.json())
  .then((taskList) => {
    dispatch(updateTaskListActionCreator(taskList))
  })

}
