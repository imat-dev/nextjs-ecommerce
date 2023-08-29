import Product from '@/model/product';
import { connectToDatabase } from '@/util/mongo';
import dbConnect from '@/util/mongoose-util';

const productService = {
	findAll: async () => {
		await dbConnect();
		const products = await Product.find();
		return products;

		// const client = await connectToDatabase();
		// const products = await client
		// 	.db("ecommerce")
		// 	.collection("products")
		// 	.find()
		// 	.toArray();
		// client.close();
	},
};

export default productService;
