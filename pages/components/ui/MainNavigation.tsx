import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { getName } from '@/util/session';
import { isAuthenticated } from '@/util/session';
import AuthenticatedButton from './AuthenticatedButton';
import CartIcon from '../cart/CartIcon';
import CartDrawerPortal from '../cart/CartDrawerPortal';
import CartDrawer from '../cart/CartDrawer';

const MainNavigation = () => {
	const session = useSession();
	const isLoggedIn = isAuthenticated(session);
	const authUserName = getName(session);

	return (
		<>
			<header className="fixed w-full z-10">
				<nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
					<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
						<Link href="/" className="flex items-center">
							<img
								src="https://flowbite.com/docs/images/logo.svg"
								className="mr-3 h-6 sm:h-9"
								alt="Flowbite Logo"
							/>
							<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
								Ecommerce
							</span>
						</Link>

						<div className="flex gap-10">
							<div className="flex items-center lg:order-2">
								{!isLoggedIn && (
									<Link
										className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
										href="/account"
									>
										Login
									</Link>
								)}

								{!isLoggedIn && (
									<Link
										href="/account/register"
										className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
									>
										Register
									</Link>
								)}

								<CartIcon />

								{isLoggedIn && (
									<AuthenticatedButton name={authUserName} />
								)}

								{/* Dropdown menu */}
								{/* <div
								id="dropdown"
								className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
							>
								<ul
									className="py-2 text-sm text-gray-700 dark:text-gray-200"
									aria-labelledby="dropdownDefaultButton"
								>
									<li>
										<Link
											href="#"
											className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>
											Dashboard
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>
											Settings
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>
											Earnings
										</Link>
									</li>
									<li>
										<a
											href="#"
											className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>
											Sign out
										</a>
									</li>
								</ul>
							</div> */}

								<button
									data-collapse-toggle="mobile-menu-2"
									type="button"
									className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
									aria-controls="mobile-menu-2"
									aria-expanded="false"
								>
									<span className="sr-only">
										Open main menu
									</span>
									<svg
										className="w-6 h-6"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
											clipRule="evenodd"
										/>
									</svg>
									<svg
										className="hidden w-6 h-6"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								</button>
							</div>
							<div
								className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
								id="mobile-menu-2"
							>
								<ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
									<li>
										<a
											href="#"
											className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent  lg:p-0 dark:text-white"
											aria-current="page"
										>
											Home
										</a>
									</li>
									<li>
										<a
											href="#"
											className="block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent  lg:p-0 dark:text-white"
											aria-current="page"
										>
											Products
										</a>
									</li>
									<li>
										<a
											href="#"
											className="block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent  lg:p-0 dark:text-white"
											aria-current="page"
										>
											Contact Us
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</header>
			<CartDrawer />
		</>
	);
};

export default MainNavigation;
