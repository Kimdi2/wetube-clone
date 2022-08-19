import mongoose from "mongoose";

// Schemas
// 몽구스의 모든 것은 스키마로 시작합니다.
// 각 스키마는 MongoDB 컬렉션에 매핑되고 해당 컬렉션 내 문서의 모양을 정의합니다.
// https://mongoosejs.com/docs/guide.html#schemas

// Models
// mongoose.model(modelName, schema):
// 모델은 스키마 정의에서 컴파일된 멋진 생성자입니다. 모델의 인스턴스를 document라고 합니다. 모델은 기본 MongoDB 데이터베이스에서 문서를 만들고 읽습니다.
// https://mongoosejs.com/docs/guide.html#models
// https://mongoosejs.com/docs/models.html

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 80 },
  description: { type: String, required: true, trim: true, minLength: 20 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});

const Video = mongoose.model("Video", videoSchema);
// mongoose.model("mongoose에게 DB의 모델 이름을 알려주는 것", 모델의 schema)
export default Video;
