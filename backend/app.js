var express = require('express')

var newsRouter = require('./routes/news')

var app = express()
//const News = require('./news/news')

const PORT = process.env.PORT || 3001

// view engine setup

app.use(express.static('public'))
app.use(express.static('data/uploads'))

app.use('/', newsRouter)
//const news = new News()

//test function to get all data adnd do api test
/* const test = async () => {
  // const data = await news.getAll()- to get all data
  //const data = await news.getSingle('1611923855757')
  const data = await news.getByCategory('political')
  console.log(data)
}
test() */

app.listen(PORT, () => console.log(`App is running on port ${PORT}.`))

module.exports = app
