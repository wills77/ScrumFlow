const express = require('express');
const userController = require('../controllers/userController.js')

const router = express.Router();


router.post(
  '/signup', 
  userController.addNewUser,
  (req, res) => {
    //console.log(res.locals.newUser);
    const newUser = res.locals.newUser;
    //console.log('hello from /signup')
    res.status(200).json(newUser)
  }
)

router.get(
  '/login', 
  userController.login,
  (req, res) => {

    console.log(res.locals.userInDb);
    const userInDb = res.locals.userInDb;

    console.log('welcome from /login')
    res.status(200).json(userInDb)
  }
)

router.put(
  '/task', 
  userController.addTask,
  (req, res) => {
    console.log('hello put from /api/task')
    const newTaskList = res.locals.newTaskList;
    res.status(200).json(newTaskList)

  }
)

router.delete(
  '/task', 
  userController.deleteTask,
  (req, res) => {
    console.log('goodbye from /api/task')
    const newTaskList = res.locals.newTaskList;
    res.status(200).json(newTaskList);
  }
)


router.patch('/task', 
  userController.toggleComplete,
  (req, res) => {
    const newTaskList = res.locals.newTaskList;
    console.log('hello patch from /api/task')
    res.status(200).json(newTaskList);
  }
)


module.exports = router;
