/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import LogIn from '../components/LogIn';
import TaskContainer from './TaskContainer';
import '../stylesheets/styles.scss';
import * as actions from '../actions/actions';

const mapStateToProps = state => (
  {
    username: state.tasks.username,
    loggedIn: state.tasks.loggedIn,
  }
);

const mapDispatchToProps = dispatch => (
  {
    addUser: (username, password) => {
      return dispatch(actions.addUser(username, password));
    },
    login: (username, password) => {
      return dispatch(actions.login(username,password));
    }
  }
)

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
   
  }
  render(){
    console.log(`username in main container`,this.props.username)
    if (this.props.loggedIn === false) 
      return(
        <div>
          <LogIn addUser={this.props.addUser} login={this.props.login} />
        </div>
      );
    else 
      return (
        <div>
          <TaskContainer checkUser={this.props.login} username={this.props.username} />
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (MainContainer);
