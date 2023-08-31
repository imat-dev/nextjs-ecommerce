import { AppDispatch, RootState } from '@/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '@/store/cartSlice';
import { useEffect } from 'react';
import { saveCartContent } from '@/store/cartActions';
import CartItems from './CartItems';

const CartDrawer = () => {
	const cart = useSelector((state: RootState) => state.cart);
	const isOpen = cart.showCart;
	const cartItems = cart.items;
	const subTotal = cart.totalPrice;

	const useAppDispatch: () => AppDispatch = useDispatch;
	const dispatch = useAppDispatch();

	const toggleDrawer = () => {
		dispatch(cartActions.hideCartDrawer());
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch(cartActions.hideCartDrawer());
		}, 4000);

		return () => {
			clearTimeout(timer);
		};
	}, [isOpen]);

	useEffect(() => {
		dispatch(saveCartContent(cart));
	}, [cart, dispatch]);

	return (
		<div
			className={`fixed top-0 right-0 z-40 h-screen p-4 pb-0 overflow-y-auto transition-transform ${
				isOpen ? 'translate-x-0' : 'translate-x-full'
			} bg-white w-80 dark:bg-gray-800`}
		>
			<h5 className="inline-flex items-center mb-4 font-semibold text-blue-400 text-2xl">
				<svg className="flex-1 w-8 h-8 fill-current">
					<path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
				</svg>
				Shopping Cart
			</h5>
			<button
				onClick={toggleDrawer}
				className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
			>
				<svg
					className="w-3 h-3"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 14"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
					/>
				</svg>
				<span className="sr-only">Close menu</span>
			</button>

			{cartItems &&
				cartItems.map((cart) => (
					<CartItems
						key={cart._id}
						_id={cart._id}
						title={cart.title}
						price={cart.price}
						quantity={cart.quantity}
						image={cart.image}
					/>
				))}

			<div className="sticky bottom-0 w-full bg-gray-800 py-5">
				<div className="mt-5">
					<h3 className="text-orange-200 text-2xl">
						Subtotal: ${subTotal}
					</h3>
				</div>
				<div className="grid grid-cols-2 gap-4 mt-5  bottom-0">
					<a
						href="#"
						className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
					>
						Cart
					</a>
					<a
						href="#"
						className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
					>
						Checkout
						<svg
							className="w-3.5 h-3.5 ml-2"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
};

export default CartDrawer;
