const { log } = require('debug/src/browser')
const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
  articleId: 'string',
  articleNum: 'number',
  totalNum: 'number',
  dateStr: 'string',
  articleTags: 'array',
  title: 'string',
  subTitle: 'string',
  cover: 'string',
  sections: 'array',
})
const Articles = mongoose.model('Article', articleSchema)

// 文章相关查询
const findAllArticles = async (ctx) => {
  const allArticles = await Articles.find()
  if (!allArticles) {
    ctx.throw(404, '查询失败')
  } else {
    ctx.body = allArticles
  }
}

const findAllArticlesByNum = async (ctx) => {
  const allArticles = await Articles.find().sort({ articleNum: -1 })
  if (!allArticles) {
    ctx.throw(404, '查询失败')
  } else {
    ctx.body = allArticles
  }
}

const findArticleById = async (ctx) => {
  // articleId: ctx.params.id
  // console.log(ctx.params.id)
  const article = await Articles.find({ articleId: ctx.params.id })
  if (!article) {
    ctx.throw(404, '查询失败')
  } else {
    ctx.body = article
  }
}

const findArticleByNum = async (ctx) => {
  const article = await Articles.findOne({ articleNum: parseInt(ctx.params.num) })
  if (!article) {
    ctx.throw(404, '查询失败')
  } else {
    ctx.body = article
  }
}
// 查询 Articles 集合内文档总数
const countAllArticles = async (ctx) => {
  const count = await Articles.countDocuments({})
  if (!count) {
    ctx.throw(404, '查询失败')
  } else {
    ctx.body = count
  }
}
module.exports = {
  findAllArticles,
  findArticleById,
  findArticleByNum,
  countAllArticles,
  findAllArticlesByNum,
}
