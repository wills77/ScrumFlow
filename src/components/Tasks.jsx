import React from 'react';
import { toggleComplete } from '../actions/actions';
import '../stylesheets/styles.scss';
import '../stylesheets/Tasks.scss';

  const Tasks = ({ task, deleteTask, username, toggleComplete }) => {
    function getTaskID({_id}) {
      return _id;
    }
    const taskID = getTaskID(task);
    // console.log('ID: ' + taskID);

  return (
    <div> 
      <div id='taskCard'>
        <div id='completeBy'>
          <h1>{task.completeBy}</h1>
        </div>
        <div id='taskContent'>
          <h1>{task.content}</h1>
        </div>
        {/* <label class="checkboxContainer"> */}
          <input type="checkbox" id="complete" checkmark="checkmark" onClick={() => toggleComplete(taskID)}></input>
        {/* <span class="checkmark"></span> */}
        {/* </label> */}
        <button className="delete" onClick={() => deleteTask(username, taskID)}>✕</button>
      </div>
    </div>
  )
}

// if taskid matches id passedin , update its isComplete state (use map & if)
export default Tasks;
