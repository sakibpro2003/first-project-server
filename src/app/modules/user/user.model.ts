import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';
// import { boolean } from 'joi';

const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    needPasswordChange: {
      type: Boolean,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'student', 'faculty'],
    },
    status: {
      type: String,
      enum: ['inProgress', 'blocked'],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

//pre save middleware mongoose/hook
userSchema.pre('save', async function (next) {
  // console.log(this, 'we will save the data :pre hook');
  //hashing password and saving in DB
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round),
  );
  next();
});

//post save middleware mongoose / hook
userSchema.post('save', function (doc, next) {
  // console.log(this, 'we have saved data : post hook');
  doc.password = '';
  console.log('password hashed and hide as an empty string');
  next();
});

// studentSchema.pre('find',function(next){
//   this.find({isDeleted: {$ne: true}})
// next();
// })

// //createing a custom static method
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const User = model<IUser>('User', userSchema);
