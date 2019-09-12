// Import Controller
const eventController = require('../controllers/eventController')

// Create Route
const routes = [
  {
    method: 'GET',
    url: '/api/events',
    handler: eventController.getEvents
  }
]

module.exports = routes
