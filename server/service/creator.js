
const config = require('../../config')
const assets = require('../../dist/assets.json')

const isOnline = process.env.ONLINE
const filterStatic = reg => assets.filter(item => reg.test(item.name)).map(item => item.name).reverse()

module.exports = {
  styleCreator() {
    if (isOnline) {
      return filterStatic(/\.css$/)
    } else {
      return []
    }
  },
  scriptCreator() {
    if (isOnline) {
      return filterStatic(/\.js$/)
    } else {
      return [`http://localhost:${config.dev.port}/index.js`]
    }
  }
}