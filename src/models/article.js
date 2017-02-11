import mongoose from 'mongoose';

const options = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};

const articleSchema = mongoose.Schema({
  id: String,
  title: String,
  author: String,
  userId: String,
  tags: [],
  location: String,
  content: String,
  popularity: Number,
}, options);

export const Article = mongoose.model('Article', articleSchema);
