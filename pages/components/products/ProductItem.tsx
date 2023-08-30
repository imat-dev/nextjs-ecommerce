import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '@/store/cartSlice';
import ProductRating from './ProductRating';

const ProductItem: React.FC<{
	_id?: string;
	title: string;
	price: number;
	image: string;
	rating?: { rate: number; count: number };
	category: string;
}> = (props) => {
	const dispatch = useDispatch();

	const addToCartHandler = () => {
		dispatch(cartActions.showCartDrawer());

		const product = {
			_id: props._id,
			title: props.title,
			price: props.price,
			quantity: 1,
			image: props.image,
		};

		dispatch(cartActions.addToCart(product));
	};

	return (
		<div className="w-full bg-white border border-gray-200 rounded-lg shadow">
			<a href="#">
				<img
					className="p-8 rounded-t-lg w-full h-80 object-contain"
					src={props.image}
					alt="product image"
				/>
			</a>
			<div className="px-5 pb-5">
				<a href="#">
					<h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
						{props.title}
					</h5>
				</a>
				<div className="flex items-center mt-2.5 mb-5">
					<ProductRating  rating={props.rating!.rate} count={props.rating!.count} />
				</div>

				<div className="flex items-center justify-between">
					<span className="text-3xl font-bold text-gray-900 ">
						${props.price}
					</span>
					<button
						onClick={addToCartHandler}
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
