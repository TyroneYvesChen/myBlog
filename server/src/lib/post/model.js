import { mongoose, Schema } from '../../middleware/db'

const PostSchema = new Schema(
  {
    title: { type: String, default: '' },
    markdown: { type: String, default: '' },        // markdown原文
    html: { type: String, default: '' },            // markdown编译后的HTML
    images: { type: Array, default: null },
    tag: { type: Array, default: null },
    category: { type: String, default: null },      //所属分类
    // status: { type: String, default: 'published' }, // privated published
    allowComment: { type: Boolean, default: true }, // 是否允许评论
    hits: { type: Number, default: 0 },             //文章被点击的次数
    isTop: { type: Number, default: 0 },
    isAvailable: { type: Boolean, default: true },     //是否可用
    createdByID: { type: Schema.Types.ObjectId, required: true }    //被哪个账号创建的
  },
  {
    collection: 'post',
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
  }
)

export default mongoose.model('post', PostSchema)