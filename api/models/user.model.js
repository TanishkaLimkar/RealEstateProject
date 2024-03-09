import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar:{
      type: String,
      default:"https://wallpapers.com/images/featured/funny-facebook-profile-pictures-nghrweqjmsbdt69s.jpg",
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
