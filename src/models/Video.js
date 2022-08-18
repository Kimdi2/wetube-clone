import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  // ===  title: { type: String },
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

const Video = mongoose.model("Video", videoSchema);
// mongoose.model("mongoose에게 DB의 모델 이름을 알려주는 것", 모델의 schema)
export default Video;
