const { default: mongoose } = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
  id: Number,
})

const User = mongoose.model('user', UserSchema)
module.exports = User
