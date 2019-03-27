import { Schema, model } from "mongoose";

export const userSchema: Schema = new Schema({
  nickname: String,
  avatar: String,
  sex: Number,
});
export const UserModel = model("User", userSchema);
