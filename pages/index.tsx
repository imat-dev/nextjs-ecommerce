import axios from 'axios';
import service from '@/service';
import { IProduct } from '@/model/product';
import Products from './components/products/Products';

const HomePage: React.FC<{ products: IProduct[] }> = (props) => {
	return (
		<section className="container mx-auto mt-10 px-5 sm:px-0">
			<h1 className="text-4xl mb-8 text-blue-600 font-bold">
				Featured Products
			</h1>
			<Products products={props.products} />
		</section>
	);
};

export const getStaticProps = async () => {
	try {
		const products = await service.productService.findAll();
		const parsedProducts = JSON.parse(JSON.stringify(products));
		return {
			props: {
				products: parsedProducts,
			},
		};
	} catch (e) {
		return {
			notFound: true,
		};
	}
};
export default HomePage;
