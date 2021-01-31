var express = require('express')
var router = express.Router()

const uploads = require('../middleware/multer')
const {
  createNews,
  getAllNews,
  getSingleNews,
  getNewsByCategory,
  searchPosts,
} = require('../controllers/newsController')

const { validator, result, validateFile } = require('../middleware/validation')

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index')
})

//handler for post submission
router.post('/create', uploads.single('thumbnail'), validator, result, validateFile, createNews)

router.get('/news', getAllNews)
router.get('/news/single/:id', getSingleNews)
router.get('/news/:category/:qty?', getNewsByCategory)
router.get('/news/:category', getNewsByCategory)
router.post('/news/search/:query', searchPosts)
module.exports = router
