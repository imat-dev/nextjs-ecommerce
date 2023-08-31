import React from 'react';
import ProductRating from './ProductRating';
import Link from 'next/link';
import ProductAddToCartBtn from './ProductAddToCartBtn';

const ProductItem: React.FC<{
	_id: string;
	title: string;
	price: number;
	image: string;
	rating?: { rate: number; count: number };
	category: string;
}> = (props) => {
	return (
		<div className="w-full bg-white border border-gray-200 rounded-lg shadow">
			<Link href={`/product/${props._id}`}>
				<img
					className="p-8 rounded-t-lg w-full h-80 object-contain"
					src={props.image}
					alt="product image"
				/>
			</Link>
			<div className="px-5 pb-5">
				<Link href={`/product/${props._id}`}>
					<h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
						{props.title}
					</h5>
				</Link>
				<div className="flex items-center mt-2.5 mb-5">
					<ProductRating
						rating={props.rating!.rate}
						count={props.rating!.count}
					/>
				</div>

				<div className="flex items-center justify-between">
					<span className="text-3xl font-bold text-gray-900 ">
						${props.price}
					</span>
					<ProductAddToCartBtn
						title={props.title}
						_id={props._id}
						price={props.price}
						quantity={1}
						image={props.image}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
