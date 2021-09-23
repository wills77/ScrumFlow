/* eslint-disable */
import * as types from '../constants/actionTypes';
import uniqid from 'uniqid';

const initialState = { 
  username: 'juneandnathan',
  taskList: [{
    _id: uniqid(),
    content: 'Finish homework',
    isComplete: false,
    completeBy: 'Saturday'
  }],
  loggedIn: true,
};

export default function taskReducers(state = initialState, action) {

  let newTaskList = JSON.parse(JSON.stringify(state.taskList));

  switch (action.type) {
    case 'ADD_TASK': 

    let taskList = state.taskList;
      const newTask = action.payload.newTask;
      const newCompleteBy = action.payload.completeBy.substr(5, 10);
      console.log(action.payload.completeBy);
      const newTaskCard = {
        _id: uniqid(),
        content: newTask,
        isComplete: false,
        completeBy: newCompleteBy
      }
      taskList = [...taskList, newTaskCard];
      const completeBys = [];
      taskList.forEach(task => completeBys.push(task.completeBy));
      // console.log(completeBys)
      completeBys.sort((a, b) => a - b )
      // completeBys.replace(/-/g, '');
      return {
        ...state,
        taskList
      };
    
    case 'TOGGLE_COMPLETE': {
      
      const taskList = state.taskList;
      taskList.map(task => {
        if (task._id === action.payload) {
          task.isComplete === false ? task.isComplete = true : task.isComplete = false;
          }
        }
      )
      console.log('checkbox checked');
      return {
        ...state,
        taskList
      }
    }

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
      }
      // console.log(`newkey`,newKey);
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
