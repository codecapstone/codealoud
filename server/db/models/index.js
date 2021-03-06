const User = require('./user')
const Challenge = require('./challenge')
const Lesson = require('./lessons')
const Topic = require('./topic')
const UserStats = require('./userstats')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
User.belongsToMany(Challenge, {through: 'UserStats'})
Challenge.belongsToMany(User, {through: 'UserStats'})

// Lesson.hasMany(Challenge)
// Challenge.belongsTo(Lesson)

Challenge.belongsTo(Topic)
Topic.hasMany(Challenge)

Lesson.belongsTo(Topic)
Topic.hasMany(Lesson)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Challenge,
  Lesson,
  Topic,
  UserStats
}
