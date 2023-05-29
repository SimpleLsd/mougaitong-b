const router = require('koa-router')()
const mongoose = require('mongoose')

const {
  findAllArticles,
  findArticleById,
  findArticleByNum,
  countAllArticles,
} = require('./articles')

const {
  findAllPictures,
  findPictureById,
  findPictureByNum,
  countAllPictures,
} = require('./pictures')

const { getMetadata } = require('./metadatas')

const dbConfig = require('../database.config.json')

// 链接到数据库
mongoose.connect(dbConfig.dblink, (err) => {
  if (err) {
    console.log('失败了' + err)
  } else {
    console.log('连接了')
  }
})

router.prefix('/api')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a api response!'
})

router.get('/articles', findAllArticles)
router.get('/articles/id/:id', findArticleById)
router.get('/articles/count', countAllArticles)
router.get('/articles/:num', findArticleByNum)

router.get('/pictures', findAllPictures)
router.get('/pictures/id/:id', findPictureById)
router.get('/pictures/count', countAllPictures)
router.get('/pictures/:num', findPictureByNum)

router.get('/metadata', getMetadata)

// console.log(dbConfig.dblink)

module.exports = router
