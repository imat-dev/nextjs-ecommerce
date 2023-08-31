import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '@/store/cartSlice';

const ProductAddToCartBtn: React.FC<{
	_id: string;
	title: string;
	price: number;
	quantity: number;
	image: string;
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
		<button
			onClick={addToCartHandler}
			className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		>
			Add to cart
		</button>
	);
};

export default ProductAddToCartBtn;
