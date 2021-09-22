const express = require('express');

const router = express.Router();


router.post('/signup', (req, res) => {
  console.log('hello from /signup')
  res.status(200).json('/api/signup')
})

router.get('/login', (req, res) => {
  console.log('welcome from /login')
  res.status(200).json('/api/login')

})

router.put('/task', (req, res) => {
  console.log('hello put from /api/task')
  res.status(200).json('/api/task')

})

router.delete('/task', (req, res) => {
  console.log('goodbye from /api/task')
  res.status(200).json('/api/task')

})


router.patch('/task', (req, res) => {
  console.log('hello patch from /api/task')
  res.status(200).json('/api/task')

})


module.exports = router;
