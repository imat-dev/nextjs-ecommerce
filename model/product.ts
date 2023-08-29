import mongoose from 'mongoose';

export interface IProduct {
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating?: {
		rate: number;
		count: number;
	};
}

export const productSchema = new mongoose.Schema({
	title: String,
	price: Number,
	description: String,
	category: String,
	image: String,
	rating: {
		rate: {
			type: Number,
			default: 0, // You can set a default value if needed
		},
		count: {
			type: Number,
			default: 0,
		},
	},
});

const Product =
	mongoose.models.Product ||
	mongoose.model<IProduct>('Product', productSchema);
export default Product;
