var express = require('express')
const User = require('../models/User')
var router = express.Router()

/* GET users listing. */
router.post('/', async (req, res, next) => {
  var u = new User({ id: Math.random() })
  const saved = await u.save()
  res.send(u)
})

router.get('/', async (req, res, next) => {
  var users = await User.find()
  res.send(users)
})

module.exports = router
