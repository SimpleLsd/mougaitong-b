const mongoose = require('mongoose')

const pictureSchema = mongoose.Schema({
  // 这部分一定要正确，不然在查询时会出错误
  pictureId: 'string',
  pictureNum: 'number',
  totalNum: 'number',
  totalPictureNum: 'number',
  dateStr: 'string',
  pictureTags: 'array',
  title: 'string',
  subTitle: 'string',
  link: 'string',
  descriptions: 'array',
})
const Pictures = mongoose.model('Picture', pictureSchema)

// 文章相关查询
const findAllPictures = async (ctx) => {
  const allPictures = await Pictures.find()
  if (!allPictures) {
    ctx.throw(404, '查询失败')
  } else {
    ctx.body = allPictures
  }
}

const findPictureById = async (ctx) => {
  const picture = await Pictures.find({ pictureId: ctx.params.id })
  if (!picture) {
    ctx.throw(404, '查询失败')
  } else {
    ctx.body = picture
  }
}

const findPictureByNum = async (ctx) => {
  console.log(ctx.params.num)
  const picture = await Pictures.find({ pictureNum: parseInt(ctx.params.num) })
  if (!picture) {
    ctx.throw(404, '查询失败')
  } else {
    ctx.body = picture
  }
}
module.exports = { findAllPictures, findPictureById, findPictureByNum }
