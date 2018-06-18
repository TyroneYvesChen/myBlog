import { mongoose, Schema } from '../../middleware/db'

const UserSchema = new Schema(
    {
        account: { type: String, required: true },
        username: { type: String, default: '' }, // 用户名
        password: { type: String, default: '' }, // 密码
        sex: { type: Number, default: 0 },
        status: { type: Number, default: 1 },                  //账号状态：启用 1 禁用 0 等
        type: { type: Number, default: 2 },                   //用户类型：root 1 普通 2
        mobile: { type: Number, default: null },
        identityCard: { type: Number, default: null },          //身份证
        avatar: { type: String, default: '' },
        remark: { type: String, default: '' }                   //备注
    },
    {
        collection: 'user',    //集合名
        timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
    }
)

export default mongoose.model('user', UserSchema)