import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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

    cartData: {
      type: Object,
      default: {},
    },
  },
  {
    minimize: false,
  }
);

const UserModel = mongoose.model.user || mongoose.model('User', userSchema);

export default UserModel;
