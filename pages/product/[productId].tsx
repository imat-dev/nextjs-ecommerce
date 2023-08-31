import service from '@/service';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { IProduct } from '@/model/product';

import ProductDetail from '../components/products/ProductDetail';

const ProductDetailPage: React.FC<{ product: IProduct }> = (props) => {
	return <ProductDetail product={props.product} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	};
};

export const getStaticProps: GetStaticProps = async (context: any) => {
	const { productId } = context.params;

	try {
		const product = await service.productService.find(productId);
		if (!product) {
			return {
				notFound: true,
			};
		}
		return {
			props: { product: product },
		};
	} catch (error: any) {
		console.log(error.message);
		return {
			notFound: true,
		};
	}
};

export default ProductDetailPage;
