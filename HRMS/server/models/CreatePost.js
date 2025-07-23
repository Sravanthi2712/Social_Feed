// models/CreatePost.js
const mongoose = require("mongoose");

const createPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  mediaURL: {
    type: String,
    required: false,
  },
  mediaType: {
    type: String,
    required: false,
  },
  name: String,
  position: String,
  creatorImage: { // <--- ADD THIS FIELD
    type: String,
    default: "https://randomuser.me/api/portraits/men/32.jpg", // A default if not provided
  },
}, {
  timestamps: true,
});

createPostSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

module.exports = mongoose.model("CreatePost", createPostSchema);
