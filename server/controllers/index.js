module.exports = async ( ctx ) => {
 const title = 'home'
 const Arr = [{name: 1}, {name: 2}]
  await ctx.render('index', {
    title,
    Arr
  })
}