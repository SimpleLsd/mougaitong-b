const mongoose = require("mongoose");

const metadataSchema = mongoose.Schema({
  topArticle: "string",
  totalNum: "number",
  totalArticleNum: "number",
  totalPictureNum: "number",
  totalChatNum: "number",
  articleTags: "array",
});
const Metadatas = mongoose.model("metadatas", metadataSchema);

// 元数据相关查询
const getMetadata = async (ctx) => {
  const metadata = await Metadatas.findOne();
  if (!metadata) {
    ctx.throw(404, "查询失败");
  } else {
    ctx.body = metadata;
  }
};
module.exports = { getMetadata };
