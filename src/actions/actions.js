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

export const addUserActionCreator = () => ({
  type: types.ADD_USER,
});

export const checkUserActionCreator = (validated, response) => ({
  type: types.CHECK_USER,
  payload: {
    validated : validated,
    response: response.task,
    username: response.username,
  },
});

export const addUser = (username, password) => (dispatch, getState) => {

    fetch('/api/signup', {
      method: 'POST',
      headers: {'Content-Type': 'Application/json'},
    })
    .then(res => res.json())
    .then(stuff => console.log(stuff));
};

export const checkUser = (username, password) => (dispatch, getState) => {
  // console.log(username)
  // console.log('this is getstate', getState());
  axios
    .post('/api/login',
      `username=${username}&password=${password}`,
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
      })

    .then((response) => {
      const validated = true;
      if (!response.data.task) return dispatch(checkUserActionCreator(validated));
      else return dispatch(checkUserActionCreator(validated, response.data.task));
    });
};

export const addTask = (username, newTask, completeBy) => (dispatch, getState) => {
  return dispatch(addTaskActionCreator(newTask, completeBy));
};

export const deleteTask = (username, taskID) => (dispatch, getState) => {
  return dispatch(deleteTaskActionCreator(username, taskID));
}

export const toggleComplete = (taskID) => (dispatch, getState) => {
  return dispatch(toggleCompleteActionCreator(taskID));
}
