import User from '@/model/user';
import { IUser } from '@/model/user';
import { connectToDatabase } from '@/util/mongo';
import dbConnect from '@/util/mongoose-util';

const userService = {
	createUser: async (newUser: IUser) => {
		await dbConnect();
		const user = await User.create(newUser);
		return user;

		// const client = await connectToDatabase();
		// const result = await client
		// 	.db(process.env.mongodb_db)
		// 	.collection('users')
		// 	.insertOne(newUser);

		// client.close();
		// return result;
	},

	findUserByEmail: async (email: string) => {
		await dbConnect();
		const user = await User.findOne({ email: email });
		console.log(user);
		return user;

		// const client = await connectToDatabase();
		// const result = await client
		// 	.db('ecommerce')
		// 	.collection('users')
		// 	.findOne({ email: email });
		// client.close();
		// return result;
	},
};

export default userService;
