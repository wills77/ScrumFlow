/* eslint-disable */
import axios from 'axios';
// import thunk from 'redux-thunk';
import * as types from '../constants/actionTypes';

export const addTaskActionCreator = (newTask, completeBy) => ({
  type: types.ADD_TASK,
  payload: {
    newTask,
    completeBy
  }
});

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

// Add a new user
export const addUser = (username, password) => (dispatch, getState) => {
  // axios
  //   .post('localhost:3000/signup',
  //     `username=${username}&password=${password}`,
  //     {
  //       method: 'POST',
  //       headers: {
  //         // Accept: 'application/json',
  //         'Content-type': 'application/x-www-form-urlencoded',
  //       },
  //     })
  //   .then((response) => {
  //     // response received is an empty object
  //     console.log('expecting none for signup', response);
  //     return dispatch(addUserActionCreator());
  //   })
  //   .catch((error) => console.log('Error from /signup page, username exists'));

    fetch('/api/signup', {
      method: 'POST',
      headers: {'Content-Type': 'Application/json'},
    })
    .then(res => res.json())
    .then(stuff => console.log(stuff));
};

export const checkUser = (username, password) => (dispatch, getState) => {
  console.log(username)
  console.log('this is getstate', getState());
  axios
    .post('/api/login',
      `username=${username}&password=${password}`,
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
      })
    // do something here
    .then((response) => {
      // console.log('checkUser: response', response.data.task);
      // console.log('response.data.task', response.data.task.task);
      const validated = true;
      if (!response.data.task) return dispatch(checkUserActionCreator(validated));
      else return dispatch(checkUserActionCreator(validated, response.data.task));
    });
};
// &username=${username}
// Body needs to match content-type
export const addTask = (username, newTask, completeBy) => (dispatch, getState) => {
  // console.log('saveTasks username, ', username);
  // console.log('saveTasks task action, ', task);
  // console.log('saveTasks taskId action, ', taskId);
  // console.log('this is getstate', getState());

  // REWRITE THIS CODE (FETCH)
  // const tasks = `task=${newTask}&taskId=${taskId}&isCompleted=${false}&username=${username}`;
  // axios
  //   .post('api/addtask',
  //     tasks,
  //     {
  //       headers: {
  //         'Content-type': 'application/x-www-form-urlencoded',
  //       },
  //     })
  //   .then((response) => {
  //     console.log('response from the saveTasks: ', response);
  //     return dispatch(addTaskActionCreator(newTask));
  //   });

  return dispatch(addTaskActionCreator(newTask, completeBy));
};

export const deleteTask = (username, taskID) => (dispatch, getState) => {
  return dispatch(deleteTaskActionCreator(username, taskID));
}