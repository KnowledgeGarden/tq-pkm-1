import * as mongoose from 'mongoose';
// Everything below roles is for forgot-email verification
//  cloned from FeatherWeight
export const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  fullname: String,
  handle: String,
  roles: Array,
  isVerified: Boolean,
  verifyToken: String,
  verifyExpires: Date,
  verifyChanges: Object,
  resetToken: String,
  resetExpires: Date

})