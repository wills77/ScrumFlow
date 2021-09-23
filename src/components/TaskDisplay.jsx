import React from 'react';
import Tasks from './Tasks'
// import '../stylesheets/styles.scss';
import '../stylesheets/TaskDisplay.scss'

const TaskDisplay = ({taskList, taskID, deleteTask, username, toggleComplete}) => {
  const tasks = taskList.map(task => {
    return (
      <Tasks task={task} taskID={taskID} deleteTask={deleteTask} username={username} toggleComplete = {toggleComplete}/>
    )
  })
  return (
    <div id="taskContainer">
      {tasks}
    </div>
  )
}

export default TaskDisplay;
