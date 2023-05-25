import { Schema, model } from 'mongoose';
import { IUser } from '../../../../entities/User';

const userSchema = new Schema<IUser>(
  {
    /* id: { type: Number, required: true }, */
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
  },
  { versionKey: false },
);

const User = model<IUser>('User', userSchema);

export { User };
