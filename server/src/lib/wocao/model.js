import { mongoose, Schema } from '../../middleware/db'

const WoCao = new Schema({
    papapa: {
        type: String,
        required: true
    },
    msg: {
        type: String
    }
},
{
    collection: 'wocao',
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
})

export default mongoose.model('wocao', WoCao)