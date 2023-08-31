import React from 'react';
import ProductRating from './ProductRating';
import ProductAddToCartBtn from './ProductAddToCartBtn';
import { IProduct } from '@/model/product';

const ProductDetail: React.FC<{ product: IProduct }> = (props) => {
	return (
		<section className="container mx-auto mt-10 px-5 sm:px-0">
			<div className="flex sm:flex-nowrap flex-wrap  gap-10">
				<div className="w-1/3 mx-auto">
					<img src={props.product.image} />
				</div>
				<div className="sm:w-2/3 w-100">
					<div className="flex flex-col h-full justify-center">
						<h1 className="text-primary font-bold text-blue-900 text-2xl">
							{props.product.title}
						</h1>
						<p className="font-bold text-xl mt-2">
							${props.product.price}
						</p>

						<div className="mt-4">
							<ProductRating
								rating={props.product.rating.rate}
								count={props.product.rating.count}
							/>
						</div>

						<p className="mt-5">{props.product.description}</p>

						<div className="mt-5">
							<ProductAddToCartBtn
								_id={props.product._id}
								title={props.product.title}
								price={props.product.price}
								quantity={1}
								image={props.product.image}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetail;
