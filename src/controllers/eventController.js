// Dependancies
const boom = require('boom')

// Get Models
const Event = require('../models/Event')

// Only Get
exports.getEvents = async (req, reply) => {
  try {
    const events = await Event.find()
    return events
  } catch (err) {
    throw boom.boomify(err)
  }
}
