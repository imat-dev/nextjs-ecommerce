import mongoose from 'mongoose';

export interface IUser {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
}

const userSchema = new mongoose.Schema({
	email: { type: String, unique: true },
	password: String,
	firstName: String,
	lastName: String,
});

const User =
	mongoose.models.User || mongoose.model<IUser>('Product', userSchema);
export default User;
