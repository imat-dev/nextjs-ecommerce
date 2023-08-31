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
	find: async (id: string) => {
		await dbConnect();
		const product = await Product.findById(id);
		return JSON.parse(JSON.stringify(product));
	},
};

export default productService;
