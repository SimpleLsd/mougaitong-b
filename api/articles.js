const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
  articleId: 'string',
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
  // articleId: ctx.params.id
  // console.log(ctx.params.id)
  const article = await Articles.find({ articleNum: ctx.params.num })
  if (!article) {
    ctx.throw(404, '查询失败')
  } else {
    ctx.body = article
  }
}
module.exports = { findAllArticles, findArticleById, findArticleByNum }
