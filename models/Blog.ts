import mongoose, { Schema } from "mongoose";

const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true, index: true },
    excerpt: String,
    content: String,

    coverImage: String,

    metaTitle: String,
    metaDescription: String,
    keywords: [String],

    category: String,
    author: { type: String, default: "SCAL UP Team" },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },

    publishedAt: Date,
  },
  { timestamps: true },
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
