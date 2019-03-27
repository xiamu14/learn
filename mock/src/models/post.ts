import { Schema, model } from "mongoose";

export const postSchema: Schema = new Schema({
  uid: String,
  text: String,
  imgs: [
    {
      src: String,
      width: Number,
      height: Number
    }
  ],
  commnets: [String]
});

const PostModel = model("Post", postSchema);

export default PostModel;
