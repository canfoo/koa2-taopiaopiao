const creator = require('../service/creator')

module.exports = async ( ctx ) => {
 const title = 'home'
 const Arr = [{name: 1}, {name: 2}]
 const cssList = creator.styleCreator()
 const scriptList = creator.scriptCreator()

  await ctx.render('index', {
    title,
    cssList,
    scriptList
  })
}