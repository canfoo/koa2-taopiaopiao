
const config = require('../../config')

const isOnline = process.env.ONLINE
console.log('isOnline', isOnline)

module.exports = {
  scriptCreator() {
    return [`http://localhost:${config.dev.port}/index.js`]
  }
}