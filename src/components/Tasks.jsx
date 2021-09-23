import React from 'react';
import '../stylesheets/styles.css';

// const Tasks = ({ task, dispatch }) => {
  const Tasks = ({ task, deleteTask, username }) => {
  // console.log(`task props ${props.taskList}`)
// console.log(task.isComplete);
    function getTaskID({_id}) {
      return _id;
    }
    const taskID = getTaskID(task);
    console.log(taskID);

  return (
    <div> 
      {/* // checkbox here // delete button */}
      {/* <h1>{task.isComplete ? 'COMPLETED' : 'NOT COMPLETE'}</h1> */}
      <button onClick={() => deleteTask(username, taskID)}>Delete Task</button>
      <h1>{task.completeBy}</h1>
      <h1>{task.content}</h1>
      <input type="checkbox" id="completed" onClick={() => console.log('checkbox checked')}></input>
    </div>
  )
}

// if taskid matches id passedin , update its isComplete state (use map & if)

// class Tasks extends Component {

//   render() {
//     return (
//       <div> 
//         <button onClick={() => {
//           console.log()
//         }}>Delete Task</button>
//         <h1>{this.props.completeBy}</h1>
//         <h1>{this.props.content}</h1>
//         <input type="checkbox" id="completed" onClick={() => console.log('checkbox checked')}></input>
//       </div>
//     ) 
//   }
// }

export default Tasks;
