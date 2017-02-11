import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  id: String,
  name: String,
  account: String,
  password: String,
  facebookid: String,
});

export const User = mongoose.model('User', userSchema);
