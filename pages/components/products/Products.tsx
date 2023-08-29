import { IProduct } from '@/model/product';
import React from 'react';
import ProductItem from './ProductItem';

const Products: React.FC<{ products: IProduct[] }> = (props) => {
	return (
		<ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
			{props.products.map((product) => (
				<ProductItem
					key={product._id}
					id={product._id}
					title={product.title}
					price={product.price}
					rating={product.rating}
					image={product.image}
					category={product.category}
				/>
			))}
		</ul>
	);
};

export default Products;
