/* eslint-disable */
import * as types from '../constants/actionTypes';
import uniqid from 'uniqid';

const initialState = { // manually login as dummy data
  username: 'juneandnathan',
  taskList: [{
    _id: uniqid(),
    content: 'Finish homework',
    isComplete: false,
    completeBy: 'Saturday'
  }], // array of objects
  loggedIn: true,
};

export default function taskReducers(state = initialState, action) {
  // let { taskList } = state; // are we mutating state here?
  let newTaskList = JSON.parse(JSON.stringify(state.taskList));


  // taskList = JSON.parse(JSON.stringify(state.taskList));

  switch (action.type) {
    case 'ADD_TASK': 
    // let { taskList } = state;
    let taskList = state.taskList;
    // let newUserName = state.username;
      const newTask = action.payload.newTask;
      const newCompleteBy = action.payload.completeBy;
      // console.log(action.payload);
      // console.log(action.payload);
      // newTaskList.push(newTask);
      // newUserName = 'nathanandjune';
      const newTaskCard = {
        _id: uniqid(),
        content: newTask,
        isComplete: false,
        completeBy: newCompleteBy
      }
      taskList = [...taskList, newTaskCard];
      // console.log(taskList);
      console.log(taskList);
      // console.log(state.taskList);
      // console.log(taskList.length);
      // console.log(state);
      return {
        ...state,
        taskList
      };
    
      // delete task
    case 'DELETE_TASK': {
      return {
        taskList: [...state.taskList.filter(task => task._id !== action.payload.taskID)]
      }
    }

    case 'ADD_USER': {
      alert('You\'ve signed up please log in');
      return {
        ...state,
      };
    }
    case 'CHECK_USER': {
      // console.log(`action payload`,action.payload.username);
      const tasks = action.payload.response;
      taskList = {};
      let newKey;
      for (const [key, value] of Object.entries(tasks)) {
        taskList[key] = {
          task: value.taskName,
          completed: value.isCompleted,
        }
        newKey = key;
        if (value.taskName === 'You currently have no tasks!') newKey = -1;
        // console.log(value.taskName)
        // console.log(key, value);
      }
      // console.log(taskList);
      console.log(`newkey`,newKey);
      return {
        ...state,
        taskId: newKey+1,
        taskList,
        loggedIn: action.payload.validated,
        username: action.payload.username,
      };
    }
    default: {
      return state;
    }
  }
}
/*  Redux-Thunks  (is a middleware, allows you to make action-creations return a function)

Thunks are just like action-creators, but of creating an object used to modify state,
they create a function that gives you access to your state, and dispatch new  actions

  export const saveTasks = () => async (dispatch,getState) => {
    const tasks = getState().taskList?
    await fetch('localhost:3000/testing??',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(tasks)
    })
  }
  - The second function is postponed until a certain condition is met.

*/
