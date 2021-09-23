/* eslint-disable */
import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
// import '../stylesheets/styles.scss';
import { saveTasks } from '../reducers/taskReducers.js';
import '../stylesheets/TaskCreator.scss';

class TaskCreator extends Component {
	render() {
		return (
			<div className='task-creator-container'>
				<h1>ScrumFlow</h1>
				<div id='name'>{`Hello ${this.props.username}`}</div>
				<div className='task-creator'>
					<input
						id='task'
						type='text'
						className='taskInputFields'
						id='newTask'
						placeholder='Create New Task'
					></input>
					<input
						id='date'
						type='date'
						className='taskInputFields date'
						id='completeBy'
						placeholder='Complete By Date'
					></input>
					<input
						id='time'
						type='time'
						className='taskInputFields time'
						id='completeBy'
						placeholder='Complete By Date'
					></input>
					<button
						id='addTaskButton'
						onClick={() => {
							return this.props.addTask(
								this.props.username,
								document.getElementById('newTask').value,
								document.getElementById('completeBy').value.substr(6, 10)
							);
						}}
					>
						＋
					</button>
				</div>
			</div>
		);
	}
}

export default TaskCreator;
