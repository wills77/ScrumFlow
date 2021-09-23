import React from 'react';
import Tasks from './Tasks'
import '../stylesheets/styles.css';

const TaskDisplay = ({taskList, taskID, deleteTask, username}) => {
  // const tasks = [];
  // // const taskList = props.taskList;
  // // for (let id in taskList) {
  // //   tasks.push(<Tasks key={id} taskName={taskList[id].task} />)
  // // };
  const tasks = taskList.map(task => {
    return (
      <Tasks task={task} taskID={taskID} deleteTask={deleteTask} username={username} />
    )
  })
  return (
    <div>
      {tasks}
      {/* {taskList} */}
    </div>
  )
}

// class TaskDisplay extends Component {
//   render() {

//     console.log(this.props)

//     const tasks = this.props.map(task => {
//       return (
//         <Tasks task={task} />
//       )
//     })

//     return (
//       <div>
//         {tasks}
//       </div>
//     )
//   }
// }

export default TaskDisplay;
