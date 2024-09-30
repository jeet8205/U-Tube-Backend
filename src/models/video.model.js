import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, // cloudinary url
            requiered: true,
        },
        thumbnail: {
            type: String, // cloudinary url
            requiered: true
        },
        title: {
            type: String, 
            requiered: true
        },
        description: {
            type: String, 
            requiered: true
        },
        duration: {
            type: Number, // cloudinary url
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model('Video', videoSchema);